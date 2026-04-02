import { Metadata } from "next"
import { ServicePageTemplate } from "@/components/service-page-template"

export const metadata: Metadata = {
  title: "Diagnostic Loi Boutin - Surface Habitable | ENEOS HABITAT",
  description: "Mesurage de la surface habitable (Loi Boutin) avec ENEOS HABITAT. Obligatoire pour la location. Devis gratuit, intervention rapide en Gironde.",
  alternates: {
    canonical: "https://www.eneoshabitat.fr/services/boutin"
  }
}

const boutinService = {
  title: "Loi Boutin - Surface Habitable",
  subtitle: "Mesurage de la surface habitable pour les locations",
  description: "Le diagnostic Loi Boutin permet de certifier la surface habitable d'un logement mis en location. Ce mesurage est obligatoire pour toute location à usage de résidence principale.",
  longDescription: [
    "La loi Boutin du 25 mars 2009 a marqué une avancée significative dans la protection des locataires en imposant de mentionner la surface habitable dans tout contrat de location d'un logement vide à usage de résidence principale. Cette obligation légitime vise à éviter les surfacturations de loyer basées sur des estimations surestimées. La loi ALUR de 2014 a renforcé ces dispositions en rendant obligatoire l'indication de la surface habitable dans toutes les annonces immobilières de location et en prévoyant des recours en cas d'erreur. Cette protection législative permet aux futurs locataires de comparer objectivement les offres de location basées sur des surfaces fiables et vérifiées.",
    "La surface habitable (ou surface Boutin) correspond à la surface de plancher construite totale, déduction faite des surfaces occupées par les éléments structurels : murs, cloisons, marches et cages d'escaliers, gaines, conduits, embrasures de portes et fenêtres. Le calcul exclut également les combles non aménagés, caves, sous-sols, remises, garages, places de stationnement, terrasses, loggias, balcons, séchoirs extérieurs, vérandas, et locaux communs de la copropriété. La méthode de calcul est plus restrictive que celle de la loi Carrez, rendant généralement la surface Boutin inférieure. ENEOS HABITAT effectue ces mesurages avec précision pour garantir une surface habitable fiable et léale.",
    "Les enjeux légaux de la surface Boutin sont importants pour les locataires. Si la surface réelle du logement est inférieure de plus de 5% à celle mentionnée dans le bail, le locataire peut demander une réduction du loyer proportionnelle à la différence, dans un délai de 6 mois à compter de la prise d'effet du bail. De plus, depuis la loi ALUR, l'obligation de mentionner la surface habitable dans les annonces de location est stricte et soumise à des règles précises. Un certificat de surface habitable établi par un professionnel certifié constitue une protection mutuelle pour les bailleurs et les locataires, en prévenant les litiges.",
  ],
  image: "/images/carrez.jpg",
  obligatoryFor: [
    "Location d'un logement vide à usage de résidence principale",
    "Mention obligatoire dans le contrat de bail",
    "Location meublée (recommandé)",
    "Bail mobilité",
  ],
  validity: "Illimitée (sauf travaux)",
  validityDetails: "Le certificat de surface habitable est valable sans limite de durée, tant que des travaux modifiant la superficie n'ont pas été réalisés. Tout agrandissement ou modification nécessite un nouveau mesurage.",
  applicableTo: "Logements mis en location",
  price: "À partir de 60€",
  documents: [
    "Attestation de surface habitable",
    "Plan détaillé du logement",
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
      description: "Le diagnostiqueur mesure toutes les pièces du logement avec précision.",
    },
    {
      title: "Calcul de la surface",
      description: "La surface habitable est calculée selon les critères définis par la loi Boutin.",
    },
    {
      title: "Remise de l'attestation",
      description: "Vous recevez une attestation officielle mentionnant la surface habitable du logement.",
    },
  ],
  faq: [
    {
      question: "Quelle est la différence entre surface Carrez et surface habitable ?",
      answer: "La surface habitable (Boutin) est généralement inférieure à la surface Carrez car elle exclut davantage d'éléments : épaisseur des murs, cloisons, embrasures de portes et fenêtres. De plus, la loi Carrez s'applique à la vente en copropriété tandis que la loi Boutin s'applique à la location.",
    },
    {
      question: "Que se passe-t-il si la surface mentionnée dans le bail est erronée ?",
      answer: "Si la surface réelle est inférieure de plus de 5% à celle mentionnée dans le bail, le locataire peut demander une diminution de loyer proportionnelle dans un délai de 6 mois à compter de la prise d'effet du bail.",
    },
    {
      question: "La surface habitable doit-elle figurer dans les annonces ?",
      answer: "Oui, depuis la loi ALUR de 2014, la surface habitable doit obligatoirement être mentionnée dans toutes les annonces de location de logements vides à usage de résidence principale.",
    },
  ],
}

export default function BoutinPage() {
  return <ServicePageTemplate service={boutinService} />
}
