import { Injectable } from '@angular/core';
import Swal from 'sweetalert2';

@Injectable({
  providedIn: 'root'
})
export class CalculatorSetupService {
  constructor() { 

  }  
  isSetUpRequired():boolean {
    var data = localStorage.getItem("calculator_defaults")
    if(data == null)  {
      this.clearSetup()
      return true
    }
    return false
  }
  getSetup() {
    return JSON.parse(localStorage.getItem("calculator_defaults"))
  }
  saveSetup(mode:string, season_id:number, state_id:number, district_id: number) {
    if(!(mode == "farmer" || mode == "vle_unpaid"))
      return false
    if((isNaN(season_id) || season_id == null) && (isNaN(state_id) || state_id == null) && (isNaN(district_id) || district_id == null)) 
      return false
    var setup = {
      mode: mode,
      season_id: season_id,
      state_id: state_id,
      district_id: district_id
    }
    this.clearSetup()
    localStorage.setItem("calculator_defaults", JSON.stringify(setup))
    return true
  }
  clearSetup() {
    localStorage.removeItem("calculator_defaults")
  }


  
}
