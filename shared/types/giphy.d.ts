export interface User {
  avatar_url: string;
  banner_url: string;
  profile_url: string;
  username: string;
  display_name: string;
}

export interface BasicImageFormat {
  url: string;
  width: string;
  height: string;
}

export interface FullImageFormat extends BasicImageFormat {
  size?: string;
  mp4?: string;
  mp4_size?: string;
  webp?: string;
  webp_size?: string;
  frames?: string;
  hash?: string;
}

export interface Images {
  fixed_height?: FullImageFormat;
  fixed_height_still?: BasicImageFormat;
  fixed_height_downsampled?: FullImageFormat;
  fixed_width?: FullImageFormat;
  fixed_width_still?: BasicImageFormat;
  fixed_width_downsampled?: FullImageFormat;
  fixed_height_small?: FullImageFormat;
  fixed_height_small_still?: BasicImageFormat;
  fixed_width_small?: FullImageFormat;
  fixed_width_small_still?: BasicImageFormat;
  downsized?: FullImageFormat;
  downsized_still?: BasicImageFormat;
  downsized_large?: FullImageFormat;
  downsized_medium?: FullImageFormat;
  downsized_small?: {
    mp4: string;
    mp4_size: string;
    width: string;
    height: string;
  };
  original?: FullImageFormat;
  original_still?: BasicImageFormat;
  looping?: { mp4: string };
  preview?: {
    mp4: string;
    mp4_size: string;
    width: string;
    height: string;
  };
  preview_gif?: BasicImageFormat;
}

export interface Giphy {
  type?: string;
  id: string;
  slug: string;
  url: string;
  bitly_url: string;
  embed_url: string;
  username: string;
  source: string;
  rating: string;
  content_url: string;
  user?: User;
  source_tld: string;
  source_post_url: string;
  update_datetime: string;
  create_datetime: string;
  import_datetime: string;
  trending_datetime: string;
  images: Images;
  title: string;
  alt_text: string;
}


export interface GiphySearchRequest {
  query: string;
  limit?: number;
  offset?: number;
  rating?: string;
  lang?: string;
}

export interface GiphySearchResponse {
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