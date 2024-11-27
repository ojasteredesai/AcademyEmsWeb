import { Component, inject } from '@angular/core';
import {UserType} from './AcademyEmsApp.UserTypeModel'
import { Router } from '@angular/router';

@Component({
  templateUrl: './AcademyEmsApp.UserTypeView.html'
})
export class UserTypeComponent {
  title = 'User Type App';
  UserTypeModel : UserType = new UserType();
  UserTypeModels : Array<UserType> = new Array<UserType>();
  router = inject(Router);

  Add(){
    this.UserTypeModels.push(this.UserTypeModel);
    this.UserTypeModel = new UserType();
  }

  navigate(){
    this.router.navigate(['/View'])
  }
}
