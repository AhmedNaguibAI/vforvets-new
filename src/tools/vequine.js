import { ViewListIcon } from '@heroicons/react/solid'



const obj = {

	title: "V Equine",
	desc: "Designed to assist veterinary doctors in diagnosing and investigating animal health issues.",
	category: "Regular",
	Icon: ViewListIcon,
	permissions: ['user'],
	fromColor: "green-500",
	toColor: "blue-500",
	to: "/ai/regular/vequine",
	api: "/ai/regular/vequine",
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
				example: "Equine encephalitis",
			},
		],
		example: {
			output: [
				"Equine Encephalitis is a viral infection of the brain that affects horses, and in some cases, other equine species. Here are some detailed points about Equine Encephalitis:\n\n",

					"- Equine Encephalitis is caused by a family of viruses that includes Eastern Equine Encephalitis virus (EEEV), Western Equine Encephalitis virus (WEEV), and Venezuelan Equine Encephalitis virus (VEEV).\n\n",
					"- The virus is transmitted to horses by infected mosquitoes.\n\n",
					"- Horses that are infected with Equine Encephalitis can have a range of symptoms, including fever, lethargy, weakness, lack of coordination, and seizures.\n\n",
					"- In severe cases, the disease can cause neurological damage and death.\n\n",
					"- Prevention of Equine Encephalitis includes vaccination, mosquito control measures, and limiting exposure to mosquitoes, especially during peak mosquito season.\n\n",
					"- Diagnosis of Equine Encephalitis is based on clinical symptoms, blood tests, and sometimes a spinal tap to test for the presence of the virus.\n\n",
					"- Treatment for Equine Encephalitis is mainly supportive care, such as fluids and anti-inflammatory medications, as there is no specific cure for the virus.\n\n",
					"- Horses that survive Equine Encephalitis may have long-term neurological damage and may never fully recover.\n\n",
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

