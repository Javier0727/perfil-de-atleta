export enum RoleEnum {
  Admin = "admin",
  Athlete = "athlete",
}

export interface AthleteParameters {
  pushups: number;
  kippingPullUpsOrButterfly: number;
  strictPullUps: number;
  t2b: number;
  kippingHSPU: number;
  c2b: number;
  mbu: number;
  rmu: number;
  ropeClimbLegless: number;
  backSquat: string;
  frontSquat: string;
  deadlift: string;
  strictPress: string;
  benchPress: string;
  squatClean: string;
  poweClean: string;
  squatSnatch: string;
  powerSnatch: string;
  cleanAndJerk: string;
  jerk: string;
  run5k: string;
  row1k: string;
  row5k: string;
  du: number;
  burpees7min: number;
}

export interface User {
  id: string;
  name: string;
  lastName: string;
  role: RoleEnum;
  email: string;
  parameters?: AthleteParameters;
}

export interface AuthState {
  isAuthenticated: boolean;
  user: User | null;
}

export const LOGIN_SUCCESS = "LOGIN_SUCCESS";
export const LOGOUT = "LOGOUT";

interface LoginSuccessAction {
  type: typeof LOGIN_SUCCESS;
  payload: User;
}

interface LogoutAction {
  type: typeof LOGOUT;
}

export type AuthActionTypes = LoginSuccessAction | LogoutAction;

export interface RootState {
  auth: {
    isAuthenticated: boolean;
    user: {
      role: RoleEnum;
    };
  };
}
