import { Component } from '@angular/core';
import {UserType} from './AcademyEmsApp.UserTypeModel'

@Component({
  templateUrl: './AcademyEmsApp.UserTypeView.html'
})
export class UserTypeComponent {
  title = 'User Type App';
  UserTypeModel : UserType = new UserType();
  UserTypeModels : Array<UserType> = new Array<UserType>();

  Add(){
    this.UserTypeModels.push(this.UserTypeModel);
    this.UserTypeModel = new UserType();
  }
}
