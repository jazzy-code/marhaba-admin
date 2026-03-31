import { getService } from "@/api/services/services.server"
import ServicePreviewPage from "@/features/services/ServicePreviewPage"

export default async function Page({ params }: { params: Promise<{ id: number }> }) {
  const { id } = await params

  const service = await getService(id)

  return <ServicePreviewPage service={service} />
}
