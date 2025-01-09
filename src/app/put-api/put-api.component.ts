import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-put-api',
  imports: [CommonModule, FormsModule],
  templateUrl: './put-api.component.html',
  styleUrl: './put-api.component.css'
})
export class PutApiComponent {
  hooks: any[] = [];
  data: any;

  constructor(private httpClient: HttpClient) {
    this.getHooks();
  }

  getHooks() {
    this.httpClient.get("https://posthook-api.mock.beeceptor.com/v1/hooks").subscribe((response: any) => {
      this.hooks = response.data;
    });
  }

  putData() {
    this.httpClient.put("https://posthook-api.mock.beeceptor.com/v1/hooks", this.data).subscribe((response: any) => {
      console.log(response);
      this.getHooks();
    });
  }
}
