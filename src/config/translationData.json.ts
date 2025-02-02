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
		view_cv: "View CV",
		link_cv: "/documents/de/CV_BOVET_Logan_DE.pdf",
		contact_me: "Kontaktieren Sie mich",

		references: "Referenzen",
		references_description: "Was meine vorherigen Kollegen sagen zu meiner Arbeit",
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
		overviewKey: "overview",
	},
	en: {
		overviewKey: "overview",
	},
	fr: {
		overviewKey: "apercu",
	},
} as const;
