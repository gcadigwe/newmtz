import { Flex, Text } from "@chakra-ui/react";

export default function TableTitle({ children }: { children: any }) {
  return (
    <Flex
      bgColor={"rgba(217, 217, 217, 1)"}
      justifyContent='center'
      py={4}
      fontFamily={"fira-code"}
      fontWeight='bold'
    >
      <Text>{children}</Text>
    </Flex>
  );
}
