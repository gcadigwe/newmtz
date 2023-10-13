import { Flex, Text, Img } from "@chakra-ui/react";

export default function ChainsCard({ img }: { img: string }) {
  return (
    <Flex
      borderRadius={"30px"}
      mr={4}
      w='320px'
      h='180px'
      bgColor={"white"}
      flexDirection='column'
      alignItems={"center"}
      py={6}
      justifyContent='space-between'
    >
      <Img src={img} w='180px' />

      <Flex
        border='1px solid rgba(45, 47, 80, 1)'
        py={3}
        px={6}
        borderRadius='30px'
      >
        <Text fontFamily={"manrope"}>Trade</Text>
      </Flex>
    </Flex>
  );
}
