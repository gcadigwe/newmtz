import { HamburgerIcon } from "@chakra-ui/icons";
import { Button, Flex, Img, Text, useMediaQuery } from "@chakra-ui/react";
import hamburger from "../../../assets/hamburger.svg";

export default function Navbar() {
  const [isMobileDevice] = useMediaQuery("(max-width: 559px)");
  return (
    <Flex pt={10}>
      <Flex justifyContent='flex-end' w='100%' pr={isMobileDevice ? 10 : 24}>
        {isMobileDevice ? (
          <Flex>
            <Img src={hamburger.src} w='30px' h='30px' />
          </Flex>
        ) : (
          <Flex
            color='black'
            alignItems={"center"}
            justifyContent={"space-between"}
            flex={0.5}
            fontFamily={"manropebd"}
            fontSize={{ lg: "18px", xl: "22px" }}
          >
            <Text>Governance</Text>
            <Text>Documentation</Text>
            <Text>Lending</Text>
            <Text>Yield</Text>
            <Button borderRadius={"18px"} color='white' bgColor={"#5B47EF"}>
              Launch App
            </Button>
          </Flex>
        )}
      </Flex>
    </Flex>
  );
}
