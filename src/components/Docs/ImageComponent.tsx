import { Img, Flex } from "@chakra-ui/react";

export default function ImageComponent({
  imgSource,
  width,
  height,
}: {
  imgSource: any;
  width: string;
  height: string;
}) {
  return (
    <Flex>
      <Img
        src={imgSource}
        h={height ? height : undefined}
        w={width ? width : undefined}
      />
    </Flex>
  );
}
