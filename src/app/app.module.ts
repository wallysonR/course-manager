import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { CourseListComponent } from './courses/course-list/course-list.component';
import { CourseListModule } from './courses/course-list/course-list.module';
import { ErrorNotFoundComponent } from './error-not-found/error-not-found.component';
import { ErrorNotFoundModule } from './error-not-found/error-not-found.module';
import { NavBarModule } from './nav-bar/nav-bar.module';
import { CourseInfoComponent } from './course-info/course-info.component';
import { CourseInfoModule } from './course-info/course-info.module';

@NgModule({
  declarations: [
    AppComponent,

  ],
  imports: [
    BrowserModule,
    CourseListModule,
    NavBarModule,
    ErrorNotFoundModule,
    CourseInfoModule,
    RouterModule.forRoot([
      {
        path: '', redirectTo: 'courses', pathMatch: 'full'
      },
      {
        path: 'courses', component: CourseListComponent
      },
      {
        path: 'course/info/:id', component: CourseInfoComponent
      },
      // '**' é quando nao tem rota 
      {
        path: '**', component: ErrorNotFoundComponent
      }
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
