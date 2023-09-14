import { createClient } from '@redis/client';
import logger from './logger';
import config from '../config';

const redisClient = createClient({
  url: config.redis.url
});
redisClient.on('error', (err) => logger.error('Redis Error', err));
redisClient.on('connect', () => logger.info('Redis Connect'));

const connect = async (): Promise<void> => {
  await redisClient.connect();
};

export const RedisClient = {
  connect
};
