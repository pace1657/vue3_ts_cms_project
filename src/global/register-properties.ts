import { App } from "vue";
import { formatTimestamp, formatUTCString } from "@/utils/formatDate";

export default function registerProperties(app: App) {
  app.config.globalProperties.$filters = {
    formatUTC: formatUTCString,
    formatTimestamp: formatTimestamp
  };
}
