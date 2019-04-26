import '../polyfill';

export async function apiGet({ url, signal }) {
  const options = {
    method: 'get',
    signal,
  };

  const response = await fetch(url, options);
  const json = await response.json();
  return json;
}

export async function apiPost(url) {
  fetch(url)
    .then(response => response.json())
    .then(response => {
      return response;
    });
}
