import { Component } from '@angular/core';
import { PwaUpdateService } from './services/update/pwa-update.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'crop-insurance-calculator-v2';
  constructor(private update: PwaUpdateService){
   
  }
}
