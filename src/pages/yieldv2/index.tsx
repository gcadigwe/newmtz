import { Box, Flex, Text, Img, useMediaQuery, Button } from "@chakra-ui/react";
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
import haldcirclemobile from "../../assets/3d/yield/halfcirclemobile.webp";
import yieldmobilespring from "../../assets/3d/yield/yieldmobilespring.webp";
import yieldmobilecircles from "../../assets/3d/yield/yieldmobilecircles.webp";
import cross3d from "../../assets/3d/lending/lendingcross.png";
import invertedcross3d from "../../assets/3d/lending/lendinginvertedcross.png";
import halfsphere3d from "../../assets/3d/dao/daohalfsmallsphere.png";

export default function Yield() {
  const [isMobileDevice] = useMediaQuery("(max-width: 559px)");
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
            background={
              isMobileDevice
                ? 'url("../../yield/yieldheromobilebg.webp")'
                : 'url("../../yield/yieldherobg.webp")'
            }
            backgroundSize={"cover"}
            backgroundRepeat='repeat'
            backgroundPosition={"right"}
            flexDirection='column'
            height={{ sm: "800px", lg: "1000px", xl: "1100px" }}
            position='relative'
            zIndex={5}
          >
            <Navbar />

            <Flex
              display={isMobileDevice ? undefined : "none"}
              position={"absolute"}
              right={10}
              top={20}
              transform='rotate(40deg)'
            >
              <Img src={cross3d.src} w='70px' />
            </Flex>

            <Flex
              display={isMobileDevice ? undefined : "none"}
              position={"absolute"}
              bottom={52}
              left={2}
            >
              <Img src={invertedcross3d.src} w='70px' />
            </Flex>

            <Flex position={"absolute"} zIndex={1} top={20}>
              <Img
                src={
                  isMobileDevice ? haldcirclemobile.src : yieldheroball3d.src
                }
                w={isMobileDevice ? "100px" : "320px"}
              />
            </Flex>

            <Flex
              position={"absolute"}
              zIndex={1}
              top={isMobileDevice ? "50%" : 20}
              right={0}
            >
              <Img
                src={
                  isMobileDevice ? yieldmobilespring.src : yieldherospring3d.src
                }
                w={isMobileDevice ? "220px" : "600px"}
              />
            </Flex>

            <Flex
              display={isMobileDevice ? "none" : undefined}
              position={"absolute"}
              bottom={-40}
            >
              <Img src={yieldgroupcircles3d.src} w='400px' />
            </Flex>
            <Flex
              zIndex={2}
              flexDirection={"column"}
              mt={{ sm: 16, lg: 24, xl: 20 }}
            >
              {isMobileDevice ? (
                <Text
                  fontFamily={"grotesk"}
                  fontSize={{ sm: "50px", lg: "100px", xl: "140px" }}
                  textAlign='center'
                  lineHeight={"0.9"}
                >
                  EARN <br /> INTEREST ON <br /> MULTIPLE CHAINS
                </Text>
              ) : (
                <Text
                  fontFamily={"grotesk"}
                  fontSize={{ sm: "50px", lg: "100px", xl: "140px" }}
                  textAlign='center'
                  lineHeight={"0.9"}
                >
                  EARN INTEREST ON <br /> MULTIPLE CHAINS
                </Text>
              )}

              {isMobileDevice ? (
                <Text
                  mt={10}
                  textAlign={"center"}
                  fontSize={{ sm: "20px", lg: "26px", xl: "32px" }}
                  lineHeight={"1.2"}
                  fontFamily='manrope'
                >
                  Get instant access to lending <br /> pools available across
                  14+ of the <br /> most adopted EVMs to earn <br /> interest
                  returns in an easy and <br /> interoperable way
                </Text>
              ) : (
                <Text
                  mt={10}
                  textAlign={"center"}
                  fontSize={{ sm: "20px", lg: "26px", xl: "32px" }}
                  lineHeight={"1.2"}
                  fontFamily='manrope'
                >
                  Get instant access to lending pools available <br /> across
                  14+ of the most adopted EVMs to earn <br /> interest returns
                  in an easy and interoperable way
                </Text>
              )}
            </Flex>

            <Flex
              mt={isMobileDevice ? 10 : 32}
              gap={isMobileDevice ? 4 : 8}
              flexDirection={{
                sm: "column",
                smd: "column",
                md: "row",
                lg: "row",
                xl: "row",
              }}
              justifyContent='center'
              alignItems={isMobileDevice ? "center" : undefined}
            >
              <Flex
                w={isMobileDevice ? "160px" : undefined}
                borderRadius={isMobileDevice ? "12px" : "36px"}
                py={4}
                px={isMobileDevice ? 4 : 8}
                bgColor={"#2D2F50"}
                color='white'
                flexDirection={"column"}
                lineHeight='1'
                alignItems={"center"}
                justifyContent={isMobileDevice ? "center" : undefined}
              >
                <Text
                  fontFamily={"manrope"}
                  fontSize={{
                    sm: "12px",
                    smd: "24px",
                    md: "24px",
                    lg: "26px",
                    xl: "28px",
                  }}
                >
                  Total Liquidity
                </Text>
                <Text
                  fontFamily={"grotesklight"}
                  fontSize={{
                    sm: "22px",
                    smd: "45px",
                    md: "50px",
                    lg: "54px",
                    xl: "60px",
                  }}
                >
                  $123,234
                </Text>
              </Flex>

              <Flex
                w={isMobileDevice ? "160px" : undefined}
                borderRadius={isMobileDevice ? "12px" : "36px"}
                py={4}
                px={isMobileDevice ? 4 : 8}
                bgColor={"#2D2F50"}
                color='white'
                flexDirection={"column"}
                lineHeight='1'
                alignItems={"center"}
              >
                <Text
                  fontFamily={"manrope"}
                  fontSize={{
                    sm: "12px",
                    smd: "24px",
                    md: "24px",
                    lg: "26px",
                    xl: "28px",
                  }}
                >
                  Total Rewards
                </Text>
                <Text
                  fontFamily={"grotesklight"}
                  fontSize={{
                    sm: "22px",
                    smd: "45px",
                    md: "50px",
                    lg: "54px",
                    xl: "60px",
                  }}
                >
                  $123,234
                </Text>
              </Flex>
            </Flex>
          </Flex>

          <Flex
            w='100%'
            background={
              isMobileDevice
                ? 'url("../../yield/yieldmobilepools.webp")'
                : 'url("../../yield/yieldpoolsbg.webp")'
            }
            backgroundSize={"cover"}
            backgroundRepeat='repeat'
            backgroundPosition={"center"}
            flexDirection='column'
            height={{ sm: "900px", lg: "1200px", xl: "1200px" }}
            position='relative'
            mt={isMobileDevice ? -28 : -40}
            justifyContent={isMobileDevice ? undefined : "center"}
            zIndex={4}
          >
            <Flex
              flexDirection={{
                sm: "column",
                smd: "column",
                md: "row",
                lg: "row",
                xl: "row",
              }}
              justifyContent={"space-evenly"}
              alignItems={isMobileDevice ? "center" : undefined}
              zIndex={2}
            >
              <Flex
                display={isMobileDevice ? undefined : "none"}
                position={"absolute"}
                right={10}
                bottom={24}
                transform='rotate(25deg)'
              >
                <Img src={cross3d.src} w='70px' />
              </Flex>
              <Flex flexDirection={"column"} color='white'>
                <Text
                  textAlign={"center"}
                  mt={20}
                  fontFamily={"grotesk"}
                  fontSize={{ sm: "50px", lg: "100px", xl: "120px" }}
                  lineHeight={"0.9"}
                >
                  Our <br /> Pools
                </Text>
                <Text
                  fontSize={{ sm: "20px", lg: "24px", xl: "32px" }}
                  color='#F5F5F5'
                  fontFamily='manrope'
                  mt={6}
                  textAlign={isMobileDevice ? "center" : undefined}
                >
                  Provide liquidity and earn interests <br /> in Multichainz
                  yield pools
                </Text>
              </Flex>

              <Flex
                mt={isMobileDevice ? 6 : undefined}
                flexDirection={"column"}
                gap={isMobileDevice ? 2 : 4}
              >
                <Flex gap={isMobileDevice ? 2 : undefined}>
                  <ChainsCard img={ethereum.src} />
                  <ChainsCard img={arbitrum.src} />
                </Flex>
                <Flex gap={isMobileDevice ? 2 : undefined}>
                  <ChainsCard img={binance.src} />
                  <ChainsCard img={polygon.src} />
                </Flex>
                <Flex gap={isMobileDevice ? 2 : undefined}>
                  <ChainsCard img={avalanche.src} />
                  <ChainsCard img={optimism.src} />
                </Flex>
              </Flex>
            </Flex>
            <Flex
              display={isMobileDevice ? "none" : undefined}
              zIndex={3}
              position={"absolute"}
              left={28}
              bottom={-20}
            >
              <Img w='400px' src={yield3dsphere.src} />
            </Flex>

            <Flex
              display={!isMobileDevice ? "none" : undefined}
              zIndex={7}
              position={"absolute"}
              left={0}
              bottom={-20}
            >
              <Img w='160px' src={yieldmobilecircles.src} />
            </Flex>
          </Flex>

          <Flex
            w='100%'
            background={'url("../../yield/yieldwhybg.webp")'}
            backgroundSize={"cover"}
            backgroundRepeat='repeat'
            backgroundPosition={"center"}
            flexDirection='column'
            height={{ sm: "1200px", lg: "1000px", xl: "1100px" }}
            position='relative'
            zIndex={3}
            mt={-60}
          >
            <Flex flexDirection={"column"} mt={isMobileDevice ? 60 : 80}>
              {isMobileDevice ? (
                <Text
                  lineHeight={"1"}
                  textAlign={"center"}
                  color='white'
                  fontSize={{ sm: "20px", lg: "60px", xl: "80px" }}
                >
                  Why Farm With <br /> Multichainz:
                </Text>
              ) : (
                <Text
                  lineHeight={"1"}
                  textAlign={"center"}
                  color='white'
                  fontSize={{ lg: "60px", xl: "80px" }}
                >
                  Why Farm With Multichainz:
                </Text>
              )}

              <Flex
                flexDirection={{
                  sm: "column",
                  smd: "column",
                  md: "row",
                  lg: "row",
                  xl: "row",
                }}
                justifyContent={"center"}
                alignItems={{
                  sm: "center",
                  smd: "center",
                  md: undefined,
                  lg: undefined,
                  xl: undefined,
                }}
                gap={4}
                mt={{ sm: 6, smd: 8, md: 10, lg: 12, xl: 14 }}
              >
                <Flex
                  flexDirection={{
                    sm: "row",
                    smd: "row",
                    md: "column",
                    lg: "column",
                    xl: "column",
                  }}
                  alignItems={isMobileDevice ? "center" : undefined}
                  w={{ sm: "320px", lg: "310px", xl: "340px" }}
                  h={{ sm: "160px", lg: "360px", xl: "410px" }}
                  px={isMobileDevice ? 4 : 6}
                  py={isMobileDevice ? 4 : 6}
                  bgColor='#2D2F50'
                  color='#F5F5F5'
                  borderRadius={isMobileDevice ? "18px" : "25px"}
                  gap={isMobileDevice ? 4 : 6}
                >
                  <Img
                    w={{ sm: "120px", lg: "280px", xl: "320px" }}
                    h={isMobileDevice ? "110px" : undefined}
                    src={securitycardcoverpic.src}
                  />
                  <Flex flexDirection={"column"} gap={isMobileDevice ? 2 : 4}>
                    <Text
                      fontSize={{ sm: "22px", lg: "28px", xl: "32px" }}
                      fontFamily={"manrope"}
                    >
                      Security
                    </Text>
                    <Text
                      fontSize={{ sm: "12px", lg: "14px", xl: "17px" }}
                      fontFamily={"manrope"}
                    >
                      MultichainZ has institutional-grade asset custody ensuring
                      high funds security at all times
                    </Text>
                  </Flex>
                </Flex>

                <Flex
                  flexDirection={{
                    sm: "row",
                    smd: "row",
                    md: "column",
                    lg: "column",
                    xl: "column",
                  }}
                  alignItems={isMobileDevice ? "center" : undefined}
                  w={{ sm: "320px", lg: "310px", xl: "340px" }}
                  h={{ sm: "160px", lg: "360px", xl: "410px" }}
                  px={isMobileDevice ? 4 : 6}
                  py={isMobileDevice ? 4 : 6}
                  bgColor='#5B47EF'
                  color='#F5F5F5'
                  borderRadius={isMobileDevice ? "18px" : "25px"}
                  gap={isMobileDevice ? 4 : 6}
                >
                  <Img
                    w={{ sm: "120px", lg: "280px", xl: "320px" }}
                    h={isMobileDevice ? "110px" : undefined}
                    src={efficiencycardcoverpic.src}
                  />
                  <Flex flexDirection={"column"} gap={isMobileDevice ? 2 : 4}>
                    <Text
                      fontSize={{ sm: "22px", lg: "28px", xl: "32px" }}
                      fontFamily={"manrope"}
                    >
                      Efficiency
                    </Text>
                    <Text
                      fontSize={{ sm: "12px", lg: "14px", xl: "17px" }}
                      fontFamily={"manrope"}
                    >
                      MultichainZ has embedded risk/liquidity efficiency
                      mechanisms to maximize returns
                    </Text>
                  </Flex>
                </Flex>

                <Flex
                  flexDirection={{
                    sm: "row",
                    smd: "row",
                    md: "column",
                    lg: "column",
                    xl: "column",
                  }}
                  alignItems={isMobileDevice ? "center" : undefined}
                  w={{ sm: "320px", lg: "310px", xl: "340px" }}
                  h={{ sm: "160px", lg: "360px", xl: "410px" }}
                  px={isMobileDevice ? 4 : 6}
                  py={isMobileDevice ? 4 : 6}
                  borderRadius={isMobileDevice ? "18px" : "25px"}
                  gap={isMobileDevice ? 4 : 6}
                  bgColor='#1DD086'
                  color='#F5F5F5'
                >
                  <Img
                    w={{ sm: "120px", lg: "280px", xl: "320px" }}
                    h={isMobileDevice ? "110px" : undefined}
                    src={flexibilitycardcoverpic.src}
                  />
                  <Flex flexDirection={"column"} gap={isMobileDevice ? 2 : 4}>
                    <Text
                      fontSize={{ sm: "22px", lg: "28px", xl: "32px" }}
                      fontFamily={"manrope"}
                    >
                      Flexibility
                    </Text>
                    <Text
                      fontSize={{ sm: "12px", lg: "14px", xl: "17px" }}
                      fontFamily={"manrope"}
                    >
                      MultichainZ Gives flexible terms to every type of
                      investors without fixed locking commitments
                    </Text>
                  </Flex>
                </Flex>

                <Flex
                  flexDirection={{
                    sm: "row",
                    smd: "row",
                    md: "column",
                    lg: "column",
                    xl: "column",
                  }}
                  alignItems={isMobileDevice ? "center" : undefined}
                  w={{ sm: "320px", lg: "310px", xl: "340px" }}
                  h={{ sm: "160px", lg: "360px", xl: "410px" }}
                  px={isMobileDevice ? 4 : 6}
                  py={isMobileDevice ? 4 : 6}
                  borderRadius={isMobileDevice ? "18px" : "25px"}
                  gap={isMobileDevice ? 4 : 6}
                  color='#F5F5F5'
                  bgColor='#5DCED2'
                >
                  <Img
                    w={{ sm: "120px", lg: "280px", xl: "320px" }}
                    h={isMobileDevice ? "110px" : undefined}
                    src={diversificationcardcoverpic.src}
                  />
                  <Flex flexDirection={"column"} gap={isMobileDevice ? 2 : 4}>
                    <Text
                      fontSize={{ sm: "22px", lg: "28px", xl: "32px" }}
                      fontFamily={"manrope"}
                    >
                      Diversification
                    </Text>
                    <Text
                      fontSize={{ sm: "12px", lg: "14px", xl: "17px" }}
                      fontFamily={"manrope"}
                    >
                      MultichainZ provides pools in diffferent chains to ensure
                      liquidity diversification and returns
                    </Text>
                  </Flex>
                </Flex>
              </Flex>
              <Flex
                display={isMobileDevice ? "none" : undefined}
                position={"absolute"}
                bottom={{ lg: -56, xl: -64 }}
              >
                <Img w='2400px' src={holographicdivider.src} />
              </Flex>
            </Flex>
          </Flex>
          <Flex
            background={
              isMobileDevice
                ? 'url("../../yield/yieldmobilediversify.png")'
                : 'url("../../yield/yielddiversifybg.webp")'
            }
            backgroundSize={"cover"}
            backgroundRepeat='repeat'
            backgroundPosition={"left"}
            flexDirection='column'
            height={{ sm: "700px", lg: "1000px", xl: "1200px" }}
            position='relative'
            zIndex={isMobileDevice ? 6 : 1}
            justifyContent={{
              sm: "center",
              smd: "center",
              md: "center",
              lg: "center",
              xl: "center",
            }}
            mt={isMobileDevice ? -10 : -20}
          >
            <Flex
              display={isMobileDevice ? undefined : "none"}
              position={"absolute"}
              bottom={-10}
            >
              <Img src={halfsphere3d.src} w='140px' />
            </Flex>

            <Flex
              display={isMobileDevice ? undefined : "none"}
              position={"absolute"}
              bottom={14}
              right={5}
            >
              <Img src={invertedcross3d.src} w='50px' />
            </Flex>

            <Flex
              position={"absolute"}
              top={-24}
              justifyContent='center'
              w='100%'
            >
              <Img
                display={{
                  sm: undefined,
                  smd: undefined,
                  md: "none",
                  lg: "none",
                  xl: "none",
                }}
                w={{ sm: "240px", lg: "460px", xl: "660px" }}
                src={yielddiversify3d.src}
              />
            </Flex>
            <Flex
              pt={{ sm: 2, smd: 20, md: 20, lg: 20, xl: 20 }}
              justifyContent={"space-evenly"}
              alignItems='center'
            >
              <Flex flexDirection={"column"}>
                <Text
                  fontFamily={"grotesk"}
                  fontSize={{ sm: "50px", lg: "80px", xl: "110px" }}
                  lineHeight={"0.9"}
                  textAlign='center'
                  color='#F5F5F5'
                >
                  Diversify your <br /> portfolio <br /> efficiency
                </Text>
                {isMobileDevice ? (
                  <Text
                    mt={4}
                    color='#F5F5F5'
                    fontSize={{ sm: "16px", lg: "24px", xl: "32px" }}
                    fontFamily='manrope'
                    lineHeight={"1.2"}
                    textAlign='center'
                  >
                    Multichainz Yield farming is an alternative <br /> pool for
                    holders of ChainZ or LP tokens, <br /> where users and{" "}
                    institutions can benefit <br /> from passive income to their
                    portfolio by <br /> staking their tokens which supports the
                    <br />
                    ecosystem growth
                  </Text>
                ) : (
                  <Text
                    mt={8}
                    color='#F5F5F5'
                    fontSize={{ lg: "24px", xl: "32px" }}
                    fontFamily='manrope'
                    lineHeight={"1.2"}
                  >
                    Multichainz Yield farming is an alternative pool for
                    <br /> holders of ChainZ or LP tokens, where users and{" "}
                    <br /> institutions can benefit from passive income to{" "}
                    <br /> their portfolio by staking their tokens which <br />{" "}
                    supports the ecosystem growth
                  </Text>
                )}

                <Flex justifyContent={"center"}>
                  <Button
                    mt={isMobileDevice ? 6 : 10}
                    color='black'
                    fontSize={{ sm: "12px", lg: "18px", xl: "22px" }}
                    w={{
                      sm: "120px",
                      smd: "130px",
                      md: "140px",
                      lg: "160px",
                      xl: "200px",
                    }}
                    h={{
                      sm: "50px",
                      smd: "50px",
                      md: "50px",
                      lg: "62px",
                      xl: "70px",
                    }}
                    borderRadius={"44px"}
                    fontFamily='manropebd'
                  >
                    Get Support
                  </Button>
                </Flex>
              </Flex>
              <Img
                display={!isMobileDevice ? undefined : "none"}
                w={{ lg: "460px", xl: "660px" }}
                src={yielddiversify3d.src}
              />
            </Flex>
          </Flex>

          <Flex
            background={
              isMobileDevice
                ? 'url("../../yield/yieldecosystemmobileherobg.webp")'
                : 'url("../../ecosystempartnerhero.png")'
            }
            backgroundSize={"cover"}
            backgroundRepeat='repeat'
            backgroundPosition={"center"}
            // zIndex={1}
            height={{ sm: "800px", lg: "1200px", xl: "1200px" }}
            w='100%'
            mt={{ sm: -40, lg: -72, xl: -72 }}
            flexDirection='column'
            position={"relative"}
          >
            <Flex
              h='100%'
              pt={40}
              alignItems={"center"}
              justifyContent='space-evenly'
              flexDirection={{
                sm: "column",
                smd: "column",
                md: "row",
                lg: "row",
                xl: "row",
              }}
            >
              <Flex flexDirection={"column"}>
                <Text
                  textAlign={"center"}
                  fontSize={{ sm: "50px", lg: "80px", xl: "100px" }}
                  fontFamily={"grotesk"}
                  lineHeight='0.8'
                  mb={8}
                >
                  Ecosystem <br /> Integration <br /> Partners
                </Text>
                <Flex justifyContent={"center"}>
                  <Img
                    w={{ sm: "260px", lg: "380px", xl: "450px" }}
                    src={partners.src}
                  />
                </Flex>
              </Flex>

              <Flex flexDirection={"column"}>
                <Flex>
                  <Flex
                    borderRadius={"40px"}
                    fontSize={{
                      sm: "14px",
                      smd: "16px",
                      md: "16px",
                      lg: "18px",
                      xl: "18px",
                    }}
                    fontFamily='manropebd'
                    bgColor={"white"}
                    color='black'
                    px={{ sm: 6, lg: 12, xl: 14 }}
                    py={{ sm: 2, lg: 4, xl: 4 }}
                  >
                    <Text>Powered by</Text>
                  </Flex>
                </Flex>

                <Img
                  w={{ sm: "300px", lg: "540px", xl: "640px" }}
                  src={ecosystempartners.src}
                />
              </Flex>
            </Flex>
          </Flex>
          <Flex mt={{ sm: -20, smd: -20, md: 0, lg: 0, xl: 0 }}>
            <Footer />
          </Flex>
        </Flex>
      </Box>
    </>
  );
}
