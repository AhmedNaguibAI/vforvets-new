import { ViewListIcon } from '@heroicons/react/solid'



const obj = {

	title: "V Treatment",
	desc: "Designed to assist veterinary doctors in treatment and investigating animal health issues.",
	category: "Professional",
	Icon: ViewListIcon,
	permissions: ['user'],
	fromColor: "green-500",
	toColor: "blue-500",
	to: "/ai/professional/vtreatment",
	api: "/ai/professional/vtreatment",
	output: {
		title: "V",
		desc: "The following key points detected",
		Icon: false,
		// color: "blue",
	},
	
	prompts: [{
		title:"Ask V",
		desc: "Dear Veterinarians, please remember to follow the written topic guidelines for achieving the best results.\n\n Kindly write the disease first then species you would ask about",
		prompts: [{ 
				title: "Content", 
				attr: "content",  
				value: "", 
				placeholder: "Leptospirosis in dog ?", 
				label: "",
				type: "textarea",
				maxLength: 1500,
				min: 3,
				required: true,
				error: "",
				example: "immune mediated disease in cat ?",
			},
		],
		example: {
			output: [
				"There are various immune-mediated diseases that can occur in cats, and the medication and dosage used to treat these diseases depends on the specific disease and its severity. Here are some of the commonly used medications and their dosages for immune-mediated disease in cats:\n\n",

						"1. Glucocorticoids, such as prednisolone or dexamethasone - These drugs are used to suppress the immune system and reduce inflammation in immune-mediated diseases such as inflammatory bowel disease, asthma, or skin allergies. Dosage is typically based on the cat's weight, with an initial dose of 1-2 mg/kg body weight per day, given orally or by injection. The dosage may be tapered down over several weeks to a maintenance dose.\n\n",

						"2. Immunosuppressive drugs, such as chlorambucil or cyclosporine - These drugs are used to suppress the immune system and treat immune-mediated diseases such as autoimmune hemolytic anemia, immune-mediated thrombocytopenia, or pemphigus. Dosage is typically based on the cat's weight and is adjusted based on response to treatment and side effects.\n\n",

						"3. Antibiotics, such as azithromycin or doxycycline - These drugs are used to treat secondary bacterial infections that may occur with immune-mediated diseases. Dosage is typically based on the cat's weight and the specific bacterial infection being treated.\n\n",

						"4. Antifungal drugs, such as fluconazole or itraconazole - These drugs are used to treat fungal infections that may occur with immune-mediated diseases, such as histoplasmosis or cryptococcosis. Dosage is typically based on the cat's weight and the specific fungal infection being treated.\n\n",

						"5. Interferon therapy - Interferon is a natural protein that helps regulate the immune system, and is sometimes used to treat immune-mediated diseases such as feline leukemia virus or feline infectious peritonitis. Dosage is typically based on the cat's weight and the specific disease being treated.\n\n",

						"It is important to note that these medications can have side effects and should only be used under the guidance of a veterinarian. Dosages may vary based on the specific disease being treated and the individual cat's response to treatment. Regular monitoring and follow-up appointments with a veterinarian are important to ensure that the treatment is effective and to adjust dosages as needed."
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

