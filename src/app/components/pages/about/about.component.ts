import { Component, OnInit } from '@angular/core';
import { SeoService } from 'src/app/services/seo/seo.service';
import { AffiliateShowService } from 'src/app/services/affiliate/affiliate-show.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {
  
  title = "About Us : Crop Insurance Calculator"
  description = "Crop Insurance Calculator by Kekarjawalekar Technologies is a simple tool built with a simplicity in mind"
  
  constructor(private seo: SeoService, private aff:AffiliateShowService) { }

  ngOnInit() {
    scrollTo(0,0)
    this.aff.showIt = true
    this.seo.defaultPageSeo(this.title, this.description)
  }

}
