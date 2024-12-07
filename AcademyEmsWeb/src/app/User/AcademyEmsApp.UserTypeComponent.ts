import { Component } from '@angular/core';
import {UserType} from './AcademyEmsApp.UserTypeModel'
import {BaseLogger} from '../Utility/AcademyEmsApp.Logger'
import {HttpClient} from '@angular/common/http'
import { map } from 'rxjs/operators';

export interface UserTypeServerResponse {
  success: string;
  error: string;
  message: string;
  userTypes: Array<UserType>;
}

@Component({
  templateUrl: './AcademyEmsApp.UserTypeView.html'
})

export class UserTypeComponent {
  title = 'User Type App';
  UserTypeModel : UserType = new UserType();
  UserTypeModels : Array<UserType> = new Array<UserType>();
  GridColumns=[{'colName':'id','displayName':'Id'},{'colName':'type','displayName':'User Type'},{'colName':'description','displayName':'Description'}]
  Disable:boolean=false;
  logger : BaseLogger | undefined;

  constructor(_logger : BaseLogger, public httpClient:HttpClient){
    this.logger = _logger;
    this.logger?.LogError("user component");
  }

  SelectUserType(_selected:UserType){
    this.UserTypeModel = _selected;
  }

  AddUserType(){
    if(this.UserTypeModel.id > 0)
    {
      this.UpdateUserType();
    }
    else
    {
      this.httpClient.post("https://localhost:7174/api/UserType/CreateUserType", this.UserTypeModel)
      .subscribe({
        next: this.GetAllUserTypes.bind(this),
        error: this.Error.bind(this)    
     });
    }
  } 

  UpdateUserType(){
    this.httpClient.post("https://localhost:7174/api/UserType/UpdateUserType", this.UserTypeModel)
    .subscribe({
      next: this.GetAllUserTypes.bind(this),
      error: this.Error.bind(this)
   });
  }

  DeleteUserType(){
    this.httpClient.post("https://localhost:7174/api/UserType/DeleteUserType?id="+this.UserTypeModel.id,null)
    .subscribe({
      next: this.GetAllUserTypes.bind(this),
      error: this.Error.bind(this)
   });
  }

  GetAllUserTypes(){
    this.httpClient.get<UserTypeServerResponse>("https://localhost:7174/api/UserType/GetAllUserTypes")
    .pipe(map(response => response.userTypes))
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
    this.UserTypeModels = res;  
    this.Disable=false;  
  }
  // router = inject(Router);

  // Add(){
  //   this.UserTypeModels.push(this.UserTypeModel);
  //   this.UserTypeModel = new UserType();
  // }

  // navigate(){
  //   this.router.navigate(['/View'])
  // }
}
