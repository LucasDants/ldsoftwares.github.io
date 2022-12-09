import { Flex } from "@chakra-ui/react";
import { Logo } from "./Logo";
import { NavBar } from "./NavBar";

export function Header() {
  return (
    <Flex
      as="header"
      w="100%"
      py="6"
      px="6"
      align="center"
      position="sticky"
      top="0"
      zIndex="10"
      bg="brand.600"
    >
      <Flex maxW={1280} mx="auto" w="100%" align="center">
        <Logo />
        <NavBar />
      </Flex>
    </Flex>
  );
}
