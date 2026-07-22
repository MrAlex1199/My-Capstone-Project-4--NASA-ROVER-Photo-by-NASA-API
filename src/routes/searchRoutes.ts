import { Router } from 'express';
import { handleSearch } from '../controllers/searchController';
import { validateApodDateInput } from '../middleware/validator';

const router = Router();

router.post('/SEARCH', validateApodDateInput, handleSearch);
router.post('/search', validateApodDateInput, handleSearch);
router.get('/search', handleSearch);

export default router;
