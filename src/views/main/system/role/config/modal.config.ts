import { IForm } from "@/base-ui/form";

export const modalFormConfig: IForm = {
  formItems: [
    {
      filed: "name",
      type: "string",
      label: "权限名",
      rules: [],
      placeholder: "请输入权限名"
    },
    {
      filed: "intro",
      type: "string",
      label: "权限描述",
      rules: [],
      placeholder: "请输入权限描述"
    }
  ],
  itemStyle: {},
  colLayout: {
    span: 24
  }
};
