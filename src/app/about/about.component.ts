import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-about',
  imports: [CommonModule, FormsModule],
  templateUrl: './about.component.html',
  styleUrl: './about.component.css'
})
export class AboutComponent {
  componentName: string = '';

  constructor(private router: Router) {

  }

  navigateComponent()
  {
    this.router.navigateByUrl(`/${this.componentName}`);
  }

}
