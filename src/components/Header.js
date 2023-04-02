import {
  Box,
  Flex,
  Text,
  IconButton,
  Stack,
  Collapse,
  Link,
  useColorModeValue,
  useBreakpointValue,
  useDisclosure,
  Heading,
  Spacer,
  Image,
} from "@chakra-ui/react";
import { HamburgerIcon, CloseIcon } from "@chakra-ui/icons";
import { NavLink } from "react-router-dom";
import Logo from "../images/logo.svg";
import "./styles/HeaderStyles.css";

export default function WithSubnavigation() {
  const { isOpen, onToggle } = useDisclosure();

  return (
    <Box>
      <Flex
        bg={"#F6F1E9"}
        color={useColorModeValue("gray.600", "white")}
        minH={"60px"}
        py={{ base: 2 }}
        px={{ base: 4 }}
        borderBottom={1}
        borderStyle={"solid"}
        borderColor={useColorModeValue("gray.200", "gray.900")}
        align={"center"}
        justifyItems={"spaced-between"}
      >
        <Flex flex={{ base: 1 }} justify={{ base: "center", md: "start" }}>
          <Image
            src={Logo}
            alt="logo"
            height="25px"
            width="30"
            mr={"6px"}
            ml={"10px"}
          />
          <Text
            textAlign={useBreakpointValue({ base: "center", md: "left" })}
            fontFamily={"heading"}
            color={"#4F200D"}
          >
            <Heading size="md">Aapla Aamba</Heading>
          </Text>

          <Spacer />
          <Flex display={{ base: "none", md: "flex" }} ml={10}>
            <DesktopNav />
          </Flex>
        </Flex>
        <Flex
          flex={{ md: "auto" }}
          ml={{ base: -2 }}
          display={{ base: "flex", md: "none" }}
        >
          <IconButton
            onClick={onToggle}
            icon={
              isOpen ? <CloseIcon w={3} h={3} /> : <HamburgerIcon w={5} h={5} />
            }
            variant={"ghost"}
            aria-label={"Toggle Navigation"}
          />
        </Flex>
      </Flex>

      <Collapse in={isOpen} animateOpacity>
        <MobileNav />
      </Collapse>
    </Box>
  );
}

const DesktopNav = () => {
  return (
    <Stack direction={"row"} spacing={4} color={"#4F200D"}>
      {NAV_ITEMS.map((navItem) => (
        <NavLink activeClassName="active" to={navItem.nav} key={navItem.label}>
          <p>{navItem.label}</p>
        </NavLink>
      ))}
    </Stack>
  );
};

const MobileNav = () => {
  return (
    <Stack bg={"#F6F1E9"} p={4} display={{ md: "none" }}>
      {NAV_ITEMS.map((navItem) => (
        <MobileNavItem key={navItem.label} {...navItem} />
      ))}
    </Stack>
  );
};

const MobileNavItem = ({ label, href }: NavItem) => {
  return (
    <Flex
      py={2}
      as={Link}
      href={href ?? "#"}
      justify={"space-between"}
      align={"center"}
      _hover={{
        textDecoration: "none",
      }}
    >
      <Text fontWeight={600} color={"#4F200D"}>
        {label}
      </Text>
    </Flex>
  );
};

const NAV_ITEMS: Array<NavItem> = [
  {
    label: "Home",
    nav: "/",
  },

  {
    label: "Contact",
    nav: "/contact",
  },
  {
    label: "About",
    nav: "/about",
  },
];
