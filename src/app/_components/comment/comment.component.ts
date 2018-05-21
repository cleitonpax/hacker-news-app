import { Story } from './../../_models/story';
import { HackerNewsService } from './../../_services/hacker-news.service';
import { trigger, style, transition, animate, keyframes, query, stagger } from '@angular/animations';
import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { postsTransition } from '../../posts.animations';

@Component({
  selector: 'app-comment',
  templateUrl: './comment.component.html',
  styleUrls: ['./comment.component.scss'],
  animations: [postsTransition()]
})
export class CommentComponent implements OnInit {
  @Input() id: number;
  @Input() index: number;

  public story: Story;

  constructor(private hackerNews: HackerNewsService, private route: ActivatedRoute) { }

    ngOnInit() {
      this.getItem(this.id);
    }

    private getItem(id) {
      this.hackerNews.getItem(id).valueChanges()
        .subscribe(response => {
          this.story = response;
        });
    }

}
