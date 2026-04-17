import { Calendar, PartyPopper, UsersRound } from "lucide-react"

import ServiceBasePreviewWrapper from "../previewsHelpers/ServiceBasePreviewWrapper"

const ServicePrivateEventPreview = ({ service }: { service: any }) => {
  const characteristics = [
    { label: service.privateEventType?.name || "Private Event", icon: <PartyPopper size={20} /> },
    { label: "Max. Capacity", value: service.capacity, icon: <UsersRound size={20} /> },
    { label: "Lead Time Days", value: service.leadTimeDays, icon: <Calendar size={20} /> }
  ]

  return <ServiceBasePreviewWrapper service={service} characteristics={characteristics}></ServiceBasePreviewWrapper>
}

export default ServicePrivateEventPreview
