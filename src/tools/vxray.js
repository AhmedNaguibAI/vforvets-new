import { ViewListIcon } from '@heroicons/react/solid'



const obj = {

	title: "V Xray",
	desc: "Designed to assist veterinary doctors in check the abnormalities which may found in suspected disease.",
	category: "Professional",
	Icon: ViewListIcon,
	permissions: ['user'],
	fromColor: "green-500",
	toColor: "blue-500",
	to: "/ai/professional/vxray",
	api: "/ai/professional/vxray",
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
				placeholder: "GDV in dog", 
				label: "",
				type: "textarea",
				maxLength: 1500,
				min: 3,
				required: true,
				error: "",
				example: "GDV in dog",
			},
		],
		example: {
			output: [
				"As an AI specialized in veterinary medicine, I can tell you that Gastric dilatation-volvulus (GDV) in dogs is a condition that can cause several abnormalities in X-rays taken of the affected animal. Here are some of the abnormalities that can appear on an X-ray:",

					"1. Gastric distension: This is an abnormal enlargement of the stomach, and it is the hallmark of GDV. The stomach can be so distended that it occupies most of the abdominal cavity, causing compression of other organs. On an X-ray, the stomach may appear as a gaseous or fluid-filled sac that has a round or oblong shape.",

					"2. Rotation of the stomach: In cases of GDV, the distended stomach can rotate on its axis, causing the esophagus and pylorus to become obstructed. The degree of rotation can vary, with some cases showing only mild to moderate rotation, and others showing a full 360-degree twist. On an X-ray, the stomach may appear twisted or displaced from its normal location.",

					"3. Splenic displacement: In some cases of GDV, the rotation of the stomach can also cause the spleen to become displaced. The spleen may appear elongated and displaced in an X-ray.",

					"4. Abnormal gas patterns: In dogs with GDV, gas can become trapped in the stomach, causing abnormal gas patterns to appear on the X-ray. The gas can also extend into the intestines, causing the intestine to appear dilated.",

					"As for specific colors that may appear on an X-ray in cases of GDV, that would depend on the imaging software being used to display the X-ray. There is no standard color scheme for interpreting X-rays. However, radiopaque and radiolucent areas may appear on an X-ray, depending on the density of the tissue being imaged. The radiopaque areas appear brighter and may appear as shades of white or light gray, while radiolucent areas appear darker and may appear as shades of black or dark gray."
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

