import { Component, OnInit } from '@angular/core';
import { SeoService } from 'src/app/services/seo/seo.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {
  
  title = "About Us : Crop Insurance Calculator"
  description = "Crop Insurance Calculator by Kekarjawalekar Technologies is a simple tool built with a simplicity in mind"
  
  constructor(private seo: SeoService) { }

  ngOnInit() {
    scrollTo(0,0)
    this.seo.defaultPageSeo(this.title, this.description)
  }

}
