import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { MasterPageComponent } from './Home/AcademyEmsApp.MasterPageComponent';
import { HomeComponent } from './Home/AcademyEmsApp.HomeComponent';
import { CourseComponent } from './Course/AcademyEmsApp.CourseComponent';
import { CourseTypeComponent } from './Course/AcademyEmsApp.CourseTypeComponent';
import { UserComponent } from './User/AcademyEmsApp.UserComponent';
import { UserTypeComponent } from './User/AcademyEmsApp.UserTypeComponent';



@NgModule({
  declarations: [
    HomeComponent,CourseComponent,CourseTypeComponent
    ,UserComponent,UserTypeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule      
  ],
  providers: [],
  bootstrap: [MasterPageComponent]
})

export class AcademyEmsAppModule { }
