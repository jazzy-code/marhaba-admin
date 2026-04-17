"use client"

import { BrushCleaning, ClipboardClock, MessageCircleReply, Route, RouteOff } from "lucide-react"

import ServiceBasePreviewWrapper from "../previewsHelpers/ServiceBasePreviewWrapper"

const ServiceMedicalCarePreview = ({ service }: { service: any }) => {
  const characteristics = [
    {
      label: service.response,
      icon: service.response === "IMMEDIATELY" ? <MessageCircleReply size={20} /> : <ClipboardClock size={20} />
    },
    { label: `Cleanup ${service.isCleanupIncluded ? "included" : "not included"}`, icon: <BrushCleaning size={20} /> },
    {
      label: `Travel ${service.isServiceAndTravelIncluded ? "included" : "not included"}`,
      icon: service.isServiceAndTravelIncluded ? <Route size={20} /> : <RouteOff size={20} />
    }
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

export default ServiceMedicalCarePreview
