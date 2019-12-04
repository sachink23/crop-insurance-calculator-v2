import { Injectable } from '@angular/core';
import { Seasons } from 'src/app/data/seasons/seasons';
import { CalculatorSetupService } from './setup/calculator-setup.service';

@Injectable({
  providedIn: 'root'
})
export class CalculatorService {
  constructor(private setup: CalculatorSetupService,private data:Seasons) {

  }
  isSetupRequired() {
    return this.setup.isSetUpRequired()
  }
  getSetup() {
    return this.setup.getSetup()
  }
  getSeasonName(seasonArrayIndex) {
    return this.data.data[seasonArrayIndex].season_name
  }

  getStateName(seasonArrayIndex, stateArrayIndex) {
    return this.data.data[seasonArrayIndex].states[stateArrayIndex].state_name
  }
  getDistrictName(seasonArrayIndex, stateArrayIndex, districtArrayIndex) {
    return this.data.data[seasonArrayIndex].states[stateArrayIndex].districts[districtArrayIndex].district_name
  }
  getCrops(seasonArrayIndex, stateArrayIndex, districtArrayIndex) {
    return this.data.data[seasonArrayIndex].states[stateArrayIndex].districts[districtArrayIndex].crops
  }
  clearSetup() {
    this.setup.clearSetup()
  }
  getStates(seasonArrayIndex) {
    var states = []
    var i =0
    this.data.data[seasonArrayIndex].states.forEach(state => {
      states[i] = {
        state_array_index: i,
        state_id: state.state_id,
        state_name: state.state_name,
        state_name_mr: state.state_name_mr
      } 
      i++ 
    })
    return states
  }
  getInsuranceCompanyDetails(seasonArrayIndex, stateArrayIndex, districtArrayIndex) {
    return this.data.data[seasonArrayIndex].states[stateArrayIndex].districts[districtArrayIndex].insurance_company_details
  }
  getDistricts(seasonArrayIndex, stateArrayIndex) {
    var districts = []
    var i =0
    this.data.data[seasonArrayIndex].states[stateArrayIndex].districts.forEach(district => {
      districts[i] = {
        district_array_index: i,
        district_id: district.district_id,
        district_name: district.district_name,
        district_name_mr: district.district_name_mr
      }
      i++ 
    })
   

    return districts
  }
  getSeasons() {
    var seasons = []
    var i = 0
    this.data.data.forEach(season => {
      seasons[i] = {
        season_array_index: i,
        season_id: season.season_id,
        season_name: season.season_name,
        season_name_mr: season.season_name_mr
      }
      i++ 
    })
    return seasons
  }
  getStatesForSeason(seasonArrayIndex: number) {
    var states = []
    var i = 0
    this.data.data[seasonArrayIndex].states.forEach(state => {
      states[i] = {
        state_array_index: i,
        state_id: state.state_id,
        state_name: state.state_name,
        state_name_mr: state.state_name_mr
      }
      i++ 
    })
    return states
  }
  getDistrictsForSeasonAndState(seasonArrayIndex, stateArrayIndex) {
    var dists = []
    var i = 0
    this.data.data[seasonArrayIndex].states[stateArrayIndex].districts.forEach(dist => {
      dists[i] = {
        dist_array_index: i,
        dist_id: dist.district_id,
        dist_key: dist.district_key,
        dist_name: dist.district_name,
        dist_name_mr: dist.district_name_mr
      }
      i++ 
    })
    return dists
  }
}
