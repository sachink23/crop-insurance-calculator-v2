import { Component, OnInit } from '@angular/core';
import { SeoService } from 'src/app/services/seo/seo.service';
import { CalculatorService } from 'src/app/services/calculator/calculator.service';

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.css']
})
export class CalculatorComponent implements OnInit {

  title = "Crop Insurance Calculator V2"
  
  constructor(private seo: SeoService, private calc: CalculatorService) { }

  ngOnInit() {
    this.seo.defaultPageSeo(this.title)
  }

}
