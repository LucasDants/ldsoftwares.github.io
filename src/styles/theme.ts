import { extendTheme } from "@chakra-ui/react";

export const theme = extendTheme({
  colors: {
    brand: {
      500: "#111111",
      400: "#222222",
    },
    yellow: {
      500: "#FBC104",
    },
  },

  fonts: {
    heading: "Lato",
    body: "Lato",
  },
  styles: {
    global: {
      body: {
        bg: "brand.500",
        color: "gray.50",
      },
    },
  },
});
