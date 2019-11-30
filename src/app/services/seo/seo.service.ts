import { Injectable } from '@angular/core';
import { Title, Meta } from '@angular/platform-browser';

@Injectable({
  providedIn: 'root'
})
export class SeoService {
  defaultDescription = "Crop insurance calculator helps CSC VLEs, farmers to calculate their crop insurance premium, insured amount, government share for specific crop in their district."
  constructor(public titleService: Title, public meta: Meta) { }
 
  defaultPageSeo(title, description = this.defaultDescription) {
    this.titleService.setTitle(title)
    var tags = [
      {property: 'description', content: description},
      {property: 'og:locale', content: 'en_US'},
      {property: 'og:type', content: 'website'},
      {property: 'og:title', content: title},
      {property: 'og:description', content: description},
      {property: 'og:image', content: 'assets/icons/48.png'} 
    ]
    tags.forEach(tag => {
      this.meta.updateTag(tag)
    });
  }
}
