import { StatusBar } from "expo-status-bar";
import {
  VStack,
  Text,
  Heading,
  HStack,
  Input as NativeBaseInput,
} from "native-base";
import { Platform } from "react-native";

import { Button } from "../components/Button";
import { Input } from "../components/Input";
import { ModalSettingsRoutesParams } from "../types";

export default function ModalSettingsScreen({
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
  return (
    <>
      {logged ? (
        editDetails ? (
          <VStack
            flex={1}
            alignItems="center"
            justifyContent="flex-start"
            mt={16}
          >
            <VStack
              w={"5/6"}
              h={"3/4"}
              alignItems="center"
              justifyContent="flex-start"
            >
              <Heading fontFamily="heading" color="white" mb={12}>
                User Settings
              </Heading>
              <HStack
                justifyContent="space-between"
                w="full"
                mb={8}
                alignItems="center"
              >
                <Text color="gray.300" fontSize="md">
                  E-mail:
                </Text>
                <NativeBaseInput
                  textAlign="right"
                  width="70%"
                  h={8}
                  placeholder="E-mail"
                  color="gray.300"
                  fontSize="md"
                  autoCapitalize="none"
                  autoCorrect={false}
                  defaultValue={user.email}
                  onChangeText={(updatedEmail: string) =>
                    handleSetUser({ data: updatedEmail, field: "email" })
                  }
                  autoComplete="email"
                  variant="underlined"
                  _focus={{ borderColor: "red.500" }}
                />
              </HStack>
              <HStack
                justifyContent="space-between"
                w="full"
                mb={8}
                alignItems="center"
              >
                <Text color="gray.300" fontSize="md">
                  First name:
                </Text>
                <NativeBaseInput
                  textAlign="right"
                  width="70%"
                  h={8}
                  placeholder="First Name"
                  placeholderTextColor="gray.300"
                  color="gray.300"
                  fontSize="md"
                  autoCapitalize="words"
                  autoCorrect={false}
                  defaultValue={user.firstName}
                  onChangeText={(updatedFirstName: string) =>
                    handleSetUser({
                      data: updatedFirstName,
                      field: "firstName",
                    })
                  }
                  autoComplete="name"
                  variant="underlined"
                  _focus={{ borderColor: "red.500" }}
                />
              </HStack>
              <HStack
                justifyContent="space-between"
                w="full"
                mb={8}
                alignItems="center"
              >
                <Text color="gray.300" fontSize="md">
                  Last name:
                </Text>
                <NativeBaseInput
                  textAlign="right"
                  width="70%"
                  h={8}
                  placeholder="Last Name"
                  placeholderTextColor="gray.300"
                  color="gray.300"
                  fontSize="md"
                  autoCapitalize="words"
                  autoCorrect={false}
                  defaultValue={user.lastName}
                  onChangeText={(updatedLastName: string) =>
                    handleSetUser({ data: updatedLastName, field: "lastName" })
                  }
                  autoComplete="name-family"
                  variant="underlined"
                  _focus={{ borderColor: "red.500" }}
                />
              </HStack>
              <Button
                title="Save"
                w="full"
                bg="purple.700"
                _pressed={{ bg: "purple.600" }}
                mb={4}
                isLogin={isLogin}
                onPress={handleEditUserDetails}
              />
            </VStack>
            <Text color="red.500" mt={6} onPress={handleLogout}>
              Logout
            </Text>
            <StatusBar style={Platform.OS === "ios" ? "light" : "auto"} />
          </VStack>
        ) : (
          <VStack
            flex={1}
            alignItems="center"
            justifyContent="flex-start"
            mt={16}
          >
            <VStack
              w={"5/6"}
              h={"3/4"}
              alignItems="center"
              justifyContent="flex-start"
            >
              <Heading fontFamily="heading" color="white" mb={12}>
                User Settings
              </Heading>
              <HStack justifyContent="space-between" w="full" h={8} mb={8}>
                <Text color="gray.300" fontSize="md">
                  E-mail:
                </Text>
                <Text color="gray.300" fontSize="md">
                  {user.email}
                </Text>
              </HStack>
              <HStack justifyContent="space-between" w="full" h={8} mb={8}>
                <Text color="gray.300" fontSize="md">
                  First name:
                </Text>
                <Text color="gray.300" fontSize="md">
                  {user.firstName}
                </Text>
              </HStack>
              <HStack justifyContent="space-between" w="full" h={8} mb={8}>
                <Text color="gray.300" fontSize="md">
                  Last name:
                </Text>
                <Text color="gray.300" fontSize="md">
                  {user.lastName}
                </Text>
              </HStack>
              <Button
                title="Edit Details"
                w="full"
                bg="purple.700"
                _pressed={{ bg: "purple.600" }}
                mb={4}
                isLogin={isLogin}
                onPress={handleEditUserDetails}
              />
            </VStack>
            <Text color="red.500" mt={6} onPress={handleLogout}>
              Logout
            </Text>
            <StatusBar style={Platform.OS === "ios" ? "light" : "auto"} />
          </VStack>
        )
      ) : (
        <VStack
          flex={1}
          alignItems="center"
          justifyContent="flex-start"
          mt={16}
        >
          <VStack
            w={"5/6"}
            h={"3/4"}
            alignItems="center"
            justifyContent="flex-start"
          >
            <Heading fontFamily="heading" color="white" mb={12}>
              {isLogin ? "Login" : "Sign Up"}
            </Heading>
            <Input
              mb={8}
              placeholder="E-mail"
              iconName="envelope"
              isDisabled={!isLogin}
              onChangeText={(text) => {
                isLogin
                  ? handleSetUser({ data: text, field: "email" })
                  : handleSetRegisterUser({
                      data: text,
                      field: "registerEmail",
                    });
              }}
            />
            <Input
              mb={8}
              placeholder="Password"
              iconName="key"
              isDisabled={!isLogin}
              secureTextEntry
              onChangeText={(text) => {
                isLogin
                  ? handleSetUser({ data: text, field: "password" })
                  : handleSetRegisterUser({
                      data: text,
                      field: "registerPassword",
                    });
              }}
            />
            {isLogin ? null : (
              <Input
                mb={8}
                placeholder="Confirm password"
                iconName="key"
                isDisabled={!isLogin}
                secureTextEntry
                onChangeText={(text) =>
                  handleSetRegisterUser({
                    data: text,
                    field: "confirmPassword",
                  })
                }
              />
            )}
            <Button
              title={isLogin ? "Enter" : "Registration currently disabled"}
              w={"full"}
              mb={4}
              isDisabled={!isLogin}
              isLogin={isLogin}
              onPress={() => {
                isLogin ? handleSignIn(user) : null;
              }}
            />
          </VStack>
          <HStack mt={6} alignItems="center" space={1}>
            <Text color="gray.200">
              {isLogin ? "Don't have an account yet?" : "Already registered?"}
            </Text>
            <Text
              color="green.500"
              onPress={handleSetIsLogin}
              textTransform="uppercase"
            >
              {isLogin ? "Register now" : "Login"}
            </Text>
          </HStack>

          <StatusBar style={Platform.OS === "ios" ? "light" : "auto"} />
        </VStack>
      )}
    </>
  );
}