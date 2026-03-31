import { IconButton, TextField } from "@mui/material"
import { Search, X } from "lucide-react"

interface SearchBarProps {
  placeholder?: string
  value: string
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void
  onClear: () => void
  onKeyDown?: (event: React.KeyboardEvent<HTMLInputElement>) => void
}

const SearchBar = ({ value, placeholder = "Search by Title", onChange, onClear, onKeyDown }: SearchBarProps) => {
  return (
    <TextField
      className="searchbar"
      sx={{
        width: "22rem !important",
        marginBottom: 0,
        marginRight: "1rem",
        "& .MuiInputBase-root": {
          paddingLeft: ".5rem",
          paddingRight: ".5rem",
          backgroundColor: "white"
        }
      }}
      size="small"
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      onKeyDown={onKeyDown && onKeyDown}
      slotProps={{
        input: {
          autoComplete: "off",
          startAdornment: <Search className="me-2 text-stone-400" />,
          endAdornment: (
            <IconButton className="show_clear_button" size="small" onClick={onClear}>
              <X />
            </IconButton>
          )
        }
      }}
    />
  )
}

export default SearchBar
