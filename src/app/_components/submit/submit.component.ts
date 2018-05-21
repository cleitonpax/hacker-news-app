import { UserService } from './../../_services/user.service';
import { Story } from './../../_models/story';
import { HackerNewsService } from './../../_services/hacker-news.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { routerTransition } from '../../router.animations';

@Component({
  selector: 'app-submit',
  templateUrl: './submit.component.html',
  styleUrls: ['./submit.component.scss'],
  animations: [routerTransition()]
})
export class SubmitComponent implements OnInit {

  public user: string;

  constructor(private hackerNews: HackerNewsService, private route: ActivatedRoute, private userService: UserService) { }

    ngOnInit() {
      this.user = this.userService.user || '';
    }
}
