import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule , ReactiveFormsModule} from '@angular/forms';
import { UserComponent } from './AcademyEmsApp.UserComponent';
import { UserTypeComponent } from './AcademyEmsApp.UserTypeComponent';
import {UserRoutes} from "../Routing/AcademyEmsApp.UserRouting"
import {RouterModule} from "@angular/router"
import {provideHttpClient} from '@angular/common/http'
import {UserControlModule} from '../UserControl/AcademyEmsApp.UserControlModule'

@NgModule({
  declarations: [
    UserComponent,UserTypeComponent
  ],
  imports: [
    RouterModule.forChild(UserRoutes),
    CommonModule,
    ReactiveFormsModule,
    FormsModule   
    ,UserControlModule   
  ],
  providers: [provideHttpClient()],
  bootstrap: [UserTypeComponent]
})

export class UserModule { }
