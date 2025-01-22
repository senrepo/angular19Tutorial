import { HttpClient } from '@angular/common/http';
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

  constructor(private router: Router, private httpClient: HttpClient) {

  }

  signIn() {
    //this.localSignIn();
    this.serverSignIn()
  }

  localSignIn() {
    if (this.login.userid === 'test' && this.login.password === 'test') {
      localStorage.setItem("angular19user", this.login.userid);
      this.router.navigateByUrl("layout");
    } else {
      localStorage.removeItem("angular19user");
      alert("wrong credentials");
    }
  }

  serverSignIn() {
    this.httpClient.post('https://localhost:7070/api/auth/login', {'username': this.login.userid, 'password' : this.login.password}).subscribe({
      next: (response:any) => {
        localStorage.setItem("angular19user", this.login.userid);
        localStorage.setItem("token", response.token);
        this.router.navigateByUrl("layout");
      },
      error: (error) => {
        console.log(error);
        alert(error.error)
      }
    });
  }
}
