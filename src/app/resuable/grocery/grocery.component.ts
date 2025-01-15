import { Component } from '@angular/core';
import { TabsComponent } from '../tabs/tabs.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-grocery',
  imports: [CommonModule, TabsComponent],
  templateUrl: './grocery.component.html',
  styleUrl: './grocery.component.css'
})
export class GroceryComponent {
  fruits : string[] = [ 'Apple', 'Orange', 'Banana'];
  vegetables: string[] =  ['Tomotto', 'Beans', 'Chilly'];
  selectedTab: string = '';

  onTabSelected(tab: string) {
    this.selectedTab = tab;
  }

}
