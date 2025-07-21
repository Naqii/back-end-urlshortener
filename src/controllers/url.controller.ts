import { Request, Response } from 'express';
import response from '../utils/response';
import { isValidUrl } from '../utils/validatorUrl';
import UrlModel, { urlDTO } from '../models/url.model';
import { BASE_URL } from '../utils/env';
import { error } from 'console';

export default {
  async createShortUrl(req: Request, res: Response) {
    try {
      const { originalUrl, customAlias } = req.body;

      if (!isValidUrl(originalUrl)) {
        response.error(res, error, 'Invalid Url');
        return;
      }

      const exists = await UrlModel.findOne({ customAlias });

      if (exists) {
        response.error(res, error, 'Alias alredy taken');
        return;
      }

      await urlDTO.validate(req.body);
      const result = await UrlModel.create({
        ...req.body,
        newUrl: `${BASE_URL}/${customAlias}`,
      });
      response.success(res, result, 'Success to create new Url');
    } catch (error) {
      response.error(res, error, 'Failed to create new Url');
    }
  },
  async getOriginalUrl(req: Request, res: Response) {
    try {
      const { originalUrl, customAlias } = req.params;

      const entry = await UrlModel.findOne({ customAlias });
      if (!entry) response.error(res, error, 'Alias not found');
      
      if (typeof originalUrl === 'string') {
        res.redirect(originalUrl);
      };
    } catch (error) {
        response.error(res, error, 'Failed to create new Url');
    }
  },
};
