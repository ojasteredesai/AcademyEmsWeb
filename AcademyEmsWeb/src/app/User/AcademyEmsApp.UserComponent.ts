import { Component } from '@angular/core';
import {User} from './AcademyEmsApp.UserModel'
import {BaseLogger} from '../Utility/AcademyEmsApp.Logger'
import {HttpClient} from '@angular/common/http'
import { map } from 'rxjs/operators';

export interface UserServerResponse {
  success: string;
  error: string;
  message: string;
  users: Array<User>;
}

@Component({
  templateUrl: './AcademyEmsApp.UserView.html'
})
export class UserComponent {
  title = 'User Type App';
  UserModel : User = new User();
  UserModels : Array<User> = new Array<User>();
  Disable:boolean=false;
  logger : BaseLogger | undefined;
  UserTypes = [{id:1,name:'Admin'},{id:2,name:'Trainer'},{id:3,name:'Student'},{id:4,name:'Staff'}];
  GridColumns = [{'colName':'id','displayName':'Id'},{'colName':'userTypeName','displayName':'User Type'},{'colName':'firstName','displayName':'First Name'}
                  ,{'colName':'lastName','displayName':'Last Name'},{'colName':'dateOfBirth','displayName':'DOB'},{'colName':'gender','displayName':'Gender'}
                  ,{'colName':'userEmail','displayName':'E-Mail'} ,{'colName':'mobileNo','displayName':'Mobile No'},{'colName':'identityId','displayName':'Identity Id'}
                  ,{'colName':'','identityType':'Identity Type'},{'colName':'address1','displayName':'Address Line 1'},{'colName':'address2','displayName':'Address Line 2'}
                  ,{'colName':'city','displayName':'City'},{'colName':'pinCode','displayName':'Pincode'}
  ];  
  SelectedUserTypeId:string = "0";

  constructor(_logger : BaseLogger, public httpClient:HttpClient){
    this.logger = _logger;
    this.logger?.LogError("user component");
  }

  SelectedUser(_selected:User){
    this.UserModel = _selected;
  }

  SelectedUserType(_selected:any){
    this.SelectedUserTypeId = _selected.target.value;
  }

  AddUserType(){
    if(this.UserModel.id > 0)
    {
      this.UpdateUser();
    }
    else
    {
      this.httpClient.post("https://localhost:7174/api/User/CreateUser", this.UserModel)
      .subscribe({
        next: this.GetAllUsers.bind(this),
        error: this.Error.bind(this)    
     });
    }
  }
  
  UpdateUser(){
    this.httpClient.post("https://localhost:7174/api/User/UpdateUser", this.UserModel)
    .subscribe({
      next: this.GetAllUsers.bind(this),
      error: this.Error.bind(this)
   });
  }

  DeleteUserType(){
    this.httpClient.post("https://localhost:7174/api/User/DeleteUser?id="+this.UserModel.id,null)
    .subscribe({
      next: this.GetAllUsers.bind(this),
      error: this.Error.bind(this)
   });
  }

  GetAllUsers(){
    this.httpClient.get<UserServerResponse>("https://localhost:7174/api/User/GetAllUsers")
    .pipe(map(response => response.users))
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
    this.UserModels = res;  
    this.Disable=false;  
  }
}
