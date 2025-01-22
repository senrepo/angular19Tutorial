import { Component } from '@angular/core';
import { Router, RouterLink, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-layout',
  imports: [RouterLink, RouterOutlet],
  templateUrl: './layout.component.html',
  styleUrl: './layout.component.css'
})
export class LayoutComponent {

  constructor(private router: Router) {
    
  }

  logoff() {
    localStorage.removeItem("angular19user");
    localStorage.removeItem("token");
    this.router.navigateByUrl("login");
  }

}
