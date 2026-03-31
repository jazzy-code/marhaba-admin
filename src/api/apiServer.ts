import { auth } from "@clerk/nextjs/server"

export const apiServer = async (endpoint: string, options: RequestInit & { params?: Record<string, any> } = {}) => {
  try {
    const { getToken } = await auth()
    const token = await getToken()
    const apiUrl = process.env.API_URL
    const headers = new Headers(options.headers)

    if (token) {
      headers.set("Authorization", `Bearer ${token}`)
    }
    headers.set("Content-Type", "application/json")

    let url = `${apiUrl}/api${endpoint}`

    if (options.params) {
      const searchParams = new URLSearchParams()
      Object.entries(options.params).forEach(([key, value]) => {
        if (value !== undefined && value !== null) {
          searchParams.append(key, String(value))
        }
      })
      url += `?${searchParams.toString()}`
    }

    // --- PUNTO CRÍTICO: El fetch puede fallar aquí si el host no responde ---
    const response = await fetch(url, {
      ...options,
      headers
    })

    // Validar si el cuerpo tiene contenido antes de intentar parsear JSON
    const contentType = response.headers.get("content-type")
    let data = {}
    if (contentType && contentType.includes("application/json")) {
      data = await response.json()
    }

    if (!response.ok) {
      console.error("Error de API (Status):", response.status, data)
      return {
        error: true,
        status: response.status,
        ...data
      }
    }

    return data as any
  } catch (error) {
    console.error("Critical error in apiServer (API Down/Network Error):", error)

    // Retornamos un objeto consistente para que tu componente no rompa al intentar leer propiedades
    return {
      error: true,
      message: "The API is down or there is a network error",
      cause: error instanceof Error ? error.message : "Unknown"
    }
  }
}
