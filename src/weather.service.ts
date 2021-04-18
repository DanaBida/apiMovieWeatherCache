import { DataAccess } from './dataAccess.service';
import { config } from '../config';
import { RedisService } from './redis.service';

const { baseUrl, apiKey } = config.weather;

export class WeatherService {
 private dataAccess: DataAccess;
 private redisService;

 constructor(redisService: RedisService) {
  this.dataAccess = new DataAccess(baseUrl, apiKey);
  this.redisService = redisService;
 }

 getWeatherInfo = async (location: string) => {
  const infoFromCache = this.redisService.getFromRedisCache(location);
  if (infoFromCache) {
   return infoFromCache;
  }
  const queryParams = { q: location };
  const info = await this.dataAccess.apiRequest(queryParams);
  await this.redisService.setInRedisCache(location, info);
  return info;
 };
}
