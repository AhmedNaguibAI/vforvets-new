import { ViewListIcon } from '@heroicons/react/solid'



const obj = {

	title: "V Food Safty",
	desc: "Designed to assist veterinary doctors in diagnosing and investigating animal health issues.",
	category: "Professional",
	Icon: ViewListIcon,
	permissions: ['user'],
	fromColor: "green-500",
	toColor: "blue-500",
	to: "/ai/professional/vfoodsafety",
	api: "/ai/professional/vfoodsafety",
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
				example: "Use of probiotics as preservatives in meat to extend shelf life",
			},
		],
		example: {
			outputs: [
				"The use of probiotics as preservatives in meat to extend shelf life is a relevant topic in the field of food safety. Here are some key points to consider:\n\n",

						"1. Probiotics are live microorganisms that when administered in adequate amounts, confer a health benefit to the host. They are commonly used in functional foods and dietary supplements to promote gut health.\n\n",

						"2. In recent years, researchers have explored the potential of probiotics as natural preservatives in meat. This approach seeks to harness the antimicrobial properties of certain strains of probiotics to inhibit the growth of spoilage and pathogenic bacteria in meat products.\n\n",

						"3. Studies have shown that probiotics can be effective in reducing bacterial contamination in meat, leading to longer shelf life and improved safety. This can be particularly useful in minimizing the risk of foodborne illness associated with meat consumption.\n\n",

						"4. When using probiotics as preservatives in meat, it's important to select the appropriate strains and optimize the conditions for their growth and activity. Factors such as temperature, pH, and oxygen levels can impact the effectiveness of probiotics in inhibiting bacterial growth.\n\n",

						"5. It should be noted, however, that the use of probiotics as preservatives in meat is still a relatively new area of research, and more studies are needed to fully understand its potential benefits and limitations. In addition, regulatory requirements and consumer acceptance may pose challenges to the widespread adoption of this approach in the food industry.\n\n"
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

