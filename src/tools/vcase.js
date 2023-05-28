import { ViewListIcon } from '@heroicons/react/solid'



const obj = {

	title: "V Case",
	desc: "Designed to assist veterinary doctors in diagnosing and investigating cases issues.",
	category: "Professional",
	Icon: ViewListIcon,
	permissions: ['user'],
	fromColor: "green-500",
	toColor: "blue-500",
	to: "/ai/professional/vcase",
	api: "/ai/professional/vcase",
	output: {
		title: "V",
		desc: "The following key points detected",
		Icon: false,
		// color: "blue",
	},
	
	prompts: [{
		title:"Ask V",
		desc: "Dear Veterinarians, please remember to follow the written topic guidelines for achieving the best results.\n\n Kindly write the species first then mention the symptoms.",
		prompts: [{ 
				title: "Content", 
				attr: "content",  
				value: "", 
				placeholder: "Dog with vomition, ....", 
				label: "",
				type: "textarea",
				maxLength: 1500,
				min: 3,
				required: true,
				error: "",
				example: "A 2-year-old male neutered American domestic shorthair cat is brought to the clinic by his owner for further evaluation. The cat has been lethargic and anorectic on and off for approximately 6 weeks. Treatment with an oral NSAID and antibiotic resulted in improvement until 2 weeks ago. The owner tells you that now the cat's appetite has decreased and there is visible weight loss with a distended abdomen. The referring DVM's lab work from the initial visit 6 weeks ago showed increased serum globulins.",
			},
		],
		example: {
			output: [
				"Based on the presented symptoms, possible differential diagnoses for the 2-year-old male neutered American domestic shorthair cat may include:\n\n",

					"1. Feline Infectious Peritonitis (FIP): This virus primarily affects the abdomen and causes a distended abdomen, weight loss, and lethargy. Diagnosis can be challenging and often requires a combination of clinical signs, lab work (e.g., blood tests, fecal tests), imaging (e.g., ultrasound), and potentially a biopsy of affected tissues.\n\n",

					"2. Gastrointestinal lymphoma: This type of cancer often causes weight loss, lethargy, and a distended abdomen. Diagnosis can involve blood and fecal tests, imaging (e.g., x-rays, ultrasound), and potentially a biopsy of affected tissues.\n\n",

					"3. Hepatic lipidosis: This liver disease can result in anorexia, weight loss, and lethargy, and may also cause a distended abdomen. Diagnosis typically involves blood tests, imaging (e.g., ultrasound), and a liver biopsy.\n\n",

					"4. Chronic kidney disease: This condition can cause lethargy and anorexia over time as kidney function declines. Diagnosis often involves blood and urine tests, as well as imaging such as an ultrasound.\n\n",

					"To differentiate between these conditions, specific blood and fecal tests, and imaging such as an abdominal ultrasound would need to be performed. For FIP, antibody tests and PCR (polymerase chain reaction) tests of the virus in the blood or abdominal fluid may be performed. For gastrointestinal lymphoma, a biopsy of affected tissues such as the intestines may be necessary. For hepatic lipidosis, biopsy of the liver may be required. For chronic kidney disease, blood and urine tests measuring kidney function, such as creatinine level and urine protein, may be useful. The results of these tests can help guide the diagnosis and subsequent treatment plan."
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

