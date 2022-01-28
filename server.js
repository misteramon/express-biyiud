const express = require('express');

const app = express();

app.post('/', (req, res) => {
  res.send('Welcome to Biyiud');
});
app.listen(3000, () => console.log('All Systems Checked'));