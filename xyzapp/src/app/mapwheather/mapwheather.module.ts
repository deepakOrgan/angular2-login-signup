import { FormsModule } from '@angular/forms';
import { mapRouting } from './mapWeather.routing';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MapdetailComponent } from './mapdetail/mapdetail.component';
import { AgmCoreModule } from '@agm/core';
import { WeatherComponent } from './weather/weather.component';

@NgModule({
  imports: [
    CommonModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyBdQKusbI0-5J2T2tNQbsNBehZgGnJMzVI',
      libraries: ["places"]
    }),
    FormsModule,
    mapRouting
  ],
  declarations: [
    MapdetailComponent,
    WeatherComponent
  ]
})
export class MapwheatherModule { }
