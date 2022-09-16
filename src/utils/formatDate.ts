import dayjs from "dayjs";
import utc from "dayjs/plugin/utc";

// 为dayjs添加utc模块
dayjs.extend(utc);

// 定义默认format格式
const DEFAULT_FORMAT = "YYYY-MM-DD HH:mm:ss";

// UTC格式转换
export function formatUTCString(utcString: string, format: string = DEFAULT_FORMAT) {
  return dayjs.utc(utcString).utcOffset(8).format(format);
}

// 时间戳timestamp格式转换
export function formatTimestamp(timestamp: number, format: string = DEFAULT_FORMAT) {
  return dayjs(timestamp).format(format);
}
