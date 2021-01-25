const app = require('express')();

app.get('/api/:version', (req, res) => {
  const { version } = req.params;
  res.end(`version: ${version}`);
});

modules.expoers = app
