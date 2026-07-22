import { Request, Response, NextFunction } from 'express';
import { fetchApodByDate, fetchApodRange, fetchRandomApods, fetchTodayApod } from '../services/nasaApi';
import { NasaApodItem } from '../types';

export async function handleSearch(req: Request, res: Response, next: NextFunction) {
  const apodDate = req.body.apodDate;
  const startDate = req.body.startDate;
  const endDate = req.body.endDate;
  const isRandom = req.body.mode === 'random' || req.query.mode === 'random';

  try {
    let items: NasaApodItem[] = [];
    let searchTitle = 'Cosmic Discoveries';

    if (isRandom) {
      items = await fetchRandomApods(12);
      searchTitle = '12 Random Astronomy Picture Discoveries';
    } else if (startDate && endDate) {
      items = await fetchApodRange(startDate, endDate);
      searchTitle = `Astronomy Pictures from ${startDate} to ${endDate}`;
    } else if (apodDate) {
      items = await fetchApodByDate(apodDate);
      searchTitle = `Astronomy Picture for Date ${apodDate}`;
    } else {
      items = await fetchRandomApods(12);
      searchTitle = 'Explore Astronomy Pictures of the Day';
    }

    if (!items || items.length === 0) {
      const todayApod = await fetchTodayApod();
      return res.render('index.ejs', {
        todayApod,
        Message: {
          text: 'No APOD entries found for the selected query. Try discovering random cosmic images!',
          type: 'warning',
        },
        page: 'home',
      });
    }

    res.render('photos.ejs', {
      items,
      searchTitle,
      searchDate: apodDate || '',
      page: 'photos',
    });
  } catch (error) {
    next(error);
  }
}
