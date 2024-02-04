const bots = [
  'Twitterbot',
  'facebookexternalhit',
  'Slackbot-LinkExpanding'
];
const apiPoint = 'https://dropinminato.microcms.io/api/v1/';

async function fetchNews(id = '') {
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
}

export default async function handler(req, res) {
  const userAgent = req.headers['user-agent'][0].value;
  const isBotAccess = bots.some((bot) => userAgent.includes(bot));

  if (isBotAccess) {
    const apiData = await fetchNews('k94cidqsz')
    const botHeaders = {
      'content-type': [{
          key: 'Content-Type',
          value: 'text/html; charset=UTF-8',
      }],
    }
    res.writeHead(200, botHeaders);
    res.write(botHTML("test","test", req))
    res.end();
    return;
  }
  res.redirect(req)
}

const botHTML = (description, ogImage, request) => {
  return `
  <!doctype html>
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
  <title>Drop in</title>
  </head>
  <body>
  ${request}
  </body>
  </html>
  `
};
