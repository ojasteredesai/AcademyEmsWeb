import { Component } from '@angular/core';
import {Course} from './AcademyEmsApp.CourseModel'
import {BaseLogger} from '../Utility/AcademyEmsApp.Logger'
import {HttpClient} from '@angular/common/http'
import { map } from 'rxjs/operators';


export interface CourseServerResponse {
  success: string;
  error: string;
  message: string;
  courses: Array<Course>;
}

@Component({
  templateUrl: './AcademyEmsApp.CourseView.html'
})
export class CourseComponent {
  CourseModel : Course = new Course();
  CourseModels : Array<Course> = new Array<Course>();
  Disable:boolean=false;
  logger : BaseLogger | undefined;
  CourseTypes = [{id:61,name:'Basic'},{id:55,name:'Trauma'},{id:54,name:'Advanced'}];
  GridColumns = [{'colName':'id','displayName':'Id'},{'colName':'courseTypeName','displayName':'Course Type'},{'colName':'courseName','displayName':'Course Name'}
    ,{'colName':'courseDescription','displayName':'Description'}]; 
    
    SelectedCourseTypeId:string = "0";

    constructor(_logger : BaseLogger, public httpClient:HttpClient){
      this.logger = _logger;
      this.logger?.LogError("user component");
    }

    SelectedCourse(_selected:Course){
      this.CourseModel = _selected;
    }

    SelectedCourseType(_selected:any){
      this.SelectedCourseTypeId = _selected.target.value;
      this.CourseModel.courseTypeId = _selected.target.value;
      this.CourseModel.courseTypeName = _selected.target.value;
    }
  
    AddCourse(){
      debugger;
      if(this.CourseModel.id > 0)
      {
        this.UpdateCourse();
      }
      else
      {
        this.httpClient.post("https://localhost:7174/api/Course/CreateCourse", this.CourseModel)
        .subscribe({
          next: this.GetAllCourses.bind(this),
          error: this.Error.bind(this)    
       });
      }
    }   
  
    UpdateCourse(){
      this.httpClient.post("https://localhost:7174/api/Course/UpdateCourse", this.CourseModel)
      .subscribe({
        next: this.GetAllCourses.bind(this),
        error: this.Error.bind(this)
      });
    }

    DeleteCourse(){
      this.httpClient.post("https://localhost:7174/api/Course/DeleteCourse?id="+this.CourseModel.id,null)
      .subscribe({
        next: this.GetAllCourses.bind(this),
        error: this.Error.bind(this)
     });
    }

    GetAllCourses(){
      this.httpClient.get<CourseServerResponse>("https://localhost:7174/api/Course/GetAllCourses")
      .pipe(map(response => response.courses))
      .subscribe({
        next: this.SuccessGet.bind(this),
        error: this.Error.bind(this)
     });
    }

    Error(res:any){
      debugger;
      this.logger?.LogError(res);
      this.Disable=false;  
    }

    SuccessGet(res:any){
      debugger;
      this.CourseModels = res;  
      this.Disable=false;  
    }
}
