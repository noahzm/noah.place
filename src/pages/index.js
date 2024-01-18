import * as React from "react";
import Layout from "../components/layout";
import Seo from "../components/seo";
import { Text, Heading, Grid, GridItem, Box } from "@chakra-ui/react";
import { StaticImage } from "gatsby-plugin-image";

const IndexPage = () => (
  <Layout>
    <Grid templateColumns={[null, null, "repeat(4, 1fr)"]} gap={4}>
      <GridItem colSpan={[null, null, "2"]}>
        <Heading as="h1" size="xl" fontWeight="normal" pb="8">
          Noah is a Raleigh-based graphic designer and print specialist.
        </Heading>
        <Text fontSize="xl">
          After graduating with a degree in Graphic Arts & Imaging Technology
          from Appalachian State University, Noah began working as a printing
          specialist at the North Carolina General Assembly.
        </Text>
      </GridItem>
      <GridItem colSpan={[null, null, "1"]}>
        <Text fontSize="xl">
          <a href="mailto:noahzm@pm.me">→ Email</a>
        </Text>
        <Text fontSize="xl">
          <a href="https://github.com/noahzm" target="_blank" rel="noreferrer">
            → GitHub
          </a>
        </Text>
        <Text fontSize="xl">
          <a
            href="https://www.are.na/noah-m-otudbggylkk"
            target="_blank"
            rel="noreferrer"
          >
            → Are.na
          </a>
        </Text>
      </GridItem>
      <GridItem colSpan={[null, null, "1"]}>
        <Box border="1px">
          <StaticImage
            placeholder="blurred"
            src="../images/bb.jpg"
            alt="Photo of Noah"
            aspectRatio={5 / 4}
            layout="fullWidth"
          />
        </Box>
      </GridItem>
    </Grid>
  </Layout>
);

export const Head = () => <Seo title="Home" />;

export default IndexPage;
