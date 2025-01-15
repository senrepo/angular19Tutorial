import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { TabsComponent } from '../tabs/tabs.component';

@Component({
  selector: 'app-auto',
  imports: [CommonModule, TabsComponent],
  templateUrl: './auto.component.html',
  styleUrl: './auto.component.css'
})
export class AutoComponent {
  cars : string[] = [ 'Toyota', 'Honda', 'Nissan'];
  trucks: string[] =  ['Tractor', 'Van', 'Pickup'];
  tabs: string[] = ['Cars', 'Trucks'];
  selectedTab: string = '';

  constructor() {

  }



  onTabSelected(tab: string) {
    this.selectedTab = tab;
  }
}
