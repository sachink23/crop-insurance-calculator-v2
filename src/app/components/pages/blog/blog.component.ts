import { Component, OnInit } from '@angular/core';
import { SeoService } from 'src/app/services/seo/seo.service';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css']
})
export class BlogComponent implements OnInit {

  title = "Blog : Crop Insurance Calculator"
  description = "Articles written by the experts at Kekarjawalekar Technologies for Crop Insurance Calculator"
  
  constructor(private seo: SeoService) { }

  ngOnInit() {
    this.seo.defaultPageSeo(this.title, this.description)
  }

}
