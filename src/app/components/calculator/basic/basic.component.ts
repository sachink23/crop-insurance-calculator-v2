import { Component, OnInit } from '@angular/core';
import { CalculatorService } from 'src/app/services/calculator/calculator.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-basic',
  templateUrl: './basic.component.html',
  styleUrls: ['./basic.component.css']
})
export class BasicComponent implements OnInit {

  stp = null
  mode = null
  state_name_en = null
  season_name_en = null
  district_name_en = null
  crops = []
  selectedCrops = []
  areas: Array<number>
  calcForm:FormGroup
  vleCalcForm: FormGroup
  total = {
    crops: 0,
    area : 0,
    farmer_share : 0,
    gov_share : 0,
    premium : 0,
    insured_amt: 0,
  }
  
  constructor(public calc: CalculatorService, private builder: FormBuilder) { }
  
  ngOnInit() {
    this.total = {
      crops: 0,
      area : 0,
      farmer_share : 0,
      gov_share : 0,
      premium : 0,
      insured_amt: 0,
    }
    this.stp = null
    this.mode = null
    this.state_name_en = null
    this.season_name_en = null
    this.district_name_en = null
    this.crops = []
    this.selectedCrops = []
    this.areas = []
    this.isSetupRequired()
    this.calcForm = this.builder.group({
      crops: ['', [
        Validators.required,
        Validators.min(0),
        Validators.max(this.crops.length-1),
      ]],
      area: ['', [
        Validators.required,
        Validators.min(0),
        Validators.max(1000),
      ]],
      premiumAmt: ['', []],
      insuredAmt: ['', []]
    })
    this.vleCalcForm = this.builder.group({
      name: ['', [
      ]],
      village: ['', [
      ]],
      paid_amt: ['', [
        
      ]],
      pending_amt: ['', []]
    })
    this.vleCalcForm.controls.paid_amt.setValue(0)
    this.vleCalcForm.controls.pending_amt.setValue(0)
    this.vleCalcForm.reset()
    this.calcForm.reset()
  }
  calculate() {
    if(this.calcForm.controls.crops.value && this.calcForm.controls.area.valid) {
      var crop = this.calcForm.controls.crops.value
      this.calcForm.controls.premiumAmt.setValue( this.crops[crop].insurance_pricing.premium_farmer_share * this.calcForm.controls.area.value)
      this.calcForm.controls.insuredAmt.setValue( this.crops[crop].insurance_pricing.sum_insured * this.calcForm.controls.area.value)

      return
    }
    this.calcForm.controls.premiumAmt.setValue("")
    this.calcForm.controls.insuredAmt.setValue("")

    return
  }
  isSetupRequired() {
    if(this.calc.isSetupRequired()) 
      return true
      
    this.stp = this.calc.getSetup()
    if(this.stp.mode == "farmer")
      this.mode = "Farmer"
    else 
      this.mode = "VLE"
      
    
    this.season_name_en = this.calc.getSeasonName(this.stp.season_id)
    this.state_name_en = this.calc.getStateName(this.stp.season_id, this.stp.state_id)
    this.district_name_en = this.calc.getDistrictName(this.stp.season_id, this.stp.state_id, this.stp.district_id)
    this.crops = this.calc.getCrops(this.stp.season_id, this.stp.state_id, this.stp.district_id) 
    
    return false
  }
  clearSetup() {
    this.calc.clearSetup()
    Swal.fire({
      icon: 'success',
      title: 'Setup Cleared',
      text: 'As you have cleared previous setup, you have to select mode, season, state and district again...'
    })
  }
  vleForm() {
    var amt_paid = parseFloat(this.vleCalcForm.controls.paid_amt.value)
    this.vleCalcForm.controls.pending_amt.setValue(this.total.farmer_share - amt_paid)
  }
  addCrop() {
    if(this.calcForm.controls.crops.valid && this.calcForm.controls.area.valid) {
      var crop = this.crops[this.calcForm.controls.crops.value]
      this.areas.push(parseFloat(this.calcForm.controls.area.value))
      this.selectedCrops.push(crop)
      this.calcForm.reset()
      this.getTotal()
      document.getElementById('crops').focus()
      this.vleForm()
      return
    }
    if(this.calcForm.controls.crops.invalid || this.calcForm.controls.area.invalid) {
      Swal.fire({
        title: "Please Select Valid Crop, Area",
        icon: "error",
        text: "Please select one of the crops from the list and enter the valid area from 0 - 1000 hectors!"
      })
    }

  }

  getTotal() {
    var area = 0
    var crops = 0
    var farmershare = 0
    var govshare = 0
    var insuredamt = 0
    this.areas.forEach(element => {
      area=area+element
    });
    this.selectedCrops.forEach(crop => {
      farmershare = (farmershare + (this.areas[crops]*crop.insurance_pricing.premium_farmer_share))
      govshare = govshare + (this.areas[crops]*crop.insurance_pricing.premium_gov_share)
      insuredamt = insuredamt + (this.areas[crops] * crop.insurance_pricing.sum_insured)
      crops++
    })
    this.total = {
      crops: this.selectedCrops.length,
      area : area,
      farmer_share : farmershare,
      gov_share : govshare,
      premium : farmershare + govshare,
      insured_amt: insuredamt,
    }
  }

  removeCrop(indexOfElement) {
    this.selectedCrops.splice(indexOfElement, 1)
    this.areas.splice(indexOfElement, 1)
    this.getTotal()
    this.vleForm()

  }
  vleFormComplete() {
    if(this.vleCalcForm.controls.paid_amt.value < 0 || this.vleCalcForm.controls.paid_amt.value == null)
       return false
    if(this.total.crops < 1)
      return false
    
    return true
  }
  reset() {
      this.ngOnInit()
  }
  printForVle() {
    window.print()
  }

  
}
