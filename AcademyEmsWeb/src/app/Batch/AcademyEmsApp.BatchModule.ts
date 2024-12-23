import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule , ReactiveFormsModule} from '@angular/forms';
import { BatchComponent } from './AcademyEmsApp.BatchComponent';
import {BatchRoutes} from "../Routing/AcademyEmsApp.BatchRouting"
import {RouterModule} from "@angular/router"
import {provideHttpClient} from '@angular/common/http'
import {UserControlModule} from '../UserControl/AcademyEmsApp.UserControlModule'

@NgModule({
  declarations: [
    BatchComponent
  ],
  imports: [
    RouterModule.forChild(BatchRoutes),
    CommonModule,
    ReactiveFormsModule,
    FormsModule   
    ,UserControlModule   
  ],
  providers: [provideHttpClient()],
  bootstrap: [BatchComponent]
})

export class BatchModule { }
