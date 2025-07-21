import express from 'express';
import urlController from '../controllers/url.controller';

const router = express.Router();

router.post('/shorten', urlController.createShortUrl);

export default router;
