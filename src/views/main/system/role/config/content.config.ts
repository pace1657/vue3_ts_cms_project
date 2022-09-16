export const contentTableConfig = {
  title: "权限列表",
  propList: [
    { prop: "name", label: "权限名", minWidth: "100px" },
    { prop: "intro", label: "权限描述", minWidth: "100px" },
    {
      prop: "createAt",
      label: "创建时间",
      minWidth: "200px",
      slotName: "createAt"
    },
    {
      prop: "updateAt",
      label: "更新时间",
      minWidth: "200px",
      slotName: "updateAt"
    },
    {
      prop: "",
      label: "操作",
      minWidth: "120px",
      slotName: "handle"
    }
  ],
  isShowSelectColumn: true,
  isShowIndexColumn: true
};
