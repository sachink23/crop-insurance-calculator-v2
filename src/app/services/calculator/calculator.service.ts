import { Injectable } from '@angular/core';
import { Rabi2019 } from 'src/app/data/seasons/rabi2019/rabi2019';
import Swal from 'sweetalert2';

@Injectable({
  providedIn: 'root'
})
export class CalculatorService {

  constructor(private season: Rabi2019) {
    Swal.fire(this.season.data.season_name)
  }
}
