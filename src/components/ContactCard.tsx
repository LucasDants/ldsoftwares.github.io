import { Flex, Link } from "@chakra-ui/react";
import { Icon as IconElement } from "phosphor-react";

type Props = {
  Icon: IconElement;
  title: string;
  url: string;
};
export function ContactCard({ Icon, title, url }: Props) {
  return (
    <Flex
      alignItems="center"
      bgGradient="linear(to-r, black, brand.600)"
      boxShadow="lg"
      borderRadius="md"
      py="4"
      px="6"
      mb="6"
      gap="4"
      mt="12"
    >
      <Icon size="22" color="#EEEEEE" weight="light" />
      <Link
        fontSize="sm"
        letterSpacing="wider"
        color="yellow.500"
        fontWeight="bold"
        isExternal
        href={url}
      >
        {title}
      </Link>
    </Flex>
  );
}
