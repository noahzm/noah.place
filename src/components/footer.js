import { Box, Text } from "@chakra-ui/react";
import React from "react";

const Footer = ({ siteTitle }) => (
  <Box as="footer" w="100%" fontSize={["xl", "xl", "4xl"]} p="4">
    <Text>© {siteTitle}</Text>
  </Box>
);

export default Footer;
