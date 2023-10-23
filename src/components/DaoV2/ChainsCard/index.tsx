import { Flex, Text, Img, useMediaQuery } from "@chakra-ui/react";

export default function ChainsCard({ img }: { img: string }) {
  const [isMobileDevice] = useMediaQuery("(max-width: 559px)");
  return (
    <Flex
      borderRadius={isMobileDevice ? "14px" : "30px"}
      mr={isMobileDevice ? undefined : 4}
      w={{ sm: "160px", smd: "220px", md: "240px", lg: "280px", xl: "320px" }}
      h={{ sm: "120px", smd: "140px", md: "160px", lg: "160px", xl: "180px" }}
      bgColor={"white"}
      flexDirection='column'
      alignItems={"center"}
      py={6}
      justifyContent='space-between'
    >
      <Img
        src={img}
        w={{ sm: "80px", smd: "120px", md: "140px", lg: "160px", xl: "180px" }}
      />

      <Flex
        border='1px solid rgba(45, 47, 80, 1)'
        py={isMobileDevice ? 1 : 3}
        px={6}
        borderRadius={"30px"}
      >
        <Text
          fontSize={{
            sm: "10px",
            smd: "12px",
            md: "14px",
            lg: "14px",
            xl: "16px",
          }}
          fontFamily={"manrope"}
        >
          Trade
        </Text>
      </Flex>
    </Flex>
  );
}
