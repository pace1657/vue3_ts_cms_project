import { IForm } from "@/base-ui/form";

export const modalFormConfig: IForm = {
  formItems: [
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
      filed: "password",
      type: "password",
      label: "用户密码",
      rules: [],
      placeholder: "请输入密码",
      isHidden: false
    },
    {
      filed: "cellphone",
      type: "string",
      label: "手机号码",
      rules: [],
      placeholder: "请输入手机号"
    },
    {
      filed: "departmentId",
      type: "select",
      label: "所属部门",
      rules: [],
      placeholder: "请选择部门",
      selectOptions: []
    },
    {
      filed: "roleId",
      type: "select",
      label: "用户角色",
      rules: [],
      placeholder: "请选择角色",
      selectOptions: []
    }
  ],
  itemStyle: {},
  colLayout: {
    span: 24
  }
};
