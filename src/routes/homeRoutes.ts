import { Router } from 'express';
import { renderHome } from '../controllers/homeController';

const router = Router();

router.get('/', renderHome);
router.get('/home', (req, res) => res.redirect('/'));

export default router;
