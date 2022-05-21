import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http'


import { AppComponent } from './app.component';

import { UserListComponent } from './users/user-list.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { ReplacePipe } from './pipe/replace.pipe';
import { starComponent } from './star/star.component';
import { Error404Component } from './error-404/error-404.component';
//import { UserInfoComponent } from './users/user-info.component';

@NgModule({
  declarations: [
    AppComponent,
    UserListComponent,
    starComponent,
    ReplacePipe,
    NavBarComponent,
    // UserInfoComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot([
      {
        path: '', redirectTo: 'courses', pathMatch: 'full'
      },
      {
        path: 'courses', component: UserListComponent
      },
      // {
      //   path: 'course/info/:id', component: CourseInfoComponent
      // },
      {
        path: '**', component: Error404Component
      },
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
