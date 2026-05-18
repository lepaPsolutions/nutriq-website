export const languages = {
  el: "Ελληνικά",
  en: "English",
} as const;

export const defaultLang = "el" as const;
export type Lang = keyof typeof languages;

export const ui = {
  el: {
    // Navigation
    "nav.features": "Δυνατότητες",
    "nav.pricing": "Τιμές",
    "nav.about": "Σχετικά",
    "nav.blog": "Blog",
    "nav.contact": "Επικοινωνία",
    "nav.login": "Σύνδεση",
    "nav.start": "Ξεκίνα δωρεάν",

    // About section (home)
    "about.eyebrow": "Σχετικά",
    "about.title": "Μια ομάδα μηχανικών. Μια ομάδα διαιτολόγων. Μία αποστολή.",
    "about.subtitle": "Η Nutriq γεννήθηκε το 2026 από τη συνεργασία software developers και διαιτολόγων. Όχι ως αφηρημένη ιδέα — ως απάντηση σε συγκεκριμένα προβλήματα που είδαμε στη διατροφική πρακτική.",
    "about.story-1": "Οι διαιτολόγοι ξόδευαν 30+ ώρες την εβδομάδα σε χειροκίνητα meal plans. Έχαναν πελάτες λόγω αργής επικοινωνίας. Έβλεπαν τα δεδομένα τους σπασμένα ανάμεσα σε Excel, post-it, και τυπωμένα PDFs.",
    "about.story-2": "Οι μηχανικοί είδαν ένα πρόβλημα που λυνόταν με το σωστό software. Οι διαιτολόγοι μας έδωσαν τις απαντήσεις. Φτιάξαμε τη Nutriq μαζί — όχι από μηδέν με υποθέσεις, αλλά από πραγματικές ανάγκες ανθρώπων που βλέπουν 50 πελάτες την εβδομάδα.",
    "about.values-eye": "Σε τι πιστεύουμε",
    "about.v1.t": "Επιστημονική ακρίβεια",
    "about.v1.b": "Όλα τα δεδομένα μας ευθυγραμμίζονται με EFSA & USDA. Καμιά \"σχεδόν σωστή\" τιμή.",
    "about.v2.t": "Privacy first",
    "about.v2.b": "EU hosting, GDPR-native, encryption everywhere. Τα δεδομένα δε φεύγουν ποτέ από EU servers.",
    "about.v3.t": "Δουλεμένο, όχι hyped",
    "about.v3.b": "Δε φτιάχνουμε features που δεν θα χρησιμοποιηθούν. Κάθε button έχει σκοπό.",
    "about.v4.t": "Σεβασμός στον επαγγελματία",
    "about.v4.b": "Δεν αντικαθιστούμε τον διαιτολόγο. Τον υποστηρίζουμε. Η κρίση είναι δική του.",
    "about.cta": "Μάθε περισσότερα για εμάς",

    // Hero (Home)
    "hero.eyebrow": "Λογισμικό διατροφής για σοβαρή πρακτική",
    "hero.title-1": "Πλάνα διατροφής που γράφονται",
    "hero.title-2": "μόνα τους.",
    "hero.title-3": "Εσύ κρατάς την κρίση.",
    "hero.subtitle":
      "Η Nutriq είναι το πλήρες εργαλείο για διαιτολόγους — από την πρώτη ανθρωπομέτρηση μέχρι το τελευταίο supermarket list. Με AI που μαθαίνει τις προτιμήσεις του πελάτη και αφήνει εσένα να κάνεις τη δουλειά που μετράει.",
    "hero.cta-primary": "Δοκίμασε δωρεάν για 14 μέρες",
    "hero.cta-secondary": "Δες πώς λειτουργεί",
    "hero.note": "Χωρίς κάρτα. Ακυρώνεις όποτε θες.",

    // Trust
    "trust.title": "Έχει επιλεγεί από διαιτολόγους σε όλη την Ελλάδα",

    // Problem
    "problem.eyebrow": "Το πρόβλημα",
    "problem.title": "Excel, post-it, τυπωμένα PDFs.",
    "problem.subtitle":
      "Η δουλειά του διαιτολόγου δε χωράει σε φύλλα Excel. Κάθε πελάτης έχει ξεχωριστές συνθήκες, στόχους, εργαστηριακά, προτιμήσεις. Όταν πρέπει να τα συντονίσεις όλα χειροκίνητα, η ώρα που μένει για τον ίδιο τον πελάτη συρρικνώνεται.",
    "problem.stat-1-num": "30+ ώρες",
    "problem.stat-1-label": "ανά εβδομάδα σε χειροκίνητο meal planning",
    "problem.stat-2-num": "~40%",
    "problem.stat-2-label": "των διαιτολόγων χάνει πελάτες λόγω αργής επικοινωνίας",
    "problem.stat-3-num": "13",
    "problem.stat-3-label": "διαφορετικά διαιτητικά πρότυπα να καλύψεις",

    // Features overview
    "features.eyebrow": "Η πλατφόρμα",
    "features.title": "Όλα όσα χρειάζεσαι, σε μια αναπνοή.",
    "features.subtitle":
      "Από τη δημιουργία πλάνου μέχρι την παρακολούθηση προόδου, η Nutriq είναι σχεδιασμένη να σου επιστρέφει χρόνο — όχι να σου προσθέτει εργασία.",
    "features.ai-gen.title": "AI Παραγωγή Πλάνων",
    "features.ai-gen.desc":
      "Δώσε στόχους θερμίδων, μακροθρεπτικά και χρόνο μαγειρέματος. Πάρε ένα έτοιμο πλάνο σε δευτερόλεπτα — που εσύ ελέγχεις, εγκρίνεις, στέλνεις.",
    "features.client-portal.title": "Πύλη Πελάτη",
    "features.client-portal.desc":
      "Οι πελάτες σου συνδέονται και βλέπουν το πλάνο τους, τις συνταγές, τη λίστα supermarket, την πρόοδό τους — από κινητό ή υπολογιστή.",
    "features.nutrition.title": "Πλήρης Διατροφική Ανάλυση",
    "features.nutrition.desc":
      "Macros + micros (βιταμίνες A-K, μέταλλα), ανθρωπομετρικά, σύσταση σώματος, βιοχημικές εξετάσεις — όλα σε ένα προφίλ πελάτη.",
    "features.food-db.title": "Βάση Τροφίμων & Συνταγών",
    "features.food-db.desc":
      "Χιλιάδες τρόφιμα έτοιμα, υποστήριξη για 13 διατροφικά πρότυπα (Μεσογειακή, Keto, Vegan, Gluten-Free και άλλα).",
    "features.grocery.title": "Αυτόματη Λίστα Supermarket",
    "features.grocery.desc":
      "Κάθε εβδομαδιαίο πλάνο παράγει μια έξυπνη λίστα ψώνια — αθροισμένα, κατηγοριοποιημένα, έτοιμα για checkoff.",
    "features.team.title": "Διαχείριση Ομάδας",
    "features.team.desc":
      "Ένα κέντρο, πολλοί διαιτολόγοι. Διαχωρισμός πελατολογίου, κοινά templates, στατιστικά απόδοσης.",
    "features.cta": "Δες όλες τις δυνατότητες",

    // How it works
    "how.eyebrow": "Πώς λειτουργεί",
    "how.title": "Από την πρώτη επίσκεψη στην πρώτη συνταγή — σε λεπτά.",
    "how.step-1.num": "01",
    "how.step-1.title": "Καταχώρηση πελάτη",
    "how.step-1.desc":
      "Δημιουργείς προφίλ με ανθρωπομετρικά, ιατρικό ιστορικό, διατροφικές προτιμήσεις και αλλεργίες. Όλα τα δεδομένα σε ένα μέρος.",
    "how.step-2.num": "02",
    "how.step-2.title": "Δημιουργία πλάνου",
    "how.step-2.desc":
      "Χρησιμοποίησε template, χτίσε από την αρχή, ή άσε την AI να παράξει για σένα. Πάντα έχεις το τελευταίο edit.",
    "how.step-3.num": "03",
    "how.step-3.title": "Παρακολούθηση προόδου",
    "how.step-3.desc":
      "Ο πελάτης βλέπει το πλάνο στο κινητό, καταγράφει μετρήσεις. Εσύ βλέπεις γραφήματα, προσαρμόζεις, εγκρίνεις.",

    // Testimonials
    "testimonials.eyebrow": "Φωνές από το πεδίο",
    "testimonials.title": "Διαιτολόγοι που εμπιστεύτηκαν τη μετάβαση.",

    // Pricing teaser
    "pricing-teaser.eyebrow": "Τιμές",
    "pricing-teaser.title": "Διαφανείς τιμές, χωρίς εκπλήξεις.",
    "pricing-teaser.subtitle":
      "Από 19€/μήνα για ξεκίνημα. Όλα τα πλάνα περιλαμβάνουν AI Credits, χωρίς δέσμευση.",
    "pricing-teaser.cta": "Δες όλα τα πλάνα",

    // FAQ
    "faq.eyebrow": "Συχνές ερωτήσεις",
    "faq.title": "Πριν δοκιμάσεις, ίσως αναρωτιέσαι:",
    "faq.q1": "Είναι ασφαλή τα δεδομένα των πελατών μου;",
    "faq.a1":
      "Ναι. Η Nutriq φιλοξενείται σε infrastructure EU (eu-south-1, Μιλάνο), συμμορφώνεται πλήρως με GDPR, και χρησιμοποιεί κρυπτογράφηση JWT, ασφαλή storage S3 και TLS. Τα δεδομένα κάθε κέντρου είναι απομονωμένα — κανείς άλλος δεν τα βλέπει.",
    "faq.q2": "Μπορώ να φέρω τους πελάτες μου από άλλο εργαλείο;",
    "faq.a2":
      "Ναι. Υποστηρίζουμε bulk import από Excel/CSV. Η ομάδα μας βοηθάει στη μεταφορά δωρεάν για όλα τα Team plans.",
    "faq.q3": "Τι είναι τα AI Credits και πώς λειτουργούν;",
    "faq.a3":
      "Κάθε φορά που χρησιμοποιείς την AI για να παράξεις πλάνο, καταναλώνεται 1 credit. Όλα τα πλάνα περιλαμβάνουν μηνιαία credits, και μπορείς πάντα να αγοράσεις επιπλέον packs (50/150/400 credits).",
    "faq.q4": "Υπάρχει mobile app για τους πελάτες;",
    "faq.a4":
      "Ναι. Οι πελάτες σου κατεβάζουν την εφαρμογή Nutriq από το App Store (iOS) ή το Google Play (Android) και βλέπουν πλάνα, συνταγές, λίστες supermarket και πρόοδο. Διαθέσιμη και από browser για χρήση από υπολογιστή.",
    "faq.q5": "Μπορώ να ακυρώσω όποτε θέλω;",
    "faq.a5":
      "Φυσικά. Όλα τα πλάνα ακυρώνονται μέσα από το dashboard σου, χωρίς fee. Διατηρείς πρόσβαση μέχρι το τέλος της περιόδου που έχεις πληρώσει.",
    "faq.q6": "Λειτουργεί στα ελληνικά;",
    "faq.a6":
      "Ναι, full bilingual. Τόσο εσύ όσο και οι πελάτες σου μπορείτε να επιλέξετε ελληνικά ή αγγλικά σε κάθε σημείο της εφαρμογής. Όλη η ορολογία είναι μεταφρασμένη επαγγελματικά.",

    // Final CTA
    "cta.title": "Ξεκίνα σήμερα.",
    "cta.subtitle":
      "14 μέρες δωρεάν, όλες οι δυνατότητες, χωρίς κάρτα. Σε λιγότερο από 10 λεπτά έχεις στήσει το πρώτο πλάνο.",
    "cta.button": "Δοκίμασε δωρεάν",

    // Footer
    "footer.tagline": "Your Nutrition Guide",
    "footer.product": "Προϊόν",
    "footer.company": "Εταιρεία",
    "footer.legal": "Νομικά",
    "footer.privacy": "Πολιτική απορρήτου",
    "footer.terms": "Όροι χρήσης",
    "footer.cookies": "Cookies",
    "footer.gdpr": "GDPR",
    "footer.copyright": "© 2026 Nutriq. Όλα τα δικαιώματα διατηρούνται.",

    // Pricing page
    "pricing.title": "Επίλεξε το πλάνο σου.",
    "pricing.subtitle":
      "Διαφανείς τιμές. Όλα τα features ξεκλείδωτα σε κάθε tier. Χωρίς κρυφές χρεώσεις.",
    "pricing.toggle.annual": "Ετήσια χρέωση",
    "pricing.toggle.monthly": "Μηνιαία χρέωση",
    "pricing.toggle.save": "Εξοικονόμησε ~20%",
    "pricing.seg.solo": "Είμαι Solo",
    "pricing.seg.team": "Έχω Ομάδα",
    "pricing.sub.core": "Core",
    "pricing.sub.core-desc": "Όλα τα βασικά εργαλεία διατροφής",
    "pricing.sub.growth": "Growth",
    "pricing.sub.growth-desc": "Core + εργαλεία ανάπτυξης πρακτικής",
    "pricing.month": "/μήνα",
    "pricing.billed-annually": "χρέωση ετήσια",
    "pricing.billed-monthly": "χρέωση μηνιαία",
    "pricing.cta.start": "Ξεκίνα δωρεάν",
    "pricing.cta.contact": "Επικοινώνησε μαζί μας",
    "pricing.popular": "Πιο δημοφιλές",
    "pricing.credits.title": "AI Credits — αγόρασε όσα χρειάζεσαι",
    "pricing.credits.subtitle":
      "Όλα τα πλάνα περιλαμβάνουν μηνιαία credits. Αν χρειαστείς περισσότερα, αγόρασε πακέτα όποτε θες.",

    // Common
    "common.coming-soon": "Σύντομα",
    "common.learn-more": "Μάθε περισσότερα",
    "common.back": "Πίσω",
    "lang.switch": "EN",
  },
  en: {
    // Navigation
    "nav.features": "Features",
    "nav.pricing": "Pricing",
    "nav.about": "About",
    "nav.blog": "Blog",
    "nav.contact": "Contact",
    "nav.login": "Log in",
    "nav.start": "Start free",

    // About section (home)
    "about.eyebrow": "About",
    "about.title": "A team of engineers. A team of dietitians. One mission.",
    "about.subtitle": "Nutriq was born in 2026 from a partnership between software developers and dietitians. Not as an abstract idea — as an answer to specific problems we saw in nutrition practice.",
    "about.story-1": "Dietitians were spending 30+ hours a week on manual meal plans. They were losing clients to slow communication. Their data was scattered across Excel files, sticky notes, and printed PDFs.",
    "about.story-2": "The engineers saw a problem that the right software could solve. The dietitians gave us the answers. We built Nutriq together — not from scratch with assumptions, but from real needs of people seeing 50 clients a week.",
    "about.values-eye": "What we believe in",
    "about.v1.t": "Scientific accuracy",
    "about.v1.b": "All our data aligns with EFSA & USDA. No \"close enough\" values.",
    "about.v2.t": "Privacy first",
    "about.v2.b": "EU hosting, GDPR-native, encryption everywhere. Data never leaves EU servers.",
    "about.v3.t": "Built, not hyped",
    "about.v3.b": "We don't ship features that won't be used. Every button has a purpose.",
    "about.v4.t": "Respect for professionals",
    "about.v4.b": "We don't replace the dietitian. We support them. Judgment stays with the human.",
    "about.cta": "Read more about us",

    // Hero
    "hero.eyebrow": "Nutrition software built for serious practice",
    "hero.title-1": "Meal plans that write",
    "hero.title-2": "themselves.",
    "hero.title-3": "You keep the judgment.",
    "hero.subtitle":
      "Nutriq is the complete toolkit for dietitians — from first anthropometric measurement to last supermarket list. With AI that learns each client's preferences, leaving you free to do the work that matters.",
    "hero.cta-primary": "Start a 14-day free trial",
    "hero.cta-secondary": "See how it works",
    "hero.note": "No card required. Cancel anytime.",

    // Trust
    "trust.title": "Chosen by dietitians across Greece",

    // Problem
    "problem.eyebrow": "The problem",
    "problem.title": "Excel, post-its, printed PDFs.",
    "problem.subtitle":
      "Dietetics doesn't fit in a spreadsheet. Each client has unique conditions, goals, lab results, preferences. When you have to orchestrate all of it by hand, the time left for the client themselves shrinks.",
    "problem.stat-1-num": "30+ hrs",
    "problem.stat-1-label": "per week on manual meal planning",
    "problem.stat-2-num": "~40%",
    "problem.stat-2-label": "of dietitians lose clients to slow communication",
    "problem.stat-3-num": "13",
    "problem.stat-3-label": "different dietary patterns to support",

    // Features
    "features.eyebrow": "The platform",
    "features.title": "Everything you need, in one breath.",
    "features.subtitle":
      "From plan creation to progress tracking, Nutriq is designed to give you time back — not add work.",
    "features.ai-gen.title": "AI Meal Plan Generator",
    "features.ai-gen.desc":
      "Set calorie targets, macros, prep time. Get a complete compliant plan in seconds — that you control, approve, send.",
    "features.client-portal.title": "Client Portal",
    "features.client-portal.desc":
      "Your clients log in and see their plan, recipes, grocery list, and progress — from phone or desktop.",
    "features.nutrition.title": "Full Nutritional Analysis",
    "features.nutrition.desc":
      "Macros + micros (vitamins A-K, minerals), anthropometrics, body composition, biochemical tests — all in one client profile.",
    "features.food-db.title": "Food & Recipe Database",
    "features.food-db.desc":
      "Thousands of foods ready, support for 13 dietary patterns (Mediterranean, Keto, Vegan, Gluten-Free, and more).",
    "features.grocery.title": "Automatic Grocery Lists",
    "features.grocery.desc":
      "Every weekly plan generates a smart shopping list — aggregated, categorized, ready to check off.",
    "features.team.title": "Team Management",
    "features.team.desc":
      "One center, many dietitians. Separate caseloads, shared templates, team performance analytics.",
    "features.cta": "Explore all features",

    // How it works
    "how.eyebrow": "How it works",
    "how.title": "From first visit to first recipe — in minutes.",
    "how.step-1.num": "01",
    "how.step-1.title": "Client onboarding",
    "how.step-1.desc":
      "Create a profile with anthropometrics, medical history, dietary preferences and allergies. All data in one place.",
    "how.step-2.num": "02",
    "how.step-2.title": "Plan creation",
    "how.step-2.desc":
      "Use a template, build from scratch, or let AI generate for you. You always have the final edit.",
    "how.step-3.num": "03",
    "how.step-3.title": "Progress tracking",
    "how.step-3.desc":
      "Client sees the plan on mobile, logs measurements. You see graphs, adjust, approve.",

    // Testimonials
    "testimonials.eyebrow": "Voices from the field",
    "testimonials.title": "Dietitians who trusted the transition.",

    // Pricing teaser
    "pricing-teaser.eyebrow": "Pricing",
    "pricing-teaser.title": "Transparent pricing, no surprises.",
    "pricing-teaser.subtitle":
      "From €19/month to start. Every plan includes AI Credits, no lock-in.",
    "pricing-teaser.cta": "See all plans",

    // FAQ
    "faq.eyebrow": "Frequently asked",
    "faq.title": "Before you try, you might wonder:",
    "faq.q1": "Is my client data safe?",
    "faq.a1":
      "Yes. Nutriq is hosted on EU infrastructure (eu-south-1, Milan), fully GDPR-compliant, and uses JWT encryption, secure S3 storage, and TLS. Each center's data is isolated — no one else can see it.",
    "faq.q2": "Can I migrate my clients from another tool?",
    "faq.a2":
      "Yes. We support bulk import from Excel/CSV. Our team helps with migration for free on all Team plans.",
    "faq.q3": "What are AI Credits and how do they work?",
    "faq.a3":
      "Every time you use AI to generate a plan, 1 credit is consumed. All plans include monthly credits, and you can always buy extra packs (50/150/400 credits) on demand.",
    "faq.q4": "Is there a mobile app for clients?",
    "faq.a4":
      "Yes. Your clients download the Nutriq app from the App Store (iOS) or Google Play (Android) and see plans, recipes, grocery lists and progress. Also available in the browser for desktop use.",
    "faq.q5": "Can I cancel anytime?",
    "faq.a5":
      "Of course. All plans cancel from your dashboard, no fee. You keep access until the end of your paid period.",
    "faq.q6": "Does it work in Greek?",
    "faq.a6":
      "Yes, fully bilingual. Both you and your clients can pick Greek or English anywhere in the app. All terminology is professionally translated.",

    // Final CTA
    "cta.title": "Start today.",
    "cta.subtitle":
      "14 days free, every feature, no card. Less than 10 minutes to your first plan.",
    "cta.button": "Try it free",

    // Footer
    "footer.tagline": "Your Nutrition Guide",
    "footer.product": "Product",
    "footer.company": "Company",
    "footer.legal": "Legal",
    "footer.privacy": "Privacy Policy",
    "footer.terms": "Terms of Service",
    "footer.cookies": "Cookies",
    "footer.gdpr": "GDPR",
    "footer.copyright": "© 2026 Nutriq. All rights reserved.",

    // Pricing
    "pricing.title": "Choose your plan.",
    "pricing.subtitle":
      "Transparent pricing. All features unlocked at every tier. No hidden fees.",
    "pricing.toggle.annual": "Billed annually",
    "pricing.toggle.monthly": "Billed monthly",
    "pricing.toggle.save": "Save ~20%",
    "pricing.seg.solo": "I'm Solo",
    "pricing.seg.team": "I have a Team",
    "pricing.sub.core": "Core",
    "pricing.sub.core-desc": "All essential nutrition tools",
    "pricing.sub.growth": "Growth",
    "pricing.sub.growth-desc": "Core + practice growth tools",
    "pricing.month": "/mo",
    "pricing.billed-annually": "billed annually",
    "pricing.billed-monthly": "billed monthly",
    "pricing.cta.start": "Start free",
    "pricing.cta.contact": "Contact us",
    "pricing.popular": "Most popular",
    "pricing.credits.title": "AI Credits — buy what you need",
    "pricing.credits.subtitle":
      "All plans include monthly credits. If you need more, buy packs whenever.",

    // Common
    "common.coming-soon": "Coming soon",
    "common.learn-more": "Learn more",
    "common.back": "Back",
    "lang.switch": "ΕΛ",
  },
} as const;

export type UIKey = keyof (typeof ui)["el"];
