import { useNavigation, useRoute } from "@react-navigation/native";
import { StatusBar } from "expo-status-bar";
import { VStack, Text, Heading, ScrollView, FlatList } from "native-base";
import { useEffect, useState } from "react";
import { Alert, Platform } from "react-native";
import { Button } from "../components/Button";
import { appTypesDescription } from "../db/dbTemporary";
import { Dimensions, TouchableOpacity } from "react-native";

interface ModalAppScreenParams {
  isLogin: boolean;
}

const { width, height } = Dimensions.get("window");

export default function ModalAppScreen({ isLogin }: ModalAppScreenParams) {
  const navigation = useNavigation();
  return (
    <VStack
      flex={0}
      w={width}
      alignItems="center"
      justifyContent="flex-start"
      mt={10}
    >
      <FlatList
        data={appTypesDescription}
        keyExtractor={(item) => item.id}
        horizontal
        showsHorizontalScrollIndicator={false}
        renderItem={({ item }) => (
          <VStack w={width} alignItems="center" justifyContent="flex-start">
            <VStack
              w={"5/6"}
              alignItems="center"
              justifyContent="space-between"
            >
              <Heading fontFamily="heading" color="white" mb={8}>
                {item.name}
              </Heading>
              <Text color="white" fontSize="md" textAlign="center" mb={4}>
                {item.description}
              </Text>
              <Text color="pink.500" fontSize="2xl" mb={4}>
                {item.price}
              </Text>
              <Text color="white" fontSize="lg" mb={4}>
                {item.functionalApp}
              </Text>
              <Text color="white" fontSize="lg" mb={4}>
                {item.appIcon}
              </Text>
              <Text color="white" fontSize="lg" mb={4}>
                {item.splashScreen}
              </Text>
              {item.sourceCode ? (
                <Text color="white" fontSize="lg" mb={4}>
                  {item.deliverTime}
                </Text>
              ) : null}
              {item.uploadContent ? (
                <Text color="white" fontSize="lg" mb={4}>
                  {item.uploadContent}
                </Text>
              ) : null}
              <Text color="white" fontSize="lg" mb={4}>
                {item.mobileOperatingSystems}
              </Text>
              <Text color="white" fontSize="lg" mb={4}>
                Delivered in {item.deliverTime}
              </Text>
              <Text color="white" fontSize="lg" mb={8}>
                With {item.revisions} revisions
              </Text>
              <Button
                title="Proceed to Checkout"
                w="full"
                mt={!item.sourceCode && !item.uploadContent ? 24 : 1}
                isLogin={true}
                onPress={() => {
                  isLogin ? navigation.navigate("ModalSettings") : Alert.alert(`${item.name} purchase Complete! \n\n Total: ${item.price}`);
                }}
              />
            </VStack>
          </VStack>
        )}
      />
      <Text color="gray.200" fontSize="2xs" px={2} mt={4} textAlign="center">
        By clicking "Proceed to Checkout" you agree and consent{"\n"}to the User
        Agreement, its policies, and the Privacy Policy.
      </Text>
      <StatusBar style="light" />
    </VStack>
  );
}