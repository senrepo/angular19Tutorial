import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { CapitalCasePipe } from '../capital-case.pipe';

@Component({
  selector: 'app-pipe',
  imports: [CommonModule, CapitalCasePipe],
  templateUrl: './pipe.component.html',
  styleUrl: './pipe.component.css'
})
export class PipeComponent implements OnInit {
  products: any[] = [];
  currentDate: Date = new Date();

  constructor(private httpClient : HttpClient) {

  }
  ngOnInit(): void {
   this.loadProducts();
  }

  loadProducts() {
    this.httpClient.get('https://fake-store-api.mock.beeceptor.com/api/products').subscribe((response:any)=> {
      this.products = response
    });
  }

}
