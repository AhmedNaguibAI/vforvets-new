import { ViewListIcon } from '@heroicons/react/solid'



const obj = {

	title: "V Pets",
	desc: "Designed to assist veterinary doctors in diagnosing and investigating animal health issues.",
	category: "Regular",
	Icon: ViewListIcon,
	permissions: ['user'],
	fromColor: "green-500",
	toColor: "blue-500",
	to: "/ai/regular/vpets",
	api: "/ai/regular/vpets",
	output: {
		title: "V",
		desc: "The following key points detected",
		Icon: false,
		// color: "blue",
	},
	
	prompts: [{
		title:"Ask V",
		desc: "V is helping veterinary professionals to provide better care to their patients.",
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
				example: "Hypothyroidism",
			},
		],
		example: {
			output: [
				"Hypothyroidism is a common hormonal disorder in pets that affects the endocrine system and the thyroid gland. Here are some detailed points on this condition:\n\n",

					"- Hypothyroidism is caused by an underactive thyroid gland that does not produce enough thyroid hormones, such as thyroxine (T4) and triiodothyronine (T3).\n\n",
					"- It can affect dogs, cats, and other pets, but it is more commonly diagnosed in dogs.\n\n",
					"- Some of the most common clinical signs of hypothyroidism in pets include lethargy, weight gain, hair loss, dry skin, ear infections, and cold intolerance.\n\n",
					"- Other symptoms may include muscle weakness, joint pains, anemia, constipation, and behavioral changes such as depression, anxiety, and aggression.\n\n",
					"- Hypothyroidism can be diagnosed using a combination of clinical signs, physical examination, and laboratory tests, such as a serum thyroid hormone profile and a thyroid stimulating hormone (TSH) test.\n\n",
					"- Treatment typically involves daily oral medication with synthetic thyroid hormones such as levothyroxine, which is available in various dosages and formulations for different pet breeds and sizes.\n\n",
					"- With proper management and monitoring, hypothyroidism in pets can be well-controlled, and most pets can lead normal and healthy lives.\n\n",
					"- However, if left untreated, hypothyroidism can lead to serious complications such as reduced quality of life, heart disease, and neurological problems."
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

