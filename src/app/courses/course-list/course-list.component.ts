import { Component, OnInit } from '@angular/core';
import { CourseModel } from '../models/course.model';

@Component({
  selector: 'app-course-list',
  templateUrl: './course-list.component.html',
  styleUrls: ['./course-list.component.css']
})
export class CourseListComponent implements OnInit {
  courses: Array<CourseModel> = [];
  constructor() { }

  ngOnInit(): void {
    this.courses = [
      {
        id: 1,
        name: 'Angular: Forms',
        imageUrl:'/assets/images/forms.png',
        price: 99.99,
        code:"xc2",
        duration:123,
        rating: 2.3,
        releaseDate:'02/02/2022'

      },
      {
        id: 2,
        name: 'Angular: Router',
        imageUrl:'/assets/images/http.png',
        price: 99.99,
        code:"xc3",
        duration:120,
        rating: 5.5,
        releaseDate:'02/02/2022'
      }
    ]
  }

}
