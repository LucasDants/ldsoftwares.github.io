import { Box, Flex } from "@chakra-ui/react";
import { About } from "../components/About";
import { Contacts } from "../components/Contacts";
import { Header } from "../components/Header";
import { Portfolio } from "../components/Portfolio";
import { Services } from "../components/Services";

export function LandingPage() {
  return (
    <Box>
      <Header />
      <About />
      <Services />
      <Portfolio />
      <Contacts />
    </Box>
  );
}
