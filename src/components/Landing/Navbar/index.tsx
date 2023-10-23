import { HamburgerIcon } from "@chakra-ui/icons";
import { Button, Flex, Img, Text, useMediaQuery } from "@chakra-ui/react";
import hamburger from "../../../assets/hamburger.svg";
import Link from "next/link";

export default function Navbar() {
  const [isMobileDevice] = useMediaQuery("(max-width: 559px)");
  return (
    <Flex pt={10}>
      {isMobileDevice ? (
        <Flex justifyContent={"flex-end"} w='100%' pr={6} mb={2}>
          <Img src={hamburger.src} w='30px' h='30px' />
        </Flex>
      ) : (
        <Flex justifyContent='flex-end' w='100%' pr={24}>
          <Flex
            color='white'
            alignItems={"center"}
            justifyContent={"space-between"}
            flex={0.5}
            fontFamily={"manropebd"}
            fontSize={{ lg: "18px", xl: "22px" }}
          >
            <Link href='/daov2'>
              <Text>Governance</Text>
            </Link>
            <Link href='/lsd'>
              <Text>LSD</Text>
            </Link>
            <Link href='/lending'>
              <Text>Lending</Text>
            </Link>

            <Link href='/yieldv2'>
              <Text>Yield</Text>
            </Link>
            <Button borderRadius={"18px"} bgColor={"rgba(45, 47, 80, 1)"}>
              Launch App
            </Button>
          </Flex>
        </Flex>
      )}
    </Flex>
  );
}
