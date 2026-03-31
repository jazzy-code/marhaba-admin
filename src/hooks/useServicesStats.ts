import { useAuth } from "@clerk/nextjs"
import { useQuery } from "@tanstack/react-query"

import { setAuthToken } from "@/api/apiClient"
import { getServiceStats } from "@/api/services/services.client"

export const useServicesStats = () => {
  const { getToken } = useAuth()

  return useQuery({
    queryKey: ["services-stats"],
    queryFn: async () => {
      const token = await getToken()
      setAuthToken(token)
      return getServiceStats()
    },
    staleTime: 1000 * 60 * 5
  })
}
