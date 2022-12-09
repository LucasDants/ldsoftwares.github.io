import { Flex, Text } from "@chakra-ui/react";

import { LinkedinLogo, Envelope, GithubLogo } from "phosphor-react";
import { ContactCard } from "./ContactCard";

export function Contacts() {
  return (
    <Flex
      as="footer"
      my="16"
      mx="auto"
      px="6"
      alignItems="center"
      flexDir="column"
      id="contacts"
    >
      <Text
        as="h6"
        color="yellow.500"
        fontSize="xs"
        textAlign="center"
        letterSpacing="widest"
        mb="2"
      >
        CONTATOS
      </Text>
      <Text
        as="h1"
        fontSize={["2xl", "3xl"]}
        fontWeight="bold"
        color="gray.50"
        textAlign="center"
      >
        Como Entrar em Contato
      </Text>
      <Text
        textAlign="center"
        maxW={640}
        color="gray.100"
        pt="4"
        mb={["6", "12"]}
      ></Text>
      <Flex
        gap="4"
        maxW={1280}
        alignItems="center"
        justifyContent="center"
        wrap="wrap"
      >
        <ContactCard
          Icon={Envelope}
          title="devlucasdantas@gmail.com"
          url="mailto:devlucasdantas@gmail.com"
        />
        <ContactCard
          Icon={LinkedinLogo}
          title="lucasdants"
          url="https://www.linkedin.com/in/lucasdants/"
        />
        <ContactCard
          Icon={GithubLogo}
          title="LucasDants"
          url="https://github.com/LucasDants/LucasDants"
        />
      </Flex>
    </Flex>
  );
}
