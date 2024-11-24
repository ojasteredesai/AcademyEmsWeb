import { Component } from '@angular/core';

import {CourseType} from './CourseTypeApp.model'

@Component({
  selector: 'app-root',
  templateUrl: './CourseTypeApp.view.html',
  styleUrl: './CourseTypeApp.component.css'
})
export class CourseTypeComponent {
  title = 'Course Type App';
  CourseTypeModel : CourseType = new CourseType();
  CourseTypeModels : Array<CourseType> = new Array<CourseType>();

  Add(){
    this.CourseTypeModels.push(this.CourseTypeModel);
    this.CourseTypeModel = new CourseType();
  }
}
