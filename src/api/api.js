const apiPoint = 'https://dropinminato.microcms.io/api/v1/';

export default {
  async fetchNewsIndex(category = '', showTop = false) {
    
    let url = `${apiPoint}news`;

    if(category !== '' && showTop){
      url = `${url}?filters=category[contains]${category}[and]showTop[equals]true&orders=-publishedAt`
    } else if (category !== '') {
      url = `${url}?filters=category[contains]${category}&orders=-publishedAt`;
    } else if (showTop) {
      url = `${url}?filters=showTop[equals]true&orders=-publishedAt`;
    } else {
      url = `${url}?orders=-publishedAt`
    }
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
