import dotenv from 'dotenv';

dotenv.config();

export const config = {
  port: parseInt(process.env.PORT || '4000', 10),
  apiKey: process.env.APIKEY || 'DEMO_KEY',
  nasaBaseUrl: 'https://api.nasa.gov/mars-photos/api/v1',
};
