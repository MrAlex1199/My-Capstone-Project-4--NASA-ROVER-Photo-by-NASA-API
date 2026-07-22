import { Request, Response, NextFunction } from 'express';

export function errorHandler(
  err: any,
  req: Request,
  res: Response,
  next: NextFunction
) {
  console.error('[Application Error]', err);

  const statusCode = err.status || err.statusCode || 500;
  const message = err.message || 'An unexpected error occurred on Mars Mission Control.';

  res.status(statusCode).render('error.ejs', {
    statusCode,
    message,
    page: 'error',
  });
}

export function notFoundHandler(req: Request, res: Response) {
  res.status(404).render('error.ejs', {
    statusCode: 404,
    message: 'Lost in Space! The requested page or resource could not be found.',
    page: 'error',
  });
}
