import { ViewListIcon } from '@heroicons/react/solid'



const obj = {

	title: "V Canine",
	desc: "Designed to assist veterinary doctors in diagnosing and investigating animal health issues.",
	category: "Regular",
	Icon: ViewListIcon,
	permissions: ['user'],
	fromColor: "green-500",
	toColor: "blue-500",
	to: "/ai/regular/vcanine",
	api: "/ai/regular/vcanine",
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
				example: "CDV ?"
			},
		],
		example: {
			output: [
				"Canine Distemper Virus (CDV) is a highly contagious and serious viral disease that affects dogs. Following are the symptoms of CDV\n\n",

					"1. Fever - A high fever above 103F is a very common early sign of CDV.\n\n",

					"2. Nasal and Eye Discharge - The dog will have thick discharge from the nose, eyes, and mouth. The discharge may appear cloudy and thick at first, but then can develop into a more watery discharge later on.\n\n",

					"3. Coughing and Sneezing - Dogs with CDV may show signs of coughing and sneezing.\n\n",

					"4. Loss of Appetite - Dogs may lose their interest in eating.\n\n",

					"5. Vomiting and Diarrhea - Dogs may suffer from vomiting and diarrhea, which can lead to dehydration. \n\n",

					"6. Neurological Symptoms - As the virus progresses, it can lead to neurological symptoms like seizures, paralysis of the limbs, and muscle twitching.\n\n",
					"7. Pneumonia- Secondary bacterial infections and pneumonia are common in dogs with CDV.\n\n",

					
					"CDV is a serious condition, and it's essential to seek veterinary care immediately if you suspect your dog may have CDV. Proper vaccination and isolation practices are the keys to preventing the spread of CDV.",
				
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

