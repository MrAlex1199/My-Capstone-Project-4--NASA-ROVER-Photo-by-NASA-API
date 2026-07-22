import { body, validationResult } from 'express-validator';
import { Request, Response, NextFunction } from 'express';
import { fetchTodayApod } from '../services/nasaApi';

export const validateApodDateInput = [
  body('apodDate')
    .optional({ checkFalsy: true })
    .trim()
    .isISO8601()
    .withMessage('Please select a valid date in YYYY-MM-DD format.'),
  async (req: Request, res: Response, next: NextFunction) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      const todayApod = await fetchTodayApod();
      return res.status(400).render('index.ejs', {
        todayApod,
        Message: {
          text: errors.array()[0].msg,
          type: 'error',
        },
        page: 'home',
      });
    }
    next();
  },
];
