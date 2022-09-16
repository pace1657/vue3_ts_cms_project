export const rules = {
  username: [
    {
      required: true,
      message: "请输入账号",
      trigger: "blur"
    },
    {
      pattern: /^[A-Za-z0-9]{6,20}$/,
      message: "请输入6-20位的数字或字母",
      trigger: "blur"
    }
  ],
  password: [
    {
      required: true,
      message: "请输入密码",
      trigger: "blur"
    },
    {
      pattern: /^[A-Za-z0-9]{6,}$/,
      message: "请输入长度大于6位的数字或字母",
      trigger: "blur"
    }
  ],
  phoneNum: [
    {
      required: true,
      message: "请输入手机号",
      trigger: "blur"
    },
    {
      pattern: /^1\d{10}$/,
      message: "请输入正确的号码",
      trigger: "blur"
    }
  ],
  codeNum: [
    {
      required: true,
      message: "请输入验证码",
      trigger: "blur"
    }
  ]
};
