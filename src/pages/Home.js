import React from "react";
import Layout from "../components/Layout";
import BgCover from "../images/bgcover.jpeg";
import { Box, Button, Heading, Text } from "@chakra-ui/react";
import "../components/styles/HomeStyles.css";
import Features from "../components/Features.js";
import Pricing from "../components/Pricing.js";
import Testimonials from "../components/Testimonials.js";
import Images from "../components/Images";

const Home = () => {
  return (
    <Layout>
      <Box className="home" bgImage={BgCover} color={"#4F200D"} p={"100px"}>
        <Box className="headerContainer">
          <Heading
            // size="4xl"
            className="homeheading"
            size={{ base: "2xl", xl: "4xl" }}
          >
            Aapla Aamba
          </Heading>
          <Text fontSize={{ base: "xl", xl: "3xl" }} pt={"10px"}>
            Ratnagiri Cha Raja
          </Text>
          <Button colorScheme="orange" size="md" width={"150px"} mt={"10px"}>
            Order Now
          </Button>
        </Box>
      </Box>
      <Features />
      <Images />
      <Pricing />
      <Testimonials />
    </Layout>
  );
};

export default Home;
