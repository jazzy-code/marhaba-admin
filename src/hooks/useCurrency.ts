import { useCallback, useMemo } from "react"

import { getLocaleByCurrency, parseToNumber } from "@/utils/numbers"

export const useCurrency = (currency = "EUR") => {
  const locale = useMemo(() => getLocaleByCurrency(currency), [currency])

  const numberFormatConfig = useMemo(
    () => ({
      style: "decimal" as const, // Fix TS
      maximumFractionDigits: 2,
      minimumFractionDigits: 2,
      useGrouping: true
    }),
    []
  )

  const formatStringCurrency = useCallback(
    (amount: string | number) => {
      const numeric = parseToNumber(amount, currency)
      return numeric.toLocaleString(locale, numberFormatConfig)
    },
    [locale, currency, numberFormatConfig]
  )

  const formatNumericCurrency = useCallback((value: string | number) => parseToNumber(value, currency), [currency])

  return { formatStringCurrency, formatNumericCurrency, locale }
}
