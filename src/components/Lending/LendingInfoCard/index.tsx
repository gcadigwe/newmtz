import { Flex, Text, Img } from "@chakra-ui/react";
import { ChevronRightIcon } from "@chakra-ui/icons";

export default function LendingInfoCard({
  img,
  text,
}: {
  img: any;

  text: string;
}) {
  return (
    <>
      <Flex position='relative'>
        <Img
          w={{ sm: "unset", lg: "320px", xl: "440px" }}
          minW={{ sm: "260px", lg: "unset", xl: "unset" }}
          h={{ sm: "230px", lg: "280px", xl: "360px" }}
          src={img.src}
          position='relative'
        />
        <Flex
          position={"absolute"}
          w={{ sm: "unset", lg: "320px", xl: "379px" }}
          minW={{ sm: "260px", lg: "unset", xl: "unset" }}
          h={{ sm: "230px", lg: "280px", xl: "327px" }}
          //   alignItems='center'
        >
          <Flex
            flexDirection={"column"}
            px={{ sm: 4, lg: 6, xl: 8 }}
            justifyContent='space-evenly'
          >
            <Text
              fontSize={{ sm: "14px", lg: "18px", xl: "22px" }}
              fontFamily='manrope'
              color='white'
            >
              {text}
            </Text>

            <Flex color='white' alignItems={"center"}>
              <Text
                fontFamily={"manropebd"}
                fontSize={{
                  sm: "12px",
                  smd: "12px",
                  md: "16px",
                  lg: "16px",
                  xl: "16px",
                }}
              >
                Read more
              </Text>
              <ChevronRightIcon />
            </Flex>
          </Flex>
        </Flex>
      </Flex>
    </>
  );
}
