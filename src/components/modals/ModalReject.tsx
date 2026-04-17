import { useState } from "react"

import { Button, Dialog, DialogActions, DialogContent, IconButton, TextField } from "@mui/material"
import { X } from "lucide-react"

interface ModalRejectProps {
  open: boolean
  loading: boolean
  element: React.ReactNode
  onCancel: () => void
  onConfirm: (reason?: string) => void
}

const ModalReject = ({ open, loading, element, onCancel, onConfirm }: ModalRejectProps) => {
  const [reason, setReason] = useState("")
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
          <h2 className="text-xl font-bold">Reject this Sevice?</h2>
          {element}
          <br />
          <p>Are you sure you want to REJECT this service? </p>
          <br />
          <TextField
            multiline
            rows={4}
            variant="outlined"
            sx={{ width: "100%" }}
            placeholder="Describe the reason for rejection"
            value={reason}
            onChange={(e: any) => setReason(e.target.value)}
          />
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
          disabled={!reason}
          loading={loading}
          onClick={() => onConfirm(reason)}>
          Reject
        </Button>
      </DialogActions>
    </Dialog>
  )
}

export default ModalReject
