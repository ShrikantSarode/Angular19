import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class WeatherServiceService {
  private API_key = 'c0ae1147bd7d53ff187e2d60dd2479b8';

  constructor(private http:HttpClient) {}

  checkWeather(city: string) {
    const url = `https://api.openweathermap.org/data/2.5/weather?units=metric&q=${city}&appid=${this.API_key}`;

    


  }
}
