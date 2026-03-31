"use server"

import { apiServer } from "@/api/apiServer"
const prefix = "/services"

interface ServicesParams {
  page?: any
  size?: any
  sort?: any
  order?: any
  statusIds?: any
}

export async function getServices(params: ServicesParams) {
  const data = await apiServer(prefix, { params })
  if (data.error) return null
  return data
}

export async function getServicesBySlug(slug: string, params: ServicesParams) {
  const data = await apiServer(prefix, { params: { ...params, slug: slug } })
  if (data.error) return null
  return data
}

export async function getService(id: number) {
  const data = await apiServer(`${prefix}/${id}`)
  if (data.error) return null
  return data
}

export async function getServiceTypes() {
  const data = await apiServer(`${prefix}/types`)
  if (data.error) return []
  return data
}

export async function getServiceStatus() {
  const data = await apiServer(`${prefix}/status`)
  if (data.error) return []
  return data
}

export async function getServicesStats() {
  const data = await apiServer(`${prefix}/stats`)
  if (data.error) return null
  return data
}
