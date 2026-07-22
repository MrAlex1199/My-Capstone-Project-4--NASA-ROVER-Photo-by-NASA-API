import express from 'express';
import path from 'path';
import homeRoutes from './routes/homeRoutes';
import searchRoutes from './routes/searchRoutes';
import pageRoutes from './routes/pageRoutes';
import { errorHandler, notFoundHandler } from './middleware/errorHandler';

const app = express();

// Middleware
app.use(express.static(path.join(process.cwd(), 'public')));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// View engine setup
app.set('views', path.join(process.cwd(), 'views'));
app.set('view engine', 'ejs');

// Routes
app.use('/', homeRoutes);
app.use('/', searchRoutes);
app.use('/', pageRoutes);

// Error Handling
app.use(notFoundHandler);
app.use(errorHandler);

export default app;
