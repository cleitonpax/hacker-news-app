import { UserService } from './../../_services/user.service';
import { Story } from './../../_models/story';
import { HackerNewsService } from './../../_services/hacker-news.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { routerTransition } from '../../router.animations';

@Component({
  selector: 'app-reply',
  templateUrl: './reply.component.html',
  styleUrls: ['./reply.component.scss'],
  animations: [
    routerTransition()
  ]
})
export class ReplyComponent implements OnInit {

  public story: Story;
  public parent: Story;
  public id: number;
  public user: string;

  constructor(private hackerNews: HackerNewsService, private route: ActivatedRoute, private userService: UserService) { }

    ngOnInit() {
      this.id = this.route.snapshot.params.id;
      this.user = this.userService.user || '';
      this.getItem(this.id, 'story');
    }

    private getItem(id, item) {
      this.hackerNews.getItem(id).valueChanges()
        .subscribe(response => {
          this[item] = response;
          if (item === 'story') {
            this.getItem(this.story['parent'], 'parent');
          }
        });
    }

}
