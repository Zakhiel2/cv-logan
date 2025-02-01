/**
 * Global site settings
 */

import { type SiteSettingsProps } from "./types/configDataTypes";

// The below locales need to match what you've put in your `astro.config.mjs` file
export const locales = ["fr", "de", "en"] as const;
export const defaultLocale = "en" as const;

// localeMap is used to map languages to their respective locales - used for formatDate function
export const localeMap = {
  de: "de",
	en: "en-US",
	fr: "fr-FR",
} as const;

// text to show in the language switcher for each locale
export const languageSwitcherMap = {
  de: "Deutsch",
	en: "English",
	fr: "Français",
	// en: "English",
	// fr: "Français",
} as const;

// site settings that don't change between languages
export const siteSettings: SiteSettingsProps = {
	// if dev mode with tailwind v4 I see a lot of stuttering with view transitions. It seems fine when deployed
	useViewTransitions: false,
	useAnimations: true,
};

export default siteSettings;
