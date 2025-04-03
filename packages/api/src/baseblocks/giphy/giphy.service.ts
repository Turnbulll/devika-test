import axios from 'axios';
import { Giphy } from '@baseline/types/giphy';

export interface GiphySearchRequest {
  query: string;
  limit?: number;
  offset?: number;
  rating?: string;
  lang?: string;
}

interface GiphySearchResponse {
  data: Giphy[];
  pagination: {
    total_count: number;
    count: number;
    offset: number;
  };
  meta: {
    status: number;
    msg: string;
    response_id: string;
  };
}

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
