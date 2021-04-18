const asyncRedis = require('async-redis');

export class RedisService {
 private redisClient;

 constructor() {
  //by default connecting to localhost:6379
  this.redisClient = asyncRedis.createClient();
 }

 getFromRedisCache = async (key: string) => {
  try {
   const stringInfo = await this.redisClient.get(key);
   if (stringInfo) {
    return JSON.parse(stringInfo);
   }
  } catch (err) {
   console.error('Failed to read from redis cache ', err);
  }
 };

 setInRedisCache = async (key: string, value: any) => {
  try {
   await this.redisClient.set(key, JSON.stringify(value));
  } catch (err) {
   console.error('Failed to write to redis cache ', err);
  }
 };
}
