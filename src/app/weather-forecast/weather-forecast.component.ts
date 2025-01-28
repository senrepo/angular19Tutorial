import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { WeatherForecastService } from './weather-forecast.service';

@Component({
  selector: 'app-weather-forecast',
  imports: [CommonModule],
  templateUrl: './weather-forecast.component.html',
  styleUrl: './weather-forecast.component.css'
})
export class WeatherForecastComponent {
  weatherData: any[] = [];

  constructor(private httpClient: HttpClient, private weatherService: WeatherForecastService) {
    this.loadData();
  }

  loadData() {
    const token = localStorage.getItem('token');

    // this.httpClient.get('https://localhost:7070/api/WeatherForecast', 
    // {
    //   headers: {
    //     'Authorization': `Bearer ${token}`
    //   }
    // }).subscribe({
    //   next: (data: any) => {
    //     this.weatherData = data;
    //   },
    //   error: (error) => {
    //     console.log(error);
    //     alert(error.error);
    //   }
    // });

    //with interceptor adding the auth headers
    // this.httpClient.get('https://localhost:7070/api/WeatherForecast').subscribe({
    //   next: (data: any) => {
    //     this.weatherData = data;
    //   },
    //   error: (error) => {
    //     console.log(error);
    //     alert(error.error);
    //   }
    // });

    //with service class
    this.weatherService.getWeatherForecastData().subscribe({
      next: (data: any) => {
        this.weatherData = data;
      },
      error: (error) => {
        console.log(error);
        alert(error.error);
      }
    });

  }
}
