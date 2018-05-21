import { User } from './../../_models/user';
import { HackerNewsService } from './../../_services/hacker-news.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { routerTransition } from '../../router.animations';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss'],
  animations: [routerTransition()]
})
export class UserComponent implements OnInit {

  public user: User = null;
  public id: number = null;

  constructor(private hackerNews: HackerNewsService, private route: ActivatedRoute) { }

    ngOnInit() {
      this.id = this.route.snapshot.params.id || null;
      if (this.id) {
        this.getUser(this.id);
      }
    }

    private getUser(id) {
      this.hackerNews.getUser(id).valueChanges()
        .subscribe(response => {
          this.user = response;
          console.log( this.user, this.id);
        });
    }

}
