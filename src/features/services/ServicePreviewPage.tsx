"use client"

import { Button } from "@mui/material"
import { ArrowLeft } from "lucide-react"
import { useRouter } from "next/navigation"

import StatusBadge from "@/components/StatusBadge"

import ServiceBeautySpaPreview from "./components/previews/ServiceBeautySpaPreview"
import ServiceGolfPreview from "./components/previews/ServiceGolfPreview"
import ServiceJetPreview from "./components/previews/ServiceJetPreview"
import ServiceLuxuryCarPreview from "./components/previews/ServiceLuxuryCarPreview"
import ServiceLuxuryStayPreview from "./components/previews/ServiceLuxuryStayPreview"
import ServiceMedicalCarePreview from "./components/previews/ServiceMedicalCarePreview"
import ServicePrivateEventPreview from "./components/previews/ServicePrivateEventPreview"
import ServicePrivateStaffPreview from "./components/previews/ServicePrivateStaffPreview"
import ServiceRealEstatePreview from "./components/previews/ServiceRealEstatePreview"
import ServiceSecurityGuardPreview from "./components/previews/ServiceSecurityGuardPreview"
import ServiceTrainingCoachPreview from "./components/previews/ServiceTrainingCoachPreview"
import ServiceYachtPreview from "./components/previews/ServiceYachtPreview"

const ServicePreviewPage = ({ service }: any) => {
  const router = useRouter()

  const serviceDetails = service && { ...service }
  const serviceFormatted = serviceDetails
    ? {
        ...serviceDetails,
        serviceType: serviceDetails.serviceType.key,
        ...serviceDetails[`service${serviceDetails.serviceType.key}`]
      }
    : null
  delete serviceFormatted?.[`service${serviceDetails.serviceType.key}`]

  const servicesPreviews: any = {
    RealEstate: <ServiceRealEstatePreview service={serviceFormatted} />,
    LuxuryCar: <ServiceLuxuryCarPreview service={serviceFormatted} />,
    LuxuryStay: <ServiceLuxuryStayPreview service={serviceFormatted} />,
    PrivateStaff: <ServicePrivateStaffPreview service={serviceFormatted} />,
    PrivateEvent: <ServicePrivateEventPreview service={serviceFormatted} />,
    SecurityGuard: <ServiceSecurityGuardPreview service={serviceFormatted} />,
    TrainingCoach: <ServiceTrainingCoachPreview service={serviceFormatted} />,
    Jet: <ServiceJetPreview service={serviceFormatted} />,
    Yacht: <ServiceYachtPreview service={serviceFormatted} />,
    MedicalCare: <ServiceMedicalCarePreview service={serviceFormatted} />,
    BeautySpa: <ServiceBeautySpaPreview service={serviceFormatted} />,
    Golf: <ServiceGolfPreview service={serviceFormatted} />
  }

  return (
    <div className="overflow-y-auto h-full py-10 px-4 sm:px-6 lg:px-8">
      <div className="mb-6 flex items-center justify-between pe-2 lg:pe-4">
        <Button
          startIcon={<ArrowLeft />}
          size="small"
          type="button"
          color="secondaryDark"
          onClick={() => router.back()}>
          Back to Services
        </Button>
        <div>
          <span className="font-semibold me-2">Status:</span>
          <StatusBadge status={service.serviceStatus.name} />
        </div>
      </div>
      {servicesPreviews[serviceFormatted.serviceType]}
    </div>
  )
}
export default ServicePreviewPage
