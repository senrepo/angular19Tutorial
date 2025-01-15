import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-tabs',
  imports: [CommonModule],
  templateUrl: './tabs.component.html',
  styleUrl: './tabs.component.css'
})
export class TabsComponent {
  @Input() tabList : string[] = [];
  @Output() onTabSelected = new EventEmitter<string>();
  selectedTab: string = '';

  tabSelected(tab: string) {
    this.selectedTab = tab;
    this.onTabSelected.emit(tab);
  }
}
