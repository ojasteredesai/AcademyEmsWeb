import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { CourseTypeComponent } from './CourseTypeApp.component';


@NgModule({
  declarations: [
    CourseTypeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule      
  ],
  providers: [],
  bootstrap: [CourseTypeComponent]
})
export class CourseTypeAppModule { }
