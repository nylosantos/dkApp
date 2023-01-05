import { FontAwesome, MaterialIcons } from "@expo/vector-icons";
import { useNavigation, useRoute } from "@react-navigation/native";
import {
  Text,
  FlatList,
  Heading,
  Image,
  VStack,
  useTheme,
  HStack,
  ScrollView,
} from "native-base";
import { Dimensions, TouchableOpacity } from "react-native";
import Swiper from "react-native-swiper";

import images from "../components/allImages";
import { orders, subMenu } from "../db/dbTemporary";
import {
  HomeScreenRoutesParams,
  MenuSubHeaderNavigationProps,
  ModalAppScreenRoutesParams,
  RootTabScreenProps,
} from "../types";

const { width, height } = Dimensions.get("window");

export default function Home({ isLogin }: HomeScreenRoutesParams) {
  const navigation = useNavigation()
  const { colors } = useTheme();
  function handleMenuSubHeaderNavigation({
    page,
  }: MenuSubHeaderNavigationProps) {
    if (page === "reactApp") {
      navigation.navigate("ModalAppScreen", { isLogin });
    }
  }
  return (
    <VStack alignItems="center" justifyContent="flex-start">
      <VStack alignItems="center" justifyContent="flex-start">
        {/** MENU SUBHEADER */}
        <VStack
          width={width}
          bg="gray.900"
          alignItems="center"
          justifyContent="center"
        >
          <FlatList
            data={subMenu}
            keyExtractor={(item) => item.id}
            horizontal
            showsHorizontalScrollIndicator={false}
            renderItem={({ item }) => (
              <TouchableOpacity activeOpacity={1} onPress={() => handleMenuSubHeaderNavigation({page: item.page})}>
                <VStack
                  w="24"
                  py={2}
                  justifyContent="center"
                  alignItems="center"
                  space={2}
                >
                  <TabBarIcon name={item.icon} color={colors.gray[200]} />
                  <Text color="gray.200" fontSize="2xs" textAlign="center">
                    {item.name}
                  </Text>
                </VStack>
              </TouchableOpacity>
            )}
          />
        </VStack>
        {/** CONTENT */}
        <ScrollView
          contentContainerStyle={{ alignItems: "center" }}
          showsVerticalScrollIndicator={false}
        >
          {/** BANNER */}
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
          {/** CALL TO ACTION TEXT */}
          <Heading fontFamily="heading" color="white" mb={4} mt={4}>
            Create your app
          </Heading>
          {/** BUTTONS TO APP */}
          <VStack flex={1}>
            <FlatList
              data={orders}
              keyExtractor={(item) => item.id}
              horizontal
              showsHorizontalScrollIndicator={false}
              contentContainerStyle={{
                paddingBottom: 10,
                paddingStart: 5,
                paddingEnd: 10,
              }}
              renderItem={({ item }) => (
                <TouchableOpacity activeOpacity={1}>
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
                    <Heading
                      fontFamily="heading"
                      color="pink.500"
                      mb={4}
                      onPress={() =>
                        navigation.navigate("ModalService", {
                          service: item.id,
                          isLogin: true,
                        })
                      }
                    >
                      Continue
                    </Heading>
                  </VStack>
                </TouchableOpacity>
              )}
            />
          </VStack>
        </ScrollView>
      </VStack>
    </VStack>
  );
}

{
  /** FUNCTION TO GENERATE ICONS */
}
function TabBarIcon(props: {
  name: React.ComponentProps<typeof MaterialIcons>["name"];
  color: string;
}) {
  return <MaterialIcons size={30} style={{ marginBottom: -1 }} {...props} />;
}
