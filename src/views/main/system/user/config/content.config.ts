export const contentTableConfig = {
  title: "用户列表",
  propList: [
    { prop: "name", label: "用户名", minWidth: "100px" },
    { prop: "realname", label: "真实姓名", minWidth: "100px" },
    { prop: "cellphone", label: "手机号码", minWidth: "100px" },
    { prop: "enable", label: "状态", minWidth: "100px", slotName: "status" },
    {
      prop: "createAt",
      label: "创建时间",
      minWidth: "180px",
      slotName: "createAt"
    },
    {
      prop: "updateAt",
      label: "更新时间",
      minWidth: "180px",
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
