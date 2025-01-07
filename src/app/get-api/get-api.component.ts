import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-get-api',
  imports: [],
  templateUrl: './get-api.component.html',
  styleUrl: './get-api.component.css'
})
export class GetApiComponent {
  users: any [] = [];
  products: any[] = [];

  constructor(private httpClient: HttpClient) {

  }

  getUsers() {
    this.httpClient.get("https://fake-store-api.mock.beeceptor.com/api/users").subscribe( (result: any) => {
      this.users = result;
    });
  }

  getProducts() {
    this.httpClient.get("https://fake-store-api.mock.beeceptor.com/api/products").subscribe( (result: any) => {
      this.products = result;
    });
  }
}
