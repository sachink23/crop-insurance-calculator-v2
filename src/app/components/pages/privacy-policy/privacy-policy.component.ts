import { Component, OnInit } from '@angular/core';
import { SeoService } from 'src/app/services/seo/seo.service';

@Component({
  selector: 'app-privacy-policy',
  templateUrl: './privacy-policy.component.html',
  styleUrls: ['./privacy-policy.component.css']
})
export class PrivacyPolicyComponent implements OnInit {

  constructor(private seo:SeoService) { }

  ngOnInit() {
    scrollTo(0,0)
    this.seo.defaultPageSeo("Terms and Conditions")
  }

}
