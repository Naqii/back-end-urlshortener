import express from 'express';
import urlController from '../controllers/url.controller';

const url = express.Router();

url.post(
  '/shorten',
  urlController.createShortUrl
  /**
     #swagger.requestBody = {
        required: true,
        schema: {$ref: "#/components/schemas/ShortenUrlRequest"}
     }
     */
);
url.get('/:customAlias', urlController.redirectOriginalUrl);

export default url;
