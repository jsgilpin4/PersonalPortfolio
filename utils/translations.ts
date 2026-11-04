type TranslationKey = string

const translations: Record<TranslationKey, { en: string; fr: string }> = {
  "home.title": {
    en: "Joel Gilpin",
    fr: "Joel Gilpin",
  },
  "home.subtitle": {
    en: "Cybersecurity Expert & Ethical Hacker",
    fr: "Experte en Cybersécurité & Hacker Éthique",
  },
  "home.description": {
    en: "Protecting digital assets and uncovering vulnerabilities to make the internet a safer place. Specialized in penetration testing, security auditing, and cyber threat analysis.",
    fr: "Protection des actifs numériques et découverte des vulnérabilités pour rendre Internet plus sûr. Spécialisée dans les tests de pénétration, l'audit de sécurité et l'analyse des cybermenaces.",
  },
  "home.cta.work": {
    en: "View My Work",
    fr: "Voir Mon Travail",
  },
  "home.cta.contact": {
    en: "Get in Touch",
    fr: "Me Contacter",
  },
  "contact.title": {
    en: "Get in Touch",
    fr: "Contactez-moi",
  },
  "contact.form.title": {
    en: "Contact Form",
    fr: "Formulaire de Contact",
  },
  "contact.form.description": {
    en: "Send me a message and I'll get back to you as soon as possible.",
    fr: "Envoyez-moi un message et je vous répondrai dès que possible.",
  },
  "contact.form.success": {
    en: "Thank you for your message! I will get back to you soon.",
    fr: "Merci pour votre message ! Je vous répondrai bientôt.",
  },
  "contact.form.name": {
    en: "Name",
    fr: "Nom",
  },
  "contact.form.namePlaceholder": {
    en: "Your name",
    fr: "Votre nom",
  },
  "contact.form.email": {
    en: "Email",
    fr: "Email",
  },
  "contact.form.emailPlaceholder": {
    en: "your@email.com",
    fr: "votre@email.com",
  },
  "contact.form.subject": {
    en: "Subject",
    fr: "Sujet",
  },
  "contact.form.subjectPlaceholder": {
    en: "Message subject",
    fr: "Sujet du message",
  },
  "contact.form.message": {
    en: "Message",
    fr: "Message",
  },
  "contact.form.messagePlaceholder": {
    en: "Your message",
    fr: "Votre message",
  },
  "contact.form.submit": {
    en: "Send Message",
    fr: "Envoyer le Message",
  },
}

export function t(key: TranslationKey, lang: "en" | "fr"): string {
  return translations[key]?.[lang] || key
}

