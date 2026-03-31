"use client"

import { ReactNode } from "react"

import { MapPin, Share2 } from "lucide-react"
import Link from "next/link"

import { CUR_SYM } from "@/constants"
import { useCurrency } from "@/hooks/useCurrency"
import { getModality, getPriceModel } from "@/utils/formatServiceValues"

import { ServiceFeatures } from "../previewsHelpers/ServiceFeatures"

type CharacteristicType = {
  label: string
  value?: string
  icon?: ReactNode
}

interface ServiceBasePreviewWrapperProps {
  service: any
  characteristics: CharacteristicType[]
  children: ReactNode
}

const ServiceBasePreviewWrapper = ({ service, characteristics, children }: ServiceBasePreviewWrapperProps) => {
  const { formatStringCurrency } = useCurrency(service.currency)

  console.log(service)

  return (
    <main className="max-w-[1400px] mx-auto px-2 lg:px-4 pb-8 lg:pb-15">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
        <div className="lg:col-span-8 flex flex-col gap-12">
          <div className="space-y-4">
            <h1 className="font-serif text-5xl md:text-[3.5rem] text-brand-primary leading-tight wrap-break-word">
              {service.title}
            </h1>
            <p className="text-brand-secondary text-lg font-light tracking-wide uppercase wrap-break-word">
              {service.subtitle}
            </p>
            <div className="flex items-center gap-2 mt-2">
              <MapPin size={22} className="text-brand-secondary" />
              <span className="text-sm font-sans tracking-wide text-brand-secondary font-semibold uppercase">
                {service.city?.name}, {service.district}
              </span>
            </div>
            <div className="flex flex-wrap items-center gap-6 mt-8">
              {characteristics &&
                characteristics.length &&
                characteristics.map((characteristic: CharacteristicType, index: number) => {
                  return (
                    <div className="flex items-center gap-6" key={characteristic.label}>
                      <div className="flex items-center gap-2 text-brand-secondary">
                        {characteristic.icon}
                        <span className="text-sm font-sans tracking-wide uppercase">
                          {characteristic.value} {characteristic.label}
                        </span>
                      </div>
                      {index < characteristics.length && <div className="w-px h-4 bg-brand-border"></div>}
                    </div>
                  )
                })}
            </div>
          </div>

          <div className="grid grid-cols-4 grid-rows-2 gap-3 h-[600px] rounded-sm overflow-hidden">
            <div className="col-span-2 row-span-2 relative group overflow-hidden">
              <img
                alt="Villa Exterior"
                className="w-full h-full object-cover transition-transform duration-[1.5s] group-hover:scale-105"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuBqwEtE1RkXqJDYUqmVIrplJOUvnNAJxzC-MY7eDPqiqViRnY6yHL5y8xfXtRwAfKuwBKoDKMMJhBIF2o6NRO6cYhBgzx5zJHYm-W7PFIyr6ktES0wwOoisuufrp5rAxuCgy205h9U6DOY-sdhTOvSlvOIp1o4mLYV6zrms0orR-attdSSeUFNNr6Xdg82eTN7qyczaNCINb2iigrG_dAQdDvUnltO03ghui4o4xwNy-foq9glR4Ott9WnD8faFnZfhc-Ht_Qg3ZA8"
              />
            </div>
            <div className="col-span-2 row-span-1 relative group overflow-hidden">
              <img
                alt="Interior Living"
                className="w-full h-full object-cover transition-transform duration-[1.5s] group-hover:scale-105"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuDd61jTUKx5l-tDc9T6N_3k16rOyj4iX4tq-p7Jr1IOwv-qUWORxoFNONHvdGFbiQ93fYPBEcti0oNBgq93QPlmad-nZO8sf9AGAlzZXij0lEbdn0pdiChcX-kcwtTiSn7nRfvTtm474EswOslAx7c-CPH4KeDjgL0tBqnMzz3Qx4WQxr207OqM3WH5OaYceW_buKMBhzl_WjjUWBCCTOughHN-jJoB5UVhOvEDnB389MeHXCgk_wfjtAsPDjaUYJg8vh2HH2sqry0"
              />
            </div>
            <div className="col-span-1 row-span-1 relative group overflow-hidden">
              <img
                alt="Terrace View"
                className="w-full h-full object-cover transition-transform duration-[1.5s] group-hover:scale-105"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuD2Xg-XcogWRxefxJ5_M7SRptbEo9Q1VVgz4oqle4ZGzkv-NsBMtzWnwq9pAwafmsIk0NFKYsuNW67e5RfXusM5boTb8eNZcvjKz42BGYUGhEcx0ZfyBup-jWzj9gpyod79Ujn2a2AmAJOxGAniGzumBuXS2ToULLCK41_rIYTtOU9pVdVUHXz9W9sJBkKryztCyryUMlkZhh7Izlt3PPafLcpmq-KxvQcuFVr8BlJMh5PKh4Xh6d2f3bZVq8DvA3lU8bCyQyxvMAY"
              />
            </div>
            <div className="col-span-1 row-span-1 relative group overflow-hidden">
              <img
                alt="Infinity Pool"
                className="w-full h-full object-cover transition-transform duration-[1.5s] group-hover:scale-105"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuDKm_HxBMUsQ02vW6jhwXi9_mAUtJFclxOo5QlBEA8p1pkm8AuGdN1UoLM4FFaPrShW8UuQRbpcgDFwrPCY-ozp9uQaREed1twY0kn-EO70PxroLgNFSgBcukliCqkFtY--cQSd4mMGkKXeZdhHJWpP6XGC8YIsBO0sOLfJ8iTlTtuM2QD9SEsEch3cDUGb_XTWB65Y47MukORDEya5V-pQUuzWhwBaKaWOeuSNM4TZ2FZkXiUiob1UVONwGxps_VhI_gVGj7SNnTc"
              />
              <div className="absolute inset-0 bg-brand-primary/20 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                <button className="bg-white/95 px-4 py-2 text-[10px] uppercase tracking-widest font-medium">
                  View All Photos
                </button>
              </div>
            </div>
          </div>

          <section className="flex flex-col sm:flex-row items-center justify-between py-10 border-y border-brand-border">
            <div className="flex  items-center gap-6">
              <div className="h-16 w-16 rounded-full overflow-hidden border border-brand-border ring-4 ring-page">
                <img
                  alt="Marbella Estate Group"
                  className="w-full h-full object-cover"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuB5pl4cbt7VtD6w3fLvtG_NIc1--Zv8mJNI8WBS3lLCJ4MetARSqJL-xDNy3CIn3NLrPlrY9otCmvfAPHlIoEbfmwxxCivpZWItW0GC5gGEKOYR-F3KgazSHdDC9mXLQ93obqSZjXbgURV4eOOGqL_J_Z0Cv_QkqumxFcRaX4hVc-m8fxmIBLsJre7RFdBaq-u6GFJfQ6B4hTjWlgKODCs5O7iGzGaB0bB_ENwf34Ndx9hcSjaMg9ktHvXf6a3IEI7aQf2DGrZXHlQ"
                />
              </div>
              <div>
                <p className="text-[10px] uppercase tracking-[0.2em] text-brand-secondary mb-1">Listed by</p>
                <p className="font-serif text-2xl text-brand-primary">
                  {service.user.firstName} {service.user.lastName}
                </p>
              </div>
            </div>
            {service.exclusiveListing && (
              <div className="flex mt-8 sm:mt-0 items-center gap-2 px-5 py-2 border border-brand-border rounded-sm">
                <span className="material-symbols-outlined icon-filled text-brand-accent text-[16px]">verified</span>
                <span className="text-[10px] uppercase tracking-widest font-semibold text-brand-primary">
                  Exclusive Listing
                </span>
              </div>
            )}
          </section>

          <section>
            <h3 className="font-serif text-3xl text-brand-primary mb-8">Details</h3>
            <div className="text-brand-secondary/90 text-lg leading-[1.8] font-light space-y-6 max-w-3xl whitespace-pre-line break-all">
              {service.longDescription}
            </div>
          </section>

          {children && <section className="pt-10 border-t border-brand-border">{children}</section>}

          <ServiceFeatures service={service} />
        </div>
        <div className="lg:col-span-4 relative">
          <div className="sticky top-14 space-y-6">
            <div className="bg-brand-surface border border-brand-border/80 p-8 rounded-sm shadow-[0_4px_40px_-10px_rgba(47,32,3,0.06)]">
              <div className="mb-8 pb-6 border-b border-brand-border/50">
                <p className="text-[10px] uppercase tracking-[0.2em] text-brand-secondary mb-2">
                  {getPriceModel(service.priceModel)}
                </p>
                <span className="text-2xl lg:text-3xl font-serif text-brand-accent">
                  {service.priceModel === "CONSULT" ? (
                    "On Request"
                  ) : (
                    <>
                      {CUR_SYM[service.currency]}
                      {formatStringCurrency(service.price)}
                    </>
                  )}
                </span>
              </div>
              <div className="space-y-4 mb-10">
                <div className="flex justify-between items-center bg-page/50 p-4 border border-brand-border rounded-sm">
                  <span className="text-[10px] uppercase tracking-widest font-medium text-brand-secondary">
                    Modality
                  </span>
                  <span className="text-sm font-medium text-brand-primary">{getModality(service.modality)}</span>
                </div>
                {service.reference && (
                  <div className="flex justify-between items-center bg-page/50 p-4 border border-brand-border rounded-sm">
                    <span className="text-[10px] uppercase tracking-widest font-medium text-brand-secondary">
                      Reference
                    </span>
                    <span className="text-sm font-medium text-brand-primary">{service.reference}</span>
                  </div>
                )}
              </div>
              <div className="flex space-y-3">
                <Link
                  href={service.callToActionUrl || "#"}
                  className="flex justify-center w-full bg-brand-primary text-white py-5 rounded-sm text-xs uppercase tracking-[0.2em] font-medium hover:opacity-95 transition-all shadow-lg shadow-brand-primary/10">
                  {service.callToActionText || "Request More Info"}
                </Link>
              </div>
              <div className="mt-8 pt-6 border-t border-brand-border flex justify-between items-center text-[10px] uppercase tracking-widest text-brand-secondary">
                <div className="flex items-center gap-2">
                  <Share2 size={22} className="text-brand-secondary/60" />
                  Share
                </div>
                {/* <div className="flex items-center gap-2">
                  <Heart size={22} className="text-brand-secondary/60" />
                  Save
                </div> */}
              </div>
            </div>
            <div className="bg-white border border-brand-border/60 p-6 rounded-sm flex items-start gap-5">
              <div className="bg-page p-2.5 rounded-full text-brand-accent shrink-0 border border-brand-border/50">
                <span className="material-symbols-outlined text-[20px]">diamond</span>
              </div>
              <div>
                <h4 className="text-xs font-bold uppercase tracking-widest text-brand-primary mb-2">
                  Private Acquisition
                </h4>
                <p className="text-xs text-brand-secondary leading-relaxed mb-4 font-light">
                  Interested in off-market opportunities? Our bespoke advisory service handles high-value transactions
                  with full discretion.
                </p>
                <a
                  className="text-[10px] font-bold uppercase tracking-widest text-brand-primary border-b border-brand-primary/30 hover:border-brand-primary pb-0.5 transition-colors"
                  href="#">
                  Speak with an Advisor
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}

export default ServiceBasePreviewWrapper
