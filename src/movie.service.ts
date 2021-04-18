import { DataAccess } from './dataAccess.service';
import { config } from '../config';
import { RedisService } from './redis.service';

const { baseUrl, apiKey } = config.movie;

export class MovieService {
 private dataAccess: DataAccess;
 private redisService;

 constructor(redisService: RedisService) {
  this.dataAccess = new DataAccess(baseUrl, apiKey);
  this.redisService = redisService;
 }

 getMovieInfo = async (movieName: string) => {
  const infoFromCache = await this.redisService.getFromRedisCache(movieName);
  if (infoFromCache) {
   return infoFromCache;
  }
  const queryParams = { t: movieName };
  const info = await this.dataAccess.apiRequest(queryParams);
  await this.redisService.setInRedisCache(movieName, info);
  return info;
 };
}
