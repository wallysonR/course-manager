import { Component, OnInit } from '@angular/core';
import { CourseModel } from '../models/course.model';

@Component({
  selector: 'app-course-list',
  templateUrl: './course-list.component.html',
  styleUrls: ['./course-list.component.css']
})
export class CourseListComponent implements OnInit {
  course: Array<CourseModel> = [];
  constructor() { }

  ngOnInit(): void {
    this.course = [
      {
        id: 1,
        name: 'Angular: Forms',
        imageUrl:'',
        price: 99.99,
        code:"xc2",
        duration:123,
        rating: 2.3,
        releaseDate:'02/02/2022'

      },
      {
        id: 2,
        name: 'Angular: Router',
        imageUrl:'',
        price: 99.99,
        code:"xc3",
        duration:120,
        rating: 5.5,
        releaseDate:'02/02/2022'
      }
    ]
    console.log('cursos', this.course);
  }

}
