import { BedSingle, Clock4, Gauge, RulerDimensionLine, Users } from "lucide-react"

import ServiceBasePreviewWrapper from "../previewsHelpers/ServiceBasePreviewWrapper"

const ServiceYachtPreview = ({ service }: { service: any }) => {
  const characteristics = [
    { label: "Max. Passengers", value: service.passengersCapacity, icon: <Users size={20} /> },
    { label: `${service.minHours} - ${service.maxHours} Hours`, icon: <Clock4 size={20} /> },
    { label: "Mt.", value: service.lengthMeters, icon: <RulerDimensionLine size={20} /> },
    { label: "Km/h", value: service.maxSpeed, icon: <Gauge size={20} /> },
    service.totalCabins && { label: "Cabins", value: service.totalCabins, icon: <BedSingle size={20} /> }
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

export default ServiceYachtPreview
