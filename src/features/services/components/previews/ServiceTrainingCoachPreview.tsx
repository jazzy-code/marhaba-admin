import { BicepsFlexed, Dumbbell, MapPinHouse } from "lucide-react"

import ServiceBasePreviewWrapper from "../previewsHelpers/ServiceBasePreviewWrapper"

const ServiceTrainingCoachPreview = ({ service }: { service: any }) => {
  const characteristics = [
    { label: service.level, icon: <BicepsFlexed size={20} /> },
    { label: `Place: ${service.place}`, icon: <MapPinHouse size={20} /> },
    { label: `Equipment: ${service.equipment}`, icon: <Dumbbell size={20} /> }
  ]

  return <ServiceBasePreviewWrapper service={service} characteristics={characteristics}></ServiceBasePreviewWrapper>
}

export default ServiceTrainingCoachPreview
