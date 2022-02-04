import dayjs from "dayjs"
import utc from "dayjs/plugin/utc"

dayjs.extend(utc)

// default format pattern
const DATE_TIME_FORMAT = "YYYY-MM-DD HH:mm:ss"

export function formatUtcString(
  utcString: string,
  formatPattern: string = DATE_TIME_FORMAT
) {
  return dayjs.utc(utcString).format(formatPattern)
}
