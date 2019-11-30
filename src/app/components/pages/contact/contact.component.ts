import { Component, OnInit } from '@angular/core';
import { SeoService } from 'src/app/services/seo/seo.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  title = "Contact Us : Crop Insurance Calculator"
  description = "If you have any questions, queries, or feature requests regarding crop insurance calculator you can directly contact us with this form."
  
  constructor(private seo: SeoService) { }

  ngOnInit() {
    this.seo.defaultPageSeo(this.title, this.description)
  }

}
