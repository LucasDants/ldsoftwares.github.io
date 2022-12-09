import { Flex, HStack, Text } from "@chakra-ui/react";

import { SkillCard } from "./SkillCard";

import { CodeSimple, DeviceMobile, ComputerTower } from "phosphor-react";

export function Services() {
  return (
    <Flex
      as="section"
      my="16"
      mx="auto"
      px="6"
      alignItems="center"
      flexDir="column"
      id="services"
    >
      <Text
        as="h6"
        color="yellow.500"
        fontSize="xs"
        textAlign="center"
        letterSpacing="widest"
        mb="2"
      >
        SERVIÇOS
      </Text>
      <Text
        as="h1"
        fontSize={["2xl", "3xl"]}
        fontWeight="bold"
        color="gray.50"
        textAlign="center"
      >
        No que somos Expert
      </Text>
      <Text textAlign="center" maxW={640} color="gray.100" pt="4">
        Somos experts em desenvolvimento fullstack, entregando para seu negócio
        soluções ponta a ponta. Utilizando tecnologias escaláveis e amplamente
        usadas no mercado por empresas como a Meta, Uber, Google e Microsoft.
      </Text>
      <HStack spacing="6" pt="8">
        <SkillCard
          Icon={DeviceMobile}
          title="Desenvolvimento Mobile"
          subtitle="25 projetos"
          infoTitle="3.000.000 +"
          infoSubtitle="de Usuários"
        />
        <SkillCard
          Icon={CodeSimple}
          title="Desenvolvimento Web"
          subtitle="30 projetos"
          infoTitle="3 +"
          infoSubtitle="Anos de Experiência"
        />
        <SkillCard
          Icon={ComputerTower}
          title="Desenvolvimento Backend"
          subtitle="16 projetos"
          infoTitle="2 +"
          infoSubtitle="Anos de Experiência"
        />
      </HStack>
    </Flex>
  );
}
