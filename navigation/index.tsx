/**
 * If you are not familiar with React Navigation, refer to the "Fundamentals" guide:
 * https://reactnavigation.org/docs/getting-started
 *
 */
import { FontAwesome } from "@expo/vector-icons";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import {
  NavigationContainer,
  DefaultTheme,
  DarkTheme,
} from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Image, useTheme } from "native-base";
import * as React from "react";
import { Alert, ColorSchemeName, Pressable } from "react-native";

import Colors from "../constants/Colors";
import useColorScheme from "../hooks/useColorScheme";
import Home from "../screens/Home";
import ModalAppScreen from "../screens/ModalAppScreen";
import ModalServiceScreen from "../screens/ModalServiceScreen";
import ModalSettingsScreen from "../screens/ModalSettingsScreen";

import {
  AuthProps,
  ModalSettingsRoutesParams,
  RegisterProps,
  RootStackParamList,
  RootTabParamList,
  RootTabScreenProps,
  SetRegisterUserProps,
  SetUserProps,
} from "../types";
import LinkingConfiguration from "./LinkingConfiguration";

export default function Navigation({
  colorScheme,
}: {
  colorScheme: ColorSchemeName;
}) {
  return (
    <NavigationContainer linking={LinkingConfiguration} theme={DarkTheme}>
      <RootNavigator />
    </NavigationContainer>
  );
}

/**
 * A root stack navigator is often used for displaying modals on top of all other content.
 * https://reactnavigation.org/docs/modal
 */
const Stack = createNativeStackNavigator<RootStackParamList>();

function RootNavigator() {
  const [isLogin, setIsLogin] = React.useState(true);
  const [logged, setLogged] = React.useState(false);
  const [editDetails, setEditDetails] = React.useState(false);
  const [user, setUser] = React.useState({
    email: "",
    password: "",
    firstName: "",
    lastName: "",
  });
  const [registerUser, setRegisterUser] = React.useState({
    registerEmail: "",
    registerPassword: "",
    confirmPassword: "",
  });
  function handleSetIsLogin() {
    setIsLogin(!isLogin);
  }
  function handleSetLogged(data: boolean) {
    setLogged(data);
  }
  function handleEditUserDetails() {
    setEditDetails(!editDetails);
  }
  function handleSetUser({ field, data }: SetUserProps) {
    setUser({ ...user, [field]: data });
  }
  function handleSetRegisterUser({ field, data }: SetRegisterUserProps) {
    setRegisterUser({ ...registerUser, [field]: data });
  }
  function handleLogout() {
    setUser({
      email: "",
      password: "",
      firstName: "",
      lastName: "",
    });
    setLogged(false);
    handleSetIsLogin()
  }
  function handleSignIn(data: AuthProps) {
    if (
      data.email === "admin@danielkosttas.com" &&
      data.password === "123456"
    ) {
      handleSetLogged(true);
      handleSetIsLogin()
      return;
    }
    return Alert.alert("Login", "Incorret user or password. Try Again.");
  }
  return (
    <Stack.Navigator>
      <Stack.Screen name="Root" options={{ headerShown: false }}>
        {(props: any) => (
          <BottomTabNavigator
            {...props}
            user={user}
            registerUser={registerUser}
            isLogin={isLogin}
            logged={logged}
            editDetails={editDetails}
            handleSetIsLogin={handleSetIsLogin}
            handleSetLogged={handleSetLogged}
            handleEditUserDetails={handleEditUserDetails}
            handleSetUser={handleSetUser}
            handleSetRegisterUser={handleSetRegisterUser}
            handleLogout={handleLogout}
            handleSignIn={handleSignIn}
          />
        )}
      </Stack.Screen>
      <Stack.Group screenOptions={{ presentation: "modal" }}>
        <Stack.Screen
          name="ModalSettings"
          options={{
            title: "Settings",
          }}
        >
          {(props) => (
            <ModalSettingsScreen
              {...props}
              user={user}
              registerUser={registerUser}
              isLogin={isLogin}
              logged={logged}
              editDetails={editDetails}
              handleSetIsLogin={handleSetIsLogin}
              handleSetLogged={handleSetLogged}
              handleEditUserDetails={handleEditUserDetails}
              handleSetUser={handleSetUser}
              handleSetRegisterUser={handleSetRegisterUser}
              handleLogout={handleLogout}
              handleSignIn={handleSignIn}
            />
          )}
        </Stack.Screen>
        <Stack.Screen
          name="ModalService"
          options={{
            title: "Service Details",
          }}
        >
          {(props) => <ModalServiceScreen {...props} service="Basic" isLogin={isLogin} />}
        </Stack.Screen>
        <Stack.Screen
          name="ModalAppScreen"
          options={{
            title: "Create React Native App",
          }}
        >
          {(props) => <ModalAppScreen {...props} isLogin={isLogin} />}
        </Stack.Screen>
      </Stack.Group>
    </Stack.Navigator>
  );
}

