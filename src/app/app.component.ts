import { Component } from '@angular/core';
import { PwaUpdateService } from './services/update/pwa-update.service';
import { AffiliateShowService } from './services/affiliate/affiliate-show.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'crop-insurance-calculator-v2';
  constructor(private update: PwaUpdateService, public aff:AffiliateShowService){
   
  }
}
