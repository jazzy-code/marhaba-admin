"use client"

import { useEffect } from "react"

import Script from "next/script"

const GoogleTranslate = () => {
  useEffect(() => {
    // Definimos la función global que llamará el script de Google
    window.googleTranslateElementInit = () => {
      new window.google.translate.TranslateElement(
        {
          pageLanguage: "en", // Idioma original de tu app
          includedLanguages: "en,es,ar", // Idiomas permitidos
          layout: window.google.translate.TranslateElement.InlineLayout.SIMPLE,
          autoDisplay: false
        },
        "google_translate_element"
      )
    }
  }, [])

  return (
    <div className="p-2">
      {/* Aquí es donde aparecerá el selector de Google */}
      <div id="google_translate_element"></div>

      {/* Cargamos el script de Google de forma optimizada */}
      <Script
        src="//translate.google.com/translate_a/element.js?cb=googleTranslateElementInit"
        strategy="afterInteractive"
      />
    </div>
  )
}

export default GoogleTranslate

// Tipado para TypeScript (opcional pero recomendado)
declare global {
  interface Window {
    google: any
    googleTranslateElementInit: () => void
  }
}
