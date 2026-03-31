import { getServices } from "@/api/services/services.server"
import { SERVICE_STATUS_PENDING_ID } from "@/constants"
import ServicesPage from "@/features/services/ServicesPage"

export default async function Page() {
  const initialData = await getServices({ page: 1, size: 10, statusIds: SERVICE_STATUS_PENDING_ID })
  return <ServicesPage initialData={initialData} statusId={SERVICE_STATUS_PENDING_ID} />
}
