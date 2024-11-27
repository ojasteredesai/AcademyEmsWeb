import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { MasterPageComponent } from './Home/AcademyEmsApp.MasterPageComponent';
import { HomeComponent } from './Home/AcademyEmsApp.HomeComponent';
import { CourseComponent } from './Course/AcademyEmsApp.CourseComponent';
import { CourseTypeComponent } from './Course/AcademyEmsApp.CourseTypeComponent';
import { UserComponent } from './User/AcademyEmsApp.UserComponent';
import { UserTypeComponent } from './User/AcademyEmsApp.UserTypeComponent';
import {MainRoutes} from "./Routing/AcademyEmsApp.MainRouting"
import {RouterModule} from "@angular/router"


@NgModule({
  declarations: [
    MasterPageComponent, HomeComponent,CourseComponent,CourseTypeComponent
    ,UserComponent,UserTypeComponent
  ],
  imports: [
    RouterModule.forRoot(MainRoutes),
    BrowserModule,
    FormsModule      
  ],
  providers: [],
  bootstrap: [MasterPageComponent]
})

export class AcademyEmsAppModule { }
