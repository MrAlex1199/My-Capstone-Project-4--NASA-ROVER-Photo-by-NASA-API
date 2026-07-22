import { Router } from 'express';
import {
  renderPhotosPage,
  renderArchivesPage,
  renderAboutPage,
  renderContactPage,
  handleContactSubmit,
} from '../controllers/pageController';

const router = Router();

router.get('/photo', renderPhotosPage);
router.get('/camrover', renderArchivesPage);
router.get('/about', renderAboutPage);
router.get('/contact', renderContactPage);
router.post('/contact', handleContactSubmit);

export default router;
