'use strict';

const express = require('express');

// Constants
const PORT = 8100;

// App
const app = express();

app.get('/', getTemplates);

app.get('/templates/', getTemplates);

function getTemplates(req, res) {
  const templates = require('./app.templates.json');
  res.setHeader('Content-Type', 'application/json');
  res.send(JSON.stringify(templates, null, 3));
}

app.listen(PORT);

console.log('Running on http://localhost:' + PORT);