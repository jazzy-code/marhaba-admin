import { getServices } from "@/api/services/services.server"
import ServicesPage from "@/features/services/ServicesPage"

export default async function Page() {
  const initialData = await getServices({ page: 1, size: 10 })
  return <ServicesPage initialData={initialData} />
}
