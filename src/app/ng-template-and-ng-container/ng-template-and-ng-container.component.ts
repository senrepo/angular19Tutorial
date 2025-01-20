import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-ng-template-and-ng-container',
  imports: [CommonModule],
  templateUrl: './ng-template-and-ng-container.component.html',
  styleUrl: './ng-template-and-ng-container.component.css'
})
export class NgTemplateAndNgContainerComponent {

  students: any[] = [
    { studentId: 1, name: 'Jack', score: 90 },
    { studentId: 1, name: 'Mark', score: 70 },
    { studentId: 1, name: 'Aravind', score: 98 },
    { studentId: 1, name: 'Pawn', score: 40 },
    { studentId: 1, name: 'Mark', score: 60 }
  ];

  isLoader: boolean = true;

  constructor() {
    setTimeout(()=> {
      this.isLoader = false;
    }, 5000);
  }

}
