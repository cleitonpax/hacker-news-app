import { UserService } from './../../_services/user.service';
import { Story } from './../../_models/story';
import { HackerNewsService } from './../../_services/hacker-news.service';
import { trigger, style, transition, animate, keyframes, query, stagger } from '@angular/animations';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { routerTransition } from '../../router.animations';
import { postsTransition } from '../../posts.animations';
import { Message } from 'primeng/components/common/api';
import { MessageService } from 'primeng/components/common/messageservice';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.scss'],
  animations: [
    routerTransition(),
    postsTransition()
  ]
})
export class ItemComponent implements OnInit {

  public story: Story;
  public user: string;
  public id: number;
  public hidden = false;
  public favorite = false;
  public msgs: Message[] = [];

  constructor(
    private messageService: MessageService,
    private hackerNews: HackerNewsService,
    private route: ActivatedRoute, private userService: UserService
  ) { }

    ngOnInit() {
      this.id = this.route.snapshot.params.id;
      this.user = this.userService.user || '';
      this.getItem(this.id);
    }

    private getItem(id) {
      this.hackerNews.getItem(id).valueChanges()
        .subscribe(response => {
          this.story = response;
        });
    }

    private setFavorite(item) {
      this.favorite = !this.favorite;
      this.msgs = [];
      this.msgs.push({severity: 'info', summary: 'Favorites Updated', detail: item.title});
    }

    private setHide(item) {
      this.hidden = !this.hidden;
      this.msgs = [];
      this.msgs.push({severity: 'info', summary: 'Hiddens Updated', detail: item.title});
    }
}
