import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-form-builder',
  templateUrl: './form-builder.component.html',
  styles: [
  ]
})
export class FormBuilderComponent implements OnInit {

  contactForm: FormGroup
  constructor(private fb: FormBuilder) {
    this.contactForm = this.fb.group({
      fullName: this.fb.group({
        firstName: ["😝", [Validators.required]],
        lastName: [""]
      }),
      phone: []
    })
  }

  onSubmit() {
    console.log(this.contactForm.value)
  }

  ngOnInit(): void {
  }

}
