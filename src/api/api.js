const apiPoint = 'https://dropinminato.microcms.io/api/v1/';

export default {
  async fetchNewsIndex(category = '', showTop = false) {
    let baseUrl = `${apiPoint}news/?filters=category[contains]${category}&orders=-publishedAt`;
    const url = showTop ? `${baseUrl}&filters=showTop[equals]true` : baseUrl;
    const response = await fetch(url, {
      method: 'GET', // *GET, POST, PUT, DELETE, etc.
      mode: 'cors', // no-cors, *cors, same-origin
      cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
      credentials: 'same-origin', // include, *same-origin, omit
      headers: {
        'Content-Type': 'application/json',
        'X-MICROCMS-API-KEY': `${import.meta.env.VITE_API_KEY}`
      },
    })
    return response.json(); // JSON のレスポンスをネイティブの JavaScript オブジェクトに解釈
  },
  async fetchNews(id = '') {
    const response = await fetch(`${apiPoint}news/${id}`, {
      method: 'GET', // *GET, POST, PUT, DELETE, etc.
      mode: 'cors', // no-cors, *cors, same-origin
      cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
      credentials: 'same-origin', // include, *same-origin, omit
      headers: {
        'Content-Type': 'application/json',
        'X-MICROCMS-API-KEY': `${import.meta.env.VITE_API_KEY}`
      },
    })
    return response.json();
  },
  async postContact(postData) {
    const response = await fetch(`${apiPoint}contact`, {
      method: 'POST', // *GET, POST, PUT, DELETE, etc.
      mode: 'cors', // no-cors, *cors, same-origin
      cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
      credentials: 'same-origin', // include, *same-origin, omit
      headers: {
        'Content-Type': 'application/json',
        'X-MICROCMS-API-KEY': `${import.meta.env.VITE_API_KEY}`
      },
      body: JSON.stringify(postData)
    })
    return response.json();
  }
}
