// backend/src/weather/weather.controller.ts
import { Controller, Get, Query, Param } from '@nestjs/common';
import { WeatherService } from './weather.service';

@Controller('weather')
export class WeatherController {
  constructor(private weatherService: WeatherService) {}

  // GET /weather?city=Chone
  @Get()
  async byCity(@Query('city') city?: string) {
    const target = city || 'Chone,EC';
    return this.weatherService.getByCity(target);
  }

  // GET /weather/coords?lat=...&lon=...
  @Get('coords')
  async byCoords(@Query('lat') lat: string, @Query('lon') lon: string) {
    return this.weatherService.getByCoords(lat, lon);
  }
}
