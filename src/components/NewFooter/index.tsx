import {
  Flex,
  Text,
  Img,
  Input,
  InputGroup,
  Icon,
  InputRightAddon,
  useMediaQuery,
} from "@chakra-ui/react";
import { ArrowForwardIcon } from "@chakra-ui/icons";
import { FaDiscord, FaTwitter, FaLinkedin } from "react-icons/fa";
import { IoMdMail } from "react-icons/io";

export default function Footer({ lsd }: { lsd?: boolean }) {
  const [isMobileDevice] = useMediaQuery("(max-width: 559px)");
  return (
    <Flex
      background={'url("../../footerhero.png")'}
      backgroundSize={"cover"}
      backgroundRepeat='repeat'
      backgroundPosition={"center"}
      h={
        lsd
          ? { smd: "680px", md: "700px", lg: "740px", xl: "740px" }
          : { smd: "680px", md: "700px", lg: "740px", xl: "740px" }
      }
      //   alignItems={"center"}
      px={{ sm: 10, smd: 16, md: 20, lg: 40, xl: 40 }}
      w='100%'
      flexDirection={"column"}

      //   justifyContent='center'
    >
      <Flex
        mt={isMobileDevice ? 28 : 60}
        flexDirection={isMobileDevice ? "column" : "row"}
        gap={isMobileDevice ? 6 : undefined}
      >
        <Flex flex={0.5} flexDirection={"column"} gap={8}>
          <Text
            fontFamily={"grotesk"}
            fontSize={{
              sm: "28px",
              smd: "28px",
              md: "30px",
              lg: "50px",
              xl: "50px",
            }}
            lineHeight={"0.9"}
          >
            Subscribe to our <br /> newsletter today for <br /> exclusive
            updates <br /> and special offers
          </Text>

          <Flex mt={isMobileDevice ? 0 : 10}>
            <InputGroup>
              <Input
                w={isMobileDevice ? "180px" : "250px"}
                borderRight={"none"}
                borderTop='none'
                borderLeft={"none"}
                borderBottom='3px solid black'
                placeholder='Email Address'
                fontSize={isMobileDevice ? "18px" : "22px"}
                fontFamily='manrope'
                color='rgba(0, 0, 0, 1)'
                _hover={{
                  borderTop: "none",
                  borderLeft: "none",
                  borderRight: "none",
                  borderBottom: "3px solid black",
                }}
                _focus={{
                  borderTop: "none",
                  borderLeft: "none",
                  borderRight: "none",
                  borderBottom: "3px solid black",
                }}
                _active={{
                  borderTop: "none",
                  borderLeft: "none",
                  borderRight: "none",
                  borderBottom: "3px solid black",
                }}
                _focusWithin={{
                  borderTop: "none",
                  borderLeft: "none",
                  borderRight: "none",
                  borderBottom: "3px solid black",
                }}
                _placeholder={{
                  fontFamily: "manrope",
                  color: "rgba(0, 0, 0, 1)",
                  fontSize: "16px",
                  opacity: "0.4",
                }}
                borderRadius={"none"}
              />

              <InputRightAddon
                bgColor={"transparent"}
                borderLeft='none'
                borderTop={"none"}
                borderRight='none'
                borderRadius={"none"}
                borderBottom='3px solid black'
              >
                <ArrowForwardIcon
                  opacity={0.4}
                  w='24px'
                  h='24px'
                  bgColor={"transparent"}
                />
              </InputRightAddon>
            </InputGroup>
          </Flex>
        </Flex>

        <Flex
          w='100%'
          flex={0.5}
          justifyContent={isMobileDevice ? "space-between" : "space-around"}
          gap={12}
        >
          <Flex flexDirection={"column"} gap={4}>
            <Text
              fontSize={{
                sm: "20px",
                smd: "22px",
                md: "24px",
                lg: "28px",
                xl: "28px",
              }}
              fontFamily={"manropebd"}
            >
              Product
            </Text>

            <Flex
              fontFamily={"manrope"}
              fontSize={{ smd: "14px", md: "16px", lg: "18px", xl: "18px" }}
              flexDirection={"column"}
              gap={4}
            >
              <Text>Media Kit</Text>
              <Text>Blog</Text>
              <Text>FAQ</Text>
            </Flex>
          </Flex>

          <Flex flexDirection={"column"} gap={4}>
            <Text
              fontSize={{
                sm: "20px",
                smd: "22px",
                md: "24px",
                lg: "28px",
                xl: "28px",
              }}
              fontFamily={"manropebd"}
            >
              Company
            </Text>

            <Flex
              fontFamily={"manrope"}
              fontSize={{ smd: "14px", md: "16px", lg: "18px", xl: "18px" }}
              flexDirection={"column"}
              gap={4}
            >
              <Text>Technical Paper</Text>
              <Text>Tokenomics</Text>
              <Text>Use MultichainZ</Text>
            </Flex>
          </Flex>

          <Flex
            flexDirection={"column"}
            gap={4}
            display={isMobileDevice ? "none" : undefined}
          >
            <Text
              fontSize={{ smd: "22px", md: "24px", lg: "28px", xl: "28px" }}
              fontFamily={"manropebd"}
            >
              Resources
            </Text>

            <Flex
              fontFamily={"manrope"}
              fontSize={{ smd: "14px", md: "16px", lg: "18px", xl: "18px" }}
              flexDirection={"column"}
              gap={4}
            >
              <Text>Documentation</Text>
              <Text>Terms Of Use</Text>
              <Text>Privacy Policy</Text>
              <Text>Contact Us</Text>
            </Flex>
          </Flex>
        </Flex>
      </Flex>

      <Flex
        mt={isMobileDevice ? 6 : undefined}
        flexDirection={"column"}
        gap={4}
        display={isMobileDevice ? undefined : "none"}
      >
        <Text
          fontSize={{
            sm: "20px",
            smd: "22px",
            md: "24px",
            lg: "28px",
            xl: "28px",
          }}
          fontFamily={"manropebd"}
        >
          Resources
        </Text>

        <Flex
          fontFamily={"manrope"}
          fontSize={{
            sm: "16px",
            smd: "14px",
            md: "16px",
            lg: "18px",
            xl: "18px",
          }}
          flexDirection={"column"}
          gap={4}
        >
          <Text>Documentation</Text>
          <Text>Terms Of Use</Text>
          <Text>Privacy Policy</Text>
          <Text>Contact Us</Text>
        </Flex>
      </Flex>

      <Flex
        fontSize={"32px"}
        mt={10}
        justifyContent={isMobileDevice ? "center" : "flex-end"}
        gap={10}
        mr={8}
      >
        <Icon
          cursor={"pointer"}
          _hover={{
            color: "#5B47EF",
          }}
          as={FaTwitter}
        />
        <Icon
          cursor={"pointer"}
          _hover={{
            color: "#5B47EF",
          }}
          as={FaLinkedin}
        />
        <Icon
          cursor={"pointer"}
          _hover={{
            color: "#5B47EF",
          }}
          as={IoMdMail}
        />
      </Flex>
      <Flex
        justifyContent={"center"}
        fontSize={isMobileDevice ? "14px" : "18px"}
        mt={20}
        pb={isMobileDevice ? 10 : undefined}
      >
        <Text>© 2023 MultiChainz. all Right Reserved </Text>
      </Flex>
    </Flex>
  );
}
