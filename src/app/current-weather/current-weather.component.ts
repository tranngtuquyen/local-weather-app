import { Component, OnInit } from '@angular/core';
import {WeatherService} from '../weather.service';
import {ICurrentWeather} from '../icurrent-weather';

@Component({
  selector: 'app-current-weather',
  templateUrl: './current-weather.component.html',
  styleUrls: ['./current-weather.component.css']
})
export class CurrentWeatherComponent implements OnInit {
  current: ICurrentWeather;

  constructor(private weatherService: WeatherService) { 
    this.current = {
      city: 'Redmond',
      country: 'US',
      date: new Date(),
      image: '',
      temperature: 85,
      description: 'sunny'
    }
  }

  ngOnInit(): void {
  }

}
