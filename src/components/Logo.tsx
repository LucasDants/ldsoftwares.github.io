import { Text } from "@chakra-ui/react";

export function Logo() {
  return (
    <Text
      fontSize={["xl", "2xl"]}
      fontWeight="bold"
      letterSpacing="tight"
      w="64"
    >
      LD Softwares
      <Text as="span" color="yellow.500">
        .
      </Text>
    </Text>
  );
}
