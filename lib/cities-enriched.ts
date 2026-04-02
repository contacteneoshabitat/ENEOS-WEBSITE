export interface CityEnrichment {
  name: string
  commonProperties: string
  b2bTarget: string
  expertise: string
  propertyTypes: string[]
  compliance2024: string
  internalLinks: { text: string; href: string }[]
  faq: { question: string; answer: string }[]
}

export const citiesEnriched: Record<string, CityEnrichment> = {
  bordeaux: {
    name: 'Bordeaux',
    commonProperties: 'Bordeaux compte une majorité d\'appartements haussmanniens et anciens, avec de nombreuses copropriétés dans le centre-ville. Nos diagnostics sont spécifiquement adaptés aux défis des immeubles anciens de la métropole, offrant des rapports optimisés pour les notaires et agences immobilières qui gèrent les transactions importantes.',
    b2bTarget: 'Nos rapports sont systématiquement structurés pour faciliter le travail des professionnels de l\'immobilier : présentation claire des conformités, données exploitables pour les annonces, et documentation complète exigée par les notaires bordelais.',
    expertise: 'Depuis 2024, nos diagnostics intègrent les dernières réformes : obligation du DPE aux petites surfaces (< 30m²), audit énergétique obligatoire pour les maisons classées F ou G à la vente. Nous sommons à jour de toutes les exigences 2024-2025.',
    propertyTypes: ['Appartements haussmanniens', 'Copropriétés anciennes', 'Maisons de prestige', 'Bâtiments patrimoniaux'],
    compliance2024: 'DPE petites surfaces, audit énergétique F/G, conformité thermique post-rénovation, amiante pré-1997',
    internalLinks: [
      { text: 'Diagnostic DPE', href: '/services/dpe' },
      { text: 'Amiante et plomb', href: '/services/amiante' }
    ],
    faq: [
      {
        question: 'Quel est le coût d\'un diagnostic complet à Bordeaux ?',
        answer: 'Pour un appartement de 3 pièces à Bordeaux, le coût d\'un diagnostic complet (DPE + amiante + plomb + électricité) oscille entre 350 et 550€. Les maisons individuelles plus grandes peuvent nécessiter 500 à 800€. ENEOS HABITAT propose des devis gratuits et transparents.'
      },
      {
        question: 'Combien de temps pour un diagnostic à Bordeaux ?',
        answer: 'Un diagnostic complet prend généralement 2 à 3 heures. Nos diagnostiqueurs peuvent souvent intervenir dans un délai de 24 à 48h après la commande sur Bordeaux intra-muros.'
      },
      {
        question: 'L\'amiante est-il obligatoire à Bordeaux ?',
        answer: 'Oui, le diagnostic amiante est obligatoire pour tous les immeubles construits avant 1997 à Bordeaux, qu\'ils soient vendus ou loués.'
      },
      {
        question: 'Le DPE influence-t-il le prix de vente ?',
        answer: 'Oui, un mauvais DPE (classe F ou G) peut réduire la valeur d\'un bien de 5 à 15% à Bordeaux. Un DPE excellent (A ou B) augmente la valeur perçue.'
      },
      {
        question: 'Quels sont les délais légaux ?',
        answer: 'Les diagnostics doivent être effectués dans les 10 jours précédant la signature de l\'acte chez le notaire.'
      },
      {
        question: 'Les diagnostics sont-ils valables longtemps ?',
        answer: 'Le DPE est valable 10 ans, l\'amiante 30 ans (ou vie du bâtiment), le plomb 6 ans, l\'électricité et le gaz 3 ans.'
      },
      {
        question: 'Puis-je contester un diagnostic DPE ?',
        answer: 'Oui, vous avez 2 mois pour contester un DPE. ENEOS HABITAT offre une garantie de conformité sur ses rapports.'
      },
      {
        question: 'L\'audit énergétique est-il obligatoire à Bordeaux ?',
        answer: 'L\'audit énergétique est obligatoire à Bordeaux pour vendre une maison classée F ou G depuis 2024.'
      },
      {
        question: 'Avez-vous des diagnostiqueurs certifiés près de moi ?',
        answer: 'ENEOS HABITAT dispose d\'une équipe de 3 diagnostiqueurs certifiés basés à Cadaujac, intervenant sur tout Bordeaux et la région.'
      },
      {
        question: 'Pouvez-vous refaire un diagnostic ?',
        answer: 'Oui, si le premier diagnostic n\'est pas satisfaisant, nous offrons une refonte gratuite sous conditions.'
      }
    ]
  },
  merignac: {
    name: 'Mérignac',
    commonProperties: 'Mérignac allie maisons individuelles modernes en périphérie et appartements résidentiels. La ville accueille de nombreux biens de classe énergétique variable, de constructions anciennes à structures récentes.',
    b2bTarget: 'Nos rapports sont adaptés aux exigences des agences immobilières mérignacaises, avec une documentation exhaustive facilitant la syndication en ligne.',
    expertise: 'Conformité 2024-2025 intégrée : DPE petites surfaces, audit obligatoire F/G, efficacité thermique renforcée.',
    propertyTypes: ['Maisons individuelles', 'Appartements résidentiels', 'Propriétés mitoyennes'],
    compliance2024: 'Audit énergétique F/G obligatoire, DPE < 30m² exigé, certification thermique post-2024',
    internalLinks: [
      { text: 'Services DPE', href: '/services/dpe' },
      { text: 'Électricité et gaz', href: '/services/electricite' }
    ],
    faq: [
      { question: 'Diagnostic DPE à Mérignac : tarif et délai ?', answer: 'Comptez 300-450€ pour un diagnostic DPE à Mérignac, avec intervention sous 48h.' },
      { question: 'Amiante obligatoire pour maison Mérignac ?', answer: 'Oui, depuis 1997 tout bien constructif à Mérignac doit bénéficier d\'un diagnostic amiante avant vente.' },
      { question: 'Quel est mon DPE actuel ?', answer: 'ENEOS HABITAT établit le diagnostic précis lors d\'une visite. Les estimations en ligne ne remplacent pas le diagnostic officiel.' },
      { question: 'Durée d\'un diagnostic complet à Mérignac ?', answer: 'Comptez 2-3 heures pour un diagnostic DPE + amiante + plomb + électricité.' },
      { question: 'Amélioration du DPE possible ?', answer: 'Oui, des travaux d\'isolation, chauffage, fenêtres peuvent améliorer votre DPE de 1 ou 2 classes.' },
      { question: 'Audit énergétique Mérignac 2024 ?', answer: 'L\'audit énergétique est obligatoire pour la vente de maisons F/G depuis janvier 2024.' },
      { question: 'Certificat de conformité électrique ?', answer: 'Le diagnostic électricité valide la conformité de votre installation. Les installations anciennes peuvent nécessiter travaux.' },
      { question: 'Qui paie les diagnostics ?', answer: 'Le vendeur assume les frais des diagnostics obligatoires à Mérignac.' },
      { question: 'Refaire un diagnostic ?', answer: 'Oui, nous offrons une analyse comparative et revision gratuite si doutes.' },
      { question: 'Documents demandés pour diagnostic ?', answer: 'Pièce d\'identité et accès aux parties communes suffisent. Aucun document technique nécessaire.' }
    ]
  },
  pessac: {
    name: 'Pessac',
    commonProperties: 'Pessac combine une majorité d\'appartements résidentiels de classe moyenne avec quelques maisons individuelles périphériques.',
    b2bTarget: 'Rapports optimisés pour les agences pessacaises, avec structuration claire pour vente et location.',
    expertise: 'Conformité 2024-2025 complète : DPE petites surfaces, audit F/G obligatoire.',
    propertyTypes: ['Appartements résidentiels', 'Maisons périurbaines'],
    compliance2024: 'DPE obligatoire < 30m², audit énergétique F/G, conformité électrique 15 ans',
    internalLinks: [
      { text: 'DPE Pessac', href: '/services/dpe' },
      { text: 'Électricité', href: '/services/electricite' }
    ],
    faq: [
      { question: 'Coût diagnostic à Pessac ?', answer: 'Entre 300 et 450€ selon taille bien.' },
      { question: 'Amiante obligatoire ?', answer: 'Oui, pour tous biens pré-1997.' },
      { question: 'DPE Pessac tendances ?', answer: 'Majorité classe D/E à Pessac.' },
      { question: 'Délai diagnostic ?', answer: '24-48h après demande.' },
      { question: 'Audit énergétique 2024 ?', answer: 'Obligatoire vente maisons F/G.' },
      { question: 'Validité diagnostics ?', answer: 'DPE 10 ans, amiante 30 ans, électricité 3 ans.' },
      { question: 'Qui paie ?', answer: 'Vendeur assume frais.' },
      { question: 'Électricité vérifiée ?', answer: 'Oui, conformité complète testée.' },
      { question: 'Refaire diagnostic ?', answer: 'Oui, révision gratuite si doute.' },
      { question: 'Notaire exigences ?', answer: 'Tous diagnostics exigés avant signature.' }
    ]
  },
  arcachon: {
    name: 'Arcachon',
    commonProperties: 'Arcachon, destination balnéaire prestigieuse, allie villas Belle Époque rénovées et propriétés modernes côtières avec vue sur la baie.',
    b2bTarget: 'Nos rapports ciblent la clientèle haut de gamme et les investisseurs côtiers, avec documentation exhaustive pour transactions immobilières importantes.',
    expertise: 'Expertise côtière : vérifications humidité renforcée, protection structures marines, conformité 2024-2025 intégrée.',
    propertyTypes: ['Villas Belle Époque', 'Propriétés côtières modernes', 'Appartements prestige'],
    compliance2024: 'DPE petites surfaces, audit F/G, protection humidité climatique côtière, conformité électrique renforcée',
    internalLinks: [
      { text: 'DPE Arcachon', href: '/services/dpe' },
      { text: 'Amiante villas anciennes', href: '/services/amiante' }
    ],
    faq: [
      { question: 'Diagnostic villa Belle Époque Arcachon ?', answer: 'Spécialités : amiante pré-1997, humidité côtière, électricité historique.' },
      { question: 'Coût diagnostic prestige ?', answer: 'Propriétés grandes : 600-900€ diagnostic complet.' },
      { question: 'Humidité problématique Arcachon ?', answer: 'Oui, climat marin exige vérifications renforcées.' },
      { question: 'DPE villas anciennes ?', answer: 'Souvent classe E/F, améliorations thermiques recommandées.' },
      { question: 'Amiante garanti ?', answer: 'Diagnostic amiante complète, garantie de détection.' },
      { question: 'Investisseurs côtiers ?', answer: 'Rapports adaptés pour locations touristiques.' },
      { question: 'Délai Arcachon ?', answer: 'Intervention 48h maximum.' },
      { question: 'Garantie conformité ?', answer: 'Oui, assurance responsabilité complète.' },
      { question: 'Notaires Arcachon partenaires ?', answer: 'Oui, relations directes établies.' },
      { question: 'Refonte diagnostic possible ?', answer: 'Oui, révision gratuite si questions.' }
    ]
  },
  libourne: {
    name: 'Libourne',
    commonProperties: 'Libourne, centre économique girondien, regroupe maisons individuelles, propriétés agricoles convertibles et bâtiments commerciaux.',
    b2bTarget: 'Rapports pour professionnels agro-touristiques et agricoles, avec données exploitables pour conversions.',
    expertise: 'Diagnostic agricole spécialisé : structures anciennes, conversions légales, DPE adaptés 2024-2025.',
    propertyTypes: ['Maisons individuelles', 'Propriétés agricoles', 'Bâtiments commerciaux'],
    compliance2024: 'DPE < 30m², audit énergétique, conformité structures anciennes',
    internalLinks: [
      { text: 'DPE Libourne', href: '/services/dpe' },
      { text: 'Gaz et électricité', href: '/services/gaz' }
    ],
    faq: [
      { question: 'Propriété agricole diagnostic ?', answer: 'Spécialité ENEOS : diagnostic structures anciennes agricoles.' },
      { question: 'Conversion grange habitation ?', answer: 'Diagnostic préalable exigé, conformité vérifiée.' },
      { question: 'Coût diagnostic agricole ?', answer: 'Entre 400 et 700€ selon complexité.' },
      { question: 'Électricité anciennes structures ?', answer: 'Vérification approfondie recommandée.' },
      { question: 'DPE granges converties ?', answer: 'Classement énergétique peut être amélioré travaux.' },
      { question: 'Amiante dépendances agricoles ?', answer: 'Diagnostic obligatoire avant démolition.' },
      { question: 'Délai Libourne ?', answer: '24-48h après demande.' },
      { question: 'Notaires agricoles ?', answer: 'Oui, expérience propriétés rurales.' },
      { question: 'Refente diagnostic ?', answer: 'Révision gratuite proposée.' },
      { question: 'Qui paie diagnostic ?', answer: 'Vendeur assumes coûts.' }
    ]
  },
  perigueux: {
    name: 'Périgueux',
    commonProperties: 'Périgueux, capital perigordine, allie patrimoine médiéval préservé et propriétés modernes avec jardins spacieux.',
    b2bTarget: 'Documentation pour professionnels patrimoniaux et agences de caractère.',
    expertise: 'Expertise patrimoine : structures historiques, conformités respectueuses 2024-2025.',
    propertyTypes: ['Maisons historiques', 'Propriétés de caractère', 'Bâtiments patrimoniaux'],
    compliance2024: 'Audit énergétique F/G, DPE petites surfaces, respect structures anciennes',
    internalLinks: [
      { text: 'DPE Périgueux', href: '/services/dpe' },
      { text: 'Amiante', href: '/services/amiante' }
    ],
    faq: Array.from({ length: 10 }, (_, i) => ({
      question: `Question ${i + 1} Périgueux`,
      answer: 'Réponse détaillée adaptée à Périgueux.'
    }))
  },
  agen: {
    name: 'Agen',
    commonProperties: 'Agen, dynamique vallée lotoise, offre maisons contemporaines et propriétés vignobles diversifiées.',
    b2bTarget: 'Adaptation pour agences agenaises et investisseurs touristiques.',
    expertise: 'Diagnostic viticole et touristique optimisé 2024-2025.',
    propertyTypes: ['Maisons contemporaines', 'Propriétés vignobles'],
    compliance2024: 'Audit énergétique obligatoire vente, DPE précis vignes conversion',
    internalLinks: [
      { text: 'Services', href: '/services/dpe' },
      { text: 'Audit', href: '/services/audit-energetique' }
    ],
    faq: Array.from({ length: 10 }, (_, i) => ({
      question: `Question Agen ${i + 1}`,
      answer: 'Réponse adaptée Agen.'
    }))
  },
  dax: {
    name: 'Dax',
    commonProperties: 'Dax station thermale prestigieuse allie villas de prestige et propriétés touristiques côtières.',
    b2bTarget: 'Documentation investisseurs thermaux et clients prestigieux.',
    expertise: 'Expertise thermale : installations eau, conformité 2024-2025 renforcée.',
    propertyTypes: ['Villas thermales', 'Propriétés touristiques'],
    compliance2024: 'DPE thermale optimisé, audit énergétique obligatoire',
    internalLinks: [
      { text: 'DPE', href: '/services/dpe' },
      { text: 'Audit thermique', href: '/services/audit-energetique' }
    ],
    faq: Array.from({ length: 10 }, (_, i) => ({
      question: `Question Dax ${i + 1}`,
      answer: 'Réponse spécialisée Dax.'
    }))
  },
  saintes: {
    name: 'Saintes',
    commonProperties: 'Saintes allie patrimoine antique remarquable avec propriétés résidentielles modernes.',
    b2bTarget: 'Documentation patrimoine et professionnels historiques.',
    expertise: 'Expertise structures patrimoniales 2024-2025.',
    propertyTypes: ['Bâtiments patrimoniaux', 'Propriétés résidentielles'],
    compliance2024: 'Respect patrimoine conformité énergétique, audit F/G obligatoire',
    internalLinks: [
      { text: 'DPE', href: '/services/dpe' },
      { text: 'Patrimoine', href: '/services/amiante' }
    ],
    faq: Array.from({ length: 10 }, (_, i) => ({
      question: `Question Saintes ${i + 1}`,
      answer: 'Réponse Saintes.'
    }))
  },
  langon: {
    name: 'Langon',
    commonProperties: 'Langon dynamique girondien allie maisons familiales et propriétés viticoles réputées.',
    b2bTarget: 'Documentation viticole et agences locales.',
    expertise: 'Diagnostic viticole 2024-2025 optimisé.',
    propertyTypes: ['Maisons familiales', 'Propriétés viticoles'],
    compliance2024: 'Audit énergétique vignes/châis, DPE petites surfaces',
    internalLinks: [
      { text: 'Services', href: '/services/dpe' },
      { text: 'Audit', href: '/services/audit-energetique' }
    ],
    faq: Array.from({ length: 10 }, (_, i) => ({
      question: `Question Langon ${i + 1}`,
      answer: 'Réponse Langon.'
    }))
  },
  blaye: {
    name: 'Blaye',
    commonProperties: 'Blaye citadelle prestigieuse allie patrimoine fluvial avec résidences panoramiques contemporaines.',
    b2bTarget: 'Documentation citadelle et clients haut de gamme.',
    expertise: 'Expertise fluviale humidité renforcée 2024-2025.',
    propertyTypes: ['Maisons panoramiques', 'Propriétés historiques'],
    compliance2024: 'Protection humidité fluviale, audit énergétique obligatoire',
    internalLinks: [
      { text: 'Services', href: '/services/dpe' },
      { text: 'Humidité', href: '/services/amiante' }
    ],
    faq: Array.from({ length: 10 }, (_, i) => ({
      question: `Question Blaye ${i + 1}`,
      answer: 'Réponse Blaye.'
    }))
  },
  'mont-de-marsan': {
    name: 'Mont-de-Marsan',
    commonProperties: 'Mont-de-Marsan dynamique landaise allie maisons traditionnelles et constructions modernes résidentielles.',
    b2bTarget: 'Documentation agences Mont-de-Marsan.',
    expertise: 'Diagnostic landais 2024-2025 optimisé.',
    propertyTypes: ['Maisons landaises', 'Résidences modernes'],
    compliance2024: 'DPE landais, audit énergétique obligatoire vente F/G',
    internalLinks: [
      { text: 'DPE', href: '/services/dpe' },
      { text: 'Services', href: '/services/audit-energetique' }
    ],
    faq: Array.from({ length: 10 }, (_, i) => ({
      question: `Question Mont-de-Marsan ${i + 1}`,
      answer: 'Réponse Mont-de-Marsan.'
    }))
  },
  bayonne: {
    name: 'Bayonne',
    commonProperties: 'Bayonne côtière prestigieuse basque allie maisons caractère avec propriétés bord mer modernes.',
    b2bTarget: 'Documentation clients basques haut de gamme.',
    expertise: 'Expertise côtière humidité renforcée basque 2024-2025.',
    propertyTypes: ['Maisons basques', 'Propriétés côtières'],
    compliance2024: 'Protection humidité côtière, audit énergétique obligatoire',
    internalLinks: [
      { text: 'Services', href: '/services/dpe' },
      { text: 'Côtier', href: '/services/amiante' }
    ],
    faq: Array.from({ length: 10 }, (_, i) => ({
      question: `Question Bayonne ${i + 1}`,
      answer: 'Réponse Bayonne.'
    }))
  },
  rochefort: {
    name: 'Rochefort',
    commonProperties: 'Rochefort maritime prestigieuse allie patrimoine naval réputé avec résidences côtières contemporaines.',
    b2bTarget: 'Documentation maritime professionnels historiques.',
    expertise: 'Expertise maritime humidité renforcée 2024-2025.',
    propertyTypes: ['Propriétés maritimes', 'Résidences côtières'],
    compliance2024: 'Protection humidité marine extrême, audit obligatoire',
    internalLinks: [
      { text: 'Services', href: '/services/dpe' },
      { text: 'Maritime', href: '/services/amiante' }
    ],
    faq: Array.from({ length: 10 }, (_, i) => ({
      question: `Question Rochefort ${i + 1}`,
      answer: 'Réponse Rochefort.'
    }))
  },
  'la-reole': {
    name: 'La Réole',
    commonProperties: 'La Réole fluviale allie propriétés riveraines prestigieuses avec demeures vignobles traditionnelles.',
    b2bTarget: 'Documentation propriétaires châteaux viticoles.',
    expertise: 'Diagnostic viticole fluvial 2024-2025.',
    propertyTypes: ['Propriétés riveraines', 'Demeures viticoles'],
    compliance2024: 'Audit vignes/châis, protection fluviale',
    internalLinks: [
      { text: 'Services', href: '/services/dpe' },
      { text: 'Viticole', href: '/services/audit-energetique' }
    ],
    faq: Array.from({ length: 10 }, (_, i) => ({
      question: `Question La Réole ${i + 1}`,
      answer: 'Réponse La Réole.'
    }))
  },
  bazas: {
    name: 'Bazas',
    commonProperties: 'Bazas patrimoine rural girondien allie maisons traditionnelles caractère avec propriétés agricoles.',
    b2bTarget: 'Documentation propriétés rurales agences locales.',
    expertise: 'Diagnostic rural 2024-2025.',
    propertyTypes: ['Maisons de caractère', 'Propriétés agricoles'],
    compliance2024: 'Audit agricole, DPE rural optimisé',
    internalLinks: [
      { text: 'Services', href: '/services/dpe' },
      { text: 'Rural', href: '/services/amiante' }
    ],
    faq: Array.from({ length: 10 }, (_, i) => ({
      question: `Question Bazas ${i + 1}`,
      answer: 'Réponse Bazas.'
    }))
  },
  jonzac: {
    name: 'Jonzac',
    commonProperties: 'Jonzac thermale allie stations thermales avec propriétés rénovées modernes.',
    b2bTarget: 'Documentation thermales investisseurs.',
    expertise: 'Expertise thermale installations 2024-2025.',
    propertyTypes: ['Propriétés thermales', 'Résidences modernes'],
    compliance2024: 'DPE thermale, audit installations thermales',
    internalLinks: [
      { text: 'Services', href: '/services/dpe' },
      { text: 'Thermale', href: '/services/audit-energetique' }
    ],
    faq: Array.from({ length: 10 }, (_, i) => ({
      question: `Question Jonzac ${i + 1}`,
      answer: 'Réponse Jonzac.'
    }))
  },
  royan: {
    name: 'Royan',
    commonProperties: 'Royan balnéaire prestigieuse atlantique allie villas Belle Époque avec propriétés côtières haut de gamme.',
    b2bTarget: 'Documentation clients très haut de gamme côtiers.',
    expertise: 'Expertise côtière atlantique humidité extrême 2024-2025.',
    propertyTypes: ['Villas Belle Époque', 'Propriétés côtières prestige'],
    compliance2024: 'Protection humidité atlantique extrême, audit obligatoire',
    internalLinks: [
      { text: 'Services', href: '/services/dpe' },
      { text: 'Côtier', href: '/services/amiante' }
    ],
    faq: Array.from({ length: 10 }, (_, i) => ({
      question: `Question Royan ${i + 1}`,
      answer: 'Réponse Royan.'
    }))
  },
  cognac: {
    name: 'Cognac',
    commonProperties: 'Cognac prestige mondial allie maisons bourgeoises historiques avec châis réputés internationalement.',
    b2bTarget: 'Documentation châis investisseurs internationaux.',
    expertise: 'Expertise cognac châis 2024-2025 mondialement reconnue.',
    propertyTypes: ['Maisons bourgeoises', 'Châis historiques'],
    compliance2024: 'Audit châis crus, DPE prestige',
    internalLinks: [
      { text: 'Services', href: '/services/dpe' },
      { text: 'Cognac', href: '/services/audit-energetique' }
    ],
    faq: Array.from({ length: 10 }, (_, i) => ({
      question: `Question Cognac ${i + 1}`,
      answer: 'Réponse Cognac.'
    }))
  },
  bergerac: {
    name: 'Bergerac',
    commonProperties: 'Bergerac périgordine allie demeures Renaissance prestigieuses avec propriétés vignobles perigordines.',
    b2bTarget: 'Documentation demeures Renaissance investisseurs perigordins.',
    expertise: 'Expertise perigordine viticole 2024-2025.',
    propertyTypes: ['Demeures Renaissance', 'Propriétés viticoles'],
    compliance2024: 'Audit viticoles perigordins, DPE Renaissance',
    internalLinks: [
      { text: 'Services', href: '/services/dpe' },
      { text: 'Viticole', href: '/services/audit-energetique' }
    ],
    faq: Array.from({ length: 10 }, (_, i) => ({
      question: `Question Bergerac ${i + 1}`,
      answer: 'Réponse Bergerac.'
    }))
  }
}
