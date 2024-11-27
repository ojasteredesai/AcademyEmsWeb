import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { MasterPageComponent } from './AcademyEmsApp.MasterPageComponent';
import { HomeComponent } from './AcademyEmsApp.HomeComponent';
import {MainRoutes} from "../Routing/AcademyEmsApp.MainRouting"
import {RouterModule} from "@angular/router"


@NgModule({
  declarations: [
    MasterPageComponent, HomeComponent
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
