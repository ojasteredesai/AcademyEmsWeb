import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CourseComponent } from './AcademyEmsApp.CourseComponent';
import { CourseTypeComponent } from './AcademyEmsApp.CourseTypeComponent';
import {CourseRoutes} from "../Routing/AcademyEmsApp.CourseRouting"
import {RouterModule} from "@angular/router"
import {UserControlModule} from '../UserControl/AcademyEmsApp.UserControlModule'
import {provideHttpClient} from '@angular/common/http'

@NgModule({
  declarations: [
  CourseComponent,CourseTypeComponent
  ],
  imports: [
    RouterModule.forChild(CourseRoutes),
    CommonModule,
    ReactiveFormsModule 
    ,FormsModule
    ,UserControlModule
  ],
  providers: [provideHttpClient()],
  bootstrap: [CourseTypeComponent]
})

export class CourseModule { }
