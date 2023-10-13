import { Text, Flex } from "@chakra-ui/react";

export function FiraBold({
  children,
  fontSize,
}: {
  children: any;
  fontSize: string;
}) {
  return (
    <Text
      fontSize={fontSize ? fontSize : "16px"}
      fontFamily={"Fira-Code"}
      fontWeight='bold'
    >
      {children}
    </Text>
  );
}

export function FiraText({
  children,
  fontSize,
}: {
  children: any;
  fontSize?: string;
}) {
  return (
    <Flex
      flexDirection={"column"}
      fontFamily={"fira-code"}
      fontSize={fontSize ? fontSize : "14px"}
    >
      {/* <Text fontFamily={"fira-code"}>{children}</Text> */}
      {children}
    </Flex>
  );
}

export function MultiWeightDiv({
  title,
  subText,
  fontSize,
}: {
  title: string;
  subText: string;
  fontSize?: string;
}) {
  return (
    <Flex fontSize={fontSize ? fontSize : "14px"}>
      <Text
        lineHeight={"1.8rem"}
        style={{ fontFamily: "fira-code", fontWeight: "bold" }}
      >
        {title} <span style={{ fontWeight: "400" }}>{subText}</span>{" "}
      </Text>
    </Flex>
  );
}
