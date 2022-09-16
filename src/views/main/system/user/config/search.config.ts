import { IForm } from "@/base-ui/form";

export const searchFormConfig: IForm = {
  labelWidth: "100px",
  formItems: [
    // {
    //   filed: "id",
    //   type: "string",
    //   label: "用户ID",
    //   rules: [],
    //   placeholder: "请输入用户ID"
    // },
    {
      filed: "name",
      type: "string",
      label: "用户名",
      rules: [],
      placeholder: "请输入用户名"
    },
    {
      filed: "realname",
      type: "string",
      label: "真实姓名",
      rules: [],
      placeholder: "请输入真实姓名"
    },
    {
      filed: "cellphone",
      type: "string",
      label: "手机号",
      rules: [],
      placeholder: "请输入手机号"
    },
    {
      filed: "enable",
      type: "select",
      label: "状态",
      rules: [],
      placeholder: "请选择用户状态",
      selectOptions: [
        { title: "启用", value: 1 },
        { title: "禁用", value: 0 }
      ]
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
