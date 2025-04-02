import { Response } from 'express';
import { giphyMapper } from './giphy';
import { isAdmin } from '../../middleware/is-admin';
import { RequestContext } from '../../util/request-context.type';
import { Giphy } from '@baseline/types/giphy';
import { getErrorMessage } from '../../util/error-message';
import createApp from '../../util/express-app';
import createAuthenticatedHandler from '../../util/create-authenticated-handler';
import { giphyService, GiphySearchRequest } from './giphy.service';

const app = createApp();
// app.use(isAdmin); // All private endpoints require the user to be an admin
export const handler = createAuthenticatedHandler(app);

app.get('/giphy/search', [
  isAdmin,
  async (req: RequestContext, res: Response) => {
    try {
        
      const {
        query,
        limit = 25,
        offset = 0,
        rating = 'g',
        lang = 'en',
      } = req.query;

      const requestParams = {
        query: query,
        limit: Number(limit),
        offset: Number(offset),
        rating: rating,
        lang: lang,
      } as GiphySearchRequest;

      const giphys = await giphyService.search(requestParams);
      const formattedGiphys = giphys.map(giphyMapper);
      res.json(formattedGiphys);
    } catch (error) {
      const message = getErrorMessage(error);
      console.error(`Failed to get giphys: ${message}`);
      res.status(400).json({
        error: 'Failed to get giphys',
      });
    }
  },
]);

