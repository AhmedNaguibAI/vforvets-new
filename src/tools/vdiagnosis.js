import { ViewListIcon } from '@heroicons/react/solid'



const obj = {

	title: "V Diagnosis",
	desc: "Designed to assist veterinary doctors in diagnosing and investigating animal health issues.",
	category: "Professional",
	Icon: ViewListIcon,
	permissions: ['user'],
	fromColor: "green-500",
	toColor: "blue-500",
	to: "/ai/professional/vdiagnosis",
	api: "/ai/professional/vdiagnosis",
	output: {
		title: "V",
		desc: "The following key points detected",
		Icon: false,
		// color: "blue",
	},
	
	prompts: [{
		title:"Ask V",
		desc: "Dear Veterinarians, please remember to follow the written topic guidelines for achieving the best results.\n\n Kindly write first the disease then the species you would ask about.",
		prompts: [{ 
				title: "Content", 
				attr: "content",  
				value: "", 
				placeholder: " Parvovirus in dog ?", 
				label: "",
				type: "textarea",
				maxLength: 1500,
				min: 3,
				required: true,
				error: "",
				example: "Parvovirus in dog ?",
			},
		],
		example: {
			output: [
				"Canine parvovirus is a viral infection that affects primarily puppies and adolescent dogs. The virus attacks the intestinal lining of the dog and can cause severe damage, leading to dehydration, fever, and even death. There are several methods of diagnosis for canine parvovirus, including fecal and blood tests. Here is a summary of the diagnosis methods and what results are expected:\n\n",

						"1. Fecal Tests: A fecal test is the most commonly used diagnostic method to identify the presence of canine parvovirus. In this test, a small sample of the stool is collected and analyzed for the presence of viral antigens. There are two main types of fecal tests used: ELISA and PCR.\n\n",

						"- ELISA: Enzyme-linked immunosorbent assay (ELISA) is a relatively inexpensive test that is commonly used in veterinary clinics. It detects the virus's presence in the stool through specific antibodies and is sensitive to parvovirus antigens. The result of an ELISA test will be either positive or negative.\n\n",

						"- PCR: Polymerase chain reaction (PCR) is a more sensitive test and can detect the virus's genetic material, making it a more reliable test as compared to ELISA. The test is typically sent to a laboratory and may take a few days to receive results. The results of a PCR test will be either positive or negative.\n\n",

						"2. Blood Tests: Blood tests are less commonly used for diagnosing the presence of parvovirus than fecal tests. However, these tests may be used to provide supportive evidence in combination with fecal tests. The two main blood tests used are:\n\n",

						"- Hematology: A complete blood count (CBC) can help detect white blood cell abnormalities, such as lymphopenia, which is commonly associated with canine parvovirus infection.\n\n",

						"- Serum Biochemistry: A serum biochemistry panel can evaluate electrolyte and kidney function in affected dogs. Dogs with parvovirus often develop electrolyte imbalances and kidney failure.\n\n",

						"In summary, fecal tests are the most reliable and commonly used method of diagnosing canine parvovirus. The ELISA or PCR test provides a result of positive or negative. Blood tests, particularly CBC and serum biochemistry, can provide supportive evidence of infection but are not the primary method of diagnosis."
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
// 	category: "Professional",
// 	Icon: ViewListIcon,
// 	// tags: [],
// 	permissions: ['user'],
	
// 	fromColor: "green-500",
// 	toColor: "blue-500",

// 	to: "/ai/professional/go",
// 	api: "/ai/professional/go",

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

