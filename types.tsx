/**
 * Learn more about using TypeScript with React Navigation:
 * https://reactnavigation.org/docs/typescript/
 */

import { BottomTabScreenProps } from "@react-navigation/bottom-tabs";
import {
  CompositeScreenProps,
  NavigatorScreenParams,
} from "@react-navigation/native";
import { NativeStackScreenProps } from "@react-navigation/native-stack";

declare global {
  namespace ReactNavigation {
    interface RootParamList extends RootStackParamList {}
  }
}

export type RootStackParamList = {
  Root: NavigatorScreenParams<RootTabParamList> | undefined;
  ModalSettings: ModalSettingsRoutesParams | undefined;
  ModalService: { service: string };
};

export type RootStackScreenProps<Screen extends keyof RootStackParamList> =
  NativeStackScreenProps<RootStackParamList, Screen>;

export type RootTabParamList = {
  Home: undefined;
  ModalSettings: ModalSettingsRoutesParams;
  ModalService: { service: string };
};

export type RootTabScreenProps<Screen extends keyof RootTabParamList> =
  CompositeScreenProps<
    BottomTabScreenProps<RootTabParamList, Screen>,
    NativeStackScreenProps<RootStackParamList>
  >;

export interface AuthProps {
  email: string;
  password: string;
  firstName?: string;
  lastName?: string;
}

export interface RegisterProps {
  registerEmail: string;
  registerPassword: string;
  confirmPassword: string;
}

export interface SetUserProps {
  field: "email" | "password" | "firstName" | "lastName";
  data: string;
}

export interface SetRegisterUserProps {
  field: "registerEmail" | "registerPassword" | "confirmPassword";
  data: string;
}

export interface ModalSettingsRoutesParams {
  user: AuthProps;
  registerUser: RegisterProps;
  isLogin: boolean;
  logged: boolean;
  editDetails: boolean;
  handleSetIsLogin: () => void;
  handleSetLogged: (data: boolean) => void;
  handleEditUserDetails: () => void;
  handleSetUser: ({ field, data }: SetUserProps) => void;
  handleSetRegisterUser: ({ field, data }: SetRegisterUserProps) => void;
  handleLogout: () => void;
  handleSignIn: (data: AuthProps) => void;
}
