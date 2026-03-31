import { Button, Dialog, DialogActions, DialogContent, IconButton } from "@mui/material"
import { X } from "lucide-react"

interface ModalApproveProps {
  open: boolean
  loading: boolean
  element: React.ReactNode
  onCancel: () => void
  onConfirm: () => void
}

const ModalApprove = ({ open, loading, element, onCancel, onConfirm }: ModalApproveProps) => {
  return (
    <Dialog
      open={open}
      closeAfterTransition={false}
      fullWidth
      maxWidth="xs"
      aria-describedby="alert-dialog-slide-description">
      <DialogContent sx={{ padding: "1rem 1rem 0 !important", position: "relative" }}>
        <IconButton sx={{ position: "absolute", top: 10, right: 10 }} onClick={onCancel}>
          <X />
        </IconButton>
        <div className="mt-8 text-center">
          <h2 className="text-xl font-bold">Approve this Sevice?</h2>
          {element}
          <p>Are you sure you want to APPROVE this service? </p>
        </div>
      </DialogContent>
      <DialogActions>
        <Button
          variant="contained"
          color="light"
          sx={{ width: "12rem !important" }}
          loading={loading}
          onClick={onCancel}>
          Cancel
        </Button>
        <Button
          variant="contained"
          color="success"
          sx={{ width: "12rem !important" }}
          loading={loading}
          onClick={onConfirm}>
          Approve
        </Button>
      </DialogActions>
    </Dialog>
  )
}

export default ModalApprove
