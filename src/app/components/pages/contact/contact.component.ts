import { Component, OnInit } from '@angular/core';
import { SeoService } from 'src/app/services/seo/seo.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
  contactForm: FormGroup;
  formSubmited = false;
  title = "Contact Us : Crop Insurance Calculator"
  description = "If you have any questions, queries, or feature requests regarding crop insurance calculator you can directly contact us with this form."
  
  constructor(private builder: FormBuilder,private seo: SeoService) { }

  ngOnInit() {
    scrollTo(0,0)
    this.seo.defaultPageSeo(this.title, this.description)
    this.contactForm = this.builder.group({
      name: ['', [
        Validators.required,
        Validators.minLength(3),
        Validators.maxLength(128),
        Validators.pattern("[a-zA-Z][a-zA-Z ]+")
      ]],
      email: ['', [
        Validators.required,
        Validators.email
      ]],
      subject: ['', [
        Validators.required,
        Validators.minLength(3),
        Validators.maxLength(128)
      ]],
      message: ['', [
        Validators.required,
        Validators.minLength(3)
      ]]
    })
  }
  checkElement(element) {
    // this is useful for frontend form val
    if(element.invalid && this.formSubmited)
      return true;
    if((element.touched || element.dirty) && element.invalid)
      return true
    else 
      return false
  }
  submit() {
    this.formSubmited = true
    
  }
}
