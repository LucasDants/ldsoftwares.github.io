import { Box, Flex, Text } from "@chakra-ui/react";
import { Icon as IconElement } from "phosphor-react";

type Props = {
  Icon: IconElement;
  title: string;
  subtitle: string;
  infoTitle: string;
  infoSubtitle: string;
};
export function SkillCard({
  Icon,
  title,
  subtitle,
  infoTitle,
  infoSubtitle,
}: Props) {
  return (
    <Box>
      <Flex
        flexDir="column"
        alignItems="center"
        bgGradient="linear(to-r, brand.600, black)"
        borderRadius="xl"
        px="6"
        py="10"
        boxShadow="xl"
        mb="6"
      >
        <Icon size="64" color="#EEEEEE" weight="light" />
        <Text
          as="h2"
          pt="4"
          fontSize="sm"
          letterSpacing="wider"
          color="gray.50"
          fontWeight="bold"
        >
          {title}
        </Text>
        <Text pt="1" color="gray.100" fontSize="sm">
          {subtitle}
        </Text>
      </Flex>
      <Text
        as="h1"
        color="yellow.500"
        fontSize={["xl", "2xl"]}
        textAlign="center"
      >
        {infoTitle}
      </Text>
      <Text color="gray.100" pt="1" fontSize="sm" textAlign="center">
        {infoSubtitle}
      </Text>
    </Box>
  );
}
