import { Component, OnInit } from '@angular/core';
import { CalculatorSetupService } from 'src/app/services/calculator/setup/calculator-setup.service';
import { CalculatorService } from 'src/app/services/calculator/calculator.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-calculator-setup',
  templateUrl: './setup.component.html',
  styleUrls: ['./setup.component.css']
})
export class SetupComponent implements OnInit {
  defs = {
    mode: null,
    season_id: null,
    state_id: null,
    district_id: null
  }
  selectionForm: FormGroup;
  activeStep = 1
  formSubmited = false
  constructor(public setup:CalculatorSetupService, public calc:CalculatorService, private builder: FormBuilder) { }

  ngOnInit() {
    this.setup.clearSetup()
    this.activeStep = 1
    this.selectionForm = this.builder.group({
      season: ['', [
        Validators.required,
        Validators.max(0),
        Validators.min(this.calc.getSeasons().length-1),

      ]],
      state: ['', [
        Validators.required,
        Validators.min(0),
        Validators.max(0)
      ]],
      district: ['', [
        Validators.required,
        Validators.min(0),
        Validators.max(21)
      ]]
    })
  }
  checkElement(element) {
    // this is useful for frontend form val
    if(element.invalid && this.formSubmited)
      return true
    if((element.touched || element.dirty) && element.invalid)
      return true
    else 
      return false
  }
  setFarmerMode() {
    this.defs.mode = "farmer"
    this.activeStep = 2
  }
  setVleUnpaidMode() {
    this.defs.mode = "vle_unpaid"
    this.activeStep = 2
  }
  submitForm() {
    this.formSubmited = true
    if(this.selectionForm.valid && (this.defs.mode == "farmer" || this.defs.mode == "vle_unpaid")) {
      this.defs.season_id = this.selectionForm.controls.season.value
      this.defs.state_id = this.selectionForm.controls.state.value
      this.defs.district_id = this.selectionForm.controls.district.value
      this.setup.saveSetup(this.defs.mode, this.defs.season_id, this.defs.state_id, this.defs.district_id)
      Swal.fire({
        title: "Setup Successful",
        icon: "success",
      })
    }
  }

}
