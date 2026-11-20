/**
 * SINDHUPATH_CONFIG — Centralized marketing site configuration.
 * Single source of truth for destination URLs, contact channels and brand metadata.
 * (See brief §6 — Redirect & Conversion Behavior Specification.)
 */
export const SINDHUPATH_CONFIG = {
  // Primary destination — opens in same tab for frictionless continuation
  platformUrl: "https://merchant-navy-academy.sindhupath.com/",

  // Canonical marketing domain
  canonicalDomain: "https://www.sindhupath.com",

  // Admissions channels
  admissionsPhone: "+91 96322 97514",
  admissionsWhatsApp:
    "https://wa.me/919632297514?text=Hello%20Sindhupath%20Team,%20I%20would%20like%20to%20learn%20more%20about%20your%20maritime%20preparatory%20programs.",
  admissionsEmail: "Sindhupath@outlook.com",
  admissionsEmailAlt: "admissions@sindhupath.com",

  // Social
  linkedIn: "https://www.linkedin.com/company/sindhupath/about/",
  instagram: "https://www.instagram.com/sindhupath_academy",

  // Brand identity (verified)
  brandName: "SindhuPath Merchant Navy Academy",
  brandWordmark: "SINDHUPATH",
  motto: "Knowledge • Discipline • Destination",
  subhead: "Guided by Active Sailors. Engineered by Innovators.",
  baseCity: "Bengaluru, Karnataka, India",
} as const;

export type SindhupathConfig = typeof SINDHUPATH_CONFIG;
