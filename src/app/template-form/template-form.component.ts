import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-template-form',
  imports: [FormsModule, CommonModule],
  templateUrl: './template-form.component.html',
  styleUrl: './template-form.component.css'
})
export class TemplateFormComponent {
  customer: any = {
    firstName: '',
    lastName: '',
    state: '',
    isTermsAgree: true
  }

  constructor() {
    this.customer.firstName = '';
    this.customer.state = "NC"
  }

  save() {
    console.log(this.customer);
  }
}
