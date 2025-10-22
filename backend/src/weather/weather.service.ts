import { Injectable, HttpException, HttpStatus } from '@nestjs/common';
import { HttpService } from '@nestjs/axios';
import { firstValueFrom } from 'rxjs';
import { ConfigService } from '@nestjs/config';
// este servicio se encarga de obtener los datos del clima desde la API de OpenWeather
// esto utilizamos en el componente WeatherWidget en el frontend
@Injectable()
export class WeatherService {
  constructor(
    private http: HttpService,
    private configService: ConfigService,
  ) {}

  async getByCity(city: string) {
    const apiKey = this.configService.get<string>('OPENWEATHER_API_KEY');
    if (!apiKey) {
      throw new HttpException('OpenWeather API key not configured', HttpStatus.INTERNAL_SERVER_ERROR);
    }

    const url = `https://api.openweathermap.org/data/2.5/weather`;
    const params = {
      q: city,
      appid: apiKey,
      units: 'metric',
      lang: 'es',
    };

    try {
      const response$ = this.http.get(url, { params });
      const response = await firstValueFrom(response$);
      return response.data;
    } catch (error: any) {
      throw new HttpException('Error fetching weather', HttpStatus.BAD_GATEWAY);
    }
  }

  async getByCoords(lat: string, lon: string) {
    const apiKey = this.configService.get<string>('OPENWEATHER_API_KEY');
    const url = `https://api.openweathermap.org/data/2.5/weather`;
    const params = { lat, lon, appid: apiKey, units: 'metric', lang: 'es' };
    try {
      const response$ = this.http.get(url, { params });
      const response = await firstValueFrom(response$);
      return response.data;
    } catch {
      throw new HttpException('Error fetching weather', HttpStatus.BAD_GATEWAY);
    }
  }
}
