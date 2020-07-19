import { Injectable } from '@angular/core';
import { SwUpdate } from '@angular/service-worker';
import { LocalStorageService } from '../local-storage/local-storage.service';
import Swal from 'sweetalert2';

@Injectable()
export class PwaUpdateService {
  constructor(private swUpdate: SwUpdate, private ls:LocalStorageService) {
    console.log("Welcome to https://cic.kportal.in, Crop Insurance Calculator by Kekarjawalekar Technologies")
    this.swUpdate.available.subscribe(evt => {
        Swal.fire({
          title: "Update Available",
          icon: "info",
          text: "You are using old version of the app, click on update button for latest version updates, this may take few second.",
          confirmButtonText: "Update",
          showCancelButton: true,
          cancelButtonText: "Cancel",
          customClass: {
            cancelButton: "btn btn-danger"
          }
        }).then((result) => {
          if (result.value) {
              this.update()
          }
        })
    })

  }
  update() {
    this.ls.clear("calculator_defaults");
    window.location.reload(true)
  }
}
