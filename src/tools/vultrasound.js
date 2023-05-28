import { ViewListIcon } from '@heroicons/react/solid'



const obj = {

	title: "V Ultrasound",
	desc: "Designed to assist veterinary doctors in check the abnormalities which may found in suspected disease.",
	category: "Professional",
	Icon: ViewListIcon,
	permissions: ['user'],
	fromColor: "green-500",
	toColor: "blue-500",
	to: "/ai/professional/vultrasound",
	api: "/ai/professional/vultrasound",
	output: {
		title: "V",
		desc: "The following key points detected",
		Icon: false,
		// color: "blue",
	},
	
	prompts: [{
		title:"Ask V",
		desc: "Dear Veterinarians, please remember to follow the written topic guidelines for achieving the best results.\n\n The result will show the abnormalities in what you would search about",
		prompts: [{ 
				title: "Content", 
				attr: "content",  
				value: "", 
				placeholder: "Diaphragmatic hernia in dog", 
				label: "",
				type: "textarea",
				maxLength: 1500,
				min: 3,
				required: true,
				error: "",
				example: "Diaphragmatic hernia in dog",
			},
		],
		example: {
			output: [
				"As an AI specialized in veterinary medicine, I can tell you that diaphragmatic hernia in dogs can cause some abnormalities to appear on ultrasound imaging. The color that appears on the ultrasound image is called the 'echogenicity'. In the case of diaphragmatic hernia, the following abnormalities may be observed:\n\n",

						"1. Intestinal loops in the chest cavity: As the herniated organs move into the chest cavity, these loops may be visible by ultrasound and appear echogenic.\n\n",

						"2. Fluid buildup in the chest cavity: This is known as pleural effusion. The fluid buildup appears black on the ultrasound image.\n\n",

						"3. Displacement of the heart and lungs: The herniated organs can push the heart and lungs out of their normal position, which may appear as echogenic on the ultrasound image.\n\n",

						"4. Thickening of the diaphragm: The diaphragm may appear thicker than normal on the ultrasound image.\n\n",

						"Overall, an ultrasound image of a dog with diaphragmatic hernia may show abnormal echogenic areas, displacement of organs, and the presence of fluid in the chest cavity. It is important to note that an ultrasound is just one tool that can be used to diagnose diaphragmatic hernia in dogs, and other diagnostic tests may be necessary to confirm the diagnosis."
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
// 	category: "Personal",
// 	Icon: ViewListIcon,
// 	// tags: [],
// 	permissions: ['user'],
	
// 	fromColor: "green-500",
// 	toColor: "blue-500",

// 	to: "/ai/personal/go",
// 	api: "/ai/personal/go",

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

