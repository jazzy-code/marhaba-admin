import { Button, Dialog, DialogActions, DialogContent, IconButton } from "@mui/material"
import { X } from "lucide-react"

interface ModalDeleteProps {
  open: boolean
  loading: boolean
  element: React.ReactNode
  onCancel: () => void
  onConfirm: () => void
}

const ModalDelete = ({ open, loading, element, onCancel, onConfirm }: ModalDeleteProps) => {
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
          <h2 className="text-xl font-bold">Delete this element?</h2>
          {element}
          <p>Are you sure you want to delete this item? </p>
          <p>This action cannot be undone and everything related to this element will be deleted.</p>
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
          color="error"
          sx={{ width: "12rem !important" }}
          loading={loading}
          onClick={onConfirm}>
          Delete
        </Button>
      </DialogActions>
    </Dialog>
  )
}

export default ModalDelete
