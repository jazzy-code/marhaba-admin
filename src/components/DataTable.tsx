import { useEffect, useRef, useState } from "react"

import { Box, Checkbox, IconButton, TablePagination } from "@mui/material"
import Paper from "@mui/material/Paper"
import Table from "@mui/material/Table"
import TableBody from "@mui/material/TableBody"
import TableCell from "@mui/material/TableCell"
import TableContainer from "@mui/material/TableContainer"
import TableHead from "@mui/material/TableHead"
import TableRow from "@mui/material/TableRow"
import { ChevronDown, ChevronsUpDown, ChevronUp, EyeOff } from "lucide-react"

import SkeletonLoading from "./SkeletonLoading"

interface DataTableProps {
  columns: any[]
  data: any[]
  idsSelected?: any[]
  isPaginated?: boolean
  loading?: boolean
  loadingRows?: number
  maxHeight?: string
  disableEditAction?: boolean
  rowsPerPage?: number
  page?: number
  total?: number
  selectAllChecked?: boolean
  onHideColumn?: any
  onPageChange?: any
  onRowsPerPageChange?: any
  onSelectAll?: any
  sortHeaderHandler?: any
}

const DataTable = ({
  columns = [],
  data = [],
  idsSelected = [],
  isPaginated,
  loading,
  loadingRows = 10,
  maxHeight = "calc(100vh - 17rem)",
  disableEditAction,
  rowsPerPage,
  page,
  total,
  selectAllChecked,
  onHideColumn,
  onPageChange,
  onRowsPerPageChange,
  onSelectAll,
  sortHeaderHandler
}: DataTableProps) => {
  const [ascending, setAscending] = useState<boolean | null>(null)
  const [selectedHeader, setSelectedHeader] = useState("")
  const tableContainerRef = useRef<HTMLDivElement>(null)

  const sortTableBy = (header?: any) => {
    let sortKey = header?.orderingKey || header.key
    let sortOrder = "asc"
    let isAscending: boolean | null = true

    if (sortKey === selectedHeader) {
      if (ascending === true) {
        sortOrder = "desc"
        isAscending = false
      } else if (ascending === false) {
        sortKey = ""
        sortOrder = ""
        isAscending = null
      }
    }

    setAscending(isAscending)
    setSelectedHeader(sortKey)
    if (sortHeaderHandler) {
      sortHeaderHandler(sortKey, sortOrder)
    }
  }

  useEffect(() => {
    if (tableContainerRef.current) {
      tableContainerRef.current.scrollTop = 0
      tableContainerRef.current.scrollLeft = 0
    }
  }, [page, data])

  return (
    <Paper sx={{ boxShadow: "none" }}>
      <TableContainer ref={tableContainerRef} style={{ maxHeight: maxHeight, overflowX: "auto" }}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table" stickyHeader>
          <TableHead>
            <TableRow>
              {columns.map((header) => {
                return (
                  <TableCell
                    sx={{ padding: "1rem .5rem" }}
                    className={`z[3] uppercase ${header.ordering && "cursor-pointer"} ${header.stickyLeft && !loading && "z-[4]"}`}
                    key={header.header}
                    onClick={() => {
                      if (!header.ordering) return
                      sortTableBy(header)
                    }}>
                    <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                      {header?.cellType === "checkbox" ? (
                        <Checkbox checked={selectAllChecked} onChange={onSelectAll} />
                      ) : (
                        <>
                          <b style={{ ...header?.headerStyles, color: "gray" }}>{header.header}</b>
                          {header.isHideable && (
                            <IconButton
                              size="small"
                              onClick={(e) => {
                                onHideColumn(header.key)
                                e.stopPropagation()
                              }}>
                              <EyeOff />
                            </IconButton>
                          )}
                          {header.ordering && (
                            <Box sx={{ display: "flex", alignItems: "center", marginLeft: ".5rem" }}>
                              {ascending && selectedHeader === (header?.orderingKey || header.key) ? (
                                <ChevronUp />
                              ) : !ascending && selectedHeader === (header?.orderingKey || header.key) ? (
                                <ChevronDown />
                              ) : (
                                selectedHeader !== (header?.orderingKey || header.key) && (
                                  <ChevronsUpDown className="text-[#C0C0C0]" />
                                )
                              )}
                            </Box>
                          )}
                        </>
                      )}
                    </Box>
                  </TableCell>
                )
              })}
            </TableRow>
          </TableHead>
          <TableBody sx={{ maxHeight: "30rem", overflowY: "auto" }}>
            {loading ? (
              <TableRow>
                <TableCell colSpan={columns.length}>
                  <SkeletonLoading size={loadingRows} type="datatable" />
                </TableCell>
              </TableRow>
            ) : data.length === 0 ? (
              <TableRow>
                <TableCell size="small" colSpan={columns.length} sx={{ padding: ".5rem", textAlign: "center" }}>
                  No records found
                </TableCell>
              </TableRow>
            ) : (
              data.map((row, index) => (
                <TableRow key={index} sx={{ "&:last-child td, &:last-child th": { border: 0 } }} data-index={index}>
                  {columns.map((col, i) => {
                    return (
                      <TableCell
                        key={i}
                        size="small"
                        className={`${col.stickyLeft ? "sticky left-0 bg-white z-[2] border-r border-subtle-border" : ""}`}>
                        {col.renderCell ? col.renderCell(row, index) : <div>{row[col.key]}</div>}
                      </TableCell>
                    )
                  })}
                </TableRow>
              ))
            )}
          </TableBody>
        </Table>
      </TableContainer>
      {isPaginated && (
        <TablePagination
          // sx={{ borderTop: "1px solid #ddd" }}
          className="border-t border-subtle-border bg-stone-50"
          component="div"
          count={total || 0}
          rowsPerPage={rowsPerPage || 10}
          rowsPerPageOptions={[10, 20, 30, 50, 100]}
          page={page || 0}
          onPageChange={onPageChange}
          onRowsPerPageChange={onRowsPerPageChange}
          labelRowsPerPage="Results per page"
          labelDisplayedRows={({ from, to, count }) => `Showing results ${from} - ${to} of ${count} in total`}
        />
      )}
    </Paper>
  )
}

export default DataTable
