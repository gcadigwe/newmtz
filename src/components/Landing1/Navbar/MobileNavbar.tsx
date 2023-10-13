import { Box, Flex, Slide, Img, Text, Button, Tooltip } from "@chakra-ui/react";
import logo from "../../../assets/svg/multichainzlogo.svg";
import { CloseIcon } from "@chakra-ui/icons";
import Link from "next/link";

const MobileNavbar = ({
  isOpen,
  toggle,
}: {
  isOpen: boolean;
  toggle: () => void;
}) => {
  return (
    <Slide direction='left' style={{ zIndex: 10 }} in={isOpen}>
      <Box
        h='100vh'
        background={
          "linear-gradient(90deg, rgba(204,220,247,1) 0%, rgba(225,238,252,1) 100%)"
        }
        py={4}
        px={5}
      >
        <Flex
          w='100vw'
          pr={10}
          alignItems={"center"}
          justifyContent={"space-between"}
        >
          <Img src={logo.src} />
          <CloseIcon onClick={toggle} />
        </Flex>

        <Flex mt={10} flexDirection={"column"}>
          {/* <Text>Products</Text>
          <Text my={5}>Markets</Text> */}
          <Link href={"/governance"}>
            <Text>Governance</Text>
          </Link>
          {/* <Tooltip hasArrow label='Coming soon...' isOpen> */}
          <Text my={5}>Documentation (Coming soon)</Text>
          {/* </Tooltip> */}
          <Link href='/lending'>
            <Text>Lending</Text>
          </Link>
          <Link href='/yield'>
            <Text my={5}>Yield</Text>
          </Link>

          <Tooltip hasArrow label='Coming soon...'>
            <Flex justifyContent={"center"}>
              <Button
                w='80vw'
                mt={10}
                fontSize={"14px"}
                bgColor='#49A8FC'
                _focus={{
                  bgColor: "#49A8FC",
                }}
                _active={{
                  bgColor: "#49A8FC",
                }}
                color='white'
              >
                Launch App
              </Button>
            </Flex>
          </Tooltip>
        </Flex>
      </Box>
    </Slide>
  );
};

export default MobileNavbar;
