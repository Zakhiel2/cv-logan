import { type SiteDataProps } from "../types/configDataTypes";

// Update this file with your site specific information
const siteData: SiteDataProps = {
	name: "Logan",
	// Your website's title and description (meta fields)
	title:
		"Logan BOVET - Resume & Portfolio",
	description:
		"Come and discover my background, my passions, and my goals.",

	// Your information for blog post purposes
	author: {
		name: "Logan Bovet",
		email: "logan.bovet@outlook.com",
		twitter: "logan-bovet",
	},

	// default image for meta tags if the page doesn't have an image already
	defaultImage: {
		src: "/images/LB-logo.png",
		alt: "Logan Bovet logo",
	},
};

export default siteData;
