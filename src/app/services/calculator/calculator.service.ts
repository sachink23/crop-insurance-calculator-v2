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
