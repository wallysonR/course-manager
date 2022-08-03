import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CourseListComponent } from './course-list.component';
import { StarModule } from '../star/star.module';



@NgModule({
  declarations: [CourseListComponent],
  imports: [
    CommonModule,
    StarModule
  ],
  exports:[CourseListComponent]
})
export class CourseListModule { }
