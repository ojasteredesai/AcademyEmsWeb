import { NgModule } from '@angular/core';
import { GridComponent} from './AcademyEmsApp.TypeGridComponent';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [
    GridComponent,
  ],
  imports: [
    CommonModule
  ],
  exports: [
    GridComponent,
  ]
})
export class UserControlModule { }