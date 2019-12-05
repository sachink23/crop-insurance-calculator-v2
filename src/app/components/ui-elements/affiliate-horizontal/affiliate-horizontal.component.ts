import { Component, OnInit } from '@angular/core';
import { AffiliateShowService } from 'src/app/services/affiliate/affiliate-show.service';

@Component({
  selector: 'app-affiliate-horizontal',
  templateUrl: './affiliate-horizontal.component.html',
  styleUrls: ['./affiliate-horizontal.component.css']
})
export class AffiliateHorizontalComponent implements OnInit {

  constructor(public sh:AffiliateShowService) { }

  ngOnInit() {
    this.sh.showIt = true
    this.show()
  } 
  show() {
    return this.sh.showIt
  }

}
