import { ViewListIcon } from '@heroicons/react/solid'



const obj = {

	title: "V Feline",
	desc: "Designed to assist veterinary doctors in diagnosing and investigating animal health issues.",
	category: "Regular",
	Icon: ViewListIcon,
	permissions: ['user'],
	fromColor: "green-500",
	toColor: "blue-500",
	to: "/ai/regular/vfeline",
	api: "/ai/regular/vfeline",
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
				example: "Ear mites ?",
			},
		],
		example: {
			output: [
				"Ear mites (Otodectes cynotis) in cats can cause a variety of symptoms including:\n\n",

					"1. Itching: Cats with ear mites may shake their heads frequently or scratch at their ears due to intense itching.\n\n",

					"2. Odor: A foul-smelling discharge may be present in the affected ear, caused by a buildup of wax and fluids.\n\n",

					"3. Inflammation: Inflammation of the ear canal and surrounding tissue may occur, leading to redness, swelling, and discomfort.\n\n",

					"4. Hair loss: In some cases, hair loss or scabs may develop in the area around the ear as the result of scratching and grooming.\n\n",

					"5. Ear canal occlusion: Severe infestations of ear mites may lead to the formation of a thick, dark brown crust in the ear canal that can cause partial or complete occlusion.\n\n",

					"Diagnosis of ear mites can be made by examining a sample of ear discharge under a microscope or by visualizing the mites themselves with an otoscope. Treatment usually involves ear cleaning to remove debris, followed by the application of a topical parasiticide to eliminate the mites. Your veterinarian may also prescribe anti-inflammatory medications or antibiotics to alleviate symptoms and prevent secondary infections.",
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

