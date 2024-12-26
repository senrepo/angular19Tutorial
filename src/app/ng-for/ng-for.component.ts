import { NgFor } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-ng-for',
  imports: [NgFor],
  templateUrl: './ng-for.component.html',
  styleUrl: './ng-for.component.css'
})
export class NgForComponent {
  pets: string[] = ['Dog', 'Cat', 'Parrot']

  petsCollection = [
    { id: 'dog', name: 'Dog' },
    { id: 'cat', name: 'Cat' },
    { id: 'parrot', name: 'Parrot' }
  ];

}
