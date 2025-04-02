import { Giphy } from '@baseline/types/giphy';

export const giphyMapper = (data: Giphy): Giphy => {
  const giphy: Giphy = {
    type: data?.type ?? 'gif',
    id: data?.id,
    slug: data?.slug,
    url: data?.url,
    bitly_url: data?.bitly_url,
    embed_url: data?.embed_url,
    username: data?.username,
    source: data?.source,
    rating: data?.rating,
    content_url: data?.content_url,
    user: data?.user,
    source_tld: data?.source_tld,
    source_post_url: data?.source_post_url,
    update_datetime: data?.update_datetime,
    create_datetime: data?.create_datetime,
    import_datetime: data?.import_datetime,
    trending_datetime: data?.trending_datetime,
    images: data?.images,
    title: data?.title,
    alt_text: data?.alt_text,
  };
  return giphy;
};


