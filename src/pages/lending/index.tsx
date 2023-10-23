import Navbar from "@/components/Landing/Navbar";
import {
  Box,
  Button,
  Center,
  Flex,
  Heading,
  Img,
  Text,
  useMediaQuery,
} from "@chakra-ui/react";
import { ChevronLeftIcon, ChevronRightIcon } from "@chakra-ui/icons";

import Head from "next/head";
import lendingheroright3d from "../../assets/3d/lending/lendingheroright3d.png";
import lendingheroleft3d from "../../assets/3d/lending/lendingheroleft3d.png";
import lendingcross from "../../assets/3d/lending/lendingcross.png";
import lendinginvertedcross from "../../assets/3d/lending/lendinginvertedcross.png";
import ethereum from "../../assets/svg/ethereum.svg";
import binance from "../../assets/svg/binance.svg";
import polygon from "../../assets/svg/polygon.svg";
import avalanche from "../../assets/svg/avalanche.svg";
import optimism from "../../assets/svg/optimism.svg";
import arbitrum from "../../assets/svg/arbitrumnormal.svg";
import ChainsCard from "@/components/Lending/ChainsCard";
import spring3dshape from "../../assets/3d/lending/spring3dshape.png";
import custodylogo from "../../assets/custodylogo.png";
import efficiencylogo from "../../assets/efficiencylogo.png";
import securitylogo from "../../assets/securitylogo.png";
import activecompliancelogo from "../../assets/compliancelogo.png";

import activecustodylogo from "../../assets/activecustodylogo.png";
import activeefficiencylogo from "../../assets/activeefficiencylogo.png";
import activesecuritylogo from "../../assets/activesecuritylogo.png";
import compliancelogo from "../../assets/inactivecompliancelogo.png";
import transparencylogo from "../../assets/transparencylogo.png";
import lendingsupportright3d from "../../assets/3d/lending/lendingsupportright3d.png";
import lendingsupportleft3d from "../../assets/3d/lending/lendingsupportleft3d.png";
import { useState, useRef } from "react";
import Footer from "@/components/NewFooter";
import heroleft3d from "../../assets/3d/lending/smallheroleft3d.png";
import heroright3d from "../../assets/3d/lending/smallheroright3d.png";
import lendinginfocard1 from "../../assets/lendinginfocard1.png";
import lendinginfocard2 from "../../assets/lendinginfocard2.png";
import lendinginfocard3 from "../../assets/lendinginfocard3.png";
import LendingInfoCard from "@/components/Lending/LendingInfoCard";

