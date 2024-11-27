import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { CourseComponent } from './AcademyEmsApp.CourseComponent';
import { CourseTypeComponent } from './AcademyEmsApp.CourseTypeComponent';
import {CourseRoutes} from "../Routing/AcademyEmsApp.CourseRouting"
import {RouterModule} from "@angular/router"


@NgModule({
  declarations: [
  CourseComponent,CourseTypeComponent
  ],
  imports: [
    RouterModule.forChild(CourseRoutes),
    CommonModule,
    FormsModule      
  ],
  providers: [],
  bootstrap: [CourseTypeComponent]
})

export class CourseModule { }
