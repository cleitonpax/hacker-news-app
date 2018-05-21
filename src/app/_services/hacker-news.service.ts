import { AngularFireDatabase, AngularFireList, AngularFireObject } from 'angularfire2/database';
import { Injectable } from '@angular/core';

import { Story } from '../_models/story';
import { User } from '../_models/user';
import { PollResult } from '../_models/poll-result';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HackerNewsService {

  constructor(private db: AngularFireDatabase) {
  }

  public getStories(limit, type): AngularFireList<Story> {
    return this.db.list<Story>('/v0/' + type, ref => ref.limitToFirst(limit));
  }

  public getItem(id: number): AngularFireObject<Story> {
    return this.db.object('/v0/item/' + id);
  }

  public getUser(id: number): AngularFireObject<User> {
    return this.db.object('/v0/user/' + id);
  }
}
