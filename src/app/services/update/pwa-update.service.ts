import { Injectable } from '@angular/core';
import { SwUpdate } from '@angular/service-worker';
import Swal from 'sweetalert2';

@Injectable({
  providedIn: 'root'
})
export class PwaUpdateService {
  constructor(private swUpdate: SwUpdate) {
    this.swUpdate.available.subscribe(evt => {
        console.log("Update Available")
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
    }, 
    error => console.log(error),
    function() {
      console.log("SwUpdate Executed")
    }
    
    )
  }
  update() {
    window.location.reload(true)
  }
}
