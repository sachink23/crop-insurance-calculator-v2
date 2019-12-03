import { Component, OnInit } from '@angular/core';
import { SeoService } from 'src/app/services/seo/seo.service';
import { CalculatorService } from 'src/app/services/calculator/calculator.service';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.css']
})
export class CalculatorComponent implements OnInit {

  title = "Crop Insurance Calculator V2"
  isResetRequired = true
  stp = null
  mode = null
  state_name_en = null
  season_name_en = null
  district_name_en = null
  crops = []
  selectedCrops = []
  areas: Array<number>
  calcForm
  total = {
    crops: 0,
    area : 0,
    farmer_share : 0,
    gov_share : 0,
    premium : 0,
    insured_amt: 0,
  }
  
  constructor(private seo: SeoService, public calc: CalculatorService, private builder: FormBuilder) { }
  
  ngOnInit() {
    
  }
  isSetupRequired() {
    if(this.calc.isSetupRequired()) 
      return true
    return false  
    
  }
  
  
}
