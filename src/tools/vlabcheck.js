import { ViewListIcon } from '@heroicons/react/solid'



const obj = {

	title: "V Lab Check",
	desc: "Designed to assist veterinary doctors in check the abnormalities which may found in suspected disease.",
	category: "Professional",
	Icon: ViewListIcon,
	permissions: ['user'],
	fromColor: "green-500",
	toColor: "blue-500",
	to: "/ai/professional/vlabcheck",
	api: "/ai/professional/vlabcheck",
	output: {
		title: "V",
		desc: "The following key points detected",
		Icon: false,
		// color: "blue",
	},
	
	prompts: [{
		title:"Ask V",
		desc: "Dear Veterinarians, please remember to follow the written topic guidelines for achieving the best results.\n\n Kindly write the disease first then the species you would ask about.",
		prompts: [{ 
				title: "Content", 
				attr: "content",  
				value: "", 
				placeholder: "Hepatic Lipidosis in Cats ?", 
				label: "",
				type: "textarea",
				maxLength: 1500,
				min: 3,
				required: true,
				error: "",
				example: "Hepatic Lipidosis in Cats ?",
			},
		],
		example: {
			output: [
				"Sure, as a specialized AI in veterinary medicine, I can explain the abnormalities that can appear in various tests in cats suffering from hepatic lipidosis, also known as fatty liver disease. Fatty liver disease occurs when the liver cells accumulate too much fat, which leads to its dysfunction, and can be caused by various factors such as obesity, diabetes, stress, and many others. Here are the details regarding the abnormalities for tests that you have mentioned:\n\n",

						"1. CBC (Complete Blood Count):\n\n", 

						"- Anemia (low red blood cells count)\n",
						"- Leukocytosis (high white blood cells count)\n",
						"- Thrombocytopenia (low platelets count)\n",

						"2. Fecal tests:\n\n",

						"- None specific changes that directly indicate hepatic lipidosis, but may reveal other underlying conditions or infections.\n",

						"3. ELISA (Enzyme-Linked Immunosorbent Assay):\n\n",

						"- Elevated levels of antibodies to feline infectious peritonitis virus (FIPV), which is linked to liver damage and subsequent fatty liver disease in cats.\n",

						"4. Hormones:\n\n",

						"- Elevated levels of insulin, cortisol, and thyroid hormones have been linked to the development of hepatic lipidosis.\n",

						"5. Serology:\n\n",

						"- Increased levels of liver enzymes such as alanine aminotransferase (ALT) and aspartate aminotransferase (AST)\n",
						"- Increased levels of alkaline phosphatase (ALP) and gamma-glutamyl transferase (GGT) enzymes can also be observed, indicating liver dysfunction\n",
						"- Hyperbilirubinemia (increased bilirubin) level\n",

						"6. Serum biochemical analysis:\n\n",

						"- Increased triglyceride and cholesterol levels due to excess accumulation of lipids in the liver\n",
						"- Decreased levels of albumin and glucose\n",
						"- Increased levels of total globulins\n",

						"It should be noted that these abnormalities may not appear in all cats with fatty liver disease, and clinical evaluation along with multiple diagnostic tests is needed to confirm the diagnosis and severity of the condition.",
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

