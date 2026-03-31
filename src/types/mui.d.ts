import "@mui/core/styles"
// This is to import DatePicker types
import type {} from "@mui/x-date-pickers/themeAugmentation"

declare module "@mui/material/styles" {
  interface Palette {
    dark: Palette["primary"]
    secondaryDark: Palette["primary"]
    slate: Palette["primary"]
    light: Palette["primary"]
    neutral: Palette["primary"]
    neutralDark: Palette["primary"]
    deepBrown: Palette["primary"]
  }
  interface PaletteOptions {
    dark: PaletteOptions["primary"]
    secondaryDark: PaletteOptions["primary"]
    slate: PaletteOptions["primary"]
    light: PaletteOptions["primary"]
    neutral: PaletteOptions["primary"]
    neutralDark: PaletteOptions["primary"]
    deepBrown: PaletteOptions["primary"]
  }
}

// This is to enable new colors in Button
declare module "@mui/material/Button" {
  interface ButtonPropsColorOverrides {
    dark: true
    secondaryDark: true
    slate: true
    light: true
    neutral: true
    neutralDark: true
    deepBrown: true
  }
}

// This is to enable new colors in Button
declare module "@mui/material/Chip" {
  interface ChipPropsColorOverrides {
    neutral: true
  }
}
