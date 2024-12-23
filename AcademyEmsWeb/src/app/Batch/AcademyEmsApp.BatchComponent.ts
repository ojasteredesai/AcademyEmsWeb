import { Component } from '@angular/core';
import {Batch} from './AcademyEmsApp.BatchModel'
import {BaseLogger} from '../Utility/AcademyEmsApp.Logger'
import {HttpClient} from '@angular/common/http'
import { map } from 'rxjs/operators';
import {Course} from '../Course/AcademyEmsApp.CourseModel'


export interface BatchServerResponse {
  success: string;
  error: string;
  message: string;
  batches: Array<Batch>;
}

export interface CourseServerResponse {
  success: string;
  error: string;
  message: string;
  courses: Array<Course>;
}

@Component({
  templateUrl:'./AcademyEmsApp.BatchView.html'
})
export class BatchComponent {
  BatchModel : Batch = new Batch();
  BatchModels : Array<Batch> = new Array<Batch>();  
  CourseModel : Course = new Course();
  CourseModels : Array<Course> = new Array<Course>();
  Disable:boolean=false;
  logger : BaseLogger | undefined;
  BatchStatus = [{id:1,name:'Upcoming'},{id:2,name:'Ongoing'},{id:3,name:'Completed'}];
  CourseTypes = [{id:61,name:'Basic'},{id:55,name:'Trauma'},{id:54,name:'Advanced'}];
  GridColumns = [{'colName':'id','displayName':'Id'},{'colName':'courseName','displayName':'Course Name'},{'colName':'batchStatus','displayName':'Batch Status'}
                  ,{'colName':'instructorName','displayName':'Instructor Name'},{'colName':'address1','displayName':'Address1'},{'colName':'address2','displayName':'Address2'}
                  ,{'colName':'city','displayName':'City'} ,{'colName':'pinCode','displayName':'Pin Code'},{'colName':'description','displayName':'Description'}
                  ,{'colName':'startDate','displayName':'Start Date'},{'colName':'endDate','displayName':'End Date'},{'colName':'time','displayName':'Time'}
                  ,{'colName':'duration','displayName':'Duration'},{'colName':'capacity','displayName':'Capacity'},{'colName':'fees','displayName':'Fees'}
  ];  
  SelectedCourseTypeId:string = "0";
  SelectedCourseId:string = "0";

  constructor(_logger : BaseLogger, public httpClient:HttpClient){
    this.logger = _logger;
    this.logger?.LogError("Batch component");
  }

  SelectedBatch(_selected:Batch){
    this.BatchModel = _selected;
  }

  SelectedCourseType(_selected:any){
    this.SelectedCourseTypeId = _selected.target.value;
    this.httpClient.get<CourseServerResponse>("https://localhost:7174/api/Course/GetCourseByType?id="+this.SelectedCourseTypeId)
    .pipe(map(response => response.courses))
    .subscribe({
      next: this.SuccessGetCourses.bind(this),
      error: this.Error.bind(this)
   });
  }

  SelectedCourse(_selected:any){
    this.CourseModel = _selected;
  }


  AddBatch(){
    if(this.BatchModel.id > 0)
    {
      this.UpdateBatch();
    }
    else
    {
      this.httpClient.post("https://localhost:7174/api/Batch/CreateBatch", this.BatchModel)
      .subscribe({
        next: this.GetAllBatches.bind(this),
        error: this.Error.bind(this)    
     });
    }
  }
  
  UpdateBatch(){
    this.httpClient.post("https://localhost:7174/api/Batch/UpdateBatch", this.BatchModel)
    .subscribe({
      next: this.GetAllBatches.bind(this),
      error: this.Error.bind(this)
   });
  }

  DeleteBatch(){
    this.httpClient.post("https://localhost:7174/api/Batch/DeleteBatch?id="+this.BatchModel.id,null)
    .subscribe({
      next: this.GetAllBatches.bind(this),
      error: this.Error.bind(this)
   });
  }

  GetAllBatches(){
    this.httpClient.get<BatchServerResponse>("https://localhost:7174/api/Batch/GetAllBatches")
    .pipe(map(response => response.batches))
    .subscribe({
      next: this.SuccessGetBatches.bind(this),
      error: this.Error.bind(this)
   });
  }

  Error(res:any){
    this.logger?.LogError(res);
    this.Disable=false;  
  }

  SuccessGetBatches(res:any){
    this.BatchModels = res;  
    this.Disable=false;  
  }

  SuccessGetCourses(res:any){
    this.CourseModels = res;  
    this.Disable=false;  
  }
}
