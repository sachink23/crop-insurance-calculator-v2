import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AffiliateShowService {
  public showIt = true
  constructor() { 
    this.showIt = true
  }
  show() {
    return this.showIt
  }
  hide() {
    this.showIt = false
  }
}
