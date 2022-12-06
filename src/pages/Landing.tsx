import { Box, Flex } from "@chakra-ui/react";
import { Header } from "../components/Header";

export function LandingPage() {
  return (
    <Box>
      <Header />
      <Flex
        w="100%"
        my="6"
        maxWidth={1480}
        mx="auto"
        px="6"
        bg="gray.800"
      ></Flex>
    </Box>
  );
}
