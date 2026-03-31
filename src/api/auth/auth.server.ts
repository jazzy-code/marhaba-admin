import { apiServer } from "@/api/apiServer"
const prefix = "/auth"

export async function getAuthUser() {
  const data = await apiServer(`${prefix}/me`)
  if (data.error) return null
  return data
}
