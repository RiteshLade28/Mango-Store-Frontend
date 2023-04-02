import React from "react";
import { Stack, Image } from "@chakra-ui/react";
import Mango1 from "../images/mango1.png";
import Mango3 from "../images/mango3.webp";
import Mango4 from "../images/mango4.jpg";

const Images = () => {
  return (
    <Stack direction="row" wrap={"wrap"}>
      <Image height="400px" objectFit="cover" className="image" src={Mango1} />
      <Image
        height={"400px"}
        width={"430px"}
        objectFit="cover"
        className="image"
        src={Mango4}
      />
      <Image
        height={"400px"}
        objectFit="cover"
        className="image"
        src={Mango3}
      />
    </Stack>
  );
};

export default Images;
