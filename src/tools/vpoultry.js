import { ViewListIcon } from '@heroicons/react/solid'



const obj = {

	title: "V Poultry",
	desc: "Designed to assist veterinary doctors in diagnosing and investigating animal health issues.",
	category: "Regular",
	Icon: ViewListIcon,
	permissions: ['user'],
	fromColor: "green-500",
	toColor: "blue-500",
	to: "/ai/regular/vpoultry",
	api: "/ai/regular/vpoultry",
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
				example: "Bloody diarrhea",
			},
		],
		example: {
			output: [
				"Bloody diarrhea in poultry may suggest a number of different diseases or health conditions, including:\n\n",

					"1. Coccidiosis - a parasitic infection caused by Eimeria species that can cause severe bloody diarrhea in poultry.\n\n",

					"2. Salmonella infection - a bacterial infection that can cause bloody diarrhea, fever, and other symptoms in birds.\n\n",

					"3. Necrotic enteritis - a bacterial infection of the intestines that can cause diarrhea, bloody feces, and other digestive symptoms.\n\n",

					"4. Avian influenza - a viral infection that can cause bloody diarrhea in poultry, among other symptoms.\n\n",

					"5. Clostridium perfringens infection - a bacterial infection that can cause bloody diarrhea and other digestive problems in birds.\n\n",

					"6. Mycotoxicosis - a condition caused by exposure to toxins produced by certain fungi that can cause bloody diarrhea in poultry.\n\n",

					"It is important to properly diagnose the underlying cause of bloody diarrhea in poultry in order to provide appropriate treatment and prevent the spread of disease. A veterinarian should be contacted immediately if bloody diarrhea is observed in poultry.\n\n",
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