export default function Landing2() {
  const [isMobileDevice] = useMediaQuery("(max-width: 559px)");

  const width = { sm: "80vw", md: "70vw", lg: "70vw", xl: "70vw" };

  const [complianceBoxActive, setcomplianceBoxActive] = useState(false);
  const [custodyBoxActive, setcustodyBoxActive] = useState(false);
  const [securityBoxActive, setsecurityBoxActive] = useState(false);
  const [efficiencyBoxActive, setefficiencyBoxActive] = useState(false);
  const [transparencyBoxActive, settransparencyBoxActive] = useState(false);

  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const [scrollOffset, setScrollOffset] = useState(0);

  const scrollToLeft = () => {
    if (scrollContainerRef.current) {
      const newScrollOffset = Math.max(scrollOffset - 240, 0);
      setScrollOffset(newScrollOffset);
      scrollContainerRef.current.scrollTo({
        left: newScrollOffset,
        behavior: "smooth",
      });
    }
  };

  // Function to scroll to the right of the container
  const scrollToRight = () => {
    if (scrollContainerRef.current) {
      const newScrollOffset = Math.min(
        scrollOffset + 240,
        scrollContainerRef.current.scrollWidth -
          scrollContainerRef.current.clientWidth
      );
      setScrollOffset(newScrollOffset);
      scrollContainerRef.current.scrollTo({
        left: newScrollOffset,
        behavior: "smooth",
      });
    }
  };
  return (
    <>
      <Head>
        <title>MultichainZ | Lending</title>
        <meta name='description' content='Multichainz Protocol' />
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <link rel='icon' href='/icon.ico' />
      </Head>

      <Box color='black'>
        <Flex flexDirection={"column"}>
          <Flex
            w='100%'
            background={
              isMobileDevice
                ? 'url("../../lending/lendingmobilehero.png")'
                : 'url("../../lending/lendinghero.webp")'
            }
            backgroundSize={"cover"}
            backgroundRepeat='repeat'
            backgroundPosition={"bottom"}
            flexDirection='column'
            height={{ sm: "780px", lg: "1100px", xl: "1300px" }}
            position='relative'
            zIndex={4}
          >
            <Flex position={"absolute"} top={0}>
              <Img
                src={isMobileDevice ? heroleft3d.src : lendingheroleft3d.src}
                w={{ lg: "600px", xl: "840px" }}
              />
            </Flex>
            <Flex
              position={"absolute"}
              right={0}
              top={isMobileDevice ? "50%" : -10}
            >
              <Img
                src={isMobileDevice ? heroright3d.src : lendingheroright3d.src}
                w={{ lg: "600px", xl: "800px" }}
              />
            </Flex>
            <Flex
              transform={{
                sm: "rotate(40deg)",
                md: "none",
                lg: "none",
                xl: "none",
              }}
              position={"absolute"}
              bottom={{ sm: 32, smd: 0, md: -6, lg: -6, xl: -6 }}
              zIndex={3}
            >
              <Img
                w={{ sm: "70px", lg: "150px", xl: "160px" }}
                src={lendingcross.src}
              />
            </Flex>

            <Flex
              display={{
                sm: "block",
                smd: "flex",
                md: "none",
                lg: "none",
                xl: "none",
              }}
              // transform={{
              //   sm: "rotate(40deg)",
              //   md: "none",
              //   lg: "none",
              //   xl: "none",
              // }}
              position={"absolute"}
              top={20}
              right={6}
              // zIndex={3}
            >
              <Img
                w={{ sm: "60px", lg: "150px", xl: "70px" }}
                src={lendingcross.src}
              />
            </Flex>
            <Flex
              position={"absolute"}
              bottom={{ sm: 4, lg: 40, xl: 40 }}
              right={{ sm: 6, lg: 10, xl: 10 }}
            >
              <Img
                w={{ sm: "46px", lg: "80px", xl: "80px" }}
                src={lendinginvertedcross.src}
              />
            </Flex>
            <Navbar />
            <Flex
              flexDirection={"column"}
              mt={{ sm: 10, lg: 20, xl: 40 }}
              zIndex={2}
            >
              <Text
                color='white'
                fontFamily={"grotesk"}
                fontSize={{ sm: "50px", lg: "100px", xl: "140px" }}
                textAlign='center'
                lineHeight={"1"}
              >
                THE LENDING <br /> SOLUTION FOR ALL
              </Text>

              {isMobileDevice ? (
                <Text
                  mt={8}
                  textAlign={"center"}
                  fontSize={{ sm: "20px", lg: "26px", xl: "32px" }}
                  lineHeight={"1.2"}
                  fontFamily='manrope'
                  color='white'
                >
                  Bringing real-life use cases to <br /> DeFi lending through{" "}
                  <br />
                  interconnected, secure, and <br /> versatile infrastructures
                  available <br /> for every type of user
                </Text>
              ) : (
                <Text
                  mt={8}
                  textAlign={"center"}
                  fontSize={{ sm: "20px", lg: "26px", xl: "32px" }}
                  lineHeight={"1.2"}
                  fontFamily='manrope'
                  color='white'
                >
                  Bringing real-life use cases to DeFi lending through <br />{" "}
                  interconnected, secure, and versatile <br /> infrastructures
                  available for every type of user
                </Text>
              )}

              <Flex
                mt={{ sm: 10, md: 32, lg: 32, xl: 32 }}
                gap={isMobileDevice ? 4 : 8}
                justifyContent='center'
                flexDirection={isMobileDevice ? "column" : "row"}
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
                    Total Borrowing
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
                    Total Loans
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
          </Flex>
          <Flex
            w='100%'
            background={'url("../../lending/lendingchainsherobg.webp")'}
            backgroundSize={"cover"}
            backgroundRepeat='repeat'
            backgroundPosition={"center"}
            flexDirection='column'
            height={{ sm: "1000px", lg: "1200px", xl: "1300px" }}
            position='relative'
            mt={isMobileDevice ? -36 : -60}
            zIndex={3}
            // justifyContent='center'
            pt={isMobileDevice ? 20 : 40}
          >
            <Flex
              flexDirection={isMobileDevice ? "column" : "row"}
              justifyContent={"space-around"}
              zIndex={2}
            >
              <Text
                textAlign={"center"}
                mt={{ sm: 20, lg: 32, xl: 32 }}
                fontFamily={"grotesk"}
                fontSize={{ sm: "50px", lg: "80px", xl: "80px" }}
                lineHeight={"1"}
              >
                Lend and <br /> Borrow <br />
                in Multiple <br /> Chains
              </Text>

              <Flex
                pt={isMobileDevice ? 10 : { lg: 32, xl: 32 }}
                alignItems={isMobileDevice ? "center" : undefined}
                flexDirection={"column"}
                gap={isMobileDevice ? 2 : 4}
              >
                <Flex gap={isMobileDevice ? 2 : 0}>
                  <ChainsCard img={ethereum.src} />
                  <ChainsCard img={arbitrum.src} />
                </Flex>
                <Flex gap={isMobileDevice ? 2 : 0}>
                  <ChainsCard img={binance.src} />
                  <ChainsCard img={polygon.src} />
                </Flex>
                <Flex gap={isMobileDevice ? 2 : 0}>
                  <ChainsCard img={avalanche.src} />
                  <ChainsCard img={optimism.src} />
                </Flex>
              </Flex>
            </Flex>

            <Flex
              zIndex={1}
              position={"absolute"}
              right={0}
              bottom={isMobileDevice ? "-5%" : "-20%"}
              w={{ sm: "300px", lg: "600px", xl: "600px" }}
            >
              <Img src={spring3dshape.src} />
            </Flex>
          </Flex>
          <Flex
            mt={-72}
            zIndex={2}
            w='100%'
            background={
              isMobileDevice
                ? 'url("../../lending/lendinginfomobilebg.webp")'
                : 'url("../../lending/lendinginfoherobg.webp")'
            }
            backgroundSize={"cover"}
            backgroundRepeat='repeat'
            backgroundPosition={"center"}
            height={{ sm: "900px", lg: "1100px", xl: "1300px" }}
            flexDirection='column'
          >
            <Flex justifyContent={"center"} w='100%'>
              <Text
                color='white'
                lineHeight={"1"}
                pt={60}
                textAlign={"center"}
                fontFamily='grotesk'
                fontSize={{ sm: "50px", lg: "80px", xl: "110px" }}
              >
                Safe and Efficient <br /> Interoperable Lending
              </Text>
            </Flex>

            <Flex
              // w='100%'
              justifyContent={isMobileDevice ? undefined : "center"}
              mt={isMobileDevice ? 10 : 20}
              gap={{ sm: 6, lg: 10, xl: 10 }}
              overflowX='hidden'
              ml={isMobileDevice ? 10 : undefined}
              ref={scrollContainerRef}
            >
              <LendingInfoCard
                img={lendinginfocard1}
                text='Seamlessly connecting secure interactions across diverse
                    blockchain networks, ensuring data integrity and
                    interoperability.'
              />
              <LendingInfoCard
                img={lendinginfocard2}
                text='Strategy for borrowing while minimizing risk, creating a
                secure and balanced financial approach.'
              />
              <LendingInfoCard
                img={lendinginfocard3}
                text='Optimized lending pools for effective capital utilization
                and enhanced borrowing and lending activities.'
              />
              {/* <Flex
                w={{ sm: "unset", lg: "320px", xl: "379px" }}
                minW={{ sm: "260px", lg: "unset", xl: "unset" }}
                h={{ sm: "230px", lg: "280px", xl: "327px" }}
                background={'url("../../lending/firstlendinginfobg.png")'}
                backgroundSize={"cover"}
                backgroundRepeat='repeat'
                backgroundPosition={"center"}
                border='0.68px solid #FCFCFC'
                borderRadius={"18px"}
              >
                <Flex
                  flexDirection={"column"}
                  px={{ sm: 4, lg: 6, xl: 12 }}
                  justifyContent='space-evenly'
                >
                  <Text
                    fontSize={{ sm: "16px", lg: "18px", xl: "20px" }}
                    fontFamily='manrope'
                    color='white'
                  >
                    Seamlessly connecting secure interactions across diverse
                    blockchain networks, ensuring data integrity and
                    interoperability.
                  </Text>

                  <Flex color='white' alignItems={"center"}>
                    <Text
                      fontFamily={"manropebd"}
                      fontSize={{
                        sm: "14px",
                        smd: "14px",
                        md: "16px",
                        lg: "16px",
                        xl: "16px",
                      }}
                    >
                      Read more
                    </Text>
                    <ChevronRightIcon />
                  </Flex>
                </Flex>
              </Flex> */}

              {/* <Flex
                w={{ sm: "unset", lg: "320px", xl: "379px" }}
                minW={{ sm: "260px", lg: "unset", xl: "unset" }}
                h={{ sm: "230px", lg: "280px", xl: "327px" }}
                background={'url("../../lending/secondlendinginfobg.png")'}
                backgroundSize={"cover"}
                backgroundRepeat='repeat'
                backgroundPosition={"center"}
                border='0.68px solid #FCFCFC'
                borderRadius={"18px"}
              >
                <Flex
                  flexDirection={"column"}
                  px={{ sm: 4, lg: 6, xl: 12 }}
                  justifyContent='space-evenly'
                >
                  <Text
                    fontSize={{ sm: "16px", lg: "18px", xl: "20px" }}
                    fontFamily='manrope'
                    color='white'
                  >
                    Strategy for borrowing while minimizing risk, creating a
                    secure and balanced financial approach
                  </Text>

                  <Flex color='white' alignItems={"center"}>
                    <Text
                      fontFamily={"manropebd"}
                      fontSize={{
                        sm: "14px",
                        smd: "14px",
                        md: "16px",
                        lg: "16px",
                        xl: "16px",
                      }}
                    >
                      Read more
                    </Text>
                    <ChevronRightIcon />
                  </Flex>
                </Flex>
              </Flex> */}

              {/* <Flex
                w={{ sm: "unset", lg: "320px", xl: "379px" }}
                minW={{ sm: "260px", lg: "unset", xl: "unset" }}
                h={{ sm: "230px", lg: "280px", xl: "327px" }}
                background={'url("../../lending/thirdlendinginfobg.png")'}
                backgroundSize={"cover"}
                backgroundRepeat='repeat'
                backgroundPosition={"center"}
                border='0.68px solid #FCFCFC'
                borderRadius={"18px"}
              >
                <Flex
                  flexDirection={"column"}
                  px={{ sm: 4, lg: 6, xl: 12 }}
                  justifyContent='space-evenly'
                >
                  <Text
                    fontSize={{ sm: "16px", lg: "18px", xl: "20px" }}
                    fontFamily='manrope'
                    color='white'
                  >
                    Optimized lending pools for effective capital utilization
                    and enhanced borrowing and lending activities
                  </Text>

                  <Flex color='white' alignItems={"center"}>
                    <Text
                      fontFamily={"manropebd"}
                      fontSize={{
                        sm: "14px",
                        smd: "14px",
                        md: "16px",
                        lg: "16px",
                        xl: "16px",
                      }}
                    >
                      Read more
                    </Text>
                    <ChevronRightIcon />
                  </Flex>
                </Flex>
              </Flex> */}
            </Flex>
            <Flex
              w='100%'
              display={isMobileDevice ? undefined : "none"}
              justifyContent={"center"}
              mt={{ sm: 8, smd: 16, md: 20, lg: 24, xl: 40 }}
            >
              <Flex mb={10}>
                <Flex
                  cursor={"pointer"}
                  bgColor={"#F5F5F5"}
                  p={2}
                  borderRadius='6px'
                  mr={4}
                  onClick={() => {
                    scrollToLeft();
                  }}
                >
                  <ChevronLeftIcon />
                </Flex>

                <Flex
                  cursor={"pointer"}
                  bgColor={"#F5F5F5"}
                  p={2}
                  borderRadius='6px'
                  onClick={() => {
                    console.log("scroll");
                    scrollToRight();
                  }}
                >
                  <ChevronRightIcon />
                </Flex>
              </Flex>
            </Flex>
          </Flex>

          <Flex
            zIndex={1}
            mt={-64}
            w='100%'
            background={'url("../../lending/lendingpointsherobg.webp")'}
            backgroundSize={"cover"}
            backgroundRepeat='repeat'
            backgroundPosition={"center"}
            height={{ sm: "1250px", lg: "1100px", xl: "1300px" }}
            flexDirection='column'
          >
            <Text
              mt={60}
              lineHeight={"1"}
              textAlign={"center"}
              color='white'
              fontSize={{ sm: "20px", lg: "60px", xl: "80px" }}
            >
              On-Chain lending available <br /> for all Institutions
            </Text>

            <Flex flexDirection={"column"} alignItems='center' mt={20}>
              <Flex gap={4} flexDirection={isMobileDevice ? "column" : "row"}>
                <Flex
                  onMouseEnter={() => setcomplianceBoxActive(true)}
                  onMouseLeave={() => setcomplianceBoxActive(false)}
                  cursor={"pointer"}
                  background={
                    !complianceBoxActive
                      ? 'url("../../lending/complianceinactive.png")'
                      : 'url("../../lending/complianceactivebg.png")'
                  }
                  w={{ sm: "320px", lg: "680px", xl: "900px" }}
                  h={{ sm: "150px", lg: "260px", xl: "300px" }}
                  backgroundSize={"cover"}
                  backgroundRepeat='repeat'
                  backgroundPosition={"center"}
                  borderRadius={{ sm: "10px", lg: "20px", xl: "20px" }}
                  py={{ sm: 4, lg: 10, xl: 10 }}
                  px={{ sm: 4, lg: 10, xl: 10 }}
                >
                  <Flex
                    flexDirection={"column"}
                    gap={{ sm: 2, lg: 16, xl: 16 }}
                    color='white'
                  >
                    <Flex alignItems={"center"} gap={4}>
                      <Img
                        w={{ sm: "35px", lg: "60px", xl: "80px" }}
                        src={
                          complianceBoxActive
                            ? activecompliancelogo.src
                            : compliancelogo.src
                        }
                      />
                      <Text
                        fontSize={{ sm: "24px", lg: "34px", xl: "40px" }}
                        fontFamily='groteskmedium'
                      >
                        Compliance
                      </Text>
                    </Flex>
                    <Text
                      fontSize={{ sm: "15px", lg: "20px", xl: "24px" }}
                      fontFamily='manrope'
                    >
                      Off-chain and on-chain Know-Your-Customer (KYC) process
                      for institutional network participants
                    </Text>
                  </Flex>
                </Flex>

                <Flex
                  onMouseEnter={() => setcustodyBoxActive(true)}
                  onMouseLeave={() => setcustodyBoxActive(false)}
                  borderRadius={{ sm: "10px", lg: "20px", xl: "20px" }}
                  cursor={"pointer"}
                  background={
                    !custodyBoxActive
                      ? 'url("../../lending/custodyinactive.png")'
                      : 'url("../../lending/custodyactive.png")'
                  }
                  w={{ sm: "320px", lg: "520px", xl: "600px" }}
                  h={{ sm: "150px", lg: "260px", xl: "300px" }}
                  backgroundSize={"cover"}
                  backgroundRepeat='repeat'
                  backgroundPosition={"center"}
                  py={{ sm: 4, lg: 10, xl: 10 }}
                  px={{ sm: 4, lg: 10, xl: 8 }}
                >
                  <Flex
                    flexDirection={"column"}
                    gap={{ sm: 2, lg: 16, xl: 16 }}
                    color='white'
                  >
                    <Flex alignItems={"center"} gap={4}>
                      <Img
                        w={{ sm: "35px", lg: "60px", xl: "80px" }}
                        src={
                          custodyBoxActive
                            ? activecustodylogo.src
                            : custodylogo.src
                        }
                      />
                      <Text
                        fontSize={{ sm: "24px", lg: "34px", xl: "40px" }}
                        fontFamily='groteskmedium'
                      >
                        Custody
                      </Text>
                    </Flex>
                    <Text
                      fontSize={{ sm: "15px", lg: "20px", xl: "24px" }}
                      fontFamily='manrope'
                    >
                      Institutional-grade asset custody partners to enhance
                      protocol liquidity security
                    </Text>
                  </Flex>
                </Flex>
              </Flex>

              <Flex
                gap={"9px"}
                mt={4}
                flexDirection={isMobileDevice ? "column" : "row"}
              >
                <Flex
                  onMouseEnter={() => setsecurityBoxActive(true)}
                  onMouseLeave={() => setsecurityBoxActive(false)}
                  background={
                    !securityBoxActive
                      ? 'url("../../lending/securityinactive.png")'
                      : 'url("../../lending/securityactive.png")'
                  }
                  cursor='pointer'
                  borderRadius={{ sm: "10px", lg: "20px", xl: "20px" }}
                  w={{ sm: "320px", lg: "400px", xl: "500px" }}
                  h={{ sm: "150px", lg: "260px", xl: "300px" }}
                  backgroundSize={"cover"}
                  backgroundRepeat='repeat'
                  backgroundPosition={"center"}
                  py={{ sm: 4, lg: 10, xl: 8 }}
                  px={{ sm: 4, lg: 10, xl: 10 }}
                >
                  <Flex
                    flexDirection={"column"}
                    gap={{ sm: 2, lg: 16, xl: 16 }}
                    color='white'
                  >
                    <Flex alignItems={"center"} gap={4}>
                      <Img
                        w={{ sm: "35px", lg: "60px", xl: "80px" }}
                        src={
                          securityBoxActive
                            ? activesecuritylogo.src
                            : securitylogo.src
                        }
                      />
                      <Text
                        fontSize={{ sm: "24px", lg: "34px", xl: "40px" }}
                        fontFamily='groteskmedium'
                      >
                        Security
                      </Text>
                    </Flex>
                    <Text
                      fontSize={{ sm: "15px", lg: "20px", xl: "24px" }}
                      fontFamily='manrope'
                    >
                      Contract audits and bug bounty program to minimize
                      contract risk
                    </Text>
                  </Flex>
                </Flex>

                <Flex
                  onMouseEnter={() => setefficiencyBoxActive(true)}
                  onMouseLeave={() => setefficiencyBoxActive(false)}
                  background={
                    !efficiencyBoxActive
                      ? 'url("../../lending/securityinactive.png")'
                      : 'url("../../lending/securityactive.png")'
                  }
                  w={{ sm: "320px", lg: "400px", xl: "500px" }}
                  h={{ sm: "150px", lg: "260px", xl: "300px" }}
                  backgroundSize={"cover"}
                  backgroundRepeat='repeat'
                  backgroundPosition={"center"}
                  cursor='pointer'
                  borderRadius={{ sm: "10px", lg: "20px", xl: "20px" }}
                  py={{ sm: 4, lg: 10, xl: 8 }}
                  px={{ sm: 4, lg: 10, xl: 10 }}
                >
                  <Flex
                    flexDirection={"column"}
                    gap={{ sm: 2, lg: 16, xl: 16 }}
                    color='white'
                  >
                    <Flex alignItems={"center"} gap={4}>
                      <Img
                        w={{ sm: "35px", lg: "60px", xl: "80px" }}
                        src={
                          efficiencyBoxActive
                            ? activeefficiencylogo.src
                            : efficiencylogo.src
                        }
                      />
                      <Text
                        fontSize={{ sm: "24px", lg: "34px", xl: "40px" }}
                        fontFamily='groteskmedium'
                      >
                        Efficiency
                      </Text>
                    </Flex>
                    <Text
                      fontSize={{ sm: "15px", lg: "20px", xl: "24px" }}
                      fontFamily='manrope'
                    >
                      Contract audits and bug bounty program to minimize
                      contract risk
                    </Text>
                  </Flex>
                </Flex>

                <Flex
                  onMouseEnter={() => settransparencyBoxActive(true)}
                  onMouseLeave={() => settransparencyBoxActive(false)}
                  background={
                    !transparencyBoxActive
                      ? 'url("../../lending/securityinactive.png")'
                      : 'url("../../lending/securityactive.png")'
                  }
                  w={{ sm: "320px", lg: "400px", xl: "500px" }}
                  h={{ sm: "150px", lg: "260px", xl: "300px" }}
                  backgroundSize={"cover"}
                  backgroundRepeat='repeat'
                  backgroundPosition={"center"}
                  cursor='pointer'
                  borderRadius={{ sm: "10px", lg: "20px", xl: "20px" }}
                  py={{ sm: 4, lg: 10, xl: 8 }}
                  px={{ sm: 4, lg: 10, xl: 10 }}
                >
                  <Flex
                    flexDirection={"column"}
                    gap={{ sm: 2, lg: 16, xl: 16 }}
                    color='white'
                  >
                    <Flex alignItems={"center"} gap={4}>
                      <Img
                        src={transparencylogo.src}
                        w={{ sm: "35px", lg: "60px", xl: "80px" }}
                      />
                      <Text
                        fontSize={{ sm: "24px", lg: "34px", xl: "40px" }}
                        fontFamily='groteskmedium'
                      >
                        Transparency
                      </Text>
                    </Flex>
                    <Text
                      fontSize={{ sm: "15px", lg: "20px", xl: "24px" }}
                      fontFamily='manrope'
                    >
                      Instant and accessible on-chain transaction and liquidity
                      verifications
                    </Text>
                  </Flex>
                </Flex>
              </Flex>
            </Flex>
          </Flex>
          <Flex
            background={
              isMobileDevice
                ? 'url("../../lending/lendingsupportmobilebg.webp")'
                : 'url("../../lending/lendingsupportherobg.webp")'
            }
            backgroundSize={"cover"}
            // backgroundRepeat='repeat'
            // backgroundPosition={"center"}
            w='100%'
            height={{ sm: "480px", lg: "940px", xl: "960px" }}
            zIndex={4}
            mt={-10}
            position='relative'
            alignItems={"center"}
          >
            <Flex
              position={"absolute"}
              top={-10}
              justifyContent='center'
              w='100%'
            >
              <Img
                display={{
                  sm: "block",
                  smd: "block",
                  md: "none",
                  lg: "none",
                  xl: "none",
                }}
                w={{ sm: "220px", lg: "500px", xl: "700px" }}
                h={{ sm: "220px", lg: "500px", xl: "700px" }}
                src={lendingsupportright3d.src}
              />
            </Flex>
            <Flex
              visibility={{
                sm: "hidden",
                smd: "hidden",
                md: "visible",
                lg: "visible",
                xl: "visible",
              }}
              position={"absolute"}
              top={14}
            >
              <Img src={lendingsupportleft3d.src} />
            </Flex>
            <Flex
              mt={{ sm: 24, lg: 0, xl: 0 }}
              alignItems={"center"}
              justifyContent='space-evenly'
              w='100%'
            >
              <Flex flexDirection={"column"} gap={8}>
                <Text
                  fontSize={{ sm: "50px", lg: "80px", xl: "120px" }}
                  fontFamily='grotesk'
                  lineHeight={"1"}
                  textAlign='center'
                >
                  Instant <br /> Support for <br /> Institutions
                </Text>

                <Flex justifyContent={"center"}>
                  <Button
                    py={{ lg: 8, xl: 10 }}
                    px={8}
                    borderRadius='38px'
                    fontFamily={"manrope"}
                    fontSize={{ lg: "18px", xl: "24px" }}
                  >
                    Get Support
                  </Button>
                </Flex>
              </Flex>

              <Img
                display={{
                  sm: "none",
                  smd: "none",
                  md: "block",
                  lg: "block",
                  xl: "block",
                }}
                w={{ lg: "500px", xl: "700px" }}
                h={{ lg: "500px", xl: "700px" }}
                src={lendingsupportright3d.src}
              />
            </Flex>
          </Flex>
          <Footer />
        </Flex>
      </Box>
    </>
  );
}
