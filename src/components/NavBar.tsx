import { Flex } from "@chakra-ui/react";
import { NavLink } from "./NavLink";

export function NavBar() {
  return (
    <Flex as="nav" ml="auto" gap={["4", "12"]}>
      <NavLink href="#home">Home</NavLink>
      <NavLink href="#services">Serviços</NavLink>
      <NavLink href="#portfolio">Portfolio</NavLink>
      <NavLink href="#contacts">Contatos</NavLink>
    </Flex>
  );
}
