import { Flex, Text, Img } from "@chakra-ui/react";
import { ChevronRightIcon } from "@chakra-ui/icons";

export default function AboutCard({
  title,
  text,
  linkText,
  img,
}: {
  title: string;
  text: string;
  linkText: string;
  img: any;
}) {
  return (
    <>
      <Flex position={"relative"}>
        <Img
          minW={{
            sm: "260px",
            smd: "280px",
            md: "320px",
            lg: "380px",
            xl: "440px",
          }}
          h={{
            sm: "240px",
            smd: "280px",
            md: "300px",
            lg: "340px",
            xl: "360px",
          }}
          src={img.src}
        />
        <Flex
          position={"absolute"}
          minW={{
            sm: "260px",
            smd: "280px",
            md: "320px",
            lg: "380px",
            xl: "440px",
          }}
          h={{
            sm: "240px",
            smd: "280px",
            md: "300px",
            lg: "340px",
            xl: "360px",
          }}
          //   background={'url("../../dao/daoforumbg.png")'}
          //   backgroundRepeat='repeat'
          //   backgroundPosition={"center"}
          flexDirection='column'
          gap={8}
          color='#F5F5F5'
          py={10}
          px={8}
          justifyContent='space-around'
        >
          <Text
            fontSize={{
              sm: "22px",
              smd: "24px",
              md: "26px",
              lg: "28px",
              xl: "32px",
            }}
            fontFamily='manropebd'
          >
            {title}
          </Text>
          <Text
            fontSize={{
              sm: "14px",
              smd: "16px",
              md: "18px",
              lg: "20px",
              xl: "22px",
            }}
            fontFamily='manrope'
            lineHeight={"1.2"}
          >
            {text}
          </Text>

          <Flex alignItems={"center"}>
            <Text
              fontSize={{
                sm: "12px",
                smd: "14px",
                md: "14px",
                lg: "14px",
                xl: "16px",
              }}
              fontFamily={"manropemd"}
            >
              {linkText}
            </Text>
            <ChevronRightIcon />
          </Flex>
        </Flex>
      </Flex>
    </>
  );
}
