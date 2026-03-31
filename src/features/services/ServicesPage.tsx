"use client"

import { FC, useState } from "react"

import { useAuth } from "@clerk/nextjs"
import { Avatar, Button, IconButton } from "@mui/material"
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query"
import { CircleCheck, CircleX, Eye } from "lucide-react"
import { useRouter } from "next/navigation"

import { setAuthToken } from "@/api/apiClient"
import { approveService, rejectService, getServices } from "@/api/services/services.client"
import DataTable from "@/components/DataTable"
import SearchBar from "@/components/fields/SearchBar"
import LightTooltip from "@/components/LightTooltip"
import ModalApprove from "@/components/modals/ModalApprove"
import ModalReject from "@/components/modals/ModalReject"
import StatusBadge from "@/components/StatusBadge"
import { SERVICE_STATUS_PENDING_ID } from "@/constants"
import { useDataTable } from "@/hooks/useDataTable"
import { formatDate } from "@/utils/date"

type InitilDataType = {
  data: any[]
  page: number
  size: number
  total: number
  totalPages: number
}

interface ServicesPageProps {
  initialData: InitilDataType
  statusId?: string | number
}

const ServicesPage: FC<ServicesPageProps> = ({ initialData, statusId }) => {
  const { getToken } = useAuth()
  const queryClient = useQueryClient()
  const router = useRouter()

  const titles: { [key: string]: string } = {
    "1": "Service Approvals",
    "2": "Approved Services",
    "3": "Rejected Services"
  }

  const [modalRejectOpen, setModalRejectOpen] = useState(false)
  const [modalApproveOpen, setModalApproveOpen] = useState(false)
  const [selectedService, setSelectedService] = useState<any>()
  const [searchBarValue, setSearchBarValue] = useState("")

  const [servicesParams, setservicesParams] = useState({
    page: 1,
    size: 10,
    search: "",
    sort: "createdAt",
    order: "desc",
    statusIds: statusId
  })
  const {
    handleChangeSearchBar,
    handleClearSearchBar,
    handleSearch,
    handlePageChange,
    handleRowsPerPageChange,
    handleSortTable
  } = useDataTable(setservicesParams, setSearchBarValue, searchBarValue)

  const {
    data: { data: services, total }
  } = useQuery({
    queryKey: ["services", servicesParams],
    queryFn: async () => {
      const token = await getToken()
      setAuthToken(token)
      return getServices({ ...servicesParams })
    },
    initialData: initialData,
    refetchOnMount: false
  })

  const { mutate: approve, isPending: isApproving } = useMutation({
    mutationFn: async (data: any) => {
      const token = await getToken()
      setAuthToken(token)
      return approveService(data)
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["services"] })
      queryClient.invalidateQueries({ queryKey: ["services-stats"] })
      setModalApproveOpen(false)
      setSelectedService(null)
    },
    onError: (error: any) => {
      console.error(error)
    }
  })

  const { mutate: reject, isPending: isDeleting } = useMutation({
    mutationFn: async (data: any) => {
      const token = await getToken()
      setAuthToken(token)
      return rejectService(data)
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["services"] })
      setModalRejectOpen(false)
      setSelectedService(null)
    },
    onError: (error: any) => {
      console.error(error)
    }
  })

  const handleApprove = (service: string) => {
    setSelectedService(service)
    setModalApproveOpen(true)
  }

  const handleReject = (service: any) => {
    setSelectedService(service)
    setModalRejectOpen(true)
  }

  const handlePreview = (id: string) => {
    router.push(`/services/${id}`)
  }

  const columns = [
    {
      key: "title",
      header: "Service",
      ordering: true,
      renderCell: (service: any) => {
        return (
          <div className="flex items-center gap-2">
            <div>
              <Avatar sx={{ width: "3rem", height: "3rem" }} alt={service.title || ""} src={service.heroImage} />
            </div>
            <div>
              <p>{service.title}</p>
              <small>{service.subtitle}</small>
            </div>
          </div>
        )
      }
    },
    {
      key: "userId",
      header: "Provider",
      renderCell: (service: any) => `${service.user.firstName} ${service.user.lastName}`
    },
    { key: "serviceTypeId", header: "Service Type", renderCell: (service: any) => service.serviceType.name },
    {
      key: "serviceStatusId",
      header: "Status",
      renderCell: (service: any) => <StatusBadge status={service.serviceStatus.name} />
    },
    {
      key: "updatedAt",
      header: "Last Update",
      ordering: true,
      renderCell: (service: any) => formatDate(service.updatedAt)
    },
    {
      key: "actions",
      header: "Actions",
      renderCell: (service: any, rowIndex: number) => {
        if (statusId === SERVICE_STATUS_PENDING_ID) {
          return (
            <div className="flex gap-2">
              <LightTooltip title="Preview Service" placement="top" arrow>
                <IconButton data-row-index={rowIndex} onClick={() => handlePreview(service.id)}>
                  <Eye />
                </IconButton>
              </LightTooltip>
              <LightTooltip title="Approve Service" placement="top" arrow>
                <IconButton color="success" data-row-index={rowIndex} onClick={() => handleApprove(service)}>
                  <CircleCheck />
                </IconButton>
              </LightTooltip>
              <LightTooltip title="Reject Service" placement="top" arrow>
                <IconButton color="error" data-row-index={rowIndex} onClick={() => handleReject(service)}>
                  <CircleX />
                </IconButton>
              </LightTooltip>
            </div>
          )
        }
        return (
          <div className="flex gap-2">
            <LightTooltip title="Preview Service" placement="top" arrow>
              <IconButton data-row-index={rowIndex} onClick={() => handlePreview(service.id)}>
                <Eye />
              </IconButton>
            </LightTooltip>
          </div>
        )
      }
    }
  ]

  return (
    <>
      <div className="flex-1 overflow-y-auto p-6 lg:p-10">
        <div className="max-w-7xl mx-auto flex flex-col gap-8 h-full">
          <div>
            <h1 className="font-serif text-2xl text-brown-dark font-medium">
              {statusId ? titles[statusId] : "All Services"}
            </h1>
            <p className="text-warm-grey mt-2 font-sans text-sm">Review and manage service listings from Providers.</p>
          </div>
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
            <div className="flex">
              <SearchBar
                value={searchBarValue}
                onChange={handleChangeSearchBar}
                onClear={handleClearSearchBar}
                onKeyDown={(e) => e.key === "Enter" && handleSearch()}
              />
              <Button size="small" variant="outlined" color="deepBrown" onClick={handleSearch}>
                Search
              </Button>
            </div>
          </div>
          <div className="bg-white rounded-sm shadow-sm border border-subtle-border flex flex-col">
            <DataTable
              isPaginated
              data={services}
              columns={columns}
              total={total}
              page={servicesParams.page - 1}
              rowsPerPage={servicesParams.size}
              onPageChange={handlePageChange}
              onRowsPerPageChange={handleRowsPerPageChange}
              sortHeaderHandler={handleSortTable}
            />
          </div>
        </div>
      </div>
      <ModalReject
        open={modalRejectOpen}
        loading={isDeleting}
        element={
          selectedService && (
            <div className="flex items-center gap-2 justify-center my-3">
              <div>
                <Avatar
                  sx={{ width: "3rem", height: "3rem" }}
                  alt={selectedService.title || ""}
                  src={selectedService.heroImage}
                />
              </div>
              <div>
                <p>{selectedService.title}</p>
                <small>{selectedService.shortDescription}</small>
              </div>
            </div>
          )
        }
        onCancel={() => setModalRejectOpen(false)}
        onConfirm={() => reject(selectedService.id)}
      />
      <ModalApprove
        open={modalApproveOpen}
        loading={isApproving}
        element={
          selectedService && (
            <div className="flex items-center gap-2 justify-center my-3">
              <div>
                <Avatar
                  sx={{ width: "3rem", height: "3rem" }}
                  alt={selectedService.title || ""}
                  src={selectedService.heroImage}
                />
              </div>
              <div>
                <p>{selectedService.title}</p>
                <small>{selectedService.shortDescription}</small>
              </div>
            </div>
          )
        }
        onCancel={() => setModalApproveOpen(false)}
        onConfirm={() => approve(selectedService.id)}
      />
    </>
  )
}

export default ServicesPage
