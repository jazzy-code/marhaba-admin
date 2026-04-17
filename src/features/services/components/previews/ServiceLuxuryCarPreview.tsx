import { Car, ChessKnight, Fuel, Gauge } from "lucide-react"

import ServiceBasePreviewWrapper from "../previewsHelpers/ServiceBasePreviewWrapper"

const ServiceLuxuryCarPreview = ({ service }: { service: any }) => {
  const characteristics = [
    { label: service.brand, icon: <Car size={20} /> },
    { label: service.transmission, icon: <Gauge size={20} /> },
    { label: service.motorType, icon: <Fuel size={20} /> },
    { label: "Horsepower", value: service.cv, icon: <ChessKnight size={20} /> }
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

export default ServiceLuxuryCarPreview
