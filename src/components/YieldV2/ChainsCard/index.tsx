import { Flex, Text, Img } from "@chakra-ui/react";

export default function ChainsCard({ img }: { img: string }) {
  return (
    <Flex
      borderRadius={"30px"}
      mr={4}
      w='320px'
      h='240px'
      bgColor={"white"}
      flexDirection='column'
      alignItems={"center"}
      py={6}
      justifyContent='space-between'
    >
      <Img src={img} w='180px' />
      <Flex justifyContent={"space-around"} w='100%'>
        <Flex flexDirection={"column"} alignItems='center'>
          <Text fontFamily={"manrope"}>Liquidity</Text>
          <Text color='#28C980'>10.23%</Text>
        </Flex>

        <Flex flexDirection={"column"} alignItems='center'>
          <Text fontFamily={"manrope"}>Vault APY</Text>
          <Text color='#28C980'>7.23%</Text>
        </Flex>
      </Flex>
      <Flex
        border='1px solid rgba(45, 47, 80, 1)'
        py={3}
        px={6}
        borderRadius='30px'
      >
        <Text fontFamily={"manrope"}>Add liquidity</Text>
      </Flex>
    </Flex>
  );
}
