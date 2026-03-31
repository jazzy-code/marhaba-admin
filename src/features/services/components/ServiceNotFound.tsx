"use client"

import { Button } from "@mui/material"
import { SearchX } from "lucide-react"
import { useRouter } from "next/navigation"

const ServiceNotFound = () => {
  const router = useRouter()
  return (
    <div className="flex-1 flex flex-col items-center justify-center p-4 sm:p-6 lg:p-8">
      <main className="w-full max-w-md bg-surface rounded-sm shadow-luxury overflow-hidden text-center animate-in fade-in zoom-in duration-700 ease-out">
        <div className="p-10 sm:p-12 flex flex-col items-center">
          <div className="mb-8">
            <div className="w-20 h-20 rounded-full bg-primary-gold/10 flex items-center justify-center text-primary-gold">
              <SearchX className="w-12 h-12" />
            </div>
          </div>
          <h2 className="font-serif text-2xl sm:text-3xl text-text-heading mb-4">Service Not Found</h2>
          <br />
          <p className="text-base text-text-body mb-6 font-light">
            The service you are looking for was not found. Please feel free to verify that the service you are looking
            for is listed in <b className="font-bold">{'"Services"'}</b>
          </p>
          <div className="w-12 h-[1px] bg-border-subtle mb-6"></div>
          <Button fullWidth color="deepBrown" size="large" variant="contained" onClick={() => router.push("/services")}>
            Return to Services
          </Button>
        </div>
      </main>
    </div>
  )
}

export default ServiceNotFound
