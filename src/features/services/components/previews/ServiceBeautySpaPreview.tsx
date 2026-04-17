import { Bed, Clock4 } from "lucide-react"

import ServiceBasePreviewWrapper from "../previewsHelpers/ServiceBasePreviewWrapper"

const ServiceBeautySpaPreview = ({ service }: { service: any }) => {
  const characteristics = [
    { label: "Minutes", value: service.durationMinutes, icon: <Clock4 size={20} /> },
    { label: `Equipment ${service.hasEquipment ? "included" : "not included"}`, icon: <Bed size={20} /> }
  ]

  return <ServiceBasePreviewWrapper service={service} characteristics={characteristics}></ServiceBasePreviewWrapper>
}

export default ServiceBeautySpaPreview
