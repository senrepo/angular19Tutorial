import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-data-binding',
  imports: [FormsModule],
  templateUrl: './data-binding.component.html',
  styleUrl: './data-binding.component.css'
})
export class DataBindingComponent {
  firstName: string = "";
  rollNo: number = 121;
  isActive: boolean = false;
  currentDate: Date = new Date();
  highlight: string = 'highlighRed';

  pet: string = 'cat';

  constructor() {
    this.firstName = 'senthil';
    console.log(this.firstName);

    this.highlight = 'highlighBlue';
  }

  display() {
    alert(this.firstName);
  }

  petChange() {
    console.log('pet is changed');
  }

}
