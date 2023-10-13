import { Flex, Text, Img, useMediaQuery } from "@chakra-ui/react";

export default function ChainsCard({
  img,
  blur,
}: {
  img: string;
  blur: boolean;
}) {
  const [isMobileDevice] = useMediaQuery("(max-width: 559px)");
  return (
    <Flex
      borderRadius={isMobileDevice ? "24px" : "30px"}
      mr={4}
      w={{ sm: "160px", smd: "280px", md: "280px", lg: "310px", xl: "378px" }}
      h={{ sm: "260px", smd: "280px", md: "280px", lg: "310px", xl: "375px" }}
      bgColor={"white"}
      flexDirection='column'
      alignItems={"center"}
      py={6}
      justifyContent='space-between'
      filter={blur ? "blur(8px)" : undefined}
    >
      <Img
        src={img}
        w={{ sm: "120px", smd: "140px", md: "180px", lg: "180px", xl: "180px" }}
      />
      <Text
        px={isMobileDevice ? 4 : 8}
        fontSize={{
          sm: "11px",
          smd: "14px",
          md: "14px",
          lg: "16px",
          xl: "18px",
        }}
        fontFamily={"manrope"}
      >
        Stake Eth, receive staking rewards and use your XEth as collateral in
        MultichainZ lending
      </Text>
      <Flex justifyContent={"space-around"} w='100%'>
        <Flex flexDirection={"column"} alignItems='center'>
          <Text
            fontFamily={"manrope"}
            fontSize={{
              sm: "12px",
              smd: "14px",
              md: "14px",
              lg: "16px",
              xl: "18px",
            }}
          >
            Liquidity
          </Text>
          <Text
            fontSize={{
              sm: "12px",
              smd: "14px",
              md: "14px",
              lg: "16px",
              xl: "18px",
            }}
            fontFamily={"manropebd"}
            color='#28C980'
          >
            10.23%
          </Text>
        </Flex>

        <Flex flexDirection={"column"} alignItems='center'>
          <Text
            fontFamily={"manrope"}
            fontSize={{
              sm: "12px",
              smd: "14px",
              md: "14px",
              lg: "16px",
              xl: "18px",
            }}
          >
            Vault APY
          </Text>
          <Text
            fontFamily={"manropebd"}
            color='#28C980'
            fontSize={{
              sm: "12px",
              smd: "14px",
              md: "14px",
              lg: "16px",
              xl: "18px",
            }}
          >
            7.23%
          </Text>
        </Flex>
      </Flex>
      <Flex
        border='1px solid #2D2F50'
        py={isMobileDevice ? 1 : 3}
        px={isMobileDevice ? 4 : 6}
        borderRadius='30px'
      >
        <Text
          fontFamily={"manropebd"}
          fontSize={{
            sm: "12px",
            smd: "12px",
            md: "14px",
            lg: "16px",
            xl: "18px",
          }}
        >
          Stake Now
        </Text>
      </Flex>
    </Flex>
  );
}
