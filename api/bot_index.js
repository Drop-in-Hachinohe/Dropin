const bots = [
  'Twitterbot',
  'facebookexternalhit',
  'Slackbot-LinkExpanding'
];

export default function handler(req, res) {
  res.write(
`
<!doctype html>
<html lang="ja">
<head prefix="og: http://ogp.me/ns#">
</head>
<body>bot用</body>
</html>
`
  );
  res.end();
  return
}

