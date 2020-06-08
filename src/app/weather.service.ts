import { Injectable } from '@angular/core';
import {ICurrentWeather} from './icurrent-weather';
import { HttpClient } from '@angular/common/http';
import {environment} from '../environments/environment';
import { Observable } from 'rxjs';
import {map} from 'rxjs/operators';


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

  getCurrentWeather(search: string|number, country?: string) : Observable<ICurrentWeather> {
    let uriParams = '';
    if (typeof search === "string") {
      uriParams = `q=${search}`;
    } else {
      uriParams = `zip=${search}`;
    }
    if (country) {
      uriParams = `${uriParams},${country}`;
    }
    const url = `${environment.baseUrl}api.openweathermap.org/data/2.5/weather?${uriParams}&appid=${environment.appId}`;
    return this.http.get<ICurrentWeatherData>(url).pipe(map(data => this.transformToICurrentWeather(data)));
  }

  transformToICurrentWeather(data: ICurrentWeatherData):  ICurrentWeather {
    return {
      city: data.name,
      country: data.sys.country,
      date: new Date(data.dt * 1000),
      image: `http://openweathermap.org/img/w/${data.weather[0].icon}.png`,
      temperature: this.convertKelvinToFahrenheit(data.main.temp),
      description: `${data.weather[0].main}. ${data.weather[0].description}`
    }
  }

  convertKelvinToFahrenheit(kelvin: number) : number{
    return kelvin * 9 / 5 - 459.67;
  }
}
