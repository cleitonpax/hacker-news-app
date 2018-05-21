import { UserService } from './../../_services/user.service';
import { Component, OnInit } from '@angular/core';
import { Observer } from 'rxjs';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  public user;
  public menu = true;

  constructor(private userService: UserService) { }

  ngOnInit() {
    this.user = this.userService.user;
    const getUser = this.userService.getUser().subscribe(
      user => { this.user = user; },
      err => this.user = ''
    );
  }

  toggleMenu() {
    this.menu = !this.menu;
  }

}
