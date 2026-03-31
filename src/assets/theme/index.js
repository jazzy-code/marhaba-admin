import { createTheme } from "@mui/material"
import { ChevronDown } from "lucide-react"

const theme = createTheme({
  typography: {
    fontFamily: "Manrope, sans-serif"
  },
  palette: {
    primary: {
      main: "#b08d57"
    },
    secondaryDark: {
      main: "#6b625c"
    },
    neutralDark: {
      main: "#000000",
      contrastText: "#6D6D7340"
    },
    neutral: {
      main: "#6D6D7340",
      contrastText: "#6D6D73"
    },
    light: {
      main: "#FCFCFC",
      contrastText: "#6D6D73"
    },
    deepBrown: {
      main: "#2f2003",
      contrastText: "#ffffff"
    }
  },
  components: {
    MuiAlert: {
      styleOverrides: {
        root: {
          borderRadius: ".75rem"
        }
      }
    },
    MuiFormHelperText: {
      styleOverrides: {
        root: {
          marginLeft: 0
        }
      }
    },
    MuiButton: {
      variants: [
        {
          props: { size: "small" },
          style: {
            height: "44px",
            paddingLeft: "1rem",
            paddingRight: "1rem",
            fontSize: ".875rem"
            // background: 'linear-gradient(180deg, #064593 0%, #1FBBF1 100%) !important'
          }
        },
        {
          props: { size: "medium" },
          style: {
            height: "46px"
            // background: 'linear-gradient(180deg, #064593 0%, #1FBBF1 100%) !important'
          }
        },
        {
          props: { size: "large" },
          style: {
            fontSize: "1rem",
            height: "50px"
          }
        }
      ],
      styleOverrides: {
        root: {
          borderRadius: "12px",
          textTransform: "none",
          whiteSpace: "nowrap",
          minWidth: "auto !important"
        }
      }
    },
    MuiBackdrop: {
      styleOverrides: {
        root: {
          zIndex: 10
        }
      }
    },
    MuiInputLabel: {
      styleOverrides: {
        root: {
          fontSize: ".75rem !important",
          fontWeight: "600 !important",
          letterSpacing: ".05em !important",
          color: "#2f2023 !important",
          textTransform: "uppercase !important",
          marginBottom: "4px"
        },
        asterisk: {
          color: "red"
        }
      }
    },
    MuiTableRow: {
      styleOverrides: {
        root: {
          backgroundColor: "transparent !important"
        }
      }
    },
    MuiFormControl: {
      styleOverrides: {
        root: {
          width: "100% !important",
          "&.MuiTextField-root": {
            width: "auto"
          }
        }
      }
    },
    MuiDialogTitle: {
      styleOverrides: {
        root: {
          boxShadow: "0px 3px 11px 0px rgba(86, 86, 86, 0.31)",
          webkitBoxShadow: "0px 3px 11px 0px rgba(86, 86, 86, 0.31)",
          mozBoxShadow: "0px 3px 11px 0px rgba(86, 86, 86, 0.31)",
          justifyContent: "space-between",
          alignItems: "center",
          display: "flex"
        }
      }
    },
    MuiList: {
      styleOverrides: {
        root: {
          "&.MuiMultiSectionDigitalClockSection-root": {
            width: "auto",
            "&:after": {
              height: "auto"
            }
          }
        }
      }
    },
    MuiDialogContent: {
      styleOverrides: {
        root: {
          padding: "20px 24px !important"
        }
      }
    },
    MuiDialogActions: {
      styleOverrides: {
        root: {
          padding: "1.5rem !important",
          justifyContent: "center !important",
          "&>:not(style)~:not(style)": {
            marginLeft: "1.5rem"
          },
          "&.MuiPickersLayout-actionBar": {
            padding: "0 !important"
          }
        }
      }
    },
    MuiDivider: {
      styleOverrides: {
        wrapper: {
          display: "flex",
          alignItems: "center",
          fontSize: "1.2rem"
        }
      }
    },
    MuiInputBase: {
      variants: [
        {
          props: { size: "small" },
          style: {
            height: "44px",
            "&.MuiSelect-root": {
              minHeight: "44px",
              height: "auto"
            }
          }
        },
        {
          props: { multiline: true },
          style: {
            height: "auto !important"
          }
        }
      ],
      defaultProps: {
        size: "small"
      },
      styleOverrides: {
        root: {
          color: "#6b625c !important",
          backgroundColor: "#F9F9F6"
        },
        adornedStart: {
          paddingLeft: ".75rem !important"
        },
        input: {
          "&.MuiInputBase-inputAdornedStart": {
            paddingLeft: ".4rem !important"
          }
        }
      }
    },
    MuiSelect: {
      defaultProps: {
        IconComponent: ChevronDown
      },
      styleOverrides: {
        icon: {
          top: "calc(50% - 10px)"
        }
      }
    },
    MuiFormLabel: {
      styleOverrides: {
        root: {
          fontSize: ".75rem !important",
          fontWeight: "600 !important",
          letterSpacing: ".05em !important",
          color: "#2f2023 !important",
          textTransform: "uppercase !important"
        },
        asterisk: {
          color: "red"
        }
      }
    },
    MuiChip: {
      variants: [
        {
          props: { color: "warning", variant: "filled" },
          style: {
            color: "#fe9300",
            backgroundColor: "#FAB6071A",
            "&.MuiChip-clickable:hover": {
              color: "white"
            }
          }
        },
        {
          props: { color: "error", variant: "filled" },
          style: {
            color: "#cb0707",
            backgroundColor: "#D32F2F1A",
            "&.MuiChip-clickable:hover": {
              color: "white"
            }
          }
        },
        {
          props: { color: "success", variant: "filled" },
          style: {
            color: "#08840f",
            backgroundColor: "#2E7D321A",
            "&.MuiChip-clickable:hover": {
              color: "white"
            }
          }
        },
        {
          props: { color: "info", variant: "filled" },
          style: {
            color: "#0288d1",
            backgroundColor: "#0288d11A",
            "&.MuiChip-clickable:hover": {
              color: "white"
            }
          }
        }
      ],
      styleOverrides: {
        root: {
          fontWeight: "650 !important"
        }
      }
    },
    MuiPickersInputBase: {
      styleOverrides: {
        root: {
          borderRadius: "12px !important",
          height: "46px",
          marginTop: ".25rem"
        }
      }
    },
    MuiPickersLayout: {
      styleOverrides: {
        root: {},
        actionBar: {
          boxShadow: "none",
          "& .MuiButton-root": {
            "&:first-of-type": {
              background: "#FCFCFC !important",
              color: "#6D6D73",
              border: "1px solid #E0E0E0",
              boxShadow: "none",
              transition: "all 0.2s ease-in-out",

              // 👇 Hover state
              "&:hover": {
                background: "#F5F5F5 !important",
                borderColor: "#CFCFCF",
                boxShadow: "0px 2px 4px rgba(0, 0, 0, 0.1)"
              },

              // 👇 Focus state
              "&.Mui-focusVisible": {
                outline: "2px solid #BDBDBD",
                outlineOffset: "2px"
              },

              // 👇 Active state
              "&:active": {
                background: "#EDEDED !important",
                borderColor: "#BDBDBD",
                boxShadow: "inset 0 1px 2px rgba(0, 0, 0, 0.1)"
              }
            },
            "&:last-of-type": {
              color: "white"
            }
          }
        }
      }
    },
    MuiDateCalendar: {
      styleOverrides: {
        root: {
          width: "auto !important"
        }
      }
    }
  }
})

export default theme
