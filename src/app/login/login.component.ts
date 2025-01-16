import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Route, Router } from '@angular/router';

@Component({
  selector: 'app-login',
  imports: [FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  login: any = {
    userid: '',
    password: ''
  }

  constructor(private router: Router) {

  }

  signIn() {
    if(this.login.userid === 'test' && this.login.password === 'test') {
      localStorage.setItem("angular19user", this.login.userid);
      this.router.navigateByUrl("layout");
    } else
    {
      localStorage.removeItem("angular19user");
      alert("wrong credentials");
    }
  }
}
