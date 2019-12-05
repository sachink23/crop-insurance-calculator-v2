import { Component, OnInit } from '@angular/core';
import { AffiliateShowService } from 'src/app/services/affiliate/affiliate-show.service';

@Component({
  selector: 'app-page-not-found',
  templateUrl: './page-not-found.component.html',
  styleUrls: ['./page-not-found.component.css']
})
export class PageNotFoundComponent implements OnInit {

  constructor(private aff:AffiliateShowService) { }

  ngOnInit() {
    this.aff.hide()
  }

}
