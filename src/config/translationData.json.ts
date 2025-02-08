/**
 * * Configuration of the i18n system data files and text translations
 * Example translations below are for English and French, with textTranslations used in src/layouts/BlogLayoutCenter.astro and src/components/hero/[hero].astro
 */

/**
 * * Data file configuration for the i18n system
 * Every {Data} key must exist in the below object
 */
import testimonialDataDe from "./de/testimonialData.json";
import faqDataDe from "./de/faqData.json";
import navDataDe from "./de/navData.json";
import siteDataDe from "./de/siteData.json";
import siteDataEn from "./en/siteData.json";
import navDataEn from "./en/navData.json";
import faqDataEn from "./en/faqData.json";
import testimonialDataEn from "./en/testimonialData.json";
import siteDataFr from "./fr/siteData.json";
import navDataFr from "./fr/navData.json";
import faqDataFr from "./fr/faqData.json";
import testimonialDataFr from "./fr/testimonialData.json";

export const dataTranslations = {
  de: {
    siteData: siteDataDe,
    navData: navDataDe,
    faqData: faqDataDe,
    testimonialData: testimonialDataDe,
  },
	en: {
		siteData: siteDataEn,
		navData: navDataEn,
		faqData: faqDataEn,
		testimonialData: testimonialDataEn,
	},
	fr: {
		siteData: siteDataFr,
		navData: navDataFr,
		faqData: faqDataFr,
		testimonialData: testimonialDataFr,
	},
} as const;

/**
 * * Text translations are used with the `useTranslation` function from src/js/i18nUtils.ts to translate various strings on your site.
 *
 * ## Examples
 *
 * ```ts
 * import { getLocaleFromUrl } from "@js/localeUtils";
 * import { useTranslations } from "@js/translationUtils";
 * const currLocale = getLocaleFromUrl(Astro.url);
 * const t = useTranslations(currLocale);
 * t("back_to_all_posts"); // this would be "Retour à tous les articles" if the current locale is "fr"
 * ```
 * or
 * ```ts
 * import { useTranslations } from "@js/translationUtils";
 * const t = useTranslations("fr");
 * t("back_to_all_posts"); // this would be "Retour à tous les articles"
 * ```
 */
