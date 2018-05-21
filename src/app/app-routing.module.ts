import { ReplyComponent } from './_components/reply/reply.component';
import { SubmitComponent } from './_components/submit/submit.component';
import { LoginComponent } from './_components/login/login.component';
import { UserComponent } from './_components/user/user.component';
import { ItemComponent } from './_components/item/item.component';
import { PostsComponent } from './_components/posts/posts.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'newest',
    pathMatch: 'full',
    data: {
      title: 'New'
    }
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'logout',
    component: LoginComponent
  },
  {
    path: 'newest',
    component: PostsComponent,
    data: {
      title: 'New'
    }
  },
  {
    path: 'comments',
    component: PostsComponent,
    data: {
      title: 'Comments'
    }
  },
  {
    path: 'show',
    component: PostsComponent,
    data: {
      title: 'Show'
    }
  },
  {
    path: 'ask',
    component: PostsComponent,
    data: {
      title: 'Ask'
    }
  },
  {
    path: 'jobs',
    component: PostsComponent,
    data: {
      title: 'Jobs'
    }
  },
  {
    path: 'user/:id',
    component: UserComponent
  },
  {
    path: 'user',
    component: UserComponent
  },
  {
    path: 'submit',
    component: SubmitComponent
  },
  {
    path: 'item/:id',
    component: ItemComponent
  },
  {
    path: 'reply/:id',
    component: ReplyComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
