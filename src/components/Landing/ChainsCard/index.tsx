import { Flex, Text, Img } from "@chakra-ui/react";

export default function ChainsCard({
  img,
  text,
}: {
  img: string;
  text: string;
}) {
  return (
    <Flex
      borderRadius={{ sm: "18px", lg: "26px", xl: "30px" }}
      mr={{ sm: 0, lg: 4, xl: 4 }}
      w={{ sm: "160px", lg: "320px", xl: "320px" }}
      h={{ sm: "140px", lg: "240px", xl: "240px" }}
      bgColor={"white"}
      flexDirection='column'
      alignItems={"center"}
      py={{ sm: 4, lg: 6, xl: 6 }}
      justifyContent='space-between'
    >
      <Img src={img} w={{ sm: "100px", lg: "180px", xl: "180px" }} />

      <Text
        px={4}
        fontFamily={"manrope"}
        fontSize={{ sm: "10px", smd: "12px", lg: "18px", xl: "18px" }}
      >
        {text}
      </Text>

      <Flex
        border='1px solid rgba(45, 47, 80, 1)'
        py={{ sm: 1, lg: 3, xl: 3 }}
        px={{ sm: 2, lg: 6, xl: 6 }}
        borderRadius='30px'
      >
        <Text
          fontFamily={"manropebd"}
          fontSize={{ sm: "10px", lg: "16px", xl: "16px" }}
        >
          Learn more
        </Text>
      </Flex>
    </Flex>
  );
}
