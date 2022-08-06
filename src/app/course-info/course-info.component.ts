import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CourseListService } from '../courses/course-list/course-list.service';
import { CourseModel } from '../courses/course-list/models/course.model';

@Component({
  templateUrl: './course-info.component.html',
  styleUrls: ['./course-info.component.css']
})
export class CourseInfoComponent implements OnInit {
  course: CourseModel;
  constructor(private activatedRoute: ActivatedRoute, private courseService: CourseListService) { }

  ngOnInit(): void {
     this.courseService.retriveById(+this.activatedRoute.snapshot.paramMap.get('id')).subscribe({
      next: course => this.course = course,
      error: err => console.log('Erro', err)
     });
  }
  save(): void{
    this.courseService.save(this.course);
  }
}
