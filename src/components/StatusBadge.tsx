import { Chip } from "@mui/material"

import { Status } from "@/types/services"

interface BadgeProps {
  status: Status
}

const StatusBadge: React.FC<BadgeProps> = ({ status }: BadgeProps) => {
  const statusColor: { [key: string]: "success" | "warning" | "error" } = {
    Approved: "success",
    Pending: "warning",
    Rejected: "error"
  }

  return <Chip label={status} color={statusColor[status]} size="medium" />
}

export default StatusBadge
