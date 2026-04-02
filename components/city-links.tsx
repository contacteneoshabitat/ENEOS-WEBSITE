import Link from "next/link"

const cities = [
  { slug: "bordeaux", name: "Bordeaux" },
  { slug: "merignac", name: "Mérignac" },
  { slug: "pessac", name: "Pessac" },
  { slug: "arcachon", name: "Arcachon" },
  { slug: "libourne", name: "Libourne" },
  { slug: "perigueux", name: "Périgueux" },
  { slug: "agen", name: "Agen" },
  { slug: "dax", name: "Dax" },
  { slug: "saintes", name: "Saintes" },
  { slug: "langon", name: "Langon" },
  { slug: "blaye", name: "Blaye" },
  { slug: "mont-de-marsan", name: "Mont-de-Marsan" },
  { slug: "bayonne", name: "Bayonne" },
  { slug: "rochefort", name: "Rochefort" },
  { slug: "la-reole", name: "La Réole" },
  { slug: "bazas", name: "Bazas" },
  { slug: "jonzac", name: "Jonzac" },
  { slug: "royan", name: "Royan" },
  { slug: "cognac", name: "Cognac" },
  { slug: "bergerac", name: "Bergerac" },
]

export function CityLinks() {
  return (
    <div className="grid grid-cols-2 gap-2">
      {cities.map((city) => (
        <Link
          key={city.slug}
          href={`/diagnostic-immobilier-${city.slug}`}
          className="text-sm text-white/70 hover:text-white transition-colors"
        >
          → {city.name}
        </Link>
      ))}
    </div>
  )
}
