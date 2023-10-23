import { Img, Flex, Text, useMediaQuery } from "@chakra-ui/react";
import lsdwhycard from "../../../assets/lsdwhycard.png";

export default function WhyCard({
  title,
  text,
}: {
  title: string;
  text: string;
}) {
  const [isMobileDevice] = useMediaQuery("(max-width: 559px)");
  return (
    <>
      <Flex position={"relative"}>
        <Img
          minW={{
            sm: "250px",
            smd: "280px",
            md: "320px",
            lg: "380px",
            xl: "460px",
          }}
          h={{
            sm: "250px",
            smd: "260px",
            md: "280px",
            lg: "320px",
            xl: "380px",
          }}
          src={lsdwhycard.src}
        />

        <Flex
          position={"absolute"}
          // borderRadius={"20px"}
          // border='1.33px solid #FCFCFC'
          minW={{
            sm: "250px",
            smd: "280px",
            md: "320px",
            lg: "380px",
            xl: "460px",
          }}
          h={{
            sm: "250px",
            smd: "260px",
            md: "280px",
            lg: "320px",
            xl: "380px",
          }}
          // background={'url("../../lsdwhycardbg.png")'}
          // backgroundRepeat='repeat'
          // backgroundPosition={"center"}
          flexDirection='column'
          color='#F5F5F5'
          py={{ sm: 6, smd: 6, md: 6, lg: 10, xl: 10 }}
          px={{ sm: 4, smd: 6, md: 6, lg: 10, xl: 10 }}
          // justifyContent='space-around'
        >
          <Text
            fontSize={{
              sm: "22px",
              smd: "24px",
              md: "26px",
              lg: "32px",
              xl: "32px",
            }}
            fontFamily='manropebd'
          >
            {title}
          </Text>
          <Text
            fontSize={{
              sm: "14px",
              smd: "15px",
              md: "16px",
              lg: "18px",
              xl: "22px",
            }}
            fontFamily='manrope'
            lineHeight={"1.2"}
            mt={{ sm: 8, smd: 10, md: 10, lg: 12, xl: 12 }}
          >
            {text}
          </Text>
        </Flex>
      </Flex>
    </>
  );
}
