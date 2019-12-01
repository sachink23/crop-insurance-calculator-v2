import { Injectable } from '@angular/core';
import { Rabi } from 'src/app/data/seasons/2019/rabi/rabi'
import Swal from 'sweetalert2';
@Injectable({
  providedIn: 'root'
})
export class CalculatorService {

  constructor(private data: Rabi) { 
    Swal.fire({
      title: "You have selected : "+data.data.season_name
    })
  }
}
