import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CourseComponent } from './AcademyEmsApp.CourseComponent';
import { CourseTypeComponent } from './AcademyEmsApp.CourseTypeComponent';
import {CourseRoutes} from "../Routing/AcademyEmsApp.CourseRouting"
import {RouterModule} from "@angular/router"
import {GridComponent} from '../UserControl/AcademyEmsApp.TypeGridComponent'

@NgModule({
  declarations: [
  CourseComponent,CourseTypeComponent,GridComponent
  ],
  imports: [
    RouterModule.forChild(CourseRoutes),
    CommonModule,
    ReactiveFormsModule ,FormsModule
  ],
  providers: [],
  bootstrap: [CourseTypeComponent]
})

export class CourseModule { }
