import { useNavigation, useRoute } from "@react-navigation/native";
import { StatusBar } from "expo-status-bar";
import { VStack, Text, Heading, ScrollView } from "native-base";
import { useEffect, useState } from "react";
import { Alert, Platform } from "react-native";
import { Button } from "../components/Button";

interface ModalServicesRoutesParams {
  isLogin: boolean;
  service?: string;
}

export default function ModalServiceScreen({
  isLogin,
}: ModalServicesRoutesParams) {
  const navigation = useNavigation();
  const route = useRoute()
  const modalParams = route.params as ModalServicesRoutesParams
  const service = modalParams.service

  const [serviceDetails, setServiceDetails] = useState({
    id: "",
    name: "",
    description: "",
    price: "",
    functionalApp: "",
    appIcon: "",
    splashScreen: "",
    sourceCode: "",
    uploadContent: "",
    mobileOperatingSystems: "",
    deliverTime: "",
    revisions: "",
  });

  useEffect(() => {
    if (service === "Basic") {
      setServiceDetails({
        id: "Basic",
        name: "Basic App",
        description:
          "In this pack, we'll do Simple\nfrontend app with some logic",
        price: "€3,397.90",
        functionalApp: "Functional App",
        appIcon: "App Icon",
        splashScreen: "Splash Screen",
        sourceCode: "",
        uploadContent: "",
        mobileOperatingSystems: "iOS / Android",
        deliverTime: "5 Days",
        revisions: "5",
      });
    }
    if (service === "Standard") {
      setServiceDetails({
        id: "Standard",
        name: "Standard App",
        description:
          "In this pack, we'll do your simple frontend, login/signup (Firebase auth)",
        price: "€6,897.90",
        functionalApp: "Functional App",
        appIcon: "App Icon",
        splashScreen: "Splash Screen",
        sourceCode: "Source Code",
        uploadContent: "Upload / Insert User Content",
        mobileOperatingSystems: "iOS / Android",
        deliverTime: "5 Days",
        revisions: "6",
      });
    }
    if (service === "Premium") {
      setServiceDetails({
        id: "Premium",
        name: "Premium App",
        description:
          "We'll develop complete applications with testing and will upload it on play/google store.",
        price: "€24,997.90",
        functionalApp: "Functional App",
        appIcon: "App Icon",
        splashScreen: "Splash Screen",
        sourceCode: "Source Code",
        uploadContent: "Upload / Insert User Content",
        mobileOperatingSystems: "iOS / Android",
        deliverTime: "60 Days",
        revisions: "8",
      });
    }
  }, [service]);

  return (
    <>
      <VStack flex={1} alignItems="center" justifyContent="flex-start" mt={10}>
        <VStack w={"5/6"} alignItems="center" justifyContent="flex-start">
          <Heading fontFamily="heading" color="white" mb={8}>
            {service} App
          </Heading>
          <Text color="white" fontSize="md" textAlign="center" mb={4}>
            {serviceDetails.description}
          </Text>
          <Text color="pink.500" fontSize="2xl" mb={4}>
            {serviceDetails.price}
          </Text>
          <Text color="white" fontSize="lg" mb={4}>
            {serviceDetails.functionalApp}
          </Text>
          <Text color="white" fontSize="lg" mb={4}>
            {serviceDetails.appIcon}
          </Text>
          <Text color="white" fontSize="lg" mb={4}>
            {serviceDetails.splashScreen}
          </Text>
          {serviceDetails.sourceCode ? (
            <Text color="white" fontSize="lg" mb={4}>
              {serviceDetails.deliverTime}
            </Text>
          ) : null}
          {serviceDetails.uploadContent ? (
            <Text color="white" fontSize="lg" mb={4}>
              {serviceDetails.uploadContent}
            </Text>
          ) : null}
          <Text color="white" fontSize="lg" mb={4}>
            {serviceDetails.mobileOperatingSystems}
          </Text>
          <Text color="white" fontSize="lg" mb={4}>
            Delivered in {serviceDetails.deliverTime}
          </Text>
          <Text color="white" fontSize="lg" mb={8}>
            With {serviceDetails.revisions} revisions
          </Text>
          <Button
            title="Proceed to Checkout"
            w={"full"}
            isLogin={true}
            onPress={() => {
              isLogin
                ? navigation.navigate("ModalSettings")
                : Alert.alert(
                    `${serviceDetails.name} purchase Complete! \n\n Total: ${serviceDetails.price}`
                  );
            }}
          />
        </VStack>
        <Text color="gray.200" mt={4} fontSize="2xs" px={2} textAlign="center">
          By clicking "Proceed to Checkout" you agree and consent{"\n"}to the
          User Agreement, its policies, and the Privacy Policy.
        </Text>
        <StatusBar style="light" />
      </VStack>
    </>
  );
}