import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CourseListComponent } from './course-list.component';

import { FormsModule } from '@angular/forms';

import { RouterModule } from '@angular/router';
import { StarModule } from 'src/app/shared/components/star/star.module';
import { ReplacePipeModule } from 'src/app/shared/pipes/pipe/replace.pipes.module';




@NgModule({
  declarations: [CourseListComponent],
  imports: [
    CommonModule,
    StarModule,
    ReplacePipeModule,
    FormsModule,
    RouterModule.forChild([
      {
        path: 'courses', component: CourseListComponent
      },
    ]),
  ],
  exports:[CourseListComponent]
})
export class CourseListModule { }
