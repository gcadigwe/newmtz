import { Button, Flex, Text } from "@chakra-ui/react";

export default function Navbar() {
  return (
    <Flex pt={10}>
      <Flex justifyContent='flex-end' w='100%' pr={24}>
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
      </Flex>
    </Flex>
  );
}
