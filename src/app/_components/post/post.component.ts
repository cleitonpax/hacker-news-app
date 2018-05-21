import { HackerNewsService } from './../../_services/hacker-news.service';
import { Story } from './../../_models/story';
import { Component, OnInit } from '@angular/core';
import { Input } from '@angular/core';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss']
})
export class PostComponent implements OnInit {
  @Input() id: number;
  @Input() index: number;

  public story: {};
  public postsObservable;

  constructor(private hackerNews: HackerNewsService) { }

  ngOnInit() {
    this.getPost(this.id);
  }

  private getPost(id) {
    this.postsObservable = this.hackerNews.getItem(id).valueChanges()
      .subscribe(response => {
        this.story = response;
        this.unsuscribePost();
      });
  }

  private unsuscribePost() {
    this.postsObservable.unsubscribe();
  }
}
