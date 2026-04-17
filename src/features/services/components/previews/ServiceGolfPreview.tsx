import { ChartBar, LandPlot, Users } from "lucide-react"

import ServiceBasePreviewWrapper from "../previewsHelpers/ServiceBasePreviewWrapper"

const ServiceGolfPreview = ({ service }: { service: any }) => {
  const characteristics = [
    { label: "Holes", value: service.totalHoles, icon: <LandPlot size={20} /> },
    { label: "Male Handicap", value: service.handicapRequiredMale, icon: <ChartBar size={20} /> },
    { label: "Female Handicap", value: service.handicapRequiredFemale, icon: <ChartBar size={20} /> },
    { label: "Max. players", value: service.maxPlayers, icon: <Users size={20} /> }
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

export default ServiceGolfPreview
