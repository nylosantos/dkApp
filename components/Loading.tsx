import React from "react";
import { Center, Spinner, Text } from "native-base";

export function Loading() {
  return (
    <Center flex={1} flexDir="row" bg="gray.600">
      <Spinner color="secondary.700" mr={2} />
      <Text color="secondary.700">Loading... </Text>
    </Center>
  );
}
