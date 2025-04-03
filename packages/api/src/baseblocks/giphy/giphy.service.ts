import axios from 'axios';
import { Giphy, GiphySearchRequest, GiphySearchResponse } from '@baseline/types/giphy';


class GiphyService {
  private readonly apiKey: string;
  private readonly baseUrl = 'https://api.giphy.com/v1/gifs';

  constructor() {
    this.apiKey = process.env.GIPHY_API_KEY || ""
    if (!this.apiKey) {
      throw new Error('GIPHY_API_KEY is not defined');
    }
  }

  async search({query, limit = 25, offset = 0, rating = 'g', lang = 'en'}: GiphySearchRequest): Promise<Giphy[]> {
    try {
      const response = await axios.get<GiphySearchResponse>(`${this.baseUrl}/search`, {
        params: {
          api_key: this.apiKey,
          q: query,
          limit,
          offset,
          rating,
          lang,
        },
      });
      return response.data.data;
    } catch (error) {
      console.error('Error fetching Giphy data:', error);
      throw new Error('Failed to fetch Giphy search results');
    }
  }
}

export const giphyService = new GiphyService();
