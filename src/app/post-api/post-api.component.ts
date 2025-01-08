import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-post-api',
  imports: [CommonModule, FormsModule],
  templateUrl: './post-api.component.html',
  styleUrl: './post-api.component.css'
})
export class PostApiComponent {
  hooks: any [] = [];
  data:any;

  constructor(private httpClient : HttpClient) {
    this.getHooks();
  }

  getHooks() {
    this.httpClient.get("https://posthook-api.mock.beeceptor.com/v1/hooks").subscribe((response:any)=> {
      this.hooks = response.data;
    });
  }

  postData() {
    this.httpClient.post("https://posthook-api.mock.beeceptor.com/v1/hooks", this.data).subscribe((response:any)=> {
      console.log(response);
      this.getHooks();
    });
  }


}
