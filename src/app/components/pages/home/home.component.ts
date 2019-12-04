import { Component, OnInit } from '@angular/core';
import { SeoService } from 'src/app/services/seo/seo.service';
import { AffiliateShowService } from 'src/app/services/affiliate/affiliate-show.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  title = "Crop Insurance Calculator : Kekarjawalekar Technologies"
  
  constructor(private seo:SeoService, private aff:AffiliateShowService) { }

  ngOnInit() {
    scrollTo(0,0)
    this.seo.defaultPageSeo(this.title)
    this.aff.showIt = true
  }
}
