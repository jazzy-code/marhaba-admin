import { CalendarRange, ShieldCheck, ShieldX, SquareUser, User, VenetianMask } from "lucide-react"

import ServiceBasePreviewWrapper from "../previewsHelpers/ServiceBasePreviewWrapper"

const ServiceSecurityGuardPreview = ({ service }: { service: any }) => {
  const characteristics = [
    { label: service.securityGuardBackgroundType?.name || "Security Guard", icon: <User size={20} /> },
    {
      label: service.discretion,
      icon: service.discretion === "INCOGNITO" ? <VenetianMask size={20} /> : <SquareUser size={20} />
    },
    {
      label: service.isArmed ? "Armed" : "Unarmed",
      icon: service.isArmed ? <ShieldCheck size={20} /> : <ShieldX size={20} />
    },
    {
      label: "Min. Contract",
      value: `${service.minContractPeriod} ${service.minContractUnity}`,
      icon: <CalendarRange size={20} />
    }
  ]

  return <ServiceBasePreviewWrapper service={service} characteristics={characteristics}></ServiceBasePreviewWrapper>
}

export default ServiceSecurityGuardPreview
