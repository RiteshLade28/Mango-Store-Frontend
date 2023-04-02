import React from "react";
import Layout from "../components/Layout";
import { Heading, Box, Text } from "@chakra-ui/react";

const About = () => {
  return (
    <Layout>
      <Box
        alignItems={"center"}
        display={"flex"}
        justifyContent={"center"}
        flexDirection={"column"}
        padding={"100px"}
        bgColor={"#FFD93D"}
        color={"#4F200D"}
        fontSize="xl"
      >
        <Heading size={"xl"} pb={"10px"}>
          About Us
        </Heading>
        <Text textIndent={"50px"}>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad in aut
          fugit minus sit aliquid quas maiores natus, culpa commodi iste
          eligendi illum veritatis. Dolores aliquid exercitationem vel ipsam
          quae!
        </Text>
        <Text textIndent={"50px"}>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsa optio
          amet commodi corrupti alias, nam accusamus distinctio quam odit
          praesentium cumque labore ad voluptatum qui incidunt! Aliquid amet
          aperiam magnam porro rem consectetur, unde nobis temporibus dicta
          necessitatibus eligendi recusandae asperiores dolorum neque ab
          sapiente debitis, sint consequuntur totam? Laborum soluta, sequi,
          minima delectus illo eaque sit animi officiis temporibus officia
          nesciunt distinctio. Fugiat animi nulla dolores odio est ut sunt alias
          laudantium aliquam facere dolore ratione doloremque accusamus et
          mollitia aspernatur quasi sit ullam nobis veniam assumenda itaque
          explicabo, numquam culpa. Iure voluptas alias sapiente ut assumenda!
          Ad, eos.
        </Text>
        <Text textIndent={"50px"}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora
          itaque quod ab eaque commodi, ullam delectus veritatis doloremque
          cumque quisquam reprehenderit nemo inventore earum aspernatur tempore
          voluptatum at exercitationem, eligendi ducimus accusantium quae?
          Mollitia, ad eaque molestias adipisci voluptatem nesciunt officia qui
          deserunt aut tenetur nobis deleniti quae culpa laudantium, dolorum
          voluptates fugiat iste blanditiis? Eaque sequi dicta in nesciunt cum
          officiis voluptatum voluptate ad. Nostrum, excepturi laborum
          asperiores nisi modi dolore aspernatur quos atque perspiciatis
          quisquam animi eveniet aperiam, blanditiis assumenda saepe maxime
          ducimus eum. Quidem beatae quaerat placeat nam corporis eum
          consequuntur tempora! Odio blanditiis cumque voluptatem quasi.
        </Text>
      </Box>
    </Layout>
  );
};

export default About;
