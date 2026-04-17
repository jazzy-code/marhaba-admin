import { Compass, Gauge, Plane, RulerDimensionLine } from "lucide-react"

import ServiceBasePreviewWrapper from "../previewsHelpers/ServiceBasePreviewWrapper"

const ServiceJetPreview = ({ service }: { service: any }) => {
  const characteristics = [
    { label: service.jetCategory?.name || "Jet", icon: <Plane size={20} /> },
    { label: "Max. Passengers", value: service.passengersCapacity, icon: <Gauge size={20} /> },
    { label: "Km/h", value: service.maxSpeed, icon: <Gauge size={20} /> },
    { label: "NM", value: service.cv, icon: <Compass size={20} /> },
    { label: "Mt.", value: service.lengthMeters, icon: <RulerDimensionLine size={20} /> }
  ]

  return (
    <ServiceBasePreviewWrapper service={service} characteristics={characteristics}>
      <div>
        <h3 className="font-serif text-3xl text-brand-primary mb-8">More Details</h3>
        <div className="text-brand-secondary/90 text-lg leading-[1.8] font-light space-y-6 max-w-3xl whitespace-pre-line break-all"></div>
      </div>
    </ServiceBasePreviewWrapper>
  )
}

export default ServiceJetPreview
