import { Request, Response, NextFunction } from 'express';
import { fetchRandomApods } from '../services/nasaApi';

export async function renderPhotosPage(req: Request, res: Response, next: NextFunction) {
  try {
    const items = await fetchRandomApods(12);
    res.render('photos.ejs', {
      items,
      searchTitle: 'Explore Cosmic Astronomy Gallery',
      searchDate: '',
      page: 'photos',
    });
  } catch (error) {
    next(error);
  }
}

export function renderArchivesPage(req: Request, res: Response) {
  res.render('camrover.ejs', { page: 'camrover' });
}

export function renderAboutPage(req: Request, res: Response) {
  res.render('about.ejs', { page: 'about' });
}

export function renderContactPage(req: Request, res: Response) {
  res.render('contact.ejs', { page: 'contact', submitted: false });
}

export function handleContactSubmit(req: Request, res: Response) {
  res.render('contact.ejs', {
    page: 'contact',
    submitted: true,
    name: req.body.name || 'Explorer',
  });
}
