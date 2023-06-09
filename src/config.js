const dev = {
	baseURL: "https://vforvets-new.onrender.com/api/",
	// baseURL: "http://localhost:3080/api/",
	landingPageUrl: "http://localhost:3080",
	// landingPageUrl: "https://vforvets-new.onrender.com/",
	stripe: {
		free: "price_1JcQD6HIZYvvnKladKayEvOZ",
		entry: "price_1JL68HHIZYvvnKlaBJWS5uDe",
		pro: "price_1JLQhlHIZYvvnKlakrqF8khB"
	},
};
  
const prod = {
	baseURL: 'https://vforvets-new.onrender.com/api/',
	landingPageUrl: "https://app.openaitemplate.com",
	stripe: {
		free: "price_1JcQsUHIZYvvnKlaEPy958NF",
		entry: "price_1JLpWpHIZYvvnKlaHxiCr7Js",
		pro: "price_1JLpWxHIZYvvnKlamATZ7Awm"
	},
};
  
const config = process.env.NODE_ENV === 'development'
	? dev
	: prod;
  
export default config;