export const getPriceModel = (model: string) =>
  model === "FIXED" ? "Price" : model === "FROM" ? "Starting at" : "Consult Price"
