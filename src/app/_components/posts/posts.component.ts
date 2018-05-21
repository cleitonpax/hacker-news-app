import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { trigger, style, transition, animate, keyframes, query, stagger } from '@angular/animations';
import { HackerNewsService } from './../../_services/hacker-news.service';
import { Story } from '../../_models/story';
import { routerTransition } from '../../router.animations';
import { postsTransition } from '../../posts.animations';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.scss'],
  animations: [
    routerTransition(),
    postsTransition()
  ]
})
export class PostsComponent implements OnInit {

  public posts = [];
  public postsObservable;
  public postPerPage: Number = 5;
  public liveReload = true;
  public title: string;
  public updated: Date;

  constructor(private hackerNews: HackerNewsService, private routeParams: ActivatedRoute) {
    this.title = this.routeParams.data['value'].title;
    this.getPosts(0);
  }

  ngOnInit() {
  }

  private selectSource(title, totalPosts) {
    switch (title) {
      case 'Jobs':
        return 'jobstories';
      case 'Ask':
        return 'askstories';
      case 'Show':
        return 'showstories';
      default:
        return 'topstories';
    }
  }

  public getPosts(totalPosts) {
    if (this.postsObservable) {
      this.postsObservable.unsubscribe();
    }
    this.postPerPage += totalPosts;
    this.postsObservable = this.hackerNews.getStories(this.postPerPage, this.selectSource(this.title, this.postPerPage)).valueChanges()
      .subscribe(response => {
          this.posts = response;
          this.updated = new Date();
      });
  }

  private toggleReload() {
    this.liveReload = !this.liveReload;
    if ( this.liveReload ) {
      this.getPosts(5);
    } else {
      this.postsObservable.unsubscribe();
    }
  }
}
