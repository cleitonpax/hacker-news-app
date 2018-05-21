import { UserService } from './../../_services/user.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { routerTransition } from '../../router.animations';
import { ViewChild } from '@angular/core';
import { ElementRef } from '@angular/core';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.scss'],
    animations: [routerTransition()]
})
export class LoginComponent implements OnInit {

    @ViewChild('user') input: ElementRef;

    constructor(public router: Router, public userService: UserService) {}

    ngOnInit() {
        this.logout();
    }

    public login() {
        this.userService.setUser(this.input.nativeElement.value);
        this.router.navigateByUrl( '/' );
    }

    public logout() {
        this.userService.logOut();
    }
}
