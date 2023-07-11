import { extendTheme } from "@chakra-ui/react";
const theme = {
  styles: {
    global: {
      "html, body": {
        bg: "#dbd7d2",
      },
    },
  },
  fonts: {
    body: "'Neue Montreal', system-ui, sans-serif",
    heading: "'Neue Montreal', system-ui, sans-serif",
  },
};

export default extendTheme(theme);
