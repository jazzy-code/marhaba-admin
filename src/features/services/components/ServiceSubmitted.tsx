"use client"

import { Button } from "@mui/material"
import { Clock } from "lucide-react"
import { useRouter } from "next/navigation"

const ServiceFormSubmitted = () => {
  const router = useRouter()
  return (
    <div className="flex-1 flex flex-col items-center justify-center p-4 sm:p-6 lg:p-8">
      <main className="w-full max-w-md bg-surface rounded-sm shadow-luxury overflow-hidden text-center animate-in fade-in zoom-in duration-700 ease-out">
        <div className="p-10 sm:p-12 flex flex-col items-center">
          <div className="mb-8">
            <div className="w-20 h-20 rounded-full bg-primary-gold/10 flex items-center justify-center text-primary-gold">
              <Clock className="w-12 h-12" />
            </div>
          </div>
          <h2 className="font-serif text-2xl sm:text-3xl text-text-heading mb-4">Service Submitted for Review!</h2>
          <p className="text-base text-text-body mb-6 font-light">Thank you for submitting your new service listing.</p>
          <div className="w-12 h-[1px] bg-border-subtle mb-6"></div>
          <p className="text-base text-text-heading mb-10 leading-relaxed">
            Our administration team will now review your service. You will receive an email notification once your
            service has been approved or if any further information is required.
          </p>
          <Button fullWidth color="deepBrown" size="large" variant="contained" onClick={() => router.push("/services")}>
            Return to Services
          </Button>
        </div>
      </main>
    </div>
  )
}

export default ServiceFormSubmitted
