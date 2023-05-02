
const express = require('express');
// const openai = require('../middlewares/openai');
const { Configuration, OpenAIApi } = require("openai");

const configuration = new Configuration({
  organization: "org-vjiNNSG5ipmOPzqwMGKdUnjV",
  // organization: "org-vjiNNSG5ipmOPzqwMGKdUnjV",

  apiKey:"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",
});
const openai = new OpenAIApi(configuration);
const { 
	initMiddleware,
	creditCheck,
	contentFilterCheck,
	sendResponse,
	creditPayment,
	saveToHistory,
}  = require('./middleware');

let app = express.Router()

app.use('/', initMiddleware, creditCheck); 

app.use('/', require('./summarize'));
app.use('/', require('./go'));
app.use('/', require('./vpets'));
app.use('/', require('./code/interpret'));
app.use('/', require('./writing/intro'));
app.use('/', require('./jobad'));
app.use('/', require('./helloworld'));
app.use('/', require('./example'));

app.use('/', contentFilterCheck); 
app.use('/', creditPayment); 
app.use('/', saveToHistory); 

app.use('/', sendResponse); 

module.exports = app