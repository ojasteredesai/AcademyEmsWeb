import { Component } from '@angular/core';
import {CourseType} from './AcademyEmsApp.CourseTypeModel'
import {BaseLogger} from '../Utility/AcademyEmsApp.Logger'
import {HttpClient} from '@angular/common/http'

@Component({
  templateUrl: './AcademyEmsApp.CourseTypeView.html'
})
export class CourseTypeComponent {
  title = 'Course Type App';
  CourseTypeModel : CourseType = new CourseType();
  CourseTypeModels : Array<CourseType> = new Array<CourseType>();
  CourseTypeModels1 : any[] = [];

  logger : BaseLogger | undefined;

  constructor(_logger : BaseLogger, public httpClient:HttpClient){
    this.logger = _logger;
    this.logger?.LogError("course component");
  }

  SelectCourseType(_selected:CourseType){
    this.CourseTypeModel = _selected;
  }

  AddCourseType(){


  }

  GetCourseTypes(){
    this.httpClient.get("https://127.0.0.1:7174/api/CourseType/GetAllCourseTypes")
    //.subscribe((result:any)=>
      // {  
      //   debugger;
      //   this.logger?.LogError("api calling  component result" + result);
      //   this.CourseTypeModels = result
      // });
    .subscribe({
      next: this.Success.bind(this),
      error: this.Error.bind(this)
   });
  }

  Error(res:any){
    console.debug(res);
  }

  Success(res:any){
    debugger;
    this.CourseTypeModels = res;
    
    this.logger?.LogError("api calling  component" + res);
  }

  Add(){
    this.CourseTypeModels.push(this.CourseTypeModel);
    this.CourseTypeModel = new CourseType();

    
    this.logger?.LogError("Add from course component");
  }
}
