const fetch = require('node-fetch'); 
const apiPoint = 'https://dropinminato.microcms.io/api/v1/';
const bots = [
  'Twitterbot',
  'facebookexternalhit',
  'Slackbot-LinkExpanding'
];

async function fetchNews(id = '') {
  const response = await fetch(`${apiPoint}news/${id}`, {
    method: 'GET',
    mode: 'cors',
    cache: 'no-cache',
    credentials: 'same-origin',
    headers: {
      'Content-Type': 'application/json',
      'X-MICROCMS-API-KEY': `${process.env.VITE_API_KEY}`
    },
  })
  return response.json();
}

export default async function handler(req, res) {
  const newsIdIndex = req.url.match(/news\//).index + 5;
  const newsId = req.url.substr(newsIdIndex)
  const apiData = await fetchNews(newsId)
  console.log(apiData)
  res.writeHead(200, { 'Content-Type': 'text/html'})
  res.write(botHTML(apiData.title, apiData.ogp.url))
  res.end();
  return
}

function botHTML(description, ogImage) {
  return `
  <!DOCTYPE html>
  <html lang="ja">
  <head>
  <meta charset="UTF-8" />
  <link rel="icon" href="/favicon.ico" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <meta property="og:type" content="website" />
  <meta property="og:title" content="Drop in" />
  <meta property="og:description" content="${description}" />
  <meta property="og:site_name" content="Drop in" />
  <meta property="og:image" content="${ogImage}" />
  <meta name="twitter:card" content="summary" />
  <meta name="twitter:site" content="@Dropin88" />
  <meta name="twitter:title" content="Drop in｜${description}" />
  <meta name="twitter:description" content="${description}" />
  <meta name="twitter:image" content="${ogImage}" />
  <title>Drop in</title>
  </head>
  </html>
  `
};
