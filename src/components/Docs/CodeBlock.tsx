import { Flex } from "@chakra-ui/react";

export function CodeBlock({ children }: { children: any }) {
  return (
    <Flex
      flexDirection={"column"}
      backgroundColor='rgba(239, 239, 239, 1)'
      padding='14px'
      borderRadius='15px'
    >
      {children}
    </Flex>
  );
}
