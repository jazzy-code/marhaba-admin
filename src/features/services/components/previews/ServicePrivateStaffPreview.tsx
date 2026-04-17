import { House, ShieldCheck, SquareUser } from "lucide-react"

import ServiceBasePreviewWrapper from "../previewsHelpers/ServiceBasePreviewWrapper"

const ServicePrivateStaffPreview = ({ service }: { service: any }) => {
  const characteristics = [
    { label: service.privateStaffRole?.name || "Private Staff", value: "Role:", icon: <SquareUser size={20} /> },
    { label: service.regime || "Private Staff", value: "Regime", icon: <House size={20} /> },
    service.hasVetting && { label: "Vetting completed", icon: <ShieldCheck size={20} /> }
  ]

  return <ServiceBasePreviewWrapper service={service} characteristics={characteristics}></ServiceBasePreviewWrapper>
}

export default ServicePrivateStaffPreview
