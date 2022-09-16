import { IForm } from "@/base-ui/form";

export const searchFormConfig: IForm = {
  labelWidth: "100px",
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
    },
    {
      filed: "createAt",
      type: "datepicker",
      label: "创建时间",
      rules: [],
      otherOptions: {
        type: "daterange",
        startPlaceholder: "开始时间",
        endPlaceholder: "结束时间"
      }
    }
  ],
  itemStyle: {
    padding: "10px 30px"
  },
  colLayout: {
    xs: 24,
    sm: 24,
    md: 12,
    lg: 8,
    xl: 6
  }
};
