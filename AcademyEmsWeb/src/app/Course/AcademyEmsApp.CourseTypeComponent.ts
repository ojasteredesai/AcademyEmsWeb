import { Component } from '@angular/core';
import {CourseType} from './AcademyEmsApp.CourseTypeModel'

@Component({
  templateUrl: './AcademyEmsApp.CourseTypeView.html'
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
