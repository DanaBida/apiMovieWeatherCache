import { config } from '../config';
import * as bodyParser from 'body-parser';
import express from 'express';
import { WeatherService } from './weather.service';
import { MovieService } from './movie.service';

const router = express.Router();
const app = express();

const { serverPort } = config;

export const startServer = (weatherService: WeatherService, movieService: MovieService) => {
 router.get('/weather/:location', async (req, res) => {
  const location = req.params.location;
  console.log('weather endpoint called with city: ', location);

  const weatherInfo = await weatherService.getWeatherInfo(location);
  res.send(weatherInfo);
 });
 router.get('/movie/:name', async (req, res) => {
  const name = req.params.name;
  console.log('movie endpoint called with name: ', name);

  const movieInfo = await movieService.getMovieInfo(name);
  res.send(movieInfo);
 });

 app.use(bodyParser.json());
 app.use('/', router);

 app.listen(serverPort, () => {
  console.log(`Server Started - listening on port ${serverPort}`);
 });
};
