import { Injectable } from '@angular/core';
import {ICurrentWeather} from './icurrent-weather';
import { HttpClient } from '@angular/common/http';
import {environment} from '../environments/environment';

interface ICurrentWeatherData {
  weather: [
    {
      main: string,
      description: string,
      icon: string
    }
  ];
  main: {
    temp: number
  };
  dt: number;
  sys: {
    country: string
  };
  name: string
}

@Injectable({
  providedIn: 'root'
})

export class WeatherService {

  constructor(private http: HttpClient) { }
  
  getCurrentWeather(city: string, country: string) {
    const url = `${environment.baseUrl}api.openweathermap.org/data/2.5/weather?q=${city},${country}&appid=${environment.appId}`;
    return this.http.get(url);
  }
}
