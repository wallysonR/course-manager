import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CourseListComponent } from './course-list.component';
import { StarModule } from '../star/star.module';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [CourseListComponent],
  imports: [
    CommonModule,
    StarModule,
    FormsModule
  ],
  exports:[CourseListComponent]
})
export class CourseListModule { }
