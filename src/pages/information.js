import * as React from "react";
import Layout from "../components/layout";
import { Text, Heading, Grid, GridItem, Box } from "@chakra-ui/react";
import { StaticImage } from "gatsby-plugin-image";

const InformationPage = () => (
  <Layout>
    <Grid templateColumns={[null, null, "repeat(4, 1fr)"]} gap={4}>
      <GridItem colSpan={[null, null, "1"]}>
        <Box border="1px">
          <StaticImage
            placeholder="blurred"
            src="../images/bb.jpg"
            alt="Photo of Noah"
            aspectRatio={4 / 3}
            layout="fullWidth"
          />
        </Box>
      </GridItem>
      <GridItem colSpan={[null, null, "1"]}>
        <Text>
          <a href="mailto:noahzm@pm.me">→ Email</a>
        </Text>
        <Text>
          <a
            href="https://www.instagram.com/noahplace/"
            target="_blank"
            rel="noreferrer"
          >
            → Instagram
          </a>
        </Text>
        <Text>
          <a
            href="https://www.are.na/noah-m-otudbggylkk"
            target="_blank"
            rel="noreferrer"
          >
            → Are.na
          </a>
        </Text>
      </GridItem>
      <GridItem colSpan={[null, null, "2"]}>
        <Heading as="h1" size="xl" fontWeight="normal" pb="8">
          Noah Michaels is a Raleigh-based graphic designer and print
          specialist.
        </Heading>
        <Text>
          After graduating with a degree in Graphic Arts & Imaging Technology
          from Appalachian State University, he began working as a printing
          specialist at the North Carolina General Assembly. He is enrolled in
          courses for a Computer Programming Certificate at North Carolina State
          University. Next, he plans to continue his education with a Masters of
          Computer Science.
        </Text>
      </GridItem>
    </Grid>
  </Layout>
);

export default InformationPage;
