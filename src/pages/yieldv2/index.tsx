import { Box, Flex, Text, Img } from "@chakra-ui/react";
import Head from "next/head";
import yieldheroball3d from "../../assets/3d/yield/yieldheroball3d.png";
import yieldherospring3d from "../../assets/3d/yield/yieldherospring3d.png";
import yieldgroupcircles3d from "../../assets/3d/yield/yieldgroupcircles3d.png";
import yield3dsphere from "../../assets/3d/yield/yield3dsphere.png";
import Navbar from "@/components/YieldV2/Navbar";
import ChainsCard from "@/components/YieldV2/ChainsCard";
import ethereum from "../../assets/svg/ethereum.svg";
import binance from "../../assets/svg/binance.svg";
import polygon from "../../assets/svg/polygon.svg";
import avalanche from "../../assets/svg/avalanche.svg";
import optimism from "../../assets/svg/optimism.svg";
import arbitrum from "../../assets/svg/arbitrumnormal.svg";
import securitycardcoverpic from "../../assets/securitycardcoverpic.png";
import efficiencycardcoverpic from "../../assets/efficiencycardcoverpic.png";
import flexibilitycardcoverpic from "../../assets/flexibilitycardcoverpic.png";
import diversificationcardcoverpic from "../../assets/diversificationcardcoverpic.png";
import holographicdivider from "../../assets/holographicdivider.png";
import yielddiversify3d from "../../assets/3d/yield/yielddiversify3d.png";
import ecosystempartners from "../../assets/ecosystempartners.png";
import partners from "../../assets/partners.png";
import Footer from "@/components/NewFooter";

