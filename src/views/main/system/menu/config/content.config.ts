export const contentTableConfig = {
  title: "菜单列表",
  propList: [
    { prop: "name", label: "菜单名称", minWidth: "100px" },
    { prop: "type", label: "类型", minWidth: "100px" },
    { prop: "url", label: "菜单url", minWidth: "100px" },
    { prop: "icon", label: "菜单icon", minWidth: "100px" },
    { prop: "permission", label: "按钮权限", minWidth: "100px" },
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
  isShowSelectColumn: false,
  isShowIndexColumn: false,
  isShowPagination: false,
  childrenProps: {
    rowKey: "id",
    treeProps: { children: "children" }
  }
};
