import { Giphy } from '@baseline/types/giphy';
import { RequestHandler } from './request-handler';

export const getGiphy = async (requestHandler: RequestHandler, giphyId: string): Promise<Giphy> => {
  const response = await requestHandler.request<Giphy>({
    method: 'GET',
    url: `giphy`,
    hasAuthentication: false,
  });
  if ('data' in response) {
    return response.data;
  }
  throw response;
};


