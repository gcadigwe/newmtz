import { HamburgerIcon } from "@chakra-ui/icons";
import { Button, Flex, Text, useMediaQuery } from "@chakra-ui/react";

export default function Navbar() {
  const [isMobileDevice] = useMediaQuery("(max-width: 559px)");
  return (
    <Flex pt={10}>
      {isMobileDevice ? (
        <Flex justifyContent={"flex-end"} w='100%' pr={6}>
          <HamburgerIcon w='30px' h='30px' />
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
            <Text>Governance</Text>
            <Text>Documentation</Text>
            <Text>Lending</Text>
            <Text>Yield</Text>
            <Button borderRadius={"18px"} bgColor={"rgba(45, 47, 80, 1)"}>
              Launch App
            </Button>
          </Flex>
        </Flex>
      )}
    </Flex>
  );
}
