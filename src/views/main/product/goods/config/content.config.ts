export const contentTableConfig = {
  title: "商品列表",
  propList: [
    { prop: "name", label: "商品名", minWidth: "100px" },
    { prop: "oldPrice", label: "原价", minWidth: "60px" },
    { prop: "newPrice", label: "现价", minWidth: "60px" },
    { prop: "status", label: "状态", minWidth: "100px", slotName: "status" },
    { prop: "imgUrl", label: "图片", minWidth: "100px", slotName: "imgUrl" },
    { prop: "inventoryCount", label: "库存", minWidth: "100px" },
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
