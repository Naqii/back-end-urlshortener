import express from 'express';
import urlController from '../controllers/url.controller';

const router = express.Router();

router.post('/shorten', urlController.createShortUrl);
router.get('/:customAlias', urlController.redirectOriginalUrl);

export default router;
