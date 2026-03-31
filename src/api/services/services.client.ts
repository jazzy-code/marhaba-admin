// services/services.client.ts
import { apiClient } from "@/api/apiClient"

export const getServices = async (params?: any) => {
  const { data } = await apiClient.get("/services", { params })
  return data
}

export const getService = async (id: string) => {
  const { data } = await apiClient.get(`/services/${id}`)
  return data
}

export const approveService = async (id: string) => {
  const { data } = await apiClient.put(`/services/${id}/approve`)
  return data
}
export const rejectService = async (id: string) => {
  const { data } = await apiClient.put(`/services/${id}/reject`)
  return data
}

export const getServiceStats = async () => {
  const { data } = await apiClient.get("/services/stats")
  return data
}
