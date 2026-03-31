import * as LucideIcons from "lucide-react"

export const ServiceFeatures = ({ service }: { service: any }) => {
  const ALLOWED_MANYTOMANY_KEYS = ["HasAmenities", "HasServices", "HasQualifications"]

  // Search for all keys that match with the manyToMany relations
  const featureKeys = Object.keys(service).filter((key) => {
    const isMatch = ALLOWED_MANYTOMANY_KEYS.some((pattern) => key.includes(pattern))
    const hasData = Array.isArray(service[key]) && service[key].length > 0
    return isMatch && hasData
  })

  if (featureKeys.length === 0) return null

  return featureKeys.map((key) => {
    const features = service[key]
    const sectionTitle = key.split("Has")[1] || key

    return (
      <section key={key} className="pt-10 border-t border-brand-border">
        <h3 className="font-serif text-3xl text-brand-primary mb-12">{sectionTitle}</h3>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-y-8 gap-x-4">
          {features.map((item: any, index: number) => {
            // Buscamos la propiedad que es un objeto (donde vive el icono y nombre)
            const detailKey = Object.keys(item).find((k) => typeof item[k] === "object")
            const detail = detailKey ? item[detailKey] : null

            if (!detail) return null

            const LucideIcon = (LucideIcons as any)[detail.lucideIcon] || LucideIcons.HelpCircle

            return (
              <div key={detail.id || index} className="flex flex-col gap-4">
                <span className="text-brand-accent">
                  <LucideIcon size={32} strokeWidth={1.5} />
                </span>
                <div className="space-y-1">
                  <h4 className="text-[11px] uppercase tracking-widest font-bold text-brand-primary">{detail.name}</h4>
                </div>
              </div>
            )
          })}
        </div>
      </section>
    )
  })
}
