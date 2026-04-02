import Link from "next/link"

const services = [
  { slug: "dpe", name: "DPE" },
  { slug: "amiante", name: "Amiante" },
  { slug: "plomb", name: "Plomb" },
  { slug: "electricite", name: "Électricité" },
  { slug: "gaz", name: "Gaz" },
  { slug: "termites", name: "Termites" },
  { slug: "erp", name: "ERP" },
  { slug: "carrez", name: "Loi Carrez" },
  { slug: "boutin", name: "Loi Boutin" },
  { slug: "audit-energetique", name: "Audit Énergétique" },
]

export function ServiceLinks() {
  return (
    <div className="space-y-2">
      {services.map((service) => (
        <Link
          key={service.slug}
          href={`/services/${service.slug}`}
          className="block text-sm text-white/70 hover:text-white transition-colors"
        >
          → {service.name}
        </Link>
      ))}
    </div>
  )
}
