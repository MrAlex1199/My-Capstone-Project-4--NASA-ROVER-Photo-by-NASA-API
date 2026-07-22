import { Request, Response, NextFunction } from 'express';
import { fetchTodayApod } from '../services/nasaApi';

export async function renderHome(req: Request, res: Response, next: NextFunction) {
  try {
    const todayApod = await fetchTodayApod();
    res.render('index.ejs', {
      todayApod,
      Message: null,
      page: 'home',
    });
  } catch (error) {
    next(error);
  }
}
