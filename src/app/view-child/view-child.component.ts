import { Component, ElementRef, ViewChild } from '@angular/core';
import { TabsComponent } from '../resuable/tabs/tabs.component';

@Component({
  selector: 'app-view-child',
  imports: [TabsComponent],
  templateUrl: './view-child.component.html',
  styleUrl: './view-child.component.css'
})
export class ViewChildComponent {

  @ViewChild('city') cityText: ElementRef | undefined;
  @ViewChild(TabsComponent) tab: TabsComponent | undefined;

  selectedCity: string = '';
  selectedTab: string = '';


  submit() {
    this.selectedCity = this.cityText?.nativeElement.value;
    this.selectedTab = this.tab?.selectedTab || '';
  }

}
