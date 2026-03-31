"use client"

import { Bath, Bed, BrickWall, LandPlot, Toilet, Users } from "lucide-react"

import { formatNumber } from "@/utils/numbers"

import ServiceBasePreviewWrapper from "../previewsHelpers/ServiceBasePreviewWrapper"

const ServiceRealEstatePreview = ({ service }: { service: any }) => {
  const saleCharacteristics = [
    { label: "Bedrooms", value: service.rooms, icon: <Bed size={20} /> },
    { label: "Bathrooms", value: service.fullBathrooms, icon: <Bath size={20} /> },
    { label: "Half Bathrooms", value: service.halfBathrooms, icon: <Toilet size={20} /> },
    { label: "m² Built", value: formatNumber(service.surfaceBuiltMt2), icon: <BrickWall size={20} /> },
    { label: "m² Surface", value: formatNumber(service.surfacePlotMt2), icon: <LandPlot size={20} /> }
  ]

  const rentCharacteristics = [
    { label: "Max. Guests", value: service.guestsCapacity, icon: <Users size={20} /> },
    { label: "Bedrooms", value: service.rooms, icon: <Bed size={20} /> },
    { label: "Bathrooms", value: service.fullBathrooms, icon: <Bath size={20} /> },
    { label: "Half Bathrooms", value: service.halfBathrooms, icon: <Toilet size={20} /> },
    { label: "m² Surface", value: formatNumber(service.surfacePlotMt2), icon: <LandPlot size={20} /> }
  ]

  return (
    <ServiceBasePreviewWrapper
      service={service}
      characteristics={service.modality === "SALE" ? saleCharacteristics : rentCharacteristics}>
      <div>
        <h3 className="font-serif text-3xl text-brand-primary mb-8">Details</h3>
        <div className="text-brand-secondary/90 text-lg leading-[1.8] font-light space-y-6 max-w-3xl whitespace-pre-line break-all">
          {service.longDescription}
        </div>
      </div>
    </ServiceBasePreviewWrapper>
  )
}

export default ServiceRealEstatePreview
