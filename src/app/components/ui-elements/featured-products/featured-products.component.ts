import { Component, OnInit } from '@angular/core';
import { AffiliateShowService } from 'src/app/services/affiliate/affiliate-show.service';

@Component({
  selector: 'app-featured-products',
  templateUrl: './featured-products.component.html',
  styleUrls: ['./featured-products.component.css']
})
export class FeaturedProductsComponent implements OnInit {

  constructor(private sh:AffiliateShowService) { }

  ngOnInit() {
    this.sh.showIt = true
  }

}
