import { Metadata } from "next"
import { ServicePageTemplate } from "@/components/service-page-template"

export const metadata: Metadata = {
  title: "Diagnostic Loi Carrez | ENEOS HABITAT",
  description: "Mesurage Loi Carrez avec ENEOS HABITAT. Obligatoire pour la vente de biens en copropriété. Devis gratuit, intervention rapide en Gironde.",
}

const carrezService = {
  title: "Diagnostic Loi Carrez",
  subtitle: "Mesurage de la surface privative pour les biens en copropriété",
  description: "Le diagnostic Loi Carrez permet de certifier la superficie privative d'un lot de copropriété. Ce mesurage est obligatoire pour toute vente d'un bien en copropriété.",
  longDescription: [
    "La loi Carrez, promulguée le 18 décembre 1996, constitue une protection légale fondamentale pour les acquéreurs de lots en copropriété. Cette loi impose l'obligation incontournable de mentionner la superficie privative exacte dans tout acte de vente d'un lot de copropriété. La surface Carrez correspond à la surface de plancher des locaux clos et couverts, calculée selon une méthodologie précise définie par les décrets d'application. Cette mesure empêche les fraudes et les erreurs d'estimation qui pouvaient autrefois avantager les vendeurs au détriment des acheteurs. Le certificat de surface Carrez est devenu un document incontournable en droit immobilier français, requérant une expertise et une rigueur profesionnelle pour assurer sa validité.",
    "Le calcul de la surface Carrez nécessite une grande précision. Sont exclus du calcul : les surfaces dont la hauteur sous plafond est inférieure à 1,80 m (greniers, combles non aménagés), les caves, sous-sols, garages, places de stationnement, remises, vérandas, balcons, loggias, terrasses, et toutes les parties communes de la copropriété. Seule la surface habitable et utilisable du lot est comptabilisée. ENEOS HABITAT utilise des méthodes professionnelles de mesurage précis pour garantir une surface Carrez fiable et conforme aux normes en vigueur, protégeant ainsi les droits de nos clients.",
    "La loi Carrez offre une protection importante aux acquéreurs : en cas d'erreur supérieure à 5% en défaveur de l'acquéreur, celui-ci peut demander une diminution du prix de vente proportionnelle à la différence de surface dans un délai d'un an à compter de la signature de l'acte authentique. Cette clause de garantie souligne l'importance de disposer d'un mesurage Carrez précis et fiable dès le départ. Un certificat établi par un professionnel certifié réduit considérablement les risques de litiges post-transaction et facilite les procédures de vente.",
  ],
  image: "/images/carrez.jpg",
  obligatoryFor: [
    "Vente d'un lot de copropriété",
    "Vente d'un appartement en copropriété",
    "Vente d'un local commercial en copropriété",
    "Mention obligatoire dans la promesse de vente et l'acte",
  ],
  validity: "Illimitée (sauf travaux)",
  validityDetails: "Le certificat Loi Carrez est valable sans limite de durée, sauf si des travaux modifiant la superficie ont été réalisés (agrandissement, création de mezzanine, etc.). Dans ce cas, un nouveau mesurage est nécessaire.",
  applicableTo: "Biens en copropriété",
  price: "À partir de 70€",
  documents: [
    "Certificat Loi Carrez",
    "Plan détaillé du lot",
    "Détail des surfaces par pièce",
    "Méthodologie de calcul",
    "Attestation du diagnostiqueur",
  ],
  process: [
    {
      title: "Prise de rendez-vous",
      description: "Contactez-nous pour planifier l'intervention à votre convenance.",
    },
    {
      title: "Mesurage sur site",
      description: "Le diagnostiqueur mesure toutes les pièces du lot avec précision à l'aide d'outils professionnels.",
    },
    {
      title: "Calcul de la surface",
      description: "La surface Carrez est calculée en excluant les surfaces non comptabilisables (hauteur < 1,80 m, etc.).",
    },
    {
      title: "Remise du certificat",
      description: "Vous recevez un certificat officiel mentionnant la surface privative de votre lot.",
    },
  ],
  faq: [
    {
      question: "Quelle est la différence entre surface Carrez et surface habitable ?",
      answer: "La surface Carrez s'applique uniquement aux lots de copropriété et exclut les surfaces de moins de 1,80 m de hauteur. La surface habitable (loi Boutin) s'applique aux locations et exclut également les surfaces occupées par les murs, cloisons, escaliers, etc.",
    },
    {
      question: "Les caves et garages sont-ils inclus dans le calcul ?",
      answer: "Non, les caves, garages, places de stationnement, boxes et parkings ne sont pas comptabilisés dans la surface Carrez, même s'ils font partie du lot.",
    },
    {
      question: "Que se passe-t-il si la surface indiquée est erronée ?",
      answer: "Si l'erreur dépasse 5% de la surface réelle, l'acquéreur peut demander une réduction du prix proportionnelle dans un délai d'un an suivant la signature de l'acte authentique.",
    },
  ],
}

export default function CarrezPage() {
  return <ServicePageTemplate service={carrezService} />
}
