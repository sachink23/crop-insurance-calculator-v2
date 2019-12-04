import { Component, OnInit } from '@angular/core';
import { SeoService } from 'src/app/services/seo/seo.service';

@Component({
  selector: 'app-tools-for-vle',
  templateUrl: './tools-for-vle.component.html',
  styleUrls: ['./tools-for-vle.component.css']
})

export class ToolsForVleComponent implements OnInit {
  title = "Business Development Tools"
  description = "Tools, products and tips recomended by experts at kekarjawalekar technologies."
  constructor(private seo:SeoService) { }

  ngOnInit() {
    scrollTo(0,0)
    this.seo.defaultPageSeo(this.title,this.description)
  }

}
