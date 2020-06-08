import { Component } from '@angular/core';
import { WeatherService } from './weather.service';
import { ICurrentWeather } from './icurrent-weather';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'local-weather-app';
  weather: ICurrentWeather;
  constructor(private weatherService: WeatherService){
  }

  doSearch(searchValue) {
    const userInput = searchValue.split(',').map(value => value.trim());
    let search = userInput[0];
    if (parseInt(search)) {
      search = parseInt(search);
    }
    this.weatherService.getCurrentWeather(search, userInput.length > 1 ? userInput[1] : undefined)
      .subscribe(data => this.weather = data);
  }
}
