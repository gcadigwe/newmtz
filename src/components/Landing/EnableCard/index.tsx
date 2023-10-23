import { Flex, Text, Img } from "@chakra-ui/react";
import { ChevronRightIcon } from "@chakra-ui/icons";
import bg from "./bg.png";

export default function EnableCard({
  title,
  text,
}: {
  title: string;
  text: string;
}) {
  return (
    <>
      <Flex position={"relative"}>
        <Img
          minW={{ sm: "260px", lg: "379px", xl: "379px" }}
          h={{ sm: "220px", lg: "327px", xl: "327px" }}
          position={"relative"}
          src={bg.src}
        />
        <Flex
          position={"absolute"}
          minW={{ sm: "260px", lg: "379px", xl: "379px" }}
          h={{ sm: "220px", lg: "327px", xl: "327px" }}
          // background={'url("../../landing/enablingsection1.png"), #5B47EF'}
          // backgroundSize={"cover"}
          // backgroundRepeat='repeat'
          // backgroundPosition={{
          //   sm: "bottom",
          //   smd: "bottom",
          //   md: "center",
          //   lg: "center",
          //   xl: "center",
          // }}
          // borderRadius='18px'
          // border={{
          //   sm: "0.68px solid #FCFCFC",
          //   smd: "0.68px solid #FCFCFC",
          //   //   md: "unset",
          //   //   lg: "unset",
          //   //   xl: "unset",
          // }}
        >
          <Flex
            flexDirection={"column"}
            px={{ sm: 6, smd: 8, lg: 10, xl: 10 }}
            justifyContent='space-evenly'
          >
            <Text
              color='#F5F5F5'
              fontFamily={"manropebd"}
              fontSize={{ sm: "16px", lg: "20px", xl: "20px" }}
            >
              {title}
            </Text>
            <Text
              fontSize={{ sm: "14px", lg: "18px", xl: "18px" }}
              fontFamily='manrope'
              color='#F5F5F5'
            >
              {text}
            </Text>

            <Flex color='#F5F5F5' alignItems={"center"}>
              <Text
                fontFamily={"manrope"}
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
