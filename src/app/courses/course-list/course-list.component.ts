import { Component, OnInit } from '@angular/core';
import { CourseListService } from './course-list.service';
import { CourseModel } from './models/course.model';

@Component({
  templateUrl: './course-list.component.html',
  styleUrls: ['./course-list.component.css']
})
export class CourseListComponent implements OnInit {

  _courses: Array<CourseModel> = [];
  _filterBy: string;

  filteredCourses: CourseModel[] = [];

  constructor(private service: CourseListService) { }

  ngOnInit(): void {
    this.retriveAll();
  }
  
  retriveAll(): void {
    this.service.retriveAll().subscribe({
      next: courses => {
        this._courses = courses
        this.filteredCourses = this._courses;
      },
      error: err => console.log('Erro ', err)
    });
    
  }

  set filter(value: string) {
    this._filterBy = value;
    this.filteredCourses = this._courses.filter((course: CourseModel) => 
    course.name.toLocaleLowerCase().indexOf(this._filterBy.toLocaleLowerCase()) > -1);
  }

  get filter() {
    return this._filterBy;
  }

}
