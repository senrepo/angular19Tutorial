import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-ng-if',
  imports: [CommonModule, FormsModule],
  templateUrl: './ng-if.component.html',
  styleUrl: './ng-if.component.css'
})
export class NgIfComponent {
  isDisplay: boolean = true;
  value1: string = '';
  value2: string = '';

  display() {
    this.isDisplay = true;
  }
  
  hide() {
    this.isDisplay = false;
  }

}

