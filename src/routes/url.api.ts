import express from 'express';
import urlController from '../controllers/url.controller';

const url = express.Router();

url.post('/shorten', urlController.createShortUrl);
url.get('/:customAlias', urlController.redirectOriginalUrl);

export default url;
