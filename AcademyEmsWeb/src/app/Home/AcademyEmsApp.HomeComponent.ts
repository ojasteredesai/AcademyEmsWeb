import { Component } from '@angular/core';
import{FileLogger, BaseLogger} from '../Utility/AcademyEmsApp.Logger'

@Component({
  templateUrl: './AcademyEmsApp.HomeView.html'
})
export class HomeComponent {
    logger : BaseLogger | undefined;

    constructor(_logger : BaseLogger){
      this.logger = _logger;
      
    this.logger?.LogError("Home component");
    }
}
