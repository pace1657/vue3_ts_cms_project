import { ILoginState } from "./login/types";
import { IMainState } from "./main/types";
import { IDashboardState } from "./main/analysis/types";

export interface IRootState {
  name: string;
  age: number;
  entriesDepartment: any[];
  entriesRole: any[];
  entriesMenu: any[];
}

export interface IRootWithModule {
  loginModule: ILoginState;
  mainModule: IMainState;
  dashboardModule: IDashboardState;
}

export type IStoreType = IRootState & IRootWithModule;
