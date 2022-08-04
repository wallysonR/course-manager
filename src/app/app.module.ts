import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { CourseListModule } from './courses/course-list/course-list.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    CourseListModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
