const express = require('express');
const por = process.env.port || 3000;
const app = express();
app.get('/',(req,res) => {
  res.send('Hello world');});
  app.listen(port);
