import { useStore } from "@/store";

export function usePermission(pageName: string, handleName: string) {
  const permission = useStore().state.loginModule.userPermissions;
  const checkPermission = `system:${pageName}:${handleName}`;
  return !!permission.filter((item) => item === checkPermission);
}