export default function Yield() {
  return (
    <>
      <Head>
        <title>MultichainZ | Yield</title>
        <meta name='description' content='Multichainz Protocol' />
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <link rel='icon' href='/icon.ico' />
      </Head>

      <Box>
        <Flex flexDirection={"column"}>
          <Flex
            w='100%'
            background={'url("../../yield/yieldherobg.webp")'}
            backgroundSize={"cover"}
            backgroundRepeat='repeat'
            backgroundPosition={"right"}
            flexDirection='column'
            height={{ lg: "1000px", xl: "1100px" }}
            position='relative'
            zIndex={5}
          >
            <Navbar />

            <Flex position={"absolute"} zIndex={1} top={20}>
              <Img src={yieldheroball3d.src} w='320px' />
            </Flex>

            <Flex position={"absolute"} zIndex={1} top={20} right={0}>
              <Img src={yieldherospring3d.src} w='600px' />
            </Flex>

            <Flex position={"absolute"} bottom={-40}>
              <Img src={yieldgroupcircles3d.src} w='400px' />
            </Flex>
            <Flex zIndex={2} flexDirection={"column"} mt={{ lg: 24, xl: 20 }}>
              <Text
                fontFamily={"grotesk"}
                fontSize={{ lg: "100px", xl: "140px" }}
                textAlign='center'
                lineHeight={"0.9"}
              >
                EARN INTEREST ON <br /> MULTIPLE CHAINS
              </Text>

              <Text
                mt={10}
                textAlign={"center"}
                fontSize={{ lg: "26px", xl: "32px" }}
                lineHeight={"1.2"}
                fontFamily='manrope'
              >
                Get instant access to lending pools available <br /> across 14+
                of the most adopted EVMs to earn <br /> interest returns in an
                easy and interoperable way
              </Text>
            </Flex>

            <Flex mt={32} gap={8} justifyContent='center'>
              <Flex
                borderRadius={"36px"}
                py={4}
                px={8}
                bgColor={"#2D2F50"}
                color='white'
                flexDirection={"column"}
                lineHeight='1'
                alignItems={"center"}
              >
                <Text fontFamily={"manrope"} fontSize='28px'>
                  Total Liquidity
                </Text>
                <Text fontFamily={"grotesk"} fontSize='60px'>
                  $123,234
                </Text>
              </Flex>

              <Flex
                borderRadius={"36px"}
                py={4}
                px={8}
                bgColor={"#2D2F50"}
                color='white'
                flexDirection={"column"}
                lineHeight='1'
                alignItems={"center"}
              >
                <Text fontFamily={"manrope"} fontSize='28px'>
                  Total Rewards
                </Text>
                <Text fontFamily={"grotesk"} fontSize='60px'>
                  $123,234
                </Text>
              </Flex>
            </Flex>
          </Flex>

          <Flex
            w='100%'
            background={'url("../../yield/yieldpoolsbg.webp")'}
            backgroundSize={"cover"}
            backgroundRepeat='repeat'
            backgroundPosition={"center"}
            flexDirection='column'
            height={{ lg: "1200px", xl: "1200px" }}
            position='relative'
            mt={-40}
            justifyContent='center'
            zIndex={4}
          >
            <Flex justifyContent={"space-evenly"} zIndex={2}>
              <Flex flexDirection={"column"} color='white'>
                <Text
                  textAlign={"center"}
                  mt={20}
                  fontFamily={"grotesk"}
                  fontSize={{ lg: "100px", xl: "120px" }}
                  lineHeight={"0.9"}
                >
                  Our <br /> Pools
                </Text>
                <Text
                  fontSize={{ lg: "24px", xl: "32px" }}
                  color='#F5F5F5'
                  fontFamily='manrope'
                  mt={6}
                >
                  Provide liquidity and earn interests <br /> in Multichainz
                  yield pools
                </Text>
              </Flex>

              <Flex flexDirection={"column"} gap={4}>
                <Flex>
                  <ChainsCard img={ethereum.src} />
                  <ChainsCard img={arbitrum.src} />
                </Flex>
                <Flex>
                  <ChainsCard img={binance.src} />
                  <ChainsCard img={polygon.src} />
                </Flex>
                <Flex>
                  <ChainsCard img={avalanche.src} />
                  <ChainsCard img={optimism.src} />
                </Flex>
              </Flex>
            </Flex>
            <Flex zIndex={3} position={"absolute"} left={28} bottom={-20}>
              <Img w='400px' src={yield3dsphere.src} />
            </Flex>
          </Flex>

          <Flex
            w='100%'
            background={'url("../../yield/yieldwhybg.webp")'}
            backgroundSize={"cover"}
            backgroundRepeat='repeat'
            backgroundPosition={"center"}
            flexDirection='column'
            height={{ lg: "1000px", xl: "1100px" }}
            position='relative'
            zIndex={3}
            mt={-60}
          >
            <Flex flexDirection={"column"} mt={80}>
              <Text
                lineHeight={"1"}
                textAlign={"center"}
                color='white'
                fontSize={{ lg: "60px", xl: "80px" }}
              >
                Why Farm With Multichainz:
              </Text>

              <Flex justifyContent={"center"} gap={4} mt={14}>
                <Flex
                  flexDirection={"column"}
                  w={{ lg: "310px", xl: "340px" }}
                  h={{ lg: "360px", xl: "410px" }}
                  px={6}
                  py={6}
                  bgColor='#2D2F50'
                  color='#F5F5F5'
                  borderRadius={"25px"}
                  gap={6}
                >
                  <Img
                    w={{ lg: "280px", xl: "320px" }}
                    src={securitycardcoverpic.src}
                  />
                  <Flex flexDirection={"column"} gap={4}>
                    <Text
                      fontSize={{ lg: "28px", xl: "32px" }}
                      fontFamily={"manrope"}
                    >
                      Security
                    </Text>
                    <Text fontSize={{ lg: "14px", xl: "17px" }}>
                      MultichainZ has institutional-grade asset custody ensuring
                      high funds security at all times
                    </Text>
                  </Flex>
                </Flex>

                <Flex
                  flexDirection={"column"}
                  w={{ lg: "310px", xl: "340px" }}
                  h={{ lg: "360px", xl: "410px" }}
                  px={6}
                  py={6}
                  bgColor='#5B47EF'
                  color='#F5F5F5'
                  borderRadius={"25px"}
                  gap={6}
                >
                  <Img
                    w={{ lg: "280px", xl: "320px" }}
                    src={efficiencycardcoverpic.src}
                  />
                  <Flex flexDirection={"column"} gap={4}>
                    <Text
                      fontSize={{ lg: "28px", xl: "32px" }}
                      fontFamily={"manrope"}
                    >
                      Efficiency
                    </Text>
                    <Text fontSize={{ lg: "14px", xl: "17px" }}>
                      MultichainZ has embedded risk/liquidity efficiency
                      mechanisms to maximize returns
                    </Text>
                  </Flex>
                </Flex>

                <Flex
                  flexDirection={"column"}
                  w={{ lg: "310px", xl: "340px" }}
                  h={{ lg: "360px", xl: "410px" }}
                  px={6}
                  py={6}
                  bgColor='#1DD086'
                  color='#F5F5F5'
                  borderRadius={"25px"}
                  gap={6}
                >
                  <Img
                    w={{ lg: "280px", xl: "320px" }}
                    src={flexibilitycardcoverpic.src}
                  />
                  <Flex flexDirection={"column"} gap={4}>
                    <Text
                      fontSize={{ lg: "28px", xl: "32px" }}
                      fontFamily={"manrope"}
                    >
                      Flexibility
                    </Text>
                    <Text fontSize={{ lg: "14px", xl: "17px" }}>
                      MultichainZ Gives flexible terms to every type of
                      investors without fixed locking commitments
                    </Text>
                  </Flex>
                </Flex>

                <Flex
                  flexDirection={"column"}
                  w={{ lg: "310px", xl: "340px" }}
                  h={{ lg: "360px", xl: "410px" }}
                  px={6}
                  py={6}
                  bgColor='#5DCED2'
                  color='#F5F5F5'
                  borderRadius={"25px"}
                  gap={6}
                >
                  <Img
                    w={{ lg: "280px", xl: "320px" }}
                    src={diversificationcardcoverpic.src}
                  />
                  <Flex flexDirection={"column"} gap={4}>
                    <Text
                      fontSize={{ lg: "28px", xl: "32px" }}
                      fontFamily={"manrope"}
                    >
                      Diversification
                    </Text>
                    <Text fontSize={{ lg: "14px", xl: "17px" }}>
                      MultichainZ provides pools in diffferent chains to ensure
                      liquidity diversification and returns
                    </Text>
                  </Flex>
                </Flex>
              </Flex>
              <Flex position={"absolute"} bottom={{ lg: -56, xl: -64 }}>
                <Img w='2400px' src={holographicdivider.src} />
              </Flex>
            </Flex>
          </Flex>
          <Flex
            background={'url("../../yield/yielddiversifybg.webp")'}
            backgroundSize={"cover"}
            backgroundRepeat='repeat'
            backgroundPosition={"left"}
            flexDirection='column'
            height={{ lg: "1000px", xl: "1200px" }}
            position='relative'
            zIndex={1}
            justifyContent='center'
            mt={-20}
          >
            <Flex justifyContent={"space-evenly"} alignItems='center'>
              <Flex flexDirection={"column"}>
                <Text
                  fontFamily={"grotesk"}
                  fontSize={{ lg: "80px", xl: "110px" }}
                  lineHeight={"0.9"}
                  textAlign='center'
                  color='#F5F5F5'
                >
                  Diversify your <br /> portfolio <br /> efficiency
                </Text>
                <Text
                  mt={8}
                  color='#F5F5F5'
                  fontSize={{ lg: "24px", xl: "32px" }}
                  fontFamily='manrope'
                  lineHeight={"1.2"}
                >
                  Multichainz Yield farming is an alternative pool for
                  <br /> holders of ChainZ or LP tokens, where users and <br />{" "}
                  institutions can benefit from passive income to <br /> their
                  portfolio by staking their tokens which <br /> supports the
                  ecosystem growth
                </Text>
              </Flex>
              <Img
                w={{ lg: "460px", xl: "660px" }}
                src={yielddiversify3d.src}
              />
            </Flex>
          </Flex>

          <Flex
            background={'url("../../ecosystempartnerhero.png")'}
            backgroundSize={"cover"}
            backgroundRepeat='repeat'
            backgroundPosition={"center"}
            // zIndex={1}
            height='1200px'
            w='100%'
            mt={-72}
            flexDirection='column'
            position={"relative"}
          >
            <Flex
              h='100%'
              pt={40}
              alignItems={"center"}
              justifyContent='space-evenly'
            >
              <Flex flexDirection={"column"}>
                <Text
                  textAlign={"center"}
                  fontSize={{ lg: "80px", xl: "100px" }}
                  fontFamily={"grotesk"}
                  lineHeight='0.8'
                  mb={8}
                >
                  Ecosystem <br /> Integration <br /> Partners
                </Text>
                <Flex justifyContent={"center"}>
                  <Img w={{ lg: "380px", xl: "450px" }} src={partners.src} />
                </Flex>
              </Flex>

              <Flex flexDirection={"column"}>
                <Flex>
                  <Flex
                    borderRadius={"40px"}
                    fontSize={"18px"}
                    fontFamily='manrope'
                    bgColor={"white"}
                    color='black'
                    px={{ lg: 12, xl: 14 }}
                    py={4}
                  >
                    <Text>Powered by</Text>
                  </Flex>
                </Flex>

                <Img
                  w={{ lg: "540px", xl: "640px" }}
                  src={ecosystempartners.src}
                />
              </Flex>
            </Flex>
          </Flex>
          <Footer />
        </Flex>
      </Box>
    </>
  );
}
