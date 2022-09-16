// 匹配新建功能标题
export function matchDataFormTitle(pageName: string, isNew = true) {
  let title = "";
  let newOrEdit = "";
  if (isNew) {
    newOrEdit = "新建";
  } else {
    newOrEdit = "编辑";
  }
  switch (pageName) {
    case "users":
      title = `${newOrEdit}用户`;
      break;
    case "role":
      title = `${newOrEdit}权限`;
      break;
    case "goods":
      title = `${newOrEdit}商品`;
      break;
    case "menu":
      title = `${newOrEdit}菜单`;
  }
  return title;
}
