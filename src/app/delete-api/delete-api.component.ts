import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-delete-api',
  imports: [CommonModule, FormsModule],
  templateUrl: './delete-api.component.html',
  styleUrl: './delete-api.component.css'
})
export class DeleteApiComponent {
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

  deleteData() {
    this.httpClient.delete("https://posthook-api.mock.beeceptor.com/v1/hooks", this.data).subscribe((response: any) => {
      console.log(response);
      this.getHooks();
    });
  }
}
