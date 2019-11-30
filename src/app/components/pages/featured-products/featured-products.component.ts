import { Component, OnInit } from '@angular/core';
import { SeoService } from 'src/app/services/seo/seo.service';

@Component({
  selector: 'app-featured-products',
  templateUrl: './featured-products.component.html',
  styleUrls: ['./featured-products.component.css']
})
export class FeaturedProductsComponent implements OnInit {

  title = "Featured Products : Crop Insurance Calculator"
  description = "List of some featured products by the team of crop insurance calculator at Kekarjawalekar Technologies."
  
  constructor(private seo: SeoService) { }

  ngOnInit() {
    this.seo.defaultPageSeo(this.title, this.description)
  }

}
