import { Observable } from 'rxjs';
import { Injectable, EventEmitter } from '@angular/core';
import { User } from '../_models/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  public userLogged$: EventEmitter<string> = new EventEmitter();
  public user;

  constructor() {
    const local = localStorage.getItem('user');
    const { id } = local ? JSON.parse(local) : { id: '' };
    if (local && id) {
      this.setUser(id);
    }
  }

  setUser(id) {
    this.user = id;
    this.userLogged$.emit(id);
    localStorage.setItem('user', `{ "id": "${id}"}`);
  }

  logOut() {
    this.setUser('');
  }

  getUser() {
    return this.userLogged$;
  }
}
