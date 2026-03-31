import { ChangeEvent } from "react"

export const useDataTable = (setParams: any, setSearchValue: any, searchValue: any) => {
  const handleSortTable = (header?: string, order?: string) => {
    setParams((prevState: any) => ({
      ...prevState,
      sort: header || "createdAt",
      order: order || "desc"
    }))
  }

  const handlePageChange = (_: any, value: number) => {
    setParams((prevState: any) => ({ ...prevState, page: value }))
  }

  const handleRowsPerPageChange = (e: ChangeEvent<HTMLInputElement>) => {
    setParams((prevState: any) => ({ ...prevState, size: e.target.value, page: 1 }))
  }

  const handleChangeSearchBar = (e: ChangeEvent<HTMLInputElement>) => {
    setSearchValue(e.target.value)
  }

  const handleClearSearchBar = () => {
    setSearchValue("")
    setParams((prevState: any) => ({ ...prevState, search: "", page: 1 }))
  }

  const handleSearch = () => {
    setParams((prevState: any) => ({ ...prevState, search: searchValue, page: 1 }))
  }

  return {
    handleChangeSearchBar,
    handleClearSearchBar,
    handleSearch,
    handleSortTable,
    handlePageChange,
    handleRowsPerPageChange
  }
}
