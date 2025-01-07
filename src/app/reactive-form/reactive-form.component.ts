import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-reactive-form',
  imports: [ReactiveFormsModule],
  templateUrl: './reactive-form.component.html',
  styleUrl: './reactive-form.component.css'
})
export class ReactiveFormComponent {
  customerForm : FormGroup = new FormGroup({
    firstName: new FormControl('',[Validators.required]),
    lastName: new FormControl('', [Validators.required, Validators.minLength(4)]),
    state: new FormControl('NC'),
    isTermsAgree: new FormControl(false)
  });

  constructor() {
    this.customerForm.controls['state'].disable();
  }

  save() {
    console.log(this.customerForm.value);
  }

}
