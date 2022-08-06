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
    this._courses = this.service.retriveAll();
    this.filteredCourses = this._courses;
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
