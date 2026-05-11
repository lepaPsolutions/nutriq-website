// Source of truth for all pricing data (from Nutriq_Pricing_v4)
// Prices in EUR. Annual is the discounted yearly rate per month.
export type Lang = "el" | "en";

export interface Plan {
  id: string;
  name: { el: string; en: string };
  badge?: { el: string; en: string };
  popular?: boolean;
  monthly: number | null; // EUR/mo (monthly billing)
  annual: number | null;  // EUR/mo (annual billing)
  customPrice?: { el: string; en: string };
  features: { el: string[]; en: string[] };
  cta: "start" | "contact";
}

export const soloCorePlans: Plan[] = [
  {
    id: "solo-core-starter",
    name: { el: "Starter", en: "Starter" },
    monthly: 25,
    annual: 19,
    features: {
      el: [
        "Έως 20 ενεργούς πελάτες",
        "40 AI Credits / μήνα",
        "Αυτόματη παραγωγή διατροφής & templates",
        "Βάση τροφίμων & συνταγών",
        "Step-by-step συνταγές & εβδομαδιαία λίστα supermarket",
        "Mobile app πελάτη",
        "Ανθρωπομετρικά & γραφήματα",
      ],
      en: [
        "Up to 20 active clients",
        "40 AI Credits / month",
        "Automatic meal plan generation & templates",
        "Food & recipe database",
        "Step-by-step recipes & weekly supermarket list",
        "Client mobile app",
        "Anthropometrics & charts",
      ],
    },
    cta: "start",
  },
  {
    id: "solo-core-professional",
    name: { el: "Professional", en: "Professional" },
    popular: true,
    monthly: 39,
    annual: 29,
    features: {
      el: [
        "Έως 50 ενεργούς πελάτες",
        "120 AI Credits / μήνα",
        "Αυτόματη παραγωγή διατροφής",
        "Templates & έτοιμα πλάνα",
        "Ιδιωτικές συνταγές & τρόφιμα",
        "Step-by-step συνταγές & λίστα supermarket",
        "Mobile app πελάτη",
        "Ανθρωπομετρικά & γραφήματα",
        "Export διατροφικών πλάνων",
      ],
      en: [
        "Up to 50 active clients",
        "120 AI Credits / month",
        "Automatic meal plan generation",
        "Templates & ready-made plans",
        "Private recipes & foods",
        "Step-by-step recipes & supermarket list",
        "Client mobile app",
        "Anthropometrics & charts",
        "Meal plan export",
      ],
    },
    cta: "start",
  },
  {
    id: "solo-core-unlimited",
    name: { el: "Unlimited", en: "Unlimited" },
    monthly: 49,
    annual: 39,
    features: {
      el: [
        "Απεριόριστοι ενεργοί πελάτες",
        "300 AI Credits / μήνα",
        "Όλα τα features του Professional",
      ],
      en: [
        "Unlimited active clients",
        "300 AI Credits / month",
        "Everything in Professional",
      ],
    },
    cta: "start",
  },
];

export const soloGrowthPlans: Plan[] = [
  {
    id: "solo-growth-starter",
    name: { el: "Starter Growth", en: "Starter Growth" },
    monthly: 49,
    annual: 39,
    features: {
      el: [
        "Έως 20 πελάτες",
        "80 AI Credits",
        "Προσωπική σελίδα παρουσίασης (nutriq.gr/όνομα)",
        "Link για κοινοποίηση σε νέους πελάτες",
        "Επαγγελματική ψηφιακή εικόνα",
      ],
      en: [
        "Up to 20 clients",
        "80 AI Credits",
        "Personal landing page (nutriq.gr/yourname)",
        "Shareable link for new clients",
        "Professional digital presence",
      ],
    },
    cta: "start",
  },
  {
    id: "solo-growth-professional",
    name: { el: "Professional Growth", en: "Professional Growth" },
    popular: true,
    monthly: 69,
    annual: 59,
    features: {
      el: [
        "Έως 50 πελάτες",
        "200 AI Credits",
        "Όλα τα features του Starter Growth",
        "Branding & εργαλεία ανάπτυξης",
      ],
      en: [
        "Up to 50 clients",
        "200 AI Credits",
        "Everything in Starter Growth",
        "Branding & growth tools",
      ],
    },
    cta: "start",
  },
  {
    id: "solo-growth-unlimited",
    name: { el: "Unlimited Growth", en: "Unlimited Growth" },
    monthly: 99,
    annual: 79,
    features: {
      el: [
        "Απεριόριστοι πελάτες",
        "400 AI Credits",
        "Πλήρες growth suite",
      ],
      en: [
        "Unlimited clients",
        "400 AI Credits",
        "Full growth suite",
      ],
    },
    cta: "start",
  },
];

export const teamPlans: Plan[] = [
  {
    id: "team-small",
    name: { el: "Team Small", en: "Team Small" },
    monthly: 149,
    annual: 119,
    features: {
      el: [
        "Έως 3 επαγγελματίες",
        "300 shared AI Credits",
        "Admin εταιρείας & ρόλοι",
        "Ξεχωριστό πελατολόγιο ανά διαιτολόγο",
        "Κοινά templates & πλάνα",
        "Προτεραιότητα στο support",
      ],
      en: [
        "Up to 3 professionals",
        "300 shared AI Credits",
        "Company admin & roles",
        "Separate caseload per dietitian",
        "Shared templates & plans",
        "Priority support",
      ],
    },
    cta: "start",
  },
  {
    id: "team-growth",
    name: { el: "Team Growth", en: "Team Growth" },
    popular: true,
    monthly: 249,
    annual: 199,
    features: {
      el: [
        "Έως 10 επαγγελματίες",
        "800 shared AI Credits",
        "Πλήρης εταιρική διαχείριση",
        "Κοινή βιβλιοθήκη πλάνων",
        "Analytics & διαχείριση ομάδας",
      ],
      en: [
        "Up to 10 professionals",
        "800 shared AI Credits",
        "Full company management",
        "Shared plan library",
        "Analytics & team management",
      ],
    },
    cta: "start",
  },
  {
    id: "team-pro",
    name: { el: "Team Pro", en: "Team Pro" },
    monthly: 299,
    annual: 299,
    customPrice: { el: "299€+", en: "€299+" },
    features: {
      el: [
        "Απεριόριστοι επαγγελματίες",
        "1500+ AI Credits",
        "Advanced reporting",
        "Priority support",
      ],
      en: [
        "Unlimited professionals",
        "1500+ AI Credits",
        "Advanced reporting",
        "Priority support",
      ],
    },
    cta: "contact",
  },
  {
    id: "enterprise",
    name: { el: "Enterprise", en: "Enterprise" },
    monthly: null,
    annual: null,
    customPrice: { el: "Επικοινωνία", en: "Custom" },
    features: {
      el: [
        "Εξατομικευμένη προσφορά",
        "SLA & integrations",
        "Dedicated account manager",
        "On-premise option (κατόπιν συνεννόησης)",
      ],
      en: [
        "Custom pricing",
        "SLA & integrations",
        "Dedicated account manager",
        "On-premise option (on request)",
      ],
    },
    cta: "contact",
  },
];

export const aiCreditPacks = [
  { credits: 50, price: 10 },
  { credits: 150, price: 25 },
  { credits: 400, price: 60 },
];
