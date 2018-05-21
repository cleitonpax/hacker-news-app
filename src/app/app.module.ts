import { ReplyComponent } from './_components/reply/reply.component';
import { CommentComponent } from './_components/comment/comment.component';
import { SubmitComponent } from './_components/submit/submit.component';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { environment } from './../environments/environment';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PostsComponent } from './_components/posts/posts.component';
import { NavbarComponent } from './_components/navbar/navbar.component';
import { PostComponent } from './_components/post/post.component';
import { HackerNewsService } from './_services/hacker-news.service';
import { UserService } from './_services/user.service';

// Plugins
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { TooltipModule } from 'ngx-bootstrap/tooltip';
import { CollapseModule } from 'ngx-bootstrap/collapse';
import { GrowlModule } from 'primeng/growl';
import { MessageService } from 'primeng/components/common/messageservice';
import { AccordionModule } from 'primeng/accordion';
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFirestoreModule } from 'angularfire2/firestore';
import { MomentModule } from 'ngx-moment';
import { LoadingComponent } from './_components/loading/loading.component';
import { UserComponent } from './_components/user/user.component';
import { ItemComponent } from './_components/item/item.component';
import { LoginComponent } from './_components/login/login.component';
import { ServiceWorkerModule } from '@angular/service-worker';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    AppComponent,
    ItemComponent,
    NavbarComponent,
    PostComponent,
    PostsComponent,
    LoadingComponent,
    LoginComponent,
    ReplyComponent,
    SubmitComponent,
    CommentComponent,
    UserComponent
  ],
  imports: [
    AccordionModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule,
    AngularFirestoreModule,
    BsDropdownModule.forRoot(),
    BrowserAnimationsModule,
    BrowserModule.withServerTransition({ appId: 'serverApp' }),
    CollapseModule.forRoot(),
    GrowlModule,
    MomentModule,
    TooltipModule.forRoot(),
    ServiceWorkerModule.register('/ngsw-worker.js', { enabled: environment.production }),
    RouterModule
  ],
  providers: [HackerNewsService, UserService, MessageService],
  bootstrap: [AppComponent]
})
export class AppModule { }
