import React from "react";
import { Heading, Button as ButtonNativeBase, IButtonProps } from "native-base";

interface ButtonProps extends IButtonProps {
  title: string;
  isLogin: boolean;
}

export function Button({ title, isLogin, ...rest }: ButtonProps) {
  return (
    <ButtonNativeBase
      bg={isLogin ? "green.700" : "gray.500"}
      h={14}
      fontSize="sm"
      rounded="sm"
      _pressed={{
        bg: "green.500",
      }}
      {...rest}
    >
      <Heading
        fontFamily="heading"
        color={isLogin ? "white" : "gray.300"}
        fontSize="sm"
        textTransform="uppercase"
      >
        {title}
      </Heading>
    </ButtonNativeBase>
  );
}
