import { Flex, HStack, Image, Link, Stack, Text } from "@chakra-ui/react";

export function Portfolio() {
  return (
    <Flex
      as="section"
      py="16"
      px="6"
      alignItems="center"
      flexDir="column"
      bg="brand.600"
      id="portfolio"
    >
      <Text
        as="h6"
        color="yellow.500"
        fontSize="xs"
        textAlign="center"
        letterSpacing="widest"
        mb="2"
      >
        PORTFOLIO
      </Text>
      <Text
        as="h1"
        fontSize={["2xl", "3xl"]}
        fontWeight="bold"
        color="gray.50"
        textAlign="center"
      >
        Nossa Coleção
      </Text>
      <Text textAlign="center" maxW={640} color="gray.100" pt="4">
        Veja alguns de nossos projetos demonstrativos no nosso{" "}
        <Link
          href="https://github.com/LucasDants?tab=repositories"
          color="yellow.500"
          isExternal
        >
          Portfolio
        </Link>
        .
      </Text>

      <Stack direction={["column", "row"]} pt="10" spacing="6">
        <Link
          href="https://github.com/LucasDants/ReactNative-GoPizza"
          isExternal
        >
          <Image h="96" objectFit="contain" src="gopizza.jpeg" />
        </Link>
        <Link
          href="https://github.com/LucasDants/ReactNative-Gameplay"
          isExternal
        >
          <Image h="96" objectFit="contain" src="gameplay.png" />
        </Link>
        <Link href="https://github.com/LucasDants/ReactNative-Rentx" isExternal>
          <Image h="96" objectFit="contain" src="rentx.png" />
        </Link>
      </Stack>
    </Flex>
  );
}
