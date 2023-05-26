import { ViewListIcon } from '@heroicons/react/solid'



const obj = {

	title: "V Ruminant",
	desc: "Designed to assist veterinary doctors in diagnosing and investigating animal health issues.",
	category: "Regular",
	Icon: ViewListIcon,
	permissions: ['user'],
	fromColor: "green-500",
	toColor: "blue-500",
	to: "/ai/regular/vruminant",
	api: "/ai/regular/vruminant",
	output: {
		title: "V",
		desc: "The following key points detected",
		Icon: false,
		// color: "blue",
	},
	
	prompts: [{
		title:"Ask V",
		desc: "Dear Veterinarians, please remember to follow the written topic guidelines for achieving the best results.",
		prompts: [{ 
				title: "Content", 
				attr: "content",  
				value: "", 
				placeholder: "Mention the symptoms of ....", 
				label: "",
				type: "textarea",
				maxLength: 1500,
				min: 3,
				required: true,
				error: "",
				example: "Brucellosis",
			},
		],
		example: {
			output: [
				"Certainly, brucellosis is an infectious disease caused by the bacteria of the genus Brucella. It is a zoonotic disease, which means it can be transmitted from animals to humans and vice versa. Here are the key points about brucellosis:\n\n",

					"- Ruminants like cattle, sheep, goats, and camels are the main reservoirs for the bacteria, and the disease is commonly known as 'contagious abortion' in these species because one of the clinical signs is abortion in pregnant females.\n\n",

					"- Other symptoms include fever, weakness, weight loss, joint pain, and decreased milk production.\n\n",

					"- The bacteria can be shed in the milk, urine, placenta, and reproductive fluids of infected animals, and can survive in the environment for several months.\n\n",

					"- Humans can contract brucellosis by ingesting or inhaling the bacteria, or through contact with contaminated animal products or tissues (e.g. raw milk, unpasteurized cheese, blood, or bone marrow).\n\n",

					"- In people, the symptoms of brucellosis are similar to flu-like illness, and can last for weeks or months. The disease can also cause serious complications if left untreated, especially in immunocompromised individuals.\n\n",

					"- Diagnosis of brucellosis involves serological tests (e.g. Rose Bengal test, Complement Fixation test, ELISA) and bacterial culture of blood, bone marrow or other clinical samples.\n\n",

					"- The treatment of choice for both animals and humans is antibiotics for several weeks, usually a combination of two or more medications, depending on the severity and duration of the disease.\n\n",

					"- Control measures for brucellosis include vaccination of animals (e.g. with Brucella abortus strain 19 or RB51), culling of infected animals, and proper hygiene practices to minimize human exposure to the bacteria.\n\n",
			],
			color: "blue",
		}
	}]
}

export default obj



//##################
//########################

// import {
// 	ViewListIcon,
// } from '@heroicons/react/solid'


// const obj = {

// 	title: "GO Points",
// 	desc: "Analyze your text or documents and convey the important concepts in bullet form.",
// 	category: "Regular",
// 	Icon: ViewListIcon,
// 	// tags: [],
// 	permissions: ['user'],
	
// 	fromColor: "green-500",
// 	toColor: "blue-500",

// 	to: "/ai/regular/go",
// 	api: "/ai/regular/go",

// 	output: {
// 		title: "GO Points",
// 		desc: "The following key points detected",
// 		Icon: false,
// 		color: "blue",
// 	},

// 	prompts: [{
// 		title:"Entry Text",
// 		desc: "A sentence or paragraph you wish to understand in bullet point form.",
// 		// n: 1,
// 		prompts: [{ 
// 				title: "Content", 
// 				attr: "content",  
// 				value: "", 
// 				placeholder: "When doing an your taxes, it's important to...", 
// 				label: "",
// 				type: "textarea",
// 				maxLength: 600,
// 				// max: 100,
// 				min: 3,
// 				required: true,
// 				error: "",
// 				example: "The Sun is over 4.5 billion years old and has a temperature of around 10,000 degrees Fahrenheit. The Sun's light reaches the Earth in eight minutes. Coronal mass ejections are gases on the Sun's surface erupt, shooting far out into space.",
// 			},
// 		],
// 		example: {
// 			// output: "",
// 			outputs: [
// 				"The sun is very old, over 4.5 billion years",
// 				"At 10,000 degrees, sun is also very hot",
// 				"Gasses called coronal mass ejections erupt from the sun",
// 			],
// 			// Icon: RefreshIcon,
// 			color: "blue",
// 		}
// 	}]
		
// }

// export default obj

