import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IWeatherForecast } from './weather-forecast-model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class WeatherForecastService {

  constructor(private http: HttpClient) { }

  getWeatherForecastData(): Observable<IWeatherForecast[]> {
    return this.http.get<IWeatherForecast[]>(`https://localhost:7070/api/WeatherForecast`);
}

}
