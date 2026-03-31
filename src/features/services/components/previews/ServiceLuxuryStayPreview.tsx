"use client"

import { BedDouble, House, Users } from "lucide-react"

import ServiceBasePreviewWrapper from "../previewsHelpers/ServiceBasePreviewWrapper"

const ServiceLuxuryStayPreview = ({ service }: { service: any }) => {
  const characteristics = [
    { label: "Max. Guests", value: service.totalGuests, icon: <Users size={20} /> },
    { label: service.luxuryStayCategory.name, icon: <House size={20} /> },
    { label: service.luxuryStayRoom.name, icon: <BedDouble size={20} /> }
  ]

  return (
    <ServiceBasePreviewWrapper service={service} characteristics={characteristics}>
      <div>
        <h3 className="font-serif text-3xl text-brand-primary mb-8">Details</h3>
        <div className="text-brand-secondary/90 text-lg leading-[1.8] font-light space-y-6 max-w-3xl whitespace-pre-line break-all">
          {service.longDescription}
        </div>
      </div>
    </ServiceBasePreviewWrapper>
  )
}

export default ServiceLuxuryStayPreview
