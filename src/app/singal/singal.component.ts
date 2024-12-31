import { CommonModule } from '@angular/common';
import { Component, computed, effect, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { single } from 'rxjs';

@Component({
  selector: 'app-singal',
  imports: [FormsModule, CommonModule],
  templateUrl: './singal.component.html',
  styleUrl: './singal.component.css'
})
export class SingalComponent {

    //create signal variable implicit way
    name = signal('senthil');

    //create signal variable explicit way
    rollNumber = signal<number>(0);

    //computed signals
    height = signal<number>(0);
    length = signal<number>(0);
    area = computed(()=> this.length() * this.height());

    constructor() {
      //set signal value
      this.rollNumber.set(1);

      //effects will be invoked only when length changes
      effect(()=> {
        if(this.height() <1) {
          this.height.set(1);
        }
        console.log("length value {0}", this.length());
      });

      //effects will be invoked only when height changes
      effect(()=> {
        if(this.length() <1) {
          this.length.set(1);
        }
        console.log("height value {0}", this.height());
      });

      //effects will be invoked only when area changes
      effect(()=> {
        console.log("area value {0}", this.area());
      });
    }

    increment() {
      //update the signal value
      this.rollNumber.update(value => value + 1);
    }

}
