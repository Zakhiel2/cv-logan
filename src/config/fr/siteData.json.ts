import { type SiteDataProps } from "../types/configDataTypes";

// Update this file with your site specific information
const siteData: SiteDataProps = {
	name: "Logan",
	// Your website's title and description (meta fields)
	title:
		"Logan BOVET - CV & Portfolio",
	description:
		"Viens découvrir mon parcours, mes passions et mes objectifs.",

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
