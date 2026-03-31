export const getPriceModel = (model: string) => (model === "FROM" ? "Price Starting At" : "Price")

export const getModality = (modality: string) => {
  if (modality === "SALE") return "SALE"
  if (modality === "RENT") return "RENT"
  return "SERVICE"
}
