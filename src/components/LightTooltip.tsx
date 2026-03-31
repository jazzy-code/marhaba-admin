import { styled } from "@mui/material/styles"
import Tooltip, { tooltipClasses } from "@mui/material/Tooltip"

const LightTooltip = styled(({ className, ...props }: any) => <Tooltip {...props} classes={{ popper: className }} />)(
  ({ theme }) => ({
    [`& .${tooltipClasses.tooltip}`]: {
      backgroundColor: theme.palette.common.white,
      color: "rgba(0, 0, 0, 0.87)",
      boxShadow: theme.shadows[1],
      fontSize: 11
    },
    [`& .${tooltipClasses.arrow}`]: {
      "&:before": {
        border: "1px solid #E6E8ED"
      },
      color: theme.palette.common.white
    }
  })
)

export default LightTooltip
