import { Component, OnInit } from '@angular/core';
import { FormArray, FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-form-array',
  templateUrl: './form-array.component.html',
  styles: [
  ]
})
export class FormArrayComponent implements OnInit {
  contactForm: FormGroup = new FormGroup({
    contacts: new FormArray([])
  })

  get contacts(){
    return this.contactForm.get('contacts') as FormArray
  }

  // 添加联系方式
  addContact() {
    // 联系方式
    const myContact: FormGroup = new FormGroup({
      name: new FormControl(),
      address: new FormControl(),
      phone: new FormControl()
    })
    // 向联系方式数组中添加联系方式
    this.contacts.push(myContact)
  }

  // 删除联系方式
  removeContact(i: number) {
    this.contacts.removeAt(i)
  }

  onSubmit() {
    console.log(this.contactForm.value)
  }

  constructor() { }

  ngOnInit(): void {
    this.addContact()
  }

}
