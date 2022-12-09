import { extendTheme } from "@chakra-ui/react";

export const theme = extendTheme({
  colors: {
    brand: {
      600: "#0e0e0e",
      500: "#111111",
      400: "#121212",
      300: "#222222",
    },
    yellow: {
      500: "#FBC104",
    },
    gray: {
      50: "#EEEEEE",
      100: "#CCCCCC",
    },
  },

  fonts: {
    heading: "Lato",
    body: "Lato",
  },
  styles: {
    global: {
      body: {
        bg: "brand.400",

        color: "white",
        "::-webkit-scrollbar": {
          w: "2",
          bg: "brand.600",
        },
        "::-webkit-scrollbar-track": {
          w: "4",
        },
        "::-webkit-scrollbar-thumb": {
          borderRadius: "full",
          bg: "#FBC104",
          opacity: 1,
        },
      },
    },
  },
});
