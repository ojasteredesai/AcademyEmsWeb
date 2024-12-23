import { Component } from '@angular/core';
import {CourseType} from './AcademyEmsApp.CourseTypeModel'
import {BaseLogger} from '../Utility/AcademyEmsApp.Logger'
import {HttpClient} from '@angular/common/http'
import { map } from 'rxjs/operators';

export interface CourseTypeServerResponse {
  success: string;
  error: string;
  message: string;
  courseTypes: Array<CourseType>;
}

@Component({
  templateUrl: './AcademyEmsApp.CourseTypeView.html'
})
export class CourseTypeComponent {
  title = 'Course Type App';
  CourseTypeModel : CourseType = new CourseType();
  CourseTypeModels : Array<CourseType> = new Array<CourseType>();
  Disable:boolean=false;
  logger : BaseLogger | undefined;
  GridColumns = [{'colName':'id','displayName':'Id'},{'colName':'type','displayName':'Course Type'},{'colName':'description','displayName':'Description'}];  

  constructor(_logger : BaseLogger, public httpClient:HttpClient){
    this.logger = _logger;
    this.logger?.LogError("course component");
  }

  SelectCourseType(_selected:CourseType){
    this.CourseTypeModel = _selected;
  }

  AddCourseType(){
    if(this.CourseTypeModel.id > 0)
    {
      this.UpdateCourseType();
    }
    else
    {
      this.httpClient.post("https://localhost:7174/api/CourseType/CreateCourseType", this.CourseTypeModel)
      .subscribe({
        next: this.GetAllCourseTypes.bind(this),
        error: this.Error.bind(this)    
     });
    }
  } 

  UpdateCourseType(){
    this.httpClient.post("https://localhost:7174/api/CourseType/UpdateCourseType", this.CourseTypeModel)
    .subscribe({
      next: this.GetAllCourseTypes.bind(this),
      error: this.Error.bind(this)
   });
  }

  DeleteCourseType(){
    this.httpClient.post("https://localhost:7174/api/CourseType/DeleteCourseType?id="+this.CourseTypeModel.id,null)
    .subscribe({
      next: this.GetAllCourseTypes.bind(this),
      error: this.Error.bind(this)
   });
  }

  GetAllCourseTypes(){
    this.httpClient.get<CourseTypeServerResponse>("https://localhost:7174/api/CourseType/GetAllCourseTypes")
    .pipe(map(response => response.courseTypes))
    .subscribe({
      next: this.SuccessGet.bind(this),
      error: this.Error.bind(this)
   });
  }

  Error(res:any){
    this.logger?.LogError(res);
    this.Disable=false;  
  }

  SuccessGet(res:any){
    this.CourseTypeModels = res;  
    this.Disable=false;  
  }
}
