import { requestUtils } from "..";
import type { IDataType } from "@/service/types";

export function requestPageDataList(pageUrl: string, queryInfo: any) {
  return requestUtils.post<IDataType>({
    url: pageUrl,
    data: queryInfo
  });
}

export function deletePageDataById(pageUrl: string) {
  return requestUtils.delete<IDataType>({
    url: pageUrl
  });
}

export function createPageData(pageUrl: string, newData: any) {
  return requestUtils.post<IDataType>({
    url: pageUrl,
    data: newData
  });
}

export function updatePageDataById(pageUrl: string, editData: any) {
  return requestUtils.patch<IDataType>({
    url: pageUrl,
    data: editData
  });
}
