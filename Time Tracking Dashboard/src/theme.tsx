import { extendTheme, ThemeConfig } from "@chakra-ui/react";

const config: ThemeConfig = {
  initialColorMode: "dark",
};

const theme = extendTheme({
  config,
  styles: {
    global: {
      "html, body": {
        backgroundColor: "#0d1323",
        fontSize: "62.5%",
        color: "#FFFFFF",
      },
    },
    fonts: {
      heading: `'Rubik', open-sans`,
      body: `'Rubik', open-sans`,
    },
  },
});

export default theme;
