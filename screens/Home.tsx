import { Text, FlatList, Heading, Image, VStack } from "native-base";
import { Dimensions, TouchableOpacity } from "react-native";
import Swiper from "react-native-swiper";

const orders = [
  {
    id: "Basic",
    name: "Basic App",
    description: "In this pack, we'll do Simple\nfrontend app with some logic",
    price: "€3,397.90",
    deliverTime: "5 Days",
    revisions: "5",
  },
  {
    id: "Standard",
    name: "Standard App",
    description: "In this pack, we'll do your simple frontend, login/signup\n(Firebase auth)",
    price: "€6,897.90",
    deliverTime: "5 Days",
    revisions: "6",
  },
  {
    id: "Premium",
    name: "Premium App",
    description: "We'll develop complete applications with testing and will upload it\non play/google store.",
    price: "€24,997.90",
    deliverTime: "60 Days",
    revisions: "8",
  },
];

import images from "../components/allImages";
import { RootTabScreenProps } from "../types";

const { width, height } = Dimensions.get("window");

export default function Home({
  navigation,
  route,
}: RootTabScreenProps<"Home">) {
  return (
    <VStack alignItems="center" justifyContent="flex-start">
      <VStack alignItems="center" justifyContent="flex-start">
        <Swiper
          containerStyle={{ height: 250, flex: 0 }}
          showsPagination={false}
          autoplay
          autoplayTimeout={3}
        >
          <Image
            source={images.app}
            alt="teste"
            w={width}
            h={250}
            resizeMode="cover"
          />
          <Image
            source={images.virtualReality}
            alt="teste"
            w={width}
            h={250}
            resizeMode="cover"
          />
          <Image
            source={images.artificialInteligence}
            alt="teste"
            w={width}
            h={250}
            resizeMode="cover"
          />
        </Swiper>
        <Heading fontFamily="heading" color="white" mb={4} mt={4}>
          Come with us...
        </Heading>
        <VStack flex={1} ml={1}>
          <FlatList
            data={orders}
            keyExtractor={(item) => item.id}
            renderItem={({ item }) => (
              <TouchableOpacity
                activeOpacity={1}
              >
                <VStack
                  w={300}
                  h={390}
                  bg="gray.900"
                  mr={2}
                  p={4}
                  rounded="lg"
                  borderWidth={1}
                  borderColor="gray.300"
                  borderLeftWidth={4}
                  borderLeftColor="orange.500"
                  justifyContent="space-between"
                  alignItems="center"
                  // data={item}
                >
                  <Heading fontFamily="heading" color="pink.500" mb={6}>
                    {item.name}
                  </Heading>
                  <Text color="white" fontSize="md" textAlign="center" mb={4}>
                    {item.description}
                  </Text>
                  <Text color="pink.500" fontSize="2xl" mb={4}>
                    {item.price}
                  </Text>
                  <Text color="white" fontSize="lg" mb={4}>
                    Delivered in {item.deliverTime}
                  </Text>
                  <Text color="white" fontSize="lg" mb={8}>
                    With {item.revisions} revisions
                  </Text>
                  <Heading fontFamily="heading" color="pink.500" mb={4} onPress={() => navigation.navigate("ModalService", {service: item.id})}>
                    Tap and learn More
                  </Heading>
                </VStack>
              </TouchableOpacity>
            )}
            horizontal
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={{
              paddingBottom: 50,
            }}
          />
        </VStack>
      </VStack>
    </VStack>
  );
}