/**
 * A bottom tab navigator displays tab buttons on the bottom of the display to switch screens.
 * https://reactnavigation.org/docs/bottom-tab-navigator
 */
const BottomTab = createBottomTabNavigator<RootTabParamList>();

function BottomTabNavigator({
  user,
  registerUser,
  isLogin,
  logged,
  editDetails,
  handleSetIsLogin,
  handleSetLogged,
  handleEditUserDetails,
  handleSetUser,
  handleSetRegisterUser,
  handleLogout,
  handleSignIn,
}: ModalSettingsRoutesParams) {
  const colorScheme = useColorScheme();

  return (
    <BottomTab.Navigator
      initialRouteName="Home"
      screenOptions={{
        tabBarActiveTintColor: Colors[colorScheme].tint,
        headerStyle: { height: 100 },
      }}
    >
      <BottomTab.Screen
        name="Home"
        options={({ navigation }: RootTabScreenProps<"Home">) => ({
          tabBarIcon: ({ color }) => <TabBarIcon name="home" color={color} />,
          tabBarLabel: "Home",
          headerTitleAlign: "left",
          headerTitle: () => (
            <Pressable
              onPress={() => navigation.navigate("Home", {isLogin})}
              style={({ pressed }) => ({
                opacity: pressed ? 0.5 : 1,
              })}
            >
              <Image
                source={require("../assets/images/logo-removebg.png")}
                size="lg"
                marginLeft={-2}
                _alt={{ color: "gray.300" }}
                alt="DK Logo"
              />
            </Pressable>
          ),
          headerRight: () => (
            <Pressable
              onPress={() =>
                navigation.navigate("ModalSettings", {
                  user: { email: user.email, password: user.password },
                  editDetails,
                  handleEditUserDetails,
                  handleSetIsLogin,
                  handleSetLogged,
                  handleSetRegisterUser,
                  handleSetUser,
                  isLogin,
                  logged,
                  registerUser,
                  handleLogout,
                  handleSignIn,
                })
              }
              style={({ pressed }) => ({
                opacity: pressed ? 0.5 : 1,
              })}
            >
              <FontAwesome
                name="gear"
                size={25}
                color={Colors[colorScheme].text}
                style={{ marginRight: 20 }}
              />
            </Pressable>
          ),
        })}
      >
        {(props) => <Home {...props} isLogin={isLogin} />}
      </BottomTab.Screen>
      <BottomTab.Screen
        name="ModalTabSettings"
        options={{
          title: "Manage Orders",
          tabBarLabel: "Settings",
          headerTitleAlign: "left",
          tabBarIcon: ({ color }) => <TabBarIcon name="gears" color={color} />,
        }}
        listeners={({ navigation }) => ({
          tabPress: (event) => {
            event.preventDefault();
            navigation.navigate("ModalSettings");
          },
        })}
      >
        {(props) => (
          <ModalSettingsScreen
            {...props}
            user={user}
            registerUser={registerUser}
            isLogin={isLogin}
            logged={logged}
            editDetails={editDetails}
            handleSetIsLogin={handleSetIsLogin}
            handleSetLogged={handleSetLogged}
            handleEditUserDetails={handleEditUserDetails}
            handleSetUser={handleSetUser}
            handleSetRegisterUser={handleSetRegisterUser}
            handleLogout={handleLogout}
            handleSignIn={handleSignIn}
          />
        )}
      </BottomTab.Screen>
    </BottomTab.Navigator>
  );
}

/**
 * You can explore the built-in icon families and icons on the web at https://icons.expo.fyi/
 */
function TabBarIcon(props: {
  name: React.ComponentProps<typeof FontAwesome>["name"];
  color: string;
}) {
  return <FontAwesome size={30} style={{ marginBottom: -1 }} {...props} />;
}
