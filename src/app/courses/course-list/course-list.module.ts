import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CourseListComponent } from './course-list.component';
import { StarModule } from '../star/star.module';
import { FormsModule } from '@angular/forms';
import { ReplacePipe } from 'src/app/pipe/replace.pipe';
import { RouterModule } from '@angular/router';




@NgModule({
  declarations: [CourseListComponent, ReplacePipe],
  imports: [
    CommonModule,
    StarModule,
    FormsModule,
    RouterModule
  ],
  exports:[CourseListComponent]
})
export class CourseListModule { }
