import { apiGet } from '../../../lib/fetch';

let fetchController;
const key = 'duQKT0lPxdLMdnMZhQHmLBE6vZPHRZkM';
const searchUrl = '//api.giphy.com/v1/gifs/search';
const trendingUrl = '//api.giphy.com/v1/gifs/trending';

const makeSearchUrl = (baseUrl, query, offset = 0, limit = 25) => {
  const q = query ? `q=${query.replace(/ /g, '+')}` : '';
  const offsetParam = offset ? `&offset=${offset}` : '';
  const url = `${baseUrl}?${q}&limit=${limit}&key=${key}${offsetParam}`;
  return url;
};

export default async function(value, offset) {
  if (fetchController) {
    fetchController.abort();
  }

  let url;
  if (!value) {
    url = makeSearchUrl(trendingUrl, value, offset);
  } else {
    url = makeSearchUrl(searchUrl, value, offset);
  }

  fetchController = new AbortController();
  const { signal } = fetchController;
  const promise = await apiGet({
    url,
    signal,
  })
    .then(res => res)
    .catch(err => {
      switch (err) {
        case 'DOMException':
        default:
          return {};
      }
    });

  return promise;
}
