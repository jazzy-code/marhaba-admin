import dayjs from "dayjs"
import timezone from "dayjs/plugin/timezone"
import utc from "dayjs/plugin/utc"

dayjs.extend(utc)
dayjs.extend(timezone)
const tz = "America/Monterrey"
// const tz = "Europe/Madrid"

export const formatDate = (date?: string) => {
  return date ? dayjs(date).format("DD MMM YYYY") : ""
}

export const formatTime = (time?: string) => {
  return time
    ? dayjs()
        .set("hour", Number(time.split(":")[0]))
        .set("minute", Number(time.split(":")[1]))
        .format("hh:mm A")
    : ""
}

export const formatTimeFromUTC = (date: string) => {
  return date ? dayjs.utc(date).tz(tz).format("hh:mm A") : ""
}

export const formatDateTime = (date: string) => {
  return date ? dayjs.utc(date).tz(tz).format("DD MMM YYYY - hh:mm A") : ""
}
