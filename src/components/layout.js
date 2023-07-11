import { Box } from "@chakra-ui/react";
import React from "react";
import { useStaticQuery, graphql } from "gatsby";
import Navbar from "./navbar";
import Footer from "./footer";

export default function Layout({ children }) {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `);

  return (
    <>
      <Navbar siteTitle={data.site.siteMetadata?.title || `Title`} />
      <Box as="main" p="4">
        {children}
      </Box>
      <Footer siteTitle={data.site.siteMetadata?.title} />
    </>
  );
}
