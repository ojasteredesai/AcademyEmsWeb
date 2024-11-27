import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { UserComponent } from './AcademyEmsApp.UserComponent';
import { UserTypeComponent } from './AcademyEmsApp.UserTypeComponent';
import {UserRoutes} from "../Routing/AcademyEmsApp.UserRouting"
import {RouterModule} from "@angular/router"


@NgModule({
  declarations: [
    UserComponent,UserTypeComponent
  ],
  imports: [
    RouterModule.forChild(UserRoutes),
    CommonModule,
    FormsModule      
  ],
  providers: [],
  bootstrap: [UserTypeComponent]
})

export class UserModule { }
