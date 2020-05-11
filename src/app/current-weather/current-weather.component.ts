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
  }

  ngOnInit(): void {
    this.weatherService.getCurrentWeather("Bothell", "US").subscribe(data => this.current = data);
  }

}
