const bots = [
  'Twitterbot',
  'facebookexternalhit',
  'Slackbot-LinkExpanding'
];

export default (request, response) => {
  const userAgent = request.headers['user-agent'][0].value;
  const isBotAccess = bots.some((bot) => userAgent.includes(bot));
  console.log(request);
  console.log(isBotAccess);
}
