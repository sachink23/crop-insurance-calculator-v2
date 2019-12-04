import { Component, OnInit } from '@angular/core';
import { SeoService } from 'src/app/services/seo/seo.service';
import { AffiliateShowService } from 'src/app/services/affiliate/affiliate-show.service';
@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
  title = "Contact Us : Crop Insurance Calculator"
  description = "If you have any questions, queries, or feature requests regarding crop insurance calculator you can directly contact us with this form."
  
  constructor(private seo: SeoService, private aff:AffiliateShowService) { }

  ngOnInit() {
    scrollTo(0,0)
    this.seo.defaultPageSeo(this.title, this.description)
    this.aff.hide()
  }
}
