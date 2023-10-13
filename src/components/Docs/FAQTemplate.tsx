import { Flex, Img, Text } from "@chakra-ui/react";
import dash from "../../assets/svg/faqdash.svg";

export default function FAQTemplate({
  title,
  subText,
}: {
  title: string;
  subText: string;
}) {
  return (
    <Flex
      bgColor={"rgba(239, 239, 239, 1)"}
      flexDirection='column'
      borderRadius={"15px"}
      padding='14px'
    >
      <Flex justifyContent={"space-between"}>
        <Text fontWeight={"bold"} fontFamily={"fira-code"}>
          {title}
        </Text>
        <Img src={dash.src} />
      </Flex>

      <Text mt={4} fontSize={"14px"} fontFamily={"fira-code"}>
        {subText}
      </Text>
    </Flex>
  );
}
