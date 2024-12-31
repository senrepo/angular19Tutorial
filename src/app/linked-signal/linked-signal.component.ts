import { CommonModule } from '@angular/common';
import { Component, linkedSignal, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-linked-signal',
  imports: [FormsModule, CommonModule],
  templateUrl: './linked-signal.component.html',
  styleUrl: './linked-signal.component.css'
})
export class LinkedSignalComponent {
  increment = signal<number>(0);

  revised = linkedSignal( {
    source : this.increment,
    computation: (newVal, previousVal) => {
      //debugger;
      return newVal + (previousVal?.source ?? 0);
    }
  });

  user = signal({id: 111, name: 'senthil'});

  email = linkedSignal({
    source: this.user,
    computation: user => `${user.name}${user.id}@gmail.com`,
    equal: (a: any, b:any) => a.id === b.id
  });



}
