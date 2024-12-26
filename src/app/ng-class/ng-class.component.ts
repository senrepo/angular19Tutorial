import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-ng-class',
  imports: [CommonModule],
  templateUrl: './ng-class.component.html',
  styleUrl: './ng-class.component.css'
})
export class NgClassComponent {
  divBgColor: string = 'redBackground';
  theme: string[] = ['redBackground', 'blueFont'];
  isMultiColor: boolean = false;

}
