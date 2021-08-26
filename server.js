const express = require('express');
const path = require('path');

const indexPage = path.join(__dirname, `./out/router.html`);

const app = express();

app.use(express.static('out'));

app.get('*', (req, res) => {
  res.sendFile(indexPage);
});

app.listen(3000, () => {
  console.log('dinner is served at port 3000');
});
