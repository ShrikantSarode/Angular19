import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-weather-home',
  imports: [CommonModule, FormsModule],
  templateUrl: './weather-home.component.html',
  styleUrl: './weather-home.component.css',
})
export class WeatherHomeComponent {
  cityName: string = '';
  weatherData: any;

  currentDate: string = '';
  loading: boolean = false;
  error: string = '';

  private API_key = 'c0ae1147bd7d53ff187e2d60dd2479b8';

  // private weatherDetails[]:[];

  constructor(private http: HttpClient) {}

  checkWeather(cityName1: string): void {
    if (!cityName1) {
      console.log('Please enter a city name.');

      return;
    }

    const url = `https://api.openweathermap.org/data/2.5/weather?units=metric&q=${cityName1}&appid=${this.API_key}`;

    this.http.get(url).subscribe(
      (data: any) => {
        // console.log(data);

        this.weatherData = data;
        console.log(this.weatherData);

        this.currentDate = new Date().toLocaleDateString();

        document
          .getElementById('weather-info')
          ?.style.setProperty('display', 'block');
        this.loading = false;
      },
      (error) => {
        this.error = 'City not found. Please try again.';
        this.loading = false;
        console.error('Error fetching weather data:', error);
      }
    );
  }
}
