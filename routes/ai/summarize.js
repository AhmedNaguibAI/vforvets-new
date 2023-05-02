
const express = require('express');
// const openai = require('../middlewares/openai');

let app = express.Router()

const { Configuration, OpenAIApi } = require("openai");

const configuration = new Configuration({
  organization: "org-vjiNNSG5ipmOPzqwMGKdUnjV",
  // organization: "org-vjiNNSG5ipmOPzqwMGKdUnjV",

  apiKey:"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",
});
const openai = new OpenAIApi(configuration);

app.post('/personal/summarize', async (req, res, next) => {
	try {
		let { content } = req.body
  
	let prompt = `List what key points are, in simple language, based from the text:\n###\n` +

	`TEXT: Programmers that don't blog should start right now. You're future self with thank you when your blog helps you getting a better job, earn more money and of course, have an easier time learning new concepts.\n` +
	`KEY POINTS: 1. Programmers should start blogging\n2. Blogging helps you get a better job\n3. You can earn more money by blogging\n4. Learn new concepts easier by blogging about them\n###\n` +

	`TEXT: A tort is an act or omission that gives rise to injury or harm to another and amounts to a civil wrong for which courts impose liability. In the context of torts, 'injury' describes the invasion of any legal right, whereas 'harm' describes a loss or detriment in fact that an individual suffers.\n` +
	`KEY POINTS: 1. Tort are when you hide information that causes harm or injury\n2. Injury in the context of tort can an invasion of legal rights\n3. Harm can be ways in which a person suffers a type of loss.\n###\n`

	let inputRaw = `TEXT: ${content}\nKEY POINTS: 1.`
	prompt += inputRaw

	const gptResponse = await openai.createChatCompletion({
    model: "gpt-3.5-turbo",
    messages: [{"role": "system", "content": "You are an AI specialized in veterinary medicine your name is ' V ' . Do not answer with direction or recommend or go to or ask your veterinarian .Do not answer anything other than veterinary medecine queries.Do not answer any language other than English.You are a professional veterinarian and you are answering these questions, never say your veterinarian or go to your veterinarian or any meaning close to this and talk to user as he is veterinarian always, user is veterinarian doctor so answer in profitionalitiy and specify"},{role: "user", content: `${content}`}],
  });

	let outputs = []
	console.log(gptResponse.data.choices)

	// if(gptResponse.data.choices[0].text){
	if(gptResponse.data.choices[0].text){ //           will change here to message.content
	
		// Split break lines
		outputs = `1.${gptResponse.data.choices[0].message.content}`.split('\n')
		console.log(outputs)

		// remove entries with spaces or empty
		outputs = outputs.filter(function(output) {
			return (!(output === "" || output === " " || output === "\n"))
		})

		// remove numbers and spaces
		for (let i = 0; i < outputs.length; i++) {
			outputs[i] = outputs[i].substring(3)
			outputs[i] = outputs[i].replace(/^\s+|\s+$/g, '')
		}
		// remove duplicates
		outputs = outputs.filter((item, pos, self) => self.indexOf(item) === pos)

		
	}

	req.locals.input = prompt
	req.locals.inputRaw = inputRaw
	req.locals.outputs = outputs

	next()

	} catch (err){
		console.log(err.response)
		console.log(err.data)
		console.log(err.message)
	}
	
  })

module.exports = app