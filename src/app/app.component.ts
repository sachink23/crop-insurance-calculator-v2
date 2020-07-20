import {Component, OnInit} from '@angular/core';
import { PwaUpdateService } from './services/update/pwa-update.service';
import { AffiliateShowService } from './services/affiliate/affiliate-show.service';
import {
  trigger,
  state,
  style,
  animate,
  transition,
  query,
} from '@angular/animations';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  animations: [
    trigger('routerAnimation', [
      transition('* <=> *', [
        // Initial state of new route
        query(':enter',
          style({
            position: 'fixed',
            width: '100%',
            transform: 'translateX(-100%)'
          }),
          {optional: true}),

        // move page off screen right on leave
        query(':leave',
          animate('500ms ease',
            style({
              position: 'fixed',
              width: '100%',
              transform: 'translateX(100%)'
            })
          ),
        {optional: true}),

        // move page in screen from left to right
        query(':enter',
          animate('500ms ease',
            style({
              opacity: 1,
              transform: 'translateX(0%)'
            })
          ),
        {optional: true}),
      ])
    ])
  ]
})
export class AppComponent implements OnInit {
  title = 'crop-insurance-calculator-v2';
  constructor(private update: PwaUpdateService, public aff: AffiliateShowService) {

  }
  ngOnInit() {
    if (!localStorage.getItem('updated_')) {
      localStorage.removeItem('calculator_defaults');
      localStorage.setItem('updated_', 'true');
    }
  }
  getRouteAnimation(outlet) {
    return outlet.activatedRouteData.animation;
  }
}
