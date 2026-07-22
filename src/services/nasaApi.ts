import axios from 'axios';
import { config } from '../config';
import { NasaApodItem } from '../types';

/**
 * Curated high-resolution fallback APOD items
 * Guarantees crisp image rendering even if NASA rate-limit is exceeded
 */
const FALLBACK_APODS: NasaApodItem[] = [
  {
    date: '2025-04-21',
    title: 'Galaxy Lenses Galaxy from Webb',
    explanation: 'Here, the central light-colored elliptical galaxy is much closer than the blue and red-colored spiral galaxy that surrounds it. This happens when near and far galaxies are aligned, creating a complete Einstein ring captured by Webb Space Telescope.',
    url: 'https://apod.nasa.gov/apod/image/2504/GalaxiesLens_Webb_960.jpg',
    hdurl: 'https://apod.nasa.gov/apod/image/2504/GalaxiesLens_Webb_1146.jpg',
    media_type: 'image',
    copyright: 'NASA, ESA, CSA, STScI',
  },
  {
    date: '2024-02-14',
    title: 'The Rosette Nebula in Hydrogen and Oxygen',
    explanation: 'The Rosette Nebula (NGC 2237) is not the only cosmic cloud of gas and dust to evoke the imagery of flowers, but it is the most famous. At the edge of a large molecular cloud in Monoceros, the petals of this cosmic rose are a star-forming nursery.',
    url: 'https://apod.nasa.gov/apod/image/2402/Rosette_Hubble_960.jpg',
    hdurl: 'https://apod.nasa.gov/apod/image/2402/Rosette_Hubble_2048.jpg',
    media_type: 'image',
    copyright: 'NASA, ESA, Hubble',
  },
  {
    date: '2023-08-15',
    title: 'In the Heart of the Tarantula Nebula',
    explanation: 'In the heart of monstrous Tarantula Nebula lies huge bubbles of energetic gas, long filaments of dark dust, and unusually massive stars. Located in the Large Magellanic Cloud 160,000 light-years away.',
    url: 'https://apod.nasa.gov/apod/image/1805/Tarantula_HubbleLacrue_960.jpg',
    hdurl: 'https://apod.nasa.gov/apod/image/1805/Tarantula_HubbleLacrue_3204.jpg',
    media_type: 'image',
    copyright: 'NASA, ESA, STScI',
  },
  {
    date: '2023-05-12',
    title: 'Pillars of Creation from James Webb',
    explanation: 'A lush, highly detailed landscape — the iconic Pillars of Creation — where new stars are forming within dense clouds of gas and dust. The three-dimensional pillars look like majestic rock formations.',
    url: 'https://images-assets.nasa.gov/image/PIA25432/PIA25432~medium.jpg',
    hdurl: 'https://images-assets.nasa.gov/image/PIA25432/PIA25432~orig.jpg',
    media_type: 'image',
    copyright: 'NASA, ESA, CSA, STScI',
  },
  {
    date: '2023-01-05',
    title: 'The Carina Nebula in Infrared',
    explanation: 'This landscape of "mountains" and "valleys" speckled with glittering stars is actually the edge of a nearby, young, star-forming region called NGC 3324 in the Carina Nebula.',
    url: 'https://images-assets.nasa.gov/image/PIA25435/PIA25435~medium.jpg',
    hdurl: 'https://images-assets.nasa.gov/image/PIA25435/PIA25435~orig.jpg',
    media_type: 'image',
    copyright: 'NASA, ESA, CSA, STScI',
  },
  {
    date: '2022-11-20',
    title: 'Jupiter from Webb Space Telescope',
    explanation: 'Giant storms, powerful winds, auroras, and faint ring systems surround Jupiter in wide-field infrared images captured by the James Webb Space Telescope.',
    url: 'https://images-assets.nasa.gov/image/PIA25438/PIA25438~medium.jpg',
    hdurl: 'https://images-assets.nasa.gov/image/PIA25438/PIA25438~orig.jpg',
    media_type: 'image',
    copyright: 'NASA, ESA, CSA',
  },
];

const APOD_BASE_URL = 'https://api.nasa.gov/planetary/apod';

/**
 * Fetch Today's APOD Picture
 */
export async function fetchTodayApod(): Promise<NasaApodItem> {
  try {
    const response = await axios.get<NasaApodItem>(APOD_BASE_URL, {
      params: { api_key: config.apiKey },
      timeout: 5000,
    });
    return response.data;
  } catch (error: any) {
    console.warn(`[APOD Notice] Failed to fetch today's APOD (${error?.message}). Using fallback featured item.`);
    return FALLBACK_APODS[0];
  }
}

/**
 * Fetch APOD by Specific Date (YYYY-MM-DD)
 */
export async function fetchApodByDate(date: string): Promise<NasaApodItem[]> {
  try {
    const response = await axios.get<NasaApodItem>(APOD_BASE_URL, {
      params: { date, api_key: config.apiKey },
      timeout: 5000,
    });
    return [response.data];
  } catch (error: any) {
    console.warn(`[APOD Notice] Date search error (${error?.message}). Checking fallback dataset.`);
    const matched = FALLBACK_APODS.filter((item) => item.date === date);
    return matched.length > 0 ? matched : [FALLBACK_APODS[0]];
  }
}

/**
 * Fetch APOD items by Date Range
 */
export async function fetchApodRange(startDate: string, endDate: string): Promise<NasaApodItem[]> {
  try {
    const response = await axios.get<NasaApodItem[]>(APOD_BASE_URL, {
      params: { start_date: startDate, end_date: endDate, api_key: config.apiKey },
      timeout: 6000,
    });
    return Array.isArray(response.data) ? response.data : [response.data];
  } catch (error: any) {
    console.warn(`[APOD Notice] Date range search error (${error?.message}).`);
    return FALLBACK_APODS;
  }
}

/**
 * Fetch Random APOD discoveries
 */
export async function fetchRandomApods(count: number = 12): Promise<NasaApodItem[]> {
  try {
    const response = await axios.get<NasaApodItem[]>(APOD_BASE_URL, {
      params: { count, api_key: config.apiKey },
      timeout: 6000,
    });
    return Array.isArray(response.data) ? response.data : [response.data];
  } catch (error: any) {
    console.warn(`[APOD Notice] Random APOD error (${error?.message}). Using fallback random selection.`);
    return FALLBACK_APODS;
  }
}
