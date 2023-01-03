import { FontAwesome } from "@expo/vector-icons";
import {
  Input as NativeBaseInput,
  IInputProps,
  useTheme,
  Icon,
} from "native-base";

interface InputProps extends IInputProps {
  iconName: React.ComponentProps<typeof FontAwesome>["name"];
}

export function Input({ iconName, ...rest }: InputProps) {
  const { colors } = useTheme();

  return (
    <NativeBaseInput
      bg="gray.700"
      h={14}
      size="md"
      borderWidth={0}
      fontSize="md"
      fontFamily="body"
      color="white"
      placeholderTextColor="gray.300"
      InputLeftElement={
        <Icon
          as={<TabBarIcon name={iconName} color={colors.gray[300]} />}
          ml={4}
        />
      }
      _focus={{
        borderWidth: 1,
        borderColor: "green.500",
        bg: "gray.700",
      }}
      {...rest}
    />
  );
}

function TabBarIcon(props: {
  name: React.ComponentProps<typeof FontAwesome>["name"];
  color: string;
}) {
  return <FontAwesome size={30} style={{ marginBottom: -1 }} {...props} />;
}