export const textTranslations = {
  de: {
		hero_text: "Logan BOVET",
		hero_description: `Dynamisch und ergebnisorientiert, habe ich eine nachweisliche Erfolgsbilanz im IT-Projektmanagement und in der Führung von Teams.`,
		back_to_all_posts: "Zurück zu allen Beiträgen",
		updated: "Aktualisiert",
		share_this_article: "Teilen Sie diesen Artikel",
		download_cv: "CV herunterladen",
		view_cv: "CV ansehen",
		link_cv: "/documents/de/CV_BOVET_Logan_DE.pdf",
		contact_me: "Kontaktieren Sie mich",

		references: "Referenzen",
		references_description: "Was meine vorherigen Kollegen sagen zu meiner Arbeit",

		contact_getintouch: "Kontakt",
		contact_connectwithme: "Mit mir verbinden",
		contact_additionalinformation: "Zusätzliche Informationen",
		contact_email: "E-Mail",
		contact_linkedin: "Linkedin",
		contact_location: "Standort",
		contact_location_description: "Bordeaux & Vororte, \n Frankreich",
		contact_mobility: "Mobilität",
		contact_mobility_description: "Wien, Österreich",
		contact_interestedin: "Interessiert an",
		contact_interestedin_description: "- Support-Manager \n - IT-Manager \n - Technischer Support",

		form_name: "Name",
		form_email: "E-Mail",
		form_message: "Nachricht",
		form_send: "Nachricht senden",

		logocloud_title: "Experte in Unternehmens-Technologien",
		logocloud_description: "Erfolg fördern durch die Beherrschung bahnbrechender Innovationen.",

		aboutme_title: "Über mich",
		aboutme_description: "Mit über einem Jahrzehnt Erfahrung in technischem Support, Infrastrukturmanagement und Pre-Sales spezialisiere ich mich auf die Bereitstellung effizienter Supportlösungen, Prozessoptimierung und Teamführung, um einen reibungslosen Service und hohe Kundenzufriedenheit zu gewährleisten.",
		aboutme_1: "Teamführung",
		aboutme_1_description: "Leitung der technischen Support- und Infrastrukturteams, Optimierung der Prozesse für eine reibungslose Servicebereitstellung.",
		aboutme_2: "Technischer Support",
		aboutme_2_description: "Bereitstellung von Experten-Support vor und nach dem Verkauf, Lösung komplexer Probleme und Verbesserung der Kundenerfahrung.",
		aboutme_3: "Infrastruktur",
		aboutme_3_description: "Verwaltung der Netzwerk-Infrastruktur, Sicherstellung von Sicherheit und Stabilität durch proaktive Wartung und Planung.",
		aboutme_4: "Kommunikation",
		aboutme_4_description: "Organisation von wirkungsvollen Schulungen und Vertretung des Unternehmens bei Webinaren und Branchenveranstaltungen.",
	},


	en: {
		hero_text: "Logan BOVET",
		hero_description: `Dynamic and results-driven, I have a proven track record in IT projects management and team leadership.`,
		back_to_all_posts: "Back to all posts",
		updated: "Updated",
		share_this_article: "Share this article",
		download_cv: "Download CV",
		view_cv: "View CV",
		link_cv: "/documents/CV_BOVET_Logan_EN.pdf",
		contact_me: "Contact Me",

		references: "References",
		references_description: "What past colleagues say about working with me",

		contact_getintouch: "Get in Touch",
		contact_connectwithme: "Connect with me",
		contact_additionalinformation: "Additional information",
		contact_email: "Email",
		contact_linkedin: "Linkedin",
		contact_location: "Location",
		contact_location_description: "Bordeaux & suburbs, \n France",
		contact_mobility: "Mobility",
		contact_mobility_description: "Vienna, Austria",
		contact_interestedin: "Interested in",
		contact_interestedin_description: "123 Design Street\nCreative City, DC 12345",

		form_name: "Name",
		form_email: "Email",
		form_message: "Message",
		form_send: "Send Message",

		logocloud_title: "Expert in Industry-Leading Technologies",
		logocloud_description: "Empowering success through mastery of cutting-edge innovations.",

		aboutme_title: "About Me",
		aboutme_description: "With over a decade of experience in technical support, infrastructure management, and pre-sales, I specialize in delivering efficient support solutions, optimizing processes, and leading teams to ensure seamless service and customer satisfaction.",
		aboutme_1: "Team Leadership",
		aboutme_1_description: "Leading technical support and infrastructure teams, optimizing processes to ensure seamless service delivery.",
		aboutme_2: "Technical Support",
		aboutme_2_description: "Providing expert technical support before and after sales, solving complex issues and enhancing customer experience.",
		aboutme_3: "Infrastructure",
		aboutme_3_description: "Managing network infrastructure, ensuring security and stability through proactive maintenance and planning.",
		aboutme_4: "Communication",
		aboutme_4_description: "Organizing impactful training sessions and representing the company through webinars and industry events.",
	},

	
	fr: {
		hero_text: "Logan BOVET",
		hero_description:
			"Dynamique et orienté vers les résultats, j'ai une expérience avérée dans la gestion de projets IT et d'équipes.",
		back_to_all_posts: "Retour à tous les articles",
		updated: "Mis à jour",
		share_this_article: "Partager cet article",
		download_cv: "Télecharger CV",
		view_cv: "Voir CV",
		link_cv: "/documents/fr/CV_BOVET_Logan_FR.pdf",
		contact_me: "Me Contacter",

		references: "Références",
		references_description: "Ce que disent mes anciens collègues",

		contact_getintouch: "Contactez-moi",
		contact_connectwithme: "Se connecter",
		contact_additionalinformation: "Informations additionnelles",
		contact_email: "Email",
		contact_linkedin: "Linkedin",
		contact_location: "Localisation",
		contact_location_description: "Bordeaux & périphérie, \n France",
		contact_mobility: "Mobilité",
		contact_mobility_description: "Vienna, Autriche",
		contact_interestedin: "Intéressé par",
		contact_interestedin_description: "- Support Manager \n - IT Manager \n - Technicien Support",

		form_name: "Nom",
		form_email: "Email",
		form_message: "Message",
		form_send: "Envoyer le message",

		logocloud_title: "Expert dans les technologies d'entreprise",
		logocloud_description: "Favoriser le succès grâce à la maîtrise des innovations.",

		aboutme_title: "A propos",
		aboutme_description: "Fort de plus d'une décennie d'expérience en support technique, gestion d'infrastructure et avant-vente, je me spécialise dans la fourniture de solutions de support efficaces, l'optimisation des processus et la gestion d'équipes pour garantir un service fluide et une satisfaction client optimale.",
		aboutme_1: "Leadership",
		aboutme_1_description: "Diriger les équipes de support technique et d'infrastructure, optimiser les processus pour garantir une prestation de service fluide.",
		aboutme_2: "Support Technique",
		aboutme_2_description: "Fournir un support technique expert avant et après-vente, résoudre des problèmes complexes et améliorer l'expérience client.",
		aboutme_3: "Infrastructure",
		aboutme_3_description: "Gérer l'infrastructure réseau, assurer la sécurité et la stabilité grâce à une maintenance proactive et une planification minutieuse.",
		aboutme_4: "Communication",
		aboutme_4_description: "Organiser des sessions de formation impactantes et représenter l'entreprise lors de webinaires et événements professionnels.",
	},
} as const;

/**
 * * Route translations are used to translate route names for the language switcher component
 * This can be useful for SEO reasons. The key does not matter, it just needs to match between languages
 *
 * ## Examples
 *
 * These routes must be everything after the base domain. So if this is "atlas.com/blog", the route would be "blog"
 * Or if this is "atlas.com/blog/my-post", the route would be "blog/my-post"
 */
export const routeTranslations = {
  de: {
		overviewKey: "apercu",
	},
	en: {
		overviewKey: "overview",
	},
	fr: {
		overviewKey: "apercu",
	},
} as const;
