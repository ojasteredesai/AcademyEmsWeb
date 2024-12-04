import { Component } from '@angular/core';
import {CourseType} from './AcademyEmsApp.CourseTypeModel'
import {BaseLogger} from '../Utility/AcademyEmsApp.Logger'

@Component({
  templateUrl: './AcademyEmsApp.CourseTypeView.html'
})
export class CourseTypeComponent {
  title = 'Course Type App';
  CourseTypeModel : CourseType = new CourseType();
  CourseTypeModels : Array<CourseType> = new Array<CourseType>();

  logger : BaseLogger | undefined;

  constructor(_logger : BaseLogger){
    this.logger = _logger;
    this.logger?.LogError("usertype component");
  }

  SelectCourseType(_selected:CourseType){
    this.CourseTypeModel = _selected;
  }

  Add(){
    this.CourseTypeModels.push(this.CourseTypeModel);
    this.CourseTypeModel = new CourseType();

    
    this.logger?.LogError("Add from course component");
  }
}
