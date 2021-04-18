import { MovieService } from './movie.service';
import { WeatherService } from './weather.service';
import { RedisService } from './redis.service';
import { startServer } from './server';

const redisService = new RedisService();
const weatherService = new WeatherService(redisService);
const movieService = new MovieService(redisService);

startServer(weatherService, movieService);
