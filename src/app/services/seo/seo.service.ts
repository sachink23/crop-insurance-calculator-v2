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
      {name: 'description', content: description},
      {name: 'og:locale', content: 'en_US'},
      {name: 'og:type', content: 'website'},
      {name: 'og:title', content: title},
      {name: 'og:description', content: description},
      {name: 'og:image', content: 'assets/icons/48.png'} 
    ]
    tags.forEach(tag => {
      this.meta.updateTag(tag)
    });
  }
}
