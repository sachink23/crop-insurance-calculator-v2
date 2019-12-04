import { Component, OnInit } from '@angular/core';
import { CalculatorService } from 'src/app/services/calculator/calculator.service';
import Swal from 'sweetalert2';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { SeoService } from 'src/app/services/seo/seo.service';
import { AffiliateShowService } from 'src/app/services/affiliate/affiliate-show.service';
@Component({
  selector: 'app-chart',
  templateUrl: './chart.component.html',
  styleUrls: ['./chart.component.css']
})
export class ChartComponent implements OnInit {
  setup
  vleDetails: FormGroup
  formSubmited = false
  vle = []
  data
  season_name_mr
  state_name_mr
  district_name_mr
  insurance_company_details: { name: string; name_mr: string; toll_free_number: string; email: string; website: string; headquarter_address: string; headquarter_address_mr: string; }
  crops: { crop_key: string; crop_name: string; crop_name_mr: string; crop_category: string; insurance_pricing: { premium_farmer_share: number; premium_gov_share: number; sum_insured: number; }; }[];
  constructor(private seo: SeoService, private route: Router, private builder: FormBuilder, private calc: CalculatorService, private aff:AffiliateShowService) { }

  ngOnInit() {
    scrollTo(0,0)
    this.aff.hide()
    this.seo.defaultPageSeo("Chart Maker")
    this.vleDetails = this.builder.group({
      centerName: ['', [
        Validators.required,
        Validators.minLength(2)
      ]],
      mobile: ['', [
        Validators.required,
        Validators.min(6000000000),
        Validators.max(9999999999)
      ]],
      address: ['', [
        Validators.minLength(2)
      ]]
    })

    if (this.calc.isSetupRequired()) {
      Swal.fire({
        icon: 'warning',
        title: 'Setup Required!',
        text: 'Setup is required to print the charts, please setup from calculator setup page..',
      }).then(an => this.route.navigate(['/calculator']))
    }
    this.setup = this.calc.getSetup()
    this.formSubmited = false

    this.vle = []
    this.season_name_mr = this.calc.getSeasons()[this.setup.season_id].season_name_mr
    this.state_name_mr = this.calc.getStates(this.setup.season_id)[this.setup.state_id].state_name_mr
    this.district_name_mr = this.calc.getDistricts(this.setup.season_id, this.setup.state_id)[this.setup.district_id].district_name_mr
    this.crops = this.calc.getCrops(this.setup.season_id, this.setup.state_id, this.setup.district_id)
    this.insurance_company_details = this.calc.getInsuranceCompanyDetails(this.setup.season_id, this.setup.state_id, this.setup.district_id)
  }
  submitForm() {
    if (this.vleDetails.invalid) {
      Swal.fire({
        icon: 'error',
        title: 'Please Check Details',
        text: "It seems like you have entered invalid details, or left any of the field blank. Please check again"
      })
      return false
    }
    this.vle['name'] = this.vleDetails.controls.centerName.value
    this.vle['mobile'] = this.vleDetails.controls.mobile.value
    this.vle['address'] = this.vleDetails.controls.address.value
    this.formSubmited = true

  }

  resetForm() {
    this.formSubmited = false
    this.vleDetails.reset()
    this.vle = []
  }

}
