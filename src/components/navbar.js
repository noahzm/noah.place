import { Grid, GridItem, Box, Text/*Icon*/ } from "@chakra-ui/react";
import React from "react";
import { Link } from "gatsby";
// import { RxInstagramLogo } from "react-icons/rx";

const Navbar = ({ siteTitle }) => (
  <Box
    as="header"
    bgColor="#dbd7d2"
    w="100%"
    /*borderBottom="1px"*/
    fontSize={["xl", "xl", "4xl"]}
  >
    <Grid templateColumns="repeat(6, 1fr)" p="4" gap="4">
      <GridItem colSpan={3}>
        <Link to="/">{siteTitle}</Link>
      </GridItem>
      <GridItem colSpan={2}>
        <Text>Information</Text>
      </GridItem>
      {/* 
      <GridItem colSpan={1}>
        <a
          href="https://www.instagram.com/noahplace/"
          target="_blank"
          rel="noreferrer"
        >
          <Icon as={RxInstagramLogo} />
        </a>
      </GridItem> */}
    </Grid>
  </Box>
);

export default Navbar;
