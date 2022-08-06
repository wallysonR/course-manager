import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { CourseListComponent } from './courses/course-list/course-list.component';
import { CourseListModule } from './courses/course-list/course-list.module';
import { ErrorNotFoundComponent } from './error-not-found/error-not-found.component';
import { ErrorNotFoundModule } from './error-not-found/error-not-found.module';
import { NavBarModule } from './nav-bar/nav-bar.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    CourseListModule,
    NavBarModule,
    ErrorNotFoundModule,
    RouterModule.forRoot([
      {
        path: '', redirectTo: 'courses', pathMatch: 'full'
      },
      {
        path: 'courses', component: CourseListComponent
      },
      {
        path: '**', component: ErrorNotFoundComponent
      }
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
