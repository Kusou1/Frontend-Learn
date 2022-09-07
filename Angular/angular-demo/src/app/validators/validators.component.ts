import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from "@angular/forms"
import { MyValidators } from "../MyValidators"

@Component({
  selector: 'app-validators',
  templateUrl: './validators.component.html',
  styles: [
  ]
})
export class ValidatorsComponent implements OnInit {
  contactForm: FormGroup = new FormGroup({
    name: new FormControl("默认值", [
      Validators.required,
      Validators.minLength(2),
      MyValidators.cannotContainSpace
    ],MyValidators.shouldBeUnique)
  })
  get name() {
    return this.contactForm.get("name")!
  }
  constructor() { }
  onSubmit() {
    console.log(this.contactForm.valid)
  }
  ngOnInit(): void {
  }

}
