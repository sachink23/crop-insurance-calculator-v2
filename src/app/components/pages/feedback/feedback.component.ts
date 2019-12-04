import { Component, OnInit } from '@angular/core';
import { AffiliateShowService } from 'src/app/services/affiliate/affiliate-show.service';

@Component({
  selector: 'app-feedback',
  templateUrl: './feedback.component.html',
  styleUrls: ['./feedback.component.css']
})
export class FeedbackComponent implements OnInit {

  constructor(private aff:AffiliateShowService) { }

  ngOnInit() {
    this.aff.hide()
  }

}
