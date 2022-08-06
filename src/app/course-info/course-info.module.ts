import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CourseInfoComponent } from './course-info.component';
import { FormsModule } from '@angular/forms';
import { RouterLink, RouterModule } from '@angular/router';



@NgModule({
  declarations: [CourseInfoComponent],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule
  ],
  exports: [CourseInfoComponent]
})
export class CourseInfoModule { }
