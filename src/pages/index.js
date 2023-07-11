import * as React from "react";
import Layout from "../components/layout";
import { SimpleGrid, Box } from "@chakra-ui/react";
import { StaticImage } from "gatsby-plugin-image";

const IndexPage = () => (
  <Layout>
    <SimpleGrid columns={[1, null, 2]} spacing={4}>
      <Box border="1px">
        <StaticImage
          placeholder="blurred"
          src="https://picsum.photos/4000/3000?random=1&grayscale"
          alt="Photo of Noah"
          aspectRatio={4 / 3}
          layout="fullWidth"
        />
      </Box>
      <Box border="1px">
        <StaticImage
          placeholder="blurred"
          src="https://picsum.photos/4000/3000?random=2&grayscale"
          alt="Photo of Noah"
          aspectRatio={4 / 3}
          layout="fullWidth"
        />
      </Box>
      <Box border="1px">
        <StaticImage
          placeholder="blurred"
          src="https://picsum.photos/4000/3000?random=3&grayscale"
          alt="Photo of Noah"
          aspectRatio={4 / 3}
          layout="fullWidth"
        />
      </Box>
      <Box border="1px">
        <StaticImage
          placeholder="blurred"
          src="https://picsum.photos/4000/3000?random=4&grayscale"
          alt="Photo of Noah"
          aspectRatio={4 / 3}
          layout="fullWidth"
        />
      </Box>
    </SimpleGrid>
  </Layout>
);

export default IndexPage;
