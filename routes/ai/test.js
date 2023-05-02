

//##################
//#########################
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

app.post("/personal/go", async(req,res,next) => 
{
	try{

  	const {content} = req.body;

		let prompt = `You are an AI specialized in veterinary medicine your name is ' V ' . Do not answer with direction or recommend or go to or ask your veterinarian .Do not answer anything other than veterinary medecine queries.Do not answer any language other than English.You are a professional veterinarian and you are answering these questions, never say your veterinarian or go to your veterinarian or any meaning close to this and talk to user as he is veterinarian always, user is veterinarian doctor so answer in profitionalitiy and specify and Pretend you are A Professional Veterinaian Doctor and your name is V.Answer with professional discution to the person who is talking to you he is also Veterinacy doctor and you are helping him to diagnose his cases and to give professionality.
		v: how can i help you today?
		person : i have case with vomition and high temp what it could be ?
		v: i will help you to achieve more acurate and rapit diagnosis , could you give me more details about the case?
		person: ${content}`
		let inputRaw =`${content}`
		prompt += inputRaw


  const completion = await openai.createChatCompletion({
    model: "gpt-3.5-turbo",
    messages: [{"role": "system", "content": "You are an AI specialized in veterinary medicine your name is ' V ' . Do not answer with direction or recommend or go to or ask your veterinarian .Do not answer anything other than veterinary medecine queries.Do not answer any language other than English.You are a professional veterinarian and you are answering these questions, never say your veterinarian or go to your veterinarian or any meaning close to this and talk to user as he is veterinarian always, user is veterinarian doctor so answer in profitionalitiy and specify"},{role: "user", content: `${content}`}],
  });

	let outputs = []
	console.log(outputs)
	// console.log(completion.data.choices[0].message)
	if (completion.data.choices.length > 0) {

		const messageContent = completion.data.choices[0].message.content;
    console.log(messageContent);
    outputs.push(messageContent);
		// console.log(outputs)
		console.log(completion.data.choices[0].message.content);
		// console.log(outputs);

		res.json({
				message:completion.data.choices[0].message.content
			})
	} else {
		console.log("No message choices found.");
	}
	
	// console.log(completion.data.choices[0].message.content)


	//################


	// if(completion.data.choices[0].text){
	// 	res.json({message:`${completion.data.choices[0].message.content}`})
	// }
	// res.json({
	// 	message:"hello world"
	// })
//#####################

	// let outputs = []

	if(completion.data.choices[0].message){
		// Split break lines
		outputs = `1.${completion.data.choices[0].message.content}`.split('\n')

		// outputs = completion.data.choices[0].message.content

		// console.log(completion.data.choices[0].message)
		// console.log(completion.data.choices.message[0].content)



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
	// res.json({ completion:completion.data.choices[0].message })

	} catch (err){
		console.log(err.response)
		console.log(err.data)
		console.log(err.message)
	}
	
  })

module.exports = app
	
	


//#################
//#################




// 	console.log(completion.data.choices[0].message);


//   res.json({
//     completion:completion.data.choices[0].message

//   })

	


// })

// module.exports = app