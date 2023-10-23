import Navbar from "@/components/Landing/Navbar";
import { Box, Button, Flex, Img, Text, useMediaQuery } from "@chakra-ui/react";
import Head from "next/head";
import bigcross from "../../assets/3d/landing/bigcross.webp";
import mediumcross from "../../assets/3d/landing/mediumcross.webp";
import smallcross from "../../assets/3d/landing/smallcross.webp";
import sphereholograph from "../../assets/3d/landing/sphereholograph.webp";
import springholograph from "../../assets/3d/landing/springholograph.webp";
import Marquee from "react-fast-marquee";
import coinpic from "../../assets/coinspic.png";
import { Scrollbars } from "react-custom-scrollbars";

import handcoinpic from "../../assets/handcoinpic.png";

import globepic from "../../assets/globepic.png";

import ethereum from "../../assets/svg/ethereum.svg";
import binance from "../../assets/svg/binance.svg";
import polygon from "../../assets/svg/polygon.svg";
import avalanche from "../../assets/svg/avalanche.svg";
import optimism from "../../assets/svg/optimism.svg";
import arbitrum from "../../assets/svg/arbitrumnormal.svg";
import holographic3d from "../../assets/3d/landing/holographic3d.png";
import holographiccircle from "../../assets/3d/landing/holographiccircle.png";
import holographicstring from "../../assets/3d/landing/holographicstring.png";
import { ChevronRightIcon, ChevronLeftIcon } from "@chakra-ui/icons";
import LendingInfo, {
  MobileCardComponent,
} from "@/components/Landing/LandingInfo";
import nftliquidityimage from "../../assets/nftliquidityimage.png";
import collateralimage from "../../assets/collateralimage.png";
import empowerimage from "../../assets/empowerimage.png";
import institutionsimage from "../../assets/institutionsimage.png";
import borrowersimage from "../../assets/borrowersimage.png";
import lendersimage from "../../assets/lendersimage.png";
import engagehand from "../../assets/engagehands.png";
import proposehand from "../../assets/proposehand.png";
import votehand from "../../assets/votehand.png";
import holographicdivider from "../../assets/holographicdivider.png";
import divider from "../../assets/divider.png";
import treasurybalancegraph from "../../assets/treasurybalancegraph.png";
import ecosystempartners from "../../assets/ecosystempartners.png";
import partners from "../../assets/partners.png";
import Footer from "@/components/NewFooter";
import mobilespringholograph from "../../assets/3d/landing/mobilespringholograph.png";
import ChainsCard from "@/components/Landing/ChainsCard";
import halflandingcircle from "../../assets/3d/landing/halflandingcircle.png";
import halflandingsphere from "../../assets/3d/landing/halflandingsphere.png";
import EnableCard from "@/components/Landing/EnableCard";
import busdlogo from "../../assets/busdlogo.png";
import usdclogo from "../../assets/usdclogo.png";
import chainzlogo from "../../assets/chainzlogo.png";
import usdtlogo from "../../assets/usdtlogo.png";
import shadow from "../../assets/shadow.svg";
import { useRef, useState } from "react";
import "./style.module.css";

export default function Lending() {
  const [isMobileDevice] = useMediaQuery("(max-width: 559px)");
  const nftLendingInfo = {
    title: (
      <Text
        lineHeight={"0.8"}
        mb={4}
        textAlign='center'
        fontFamily={"grotesk"}
        fontSize='100px'
      >
        NFT <br /> Lending
      </Text>
    ),
    subText: (
      <Text
        mt={4}
        fontFamily={"manrope"}
        fontSize={{ sm: "20px", lg: "24px", xl: "24px" }}
        lineHeight={"1.3"}
      >
        Unlocking new horizons,
        <br /> Multichainz empowers NFT lending <br /> with custom tools,
        benefiting both <br /> borrowers and lenders.
      </Text>
    ),
    cards: [
      {
        img: nftliquidityimage,
        title: (
          <Text
            fontFamily={"manrope"}
            fontSize={{ sm: "24px", lg: "32px", xl: "32px" }}
          >
            NFT Lending
          </Text>
        ),
        subText: (
          <Text
            fontSize={{ sm: "14px", lg: "18px", xl: "18px" }}
            fontFamily='manrope'
          >
            Access permissionless liquidity across multiple blockchains for your
            fund, startup, real estate or other financial needs
          </Text>
        ),
      },
      {
        img: collateralimage,
        title: (
          <Text
            fontFamily={"manrope"}
            fontSize={{ sm: "24px", lg: "32px", xl: "32px" }}
          >
            Collateral Boost
          </Text>
        ),
        subText: (
          <Text
            fontSize={{ sm: "14px", lg: "18px", xl: "18px" }}
            fontFamily='manrope'
          >
            Lend any tokenized asset to verified counter-parties to support
            their real-life causes and initiatives
          </Text>
        ),
      },
      {
        img: empowerimage,
        title: (
          <Text
            fontFamily={"manrope"}
            fontSize={{ sm: "24px", lg: "32px", xl: "32px" }}
          >
            NFT Empower
          </Text>
        ),
        subText: (
          <Text
            fontSize={{ sm: "14px", lg: "18px", xl: "18px" }}
            fontFamily='manrope'
          >
            Borrow or lend liquid tokenized assets with institutional- grade
            security to meet your company financial needs and goals
          </Text>
        ),
      },
    ],
  };

  const rwaInfo = {
    title: (
      <Text
        lineHeight={"0.8"}
        mb={4}
        textAlign='center'
        fontFamily={"grotesk"}
        fontSize='100px'
      >
        Real-World <br /> Asset <br /> Lending
      </Text>
    ),
    subText: (
      <Text mt={4} fontFamily={"manrope"} fontSize='24px'>
        Multichainz will expand the on-chain <br /> RWA lending potential
        through <br /> tailored mechanisms for borrowers <br /> and lenders.
      </Text>
    ),
    cards: [
      {
        img: borrowersimage,
        title: (
          <Text
            fontFamily={"manrope"}
            fontSize={{ sm: "24px", lg: "32px", xl: "32px" }}
          >
            For Borrowers
          </Text>
        ),
        subText: (
          <Text
            fontSize={{ sm: "14px", lg: "18px", xl: "18px" }}
            fontFamily='manrope'
          >
            Access permissionless liquidity across multiple blockchains for your
            fund, startup, real estate or other financial needs
          </Text>
        ),
      },
      {
        img: lendersimage,
        title: (
          <Text
            fontFamily={"manrope"}
            fontSize={{ sm: "24px", lg: "32px", xl: "32px" }}
          >
            For Lenders
          </Text>
        ),
        subText: (
          <Text
            fontSize={{ sm: "14px", lg: "18px", xl: "18px" }}
            fontFamily='manrope'
          >
            Lend any tokenized asset to verified counter-parties to support
            their real-life causes and initiatives
          </Text>
        ),
      },
      {
        img: institutionsimage,
        title: (
          <Text
            fontFamily={"manrope"}
            fontSize={{ sm: "24px", lg: "32px", xl: "32px" }}
          >
            NFT Empower
          </Text>
        ),
        subText: (
          <Text
            fontSize={{ sm: "14px", lg: "18px", xl: "18px" }}
            fontFamily='manrope'
          >
            Borrow or lend liquid tokenized assets with institutional- grade
            security to meet your company financial needs and goals
          </Text>
        ),
      },
    ],
  };

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
      <Box>
        <Flex position={"relative"} flexDirection={"column"}>
          <Flex
            w='100%'
            background={
              isMobileDevice
                ? 'url("../../landing/landingheromobilebg.webp")'
                : 'url("../../hero.png")'
            }
            backgroundSize={"cover"}
            backgroundRepeat='repeat'
            backgroundPosition={"center"}
            flexDirection='column'
            height={{ sm: "720px", lg: "1100px", xl: "1400px" }}
            // position={"absolute"}
            position={"relative"}
            zIndex={4}
          >
            <Navbar />

            <Flex
              position={"absolute"}
              right={2}
              top={{ lg: "10%", xl: "10%" }}
            >
              <Img
                display={{ sm: "none", md: "block", lg: "block", xl: "block" }}
                w={{ lg: "340px", xl: "380px" }}
                src={sphereholograph.src}
              />
            </Flex>

            <Flex
              position={"absolute"}
              right={{ sm: 18, lg: 20, xl: 20 }}
              top={{ sm: "60%", lg: "45%", xl: "45%" }}
            >
              <Img
                w={{ sm: "90px", lg: "160px", xl: "160px" }}
                src={bigcross.src}
              />
            </Flex>

            <Flex
              position={"absolute"}
              left={{ sm: "10%", lg: "30%", xl: "30%" }}
              top={{ sm: "10%", lg: "80%", xl: "80%" }}
            >
              <Img
                w={{ sm: "40px", lg: "60px", xl: "90px" }}
                src={mediumcross.src}
              />
            </Flex>

            <Flex
              position={"absolute"}
              left={{ sm: "70%", lg: "10%", xl: "10%" }}
              top={"10%"}
            >
              <Img src={smallcross.src} />
            </Flex>

            <Flex
              position={"absolute"}
              left={0}
              top={{ sm: 80, lg: 40, xl: 40 }}
            >
              <Img
                w={{ sm: "180px", lg: "500px", xl: "700px" }}
                src={
                  isMobileDevice
                    ? mobilespringholograph.src
                    : springholograph.src
                }
              />
            </Flex>

            <Flex
              pt={{ sm: 20, lg: 20, xl: 28 }}
              flexDirection={"column"}
              alignItems='center'
            >
              <Text
                color='white'
                fontFamily={"grotesk"}
                fontSize={{ sm: "50px", lg: "100px", xl: "140px" }}
                textAlign={"center"}
                lineHeight='1'
              >
                MULTICHAINZ <br /> PROTOCOL
              </Text>
              {isMobileDevice ? (
                <Text
                  color='white'
                  textAlign={"center"}
                  fontFamily={"manrope"}
                  fontWeight={"400"}
                  fontSize={{ sm: "20px", lg: "28px", xl: "36px" }}
                  lineHeight={"1.2"}
                  py={10}
                >
                  Lend, borrow, and stake <br /> cryptocurrencies, NFTs, and{" "}
                  <br /> tokenized real-world assets across <br /> multiple
                  blockchain networks
                </Text>
              ) : (
                <Text
                  color='white'
                  textAlign={"center"}
                  fontFamily={"manrope"}
                  fontWeight={"400"}
                  fontSize={{ sm: "20px", lg: "28px", xl: "36px" }}
                  lineHeight={"1.2"}
                  py={10}
                >
                  Lend, borrow, and stake cryptocurrencies,
                  <br /> NFTs, and tokenized real-world assets across <br />{" "}
                  multiple blockchain networks
                </Text>
              )}
              <Button
                fontFamily={"manropebd"}
                color='rgba(91, 71, 239, 1)'
                fontSize={{ sm: "14px", lg: "24px", xl: "24px" }}
                w={{ sm: "125px", lg: "160px", xl: "200px" }}
                h={{ sm: "50px", lg: "62px", xl: "70px" }}
                borderRadius={"44px"}
              >
                Get started
              </Button>
            </Flex>

            <Marquee>
              <Text
                mt={{ sm: 20, lg: 20, xl: 40 }}
                fontSize={{ sm: "38px", lg: "100px", xl: "120px" }}
                color='white'
              >
                {" "}
                NFT/RWA Lending | Cross-chain infrastructure | Institutional
                Compliance DAO Governance |{"   "}
              </Text>
            </Marquee>
            {/* <Flex>
              <Text fontSize='210px'>CROSS-CHAIN</Text>
            </Flex> */}
          </Flex>
          <Flex
            // position={"absolute"}
            bgColor='black'
            background={'url("../../lendinginfohero.png"),#777888'}
            backgroundSize={"cover"}
            backgroundRepeat='repeat'
            backgroundPosition={"center"}
            height={{ sm: "700px", lg: "900px", xl: "1200px" }}
            w='100%'
            mt={isMobileDevice ? -20 : -60}
            // mt={"1170px"}
            zIndex={1}
          >
            <Flex
              flexDirection={"column"}
              w='100%'
              pt={20}
              justifyContent={{
                sm: "unset",
                smd: "unset",
                lg: "center",
                xl: "center",
              }}
            >
              <Text
                textAlign={"center"}
                fontFamily='grotesklight'
                fontSize={{ sm: "20px", lg: "40px", xl: "60px" }}
                lineHeight='1'
                color='rgba(245, 245, 245, 1)'
              >
                $20m locked in collateral <br /> to back the loans
              </Text>

              <Flex
                alignItems={{
                  sm: "center",
                  smd: "center",
                  lg: "unset",
                  xl: "unset",
                }}
                justifyContent={"center"}
                mt={10}
                flexDirection={{
                  sm: "column",
                  smd: "column",
                  lg: "row",
                  xl: "row",
                }}
                gap={{ sm: 2, smd: 2, lg: 0, xl: 0 }}
              >
                <Flex
                  mr={{ sm: 0, smd: 0, lg: 2, xl: 2 }}
                  background={'url("../../coinpicbg.png")'}
                  backgroundSize={"cover"}
                  backgroundRepeat='repeat'
                  backgroundPosition={"center"}
                  h={{ sm: "130px", lg: "408px", xl: "468px" }}
                  w={{ sm: "320px", lg: "320px", xl: "400px" }}
                  borderRadius={"12px"}
                  position='relative'
                  justifyContent={"center"}
                >
                  <Flex
                    position={"absolute"}
                    top={-5}
                    flexDirection={{
                      sm: "row",
                      smd: "row",
                      lg: "column",
                      xl: "column",
                    }}
                    alignItems={{
                      sm: "center",
                      smd: "center",
                      lg: "unset",
                      xl: "unset",
                    }}
                    gap={{ sm: 4, smd: 4, lg: 0, xl: 0 }}
                  >
                    <Img
                      w={{ sm: "104px", lg: "220px", xl: "260px" }}
                      src={coinpic.src}
                    />

                    <Flex
                      flexDirection={{
                        sm: "column",
                        smd: "column",
                        md: "column",
                        lg: "column",
                        xl: "column",
                      }}
                    >
                      <Text
                        mt={6}
                        color='white'
                        textAlign={"center"}
                        fontSize={{ sm: "32px", lg: "40px", xl: "40px" }}
                        fontFamily='grotesklight'
                      >
                        $5 Million+
                      </Text>
                      <Text
                        textAlign={"center"}
                        color='white'
                        fontSize={{ sm: "16px", lg: "20px", xl: "20px" }}
                        fontFamily='grotesklight'
                      >
                        Processed Loans
                      </Text>
                    </Flex>
                  </Flex>
                </Flex>
                <Flex flexDirection={"column"}>
                  <Flex
                    borderRadius={"12px"}
                    h={{ sm: "130px", lg: "200px", xl: "230px" }}
                    w={{ sm: "320px", lg: "450px", xl: "560px" }}
                    background={'url("../../handpicbg.png")'}
                    backgroundSize={"cover"}
                    backgroundRepeat='repeat'
                    backgroundPosition={"center"}
                    position='relative'
                  >
                    <Flex
                      position={"absolute"}
                      alignItems='center'
                      justifyContent={"space-evenly"}
                      w='100%'
                    >
                      <Img
                        w={{ sm: "104px", lg: "160px", xl: "180px" }}
                        src={handcoinpic.src}
                      />
                      <Flex flexDirection={"column"}>
                        <Text
                          color='white'
                          textAlign={"center"}
                          fontSize={"40px"}
                          fontFamily='grotesklight'
                        >
                          1M+
                        </Text>
                        <Text
                          textAlign={"center"}
                          color='white'
                          fontSize={"20px"}
                          fontFamily='grotesklight'
                        >
                          World Users
                        </Text>
                      </Flex>
                    </Flex>
                  </Flex>
                  <Flex
                    borderRadius={"12px"}
                    mt='8px'
                    h={{ sm: "130px", lg: "200px", xl: "230px" }}
                    w={{ sm: "320px", lg: "unset", xl: "unset" }}
                    background={'url("../../globepicbg.png")'}
                    backgroundSize={"cover"}
                    backgroundRepeat='repeat'
                    backgroundPosition={"center"}
                    position='relative'
                  >
                    <Flex
                      position={"absolute"}
                      alignItems='center'
                      justifyContent={"space-evenly"}
                      w={{ sm: "100%", lg: "100%", xl: "100%" }}
                      h={{ sm: "100%", lg: "100%", xl: "100%" }}
                    >
                      <Img
                        w={{ sm: "104px", lg: "180px", xl: "200px" }}
                        src={globepic.src}
                      />
                      <Flex flexDirection={"column"}>
                        <Text
                          color='white'
                          textAlign={"center"}
                          fontSize={"40px"}
                          fontFamily='grotesklight'
                        >
                          20+
                        </Text>
                        <Text
                          textAlign={"center"}
                          color='white'
                          fontSize={"20px"}
                          fontFamily='grotesklight'
                        >
                          Countries Reached
                        </Text>
                      </Flex>
                    </Flex>
                  </Flex>
                </Flex>
              </Flex>
            </Flex>
          </Flex>
          {/* Explore Session */}
          <Flex
            background={
              isMobileDevice
                ? 'url("../../landing/exploremobilebg.webp")'
                : 'url("../../explorehero.png")'
            }
            backgroundSize={"cover"}
            backgroundRepeat='repeat'
            backgroundPosition={"center"}
            height={{ sm: "900px", lg: "1170px", xl: "1170px" }}
            w='100%'
            mt={-24}
            // mt={"2480px"}
            zIndex={4}
            position='relative'
          >
            <Flex
              alignItems={"center"}
              justifyContent={{
                sm: "center",
                smd: "center",
                md: "space-evenly",
                lg: "space-evenly",
                xl: "space-evenly",
              }}
              w='100%'
              flexDirection={{
                sm: "column",
                smd: "column",
                md: "row",
                lg: "row",
                xl: "row",
              }}
            >
              <Flex flexDirection={"column"} alignItems='center' mr={10}>
                <Text
                  fontSize={{ sm: "50px", lg: "80px", xl: "100px" }}
                  lineHeight='1'
                  textAlign={"center"}
                  fontFamily={"grotesk"}
                >
                  Explore <br /> MultichainZ
                </Text>
                <Flex alignItems={"center"} mt={6}>
                  <Button
                    fontFamily={"manropebd"}
                    h={{ sm: "40px", lg: "60px", xl: "60px" }}
                    w={{ sm: "100px", lg: "160px", xl: "160px" }}
                    borderRadius={"50px"}
                    mr={4}
                    fontSize={{ sm: "11px", lg: "16px", xl: "16px" }}
                  >
                    Get started
                  </Button>
                  <Text
                    lineHeight={"1.2"}
                    fontFamily={"manrope"}
                    fontSize={{ sm: "16px", lg: "32px", xl: "32px" }}
                  >
                    Community Pools
                    <br />
                    across Multiple Chains
                  </Text>
                </Flex>
              </Flex>

              <Flex
                flexDirection={"column"}
                mt={{ sm: 6, smd: 6, lg: 0, xl: 0 }}
              >
                <Flex gap={{ sm: 4, smd: 4, lg: 0, xl: 0 }}>
                  <ChainsCard
                    img={ethereum.src}
                    text='Access 450k+ tokens through the largest chain for dApps'
                  />

                  <ChainsCard
                    img={arbitrum.src}
                    text='Access speed and security in your loan transactions.'
                  />
                  {/* <Flex
                    borderRadius={"30px"}
                    mr={4}
                    w='350px'
                    h='240px'
                    bgColor={"white"}
                    flexDirection='column'
                    alignItems={"center"}
                    py={6}
                    justifyContent='space-between'
                  >
                    <Img src={ethereum.src} w='240px' />
                    <Text fontFamily={"manrope"} px={10} fontSize='18px'>
                      Access 450k+ tokens through the largest chain for dApps
                    </Text>
                    <Flex
                      border='1px solid rgba(45, 47, 80, 1)'
                      py={3}
                      px={6}
                      borderRadius='30px'
                    >
                      <Text fontFamily={"manrope"}>Learn more</Text>
                    </Flex>
                  </Flex>
                  <Flex
                    borderRadius={"30px"}
                    w='350px'
                    h='240px'
                    bgColor={"white"}
                    flexDirection='column'
                    alignItems={"center"}
                    py={6}
                    justifyContent='space-between'
                  >
                    <Img src={arbitrum.src} w='180px' />
                    <Text fontFamily={"manrope"} px={10} fontSize='18px'>
                      Access speed and security in your loan transactions.
                    </Text>
                    <Flex
                      border='1px solid rgba(45, 47, 80, 1)'
                      py={3}
                      px={6}
                      borderRadius='30px'
                      cursor={"pointer"}
                    >
                      <Text fontFamily={"manrope"} fontWeight='700'>
                        Learn more
                      </Text>
                    </Flex>
                  </Flex> */}
                </Flex>
                <Flex mt={4} gap={{ sm: 4, smd: 4, lg: 0, xl: 0 }}>
                  <ChainsCard
                    img={binance.src}
                    text='Lend your assets in a cheaper and faster way through this
                      leading chain'
                  />
                  <ChainsCard
                    img={polygon.src}
                    text='Unlock lower fees and higher scalability with this scaling
                      technology'
                  />
                  {/* <Flex
                    mr={4}
                    borderRadius={"30px"}
                    w='350px'
                    h='240px'
                    bgColor={"white"}
                    flexDirection='column'
                    alignItems={"center"}
                    py={6}
                    justifyContent='space-between'
                  >
                    <Img src={binance.src} w='180px' />
                    <Text fontFamily={"manrope"} px={10} fontSize='18px'>
                      Lend your assets in a cheaper and faster way through this
                      leading chain
                    </Text>
                    <Flex
                      border='1px solid rgba(45, 47, 80, 1)'
                      py={3}
                      px={6}
                      borderRadius='30px'
                      cursor={"pointer"}
                    >
                      <Text fontFamily={"manrope"} fontWeight='700'>
                        Learn more
                      </Text>
                    </Flex>
                  </Flex>
                  <Flex
                    borderRadius={"30px"}
                    w='350px'
                    h='240px'
                    bgColor={"white"}
                    flexDirection='column'
                    alignItems={"center"}
                    py={6}
                    justifyContent='space-between'
                  >
                    <Img src={polygon.src} w='180px' />
                    <Text fontFamily={"manrope"} px={10} fontSize='18px'>
                      Unlock lower fees and higher scalability with this scaling
                      technology
                    </Text>
                    <Flex
                      border='1px solid rgba(45, 47, 80, 1)'
                      py={3}
                      px={6}
                      borderRadius='30px'
                      cursor={"pointer"}
                    >
                      <Text fontFamily={"manrope"} fontWeight='700'>
                        Learn more
                      </Text>
                    </Flex>
                  </Flex> */}
                </Flex>
                <Flex mt={4} gap={{ sm: 4, smd: 4, lg: 0, xl: 0 }}>
                  <ChainsCard
                    img={avalanche.src}
                    text='Enjoy efficiency and security robustness in your loans'
                  />
                  <ChainsCard
                    img={optimism.src}
                    text='Lend and borrow with the fastest and cheapest L2 benefits'
                  />
                  {/* <Flex
                    borderRadius={"30px"}
                    w='350px'
                    h='240px'
                    mr={4}
                    bgColor={"white"}
                    flexDirection='column'
                    alignItems={"center"}
                    py={6}
                    justifyContent='space-between'
                  >
                    <Img src={avalanche.src} w='180px' />
                    <Text fontFamily={"manrope"} px={10} fontSize='18px'>
                      Enjoy efficiency and security robustness in your loans
                    </Text>
                    <Flex
                      border='1px solid rgba(45, 47, 80, 1)'
                      py={3}
                      px={6}
                      borderRadius='30px'
                      cursor={"pointer"}
                    >
                      <Text fontFamily={"manrope"} fontWeight='700'>
                        Learn more
                      </Text>
                    </Flex>
                  </Flex>
                  <Flex
                    borderRadius={"30px"}
                    w='350px'
                    h='240px'
                    bgColor={"white"}
                    flexDirection='column'
                    alignItems={"center"}
                    py={6}
                    justifyContent='space-between'
                  >
                    <Img src={optimism.src} w='180px' />
                    <Text fontFamily={"manrope"} px={10} fontSize='18px'>
                      Lend and borrow with the fastest and cheapest L2 benefits
                    </Text>
                    <Flex
                      border='1px solid rgba(45, 47, 80, 1)'
                      py={3}
                      px={6}
                      borderRadius='30px'
                      cursor={"pointer"}
                    >
                      <Text fontFamily={"manrope"} fontWeight='700'>
                        Learn more
                      </Text>
                    </Flex>
                  </Flex> */}
                </Flex>
              </Flex>
            </Flex>

            <Flex position={"absolute"} bottom={{ sm: -20, lg: -40, xl: -40 }}>
              <Img
                w={{ sm: "100px", lg: "240px", xl: "240px" }}
                src={holographicstring.src}
              />
            </Flex>

            <Flex
              position={"absolute"}
              bottom={{ sm: 0, lg: 0, xl: -28 }}
              right={0}
            >
              <Img
                w={{ sm: "100px", lg: "220px", xl: "320px" }}
                src={holographic3d.src}
              />
            </Flex>
          </Flex>

          <Flex
            // position={"absolute"}

            background={'url("../../enablelendinghero.png")'}
            backgroundSize={"cover"}
            backgroundRepeat='repeat'
            backgroundPosition={"center"}
            height={{ sm: "960px", smd: "1000px", lg: "1470px", xl: "1470px" }}
            w='100%'
            mt={{ sm: -48, lg: -64, xl: -64 }}
            // mt={"3400px"}
            zIndex={3}
          >
            <Flex
              alignItems={"center"}
              //   justifyContent='flex-start'
              //   pl={60}
              w='100%'
              flexDirection={{
                sm: "column",
                smd: "column",
                lg: "row",
                xl: "row",
              }}
            >
              <Flex
                pt={{ sm: 60, smd: 60, lg: 20, xl: 0 }}
                w={{ sm: "100%", lg: "50%", xl: "50%" }}
                justifyContent={{
                  sm: "center",
                  smd: "center",
                  lg: "flex-end",
                  xl: "flex-end",
                }}
                pr={{ sm: 0, smd: 0, lg: 28, xl: 32 }}
              >
                <Flex flexDirection={"column"} alignItems='center'>
                  <Text
                    fontSize={{ sm: "50px", lg: "80px", xl: "100px" }}
                    lineHeight='1'
                    textAlign={"center"}
                    fontFamily={"grotesk"}
                    color='white'
                  >
                    Enabling <br /> Institutional <br /> Lending
                  </Text>
                  <Flex alignItems={"center"} mt={6}>
                    <Button
                      fontFamily={"manropebd"}
                      h={{ sm: "40px", lg: "60px", xl: "60px" }}
                      w={{ sm: "100px", lg: "160px", xl: "160px" }}
                      borderRadius={"50px"}
                      mr={4}
                      fontSize={{ sm: "11px", lg: "16px", xl: "16px" }}
                    >
                      Get started
                    </Button>
                    <Text
                      lineHeight={"1.2"}
                      fontFamily={"manrope"}
                      fontSize={{ sm: "16px", lg: "32px", xl: "32px" }}
                      color='white'
                    >
                      Institutional features to <br /> enhance on-chain lending{" "}
                      <br /> security and trust
                    </Text>
                  </Flex>
                </Flex>
              </Flex>
              {/* todo: manrope light */}

              <Flex
                pt={{ sm: 10, smd: 10, lg: 0, xl: 0 }}
                w={{ sm: "100%", smd: "100%", md: "60%", lg: "50%", xl: "50%" }}
                flexDirection={"column"}
              >
                <Flex
                  mb={8}
                  pr={10}
                  display={{
                    sm: "none",
                    smd: "none",
                    md: "flex",
                    lg: "flex",
                    xl: "flex",
                  }}
                  justifyContent={"flex-end"}
                >
                  <Flex
                    cursor={"pointer"}
                    bgColor={"#F5F5F5"}
                    p={2}
                    borderRadius='6px'
                    mr={4}
                    onClick={() => {
                      // setcontrolClicked(true);
                      // handleScrollBack();
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
                      // setcontrolClicked(true);
                      // handleScrollForward();
                      scrollToRight();
                    }}
                  >
                    <ChevronRightIcon />
                  </Flex>
                </Flex>
                <Flex
                  ref={scrollContainerRef}
                  overflowX='hidden'
                  gap={{ sm: 6, smd: 6, md: 0, lg: 6, xl: 6 }}
                  pl={{ sm: 10, smd: 10, md: 0, lg: 0, xl: 0 }}
                >
                  {/* <Flex
                    minW={{ sm: "260px", lg: "379px", xl: "379px" }}
                    h={{ sm: "220px", lg: "327px", xl: "327px" }}
                    background={'url("../../landing/enablingsection1.png")'}
                    backgroundSize={"cover"}
                    backgroundRepeat='repeat'
                    backgroundPosition={{
                      sm: "bottom",
                      smd: "bottom",
                      md: "center",
                      lg: "center",
                      xl: "center",
                    }}
                    borderRadius='18px'
                    borderTop={{
                      sm: "0.68px solid #FCFCFC",
                      smd: "0.68px solid #FCFCFC",
                      md: "unset",
                      lg: "unset",
                      xl: "unset",
                    }}
                  >
                    <Flex
                      flexDirection={"column"}
                      px={{ sm: 6, smd: 8, lg: 12, xl: 12 }}
                      justifyContent='space-evenly'
                    >
                      <Text
                        fontSize={{ sm: "14px", lg: "18px", xl: "18px" }}
                        fontFamily='manrope'
                        color='white'
                      >
                        Multichainz has on-chain Know-Your-Customer (KYC)
                        verification for users
                      </Text>

                      <Flex color='white' alignItems={"center"}>
                        <Text
                          fontFamily={"manrope"}
                          fontSize={{
                            sm: "12px",
                            smd: "12px",
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
                    minW='379px'
                    h='327px'
                    background={'url("../../landing/enablingsection2.png")'}
                    backgroundSize={"cover"}
                    backgroundRepeat='repeat'
                    backgroundPosition={"center"}
                    mx={8}
                  >
                    <Flex
                      flexDirection={"column"}
                      px={12}
                      justifyContent='space-evenly'
                    >
                      <Text
                        fontSize={"18px"}
                        fontFamily='manrope'
                        color='white'
                      >
                        MultichainZ has top-industry asset custody partners to
                        increase asset protection
                      </Text>

                      <Flex color='white' alignItems={"center"}>
                        <Text fontFamily={"manrope"}>Read more</Text>
                        <ChevronRightIcon />
                      </Flex>
                    </Flex>
                  </Flex> */}
                  <EnableCard
                    title='Comprehensive Compliance'
                    text='The most comprehensive compliance process to eliminate counterparty risk through a mix of on-chain and third-party verification solutions.'
                  />
                  <EnableCard
                    title='24/7 Secure Custody'
                    text='The lending solution that ensures never-ending guaranteed safety for all the protocol locked assets thanks to our institutional-grade asset guardians.'
                  />
                  <EnableCard
                    title='Unmatched Transparency'
                    text='Open access and always accessible proof of reserves and protocol funds for all assets from any pool of any blockchain. '
                  />
                  {/* <Flex
                    minW='379px'
                    h='327px'
                    background={'url("../../lending/enablingsection3.png")'}
                    backgroundSize={"cover"}
                    backgroundRepeat='repeat'
                    backgroundPosition={"center"}
                  >
                    <Flex
                      flexDirection={"column"}
                      px={12}
                      justifyContent='space-evenly'
                    >
                      <Text
                        fontSize={"18px"}
                        fontFamily='manrope'
                        color='white'
                      >
                        MultichainZ enhances protocol transparency through open
                        access of proof of reserves and funds
                      </Text>

                      <Flex color='white' alignItems={"center"}>
                        <Text fontFamily={"manrope"}>Read more</Text>
                        <ChevronRightIcon />
                      </Flex>
                    </Flex>
                  </Flex> */}
                </Flex>

                <Flex
                  mt={8}
                  display={{
                    sm: "flex",
                    smd: "flex",
                    md: "none",
                    lg: "none",
                    xl: "none",
                  }}
                  justifyContent={"center"}
                >
                  <Flex
                    cursor={"pointer"}
                    bgColor={"#F5F5F5"}
                    p={2}
                    borderRadius='6px'
                    mr={4}
                    onClick={() => {
                      // setcontrolClicked(true);
                      // handleScrollBack();
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
                      // setcontrolClicked(true);
                      // handleScrollForward();
                      scrollToRight();
                    }}
                  >
                    <ChevronRightIcon />
                  </Flex>
                </Flex>
              </Flex>
            </Flex>
          </Flex>
          <Flex
            background={'url("../../nftanimationhero.png")'}
            backgroundSize={"cover"}
            backgroundRepeat='repeat'
            backgroundPosition={"center"}
            height={{
              sm: "2400px",
              smd: "1000px",
              md: "4000px",
              lg: "4400px",
              xl: "4400px",
            }}
            w='100%'
            mt={{ sm: -40, lg: -48, xl: -48 }}
            flexDirection='column'
            position={"relative"}
            zIndex={2}
          >
            {isMobileDevice ? (
              <>
                <Flex py={28} flexDirection={"column"}>
                  <Flex flexDirection={"column"}>
                    <Text
                      fontSize={"50px"}
                      fontFamily='grotesk'
                      textAlign={"center"}
                      lineHeight={"0.9"}
                    >
                      NFT <br /> Lending
                    </Text>

                    <Text
                      fontFamily={"manrope"}
                      fontSize='16px'
                      textAlign={"center"}
                      py={6}
                    >
                      Unlocking new horizons, Multichainz <br /> empowers NFT
                      lending with custom tools, <br /> benefiting both
                      borrowers and lenders.
                    </Text>

                    <Flex
                      // className={styles.thumHorizontal}
                      // overflow={"scroll"}
                      ml={10}
                      gap={4}
                    >
                      <Scrollbars height={380}>
                        <Flex>
                          {nftLendingInfo?.cards.map((card: any, idx: any) => (
                            <MobileCardComponent key={idx} cardInfo={card} />
                          ))}
                        </Flex>
                      </Scrollbars>
                    </Flex>
                  </Flex>

                  <Flex pt={20} flexDirection={"column"}>
                    <Text
                      fontSize={"50px"}
                      fontFamily='grotesk'
                      textAlign={"center"}
                      lineHeight={"0.9"}
                    >
                      Real-World <br /> Asset Lending
                    </Text>

                    <Text
                      fontFamily={"manrope"}
                      fontSize='16px'
                      textAlign={"center"}
                      py={6}
                    >
                      Multichainz will expand the on-chain RWA <br /> lending
                      potential through tailored <br /> merchanisms for
                      borrowers and lenders
                    </Text>

                    <Flex overflow={"scroll"} ml={10} gap={4}>
                      {rwaInfo?.cards.map((card: any, idx: any) => (
                        <MobileCardComponent key={idx} cardInfo={card} />
                      ))}
                    </Flex>
                  </Flex>
                </Flex>
              </>
            ) : (
              <>
                <LendingInfo sectionInfo={nftLendingInfo} />
                <LendingInfo sectionInfo={rwaInfo} />
              </>
            )}
            <Flex
              position={"absolute"}
              top={{ sm: "25%", smd: "24%", lg: "76%", xl: "72%" }}
            >
              <Img
                w={{
                  sm: "80px",
                  smd: "80px",
                  md: "400px",
                  lg: "380px",
                  xl: "460px",
                }}
                src={
                  isMobileDevice ? halflandingcircle.src : holographiccircle.src
                }
              />
            </Flex>

            <Flex
              pt={{ sm: "80px", lg: "240px", xl: "240px" }}
              justifyContent='center'
              gap={6}
              flexDirection={{
                sm: "column",
                smd: "column",
                lg: "row",
                xl: "row",
              }}
            >
              <Flex
                flexDirection={"column"}
                color='#F5F5F5'
                alignItems={"center"}
              >
                <Text
                  textAlign={"center"}
                  fontSize={{ sm: "50px", lg: "80px", xl: "100px" }}
                  lineHeight={"0.8"}
                  fontFamily='grotesk'
                >
                  Community <br /> Led DAO
                </Text>
                {isMobileDevice ? (
                  <Text
                    my={8}
                    fontFamily={"manrope"}
                    fontSize={{ lg: "20px", xl: "24px" }}
                    textAlign='center'
                  >
                    Propose protocol suggestions and <br /> improvements within
                    seconds through our <br /> community forum.
                  </Text>
                ) : (
                  <Text
                    my={8}
                    fontFamily={"manrope"}
                    fontSize={{ lg: "20px", xl: "24px" }}
                  >
                    Propose protocol suggestions and <br /> improvements within
                    seconds <br />
                    through our community forum.
                  </Text>
                )}
                <Button
                  color='black'
                  bgColor={"rgba(245, 245, 245, 1)"}
                  fontFamily='manropebd'
                  py={{ sm: 6, lg: 8, xl: 8 }}
                  borderRadius='32px'
                  fontSize={{
                    sm: "12px",
                    smd: "12px",
                    lg: "16px",
                    xl: "16px",
                  }}
                >
                  Governance Forum
                </Button>
              </Flex>

              <Flex
                gap={4}
                flexDirection={{
                  sm: "column",
                  smd: "column",
                  lg: "row",
                  xl: "row",
                }}
                alignItems={{
                  sm: "center",
                  smd: "center",
                  lg: "unset",
                  xl: "unset",
                }}
              >
                <Flex
                  background={'url("../../engagebg.png")'}
                  backgroundSize={"cover"}
                  backgroundRepeat='repeat'
                  backgroundPosition={"center"}
                  h={{ sm: "170px", lg: "380px", xl: "390px" }}
                  w={{ sm: "320px", lg: "260px", xl: "280px" }}
                  flexDirection={{ sm: "row", lg: "column", xl: "column" }}
                  alignItems={{
                    sm: "center",
                    smd: "center",
                    lg: "center",
                    xl: "center",
                  }}
                  color='white'
                  gap={4}
                  p={6}
                  px={{ sm: 4, smd: 2, lg: 6, xl: 6 }}
                  borderRadius={{
                    sm: "14px",
                    smd: "14px",
                    lg: "20px",
                    xl: "20px",
                  }}
                >
                  <Img
                    w={{
                      sm: "120px",
                      smd: "120px",
                      md: "200px",
                      lg: "220px",
                      xl: "240px",
                    }}
                    h={{
                      sm: "104px",
                      smd: "104px",
                      md: "160px",
                      lg: "180px",
                      xl: "200px",
                    }}
                    src={engagehand.src}
                  />
                  <Flex
                    flexDirection={{
                      sm: "column",
                      smd: "column",
                      lg: "column",
                      xl: "column",
                    }}
                    alignItems={{
                      sm: "center",
                      smd: "center",
                      lg: "flex-start",
                      xl: "flex-start",
                    }}
                    gap={{ sm: 2, smd: 2, lg: 0, xl: 4 }}
                  >
                    <Text fontSize={"32px"} fontFamily='manrope'>
                      Engage
                    </Text>
                    <Text
                      fontSize={{ sm: "14px", lg: "15px", xl: "15px" }}
                      fontFamily='manrope'
                      textAlign={{
                        sm: "center",
                        smd: "center",
                        lg: "unset",
                        xl: "unset",
                      }}
                    >
                      Learn more about initiatives proposed by community members
                    </Text>
                  </Flex>
                </Flex>
                <Flex
                  background={'url("../../proposebg.png")'}
                  backgroundSize={"cover"}
                  backgroundRepeat='repeat'
                  backgroundPosition={"center"}
                  h={{ sm: "170px", lg: "380px", xl: "390px" }}
                  w={{ sm: "320px", lg: "260px", xl: "280px" }}
                  flexDirection={{ sm: "row", lg: "column", xl: "column" }}
                  alignItems={{
                    sm: "center",
                    smd: "center",
                    lg: "center",
                    xl: "center",
                  }}
                  color='white'
                  gap={4}
                  p={6}
                  px={{ sm: 4, smd: 2, lg: 6, xl: 6 }}
                  borderRadius={{
                    sm: "14px",
                    smd: "14px",
                    lg: "14px",
                    xl: "20px",
                  }}
                >
                  <Img
                    w={{
                      sm: "120px",
                      smd: "120px",
                      md: "200px",
                      lg: "220px",
                      xl: "240px",
                    }}
                    h={{
                      sm: "104px",
                      smd: "104px",
                      md: "160px",
                      lg: "180px",
                      xl: "200px",
                    }}
                    src={proposehand.src}
                  />
                  <Flex
                    flexDirection={{
                      sm: "column",
                      smd: "column",
                      lg: "column",
                      xl: "column",
                    }}
                    alignItems={{
                      sm: "center",
                      smd: "center",
                      lg: "flex-start",
                      xl: "flex-start",
                    }}
                    gap={{ sm: 2, smd: 2, lg: 4, xl: 4 }}
                  >
                    <Text fontSize={"32px"} fontFamily='manrope'>
                      Propose
                    </Text>
                    <Text
                      fontSize={{ sm: "14px", lg: "15px", xl: "15px" }}
                      fontFamily='manrope'
                      textAlign={{
                        sm: "center",
                        smd: "center",
                        lg: "unset",
                        xl: "unset",
                      }}
                    >
                      Share your suggestions or improvements for the protocol
                    </Text>
                  </Flex>
                </Flex>
                <Flex
                  background={'url("../../votebg.png")'}
                  backgroundSize={"cover"}
                  backgroundRepeat='repeat'
                  backgroundPosition={"center"}
                  h={{ sm: "170px", lg: "380px", xl: "390px" }}
                  w={{ sm: "320px", lg: "260px", xl: "280px" }}
                  flexDirection={{ sm: "row", lg: "column", xl: "column" }}
                  alignItems={{
                    sm: "center",
                    smd: "center",
                    lg: "center",
                    xl: "center",
                  }}
                  color='white'
                  gap={4}
                  p={6}
                  px={{ sm: 4, smd: 2, lg: 6, xl: 6 }}
                  borderRadius={{
                    sm: "14px",
                    smd: "14px",
                    lg: "20px",
                    xl: "20px",
                  }}
                >
                  <Img
                    w={{
                      sm: "120px",
                      smd: "120px",
                      md: "200px",
                      lg: "220px",
                      xl: "240px",
                    }}
                    h={{
                      sm: "104px",
                      smd: "104px",
                      md: "160px",
                      lg: "180px",
                      xl: "200px",
                    }}
                    src={votehand.src}
                  />
                  <Flex
                    flexDirection={{
                      sm: "column",
                      smd: "column",
                      lg: "column",
                      xl: "column",
                    }}
                    alignItems={{
                      sm: "center",
                      smd: "center",
                      lg: "flex-start",
                      xl: "flex-start",
                    }}
                    gap={{ sm: 2, smd: 2, lg: 0, xl: 4 }}
                  >
                    <Text fontSize={"32px"} fontFamily='manrope'>
                      Vote
                    </Text>
                    <Text
                      fontSize={{ sm: "14px", lg: "15px", xl: "15px" }}
                      fontFamily='manrope'
                      textAlign={{
                        sm: "center",
                        smd: "center",
                        lg: "unset",
                        xl: "unset",
                      }}
                    >
                      Support proposals that you agree with
                    </Text>
                  </Flex>
                </Flex>
              </Flex>
            </Flex>
            <Flex
              position={"absolute"}
              top={{ sm: "98%", smd: "98%", lg: "97%", xl: "96%" }}
            >
              <Img w='2400px' src={holographicdivider.src} />
            </Flex>
          </Flex>
          <Flex
            background={
              isMobileDevice
                ? 'url("../../landing/treasurybalancemobilebg.webp")'
                : 'url("../../treasurybalancehero.png")'
            }
            backgroundSize={"cover"}
            backgroundRepeat='repeat'
            backgroundPosition={"center"}
            zIndex={1}
            height={{ sm: "1000px", smd: "800px", lg: "1500px", xl: "1640px" }}
            w='100%'
            mt={{ sm: -48, lg: -48, xl: -74 }}
            flexDirection='column'
            position={"relative"}
          >
            <Flex
              alignItems={"center"}
              h='100%'
              justifyContent={{
                sm: "center",
                smd: "center",
                lg: "space-evenly",
                xl: "space-evenly",
              }}
              flexDirection={{
                sm: "column-reverse",
                smd: "column-reverse",
                lg: "row",
                xl: "row",
              }}
            >
              <Flex
                position={"relative"}
                mt={{ sm: 10, smd: 10, lg: 0, xl: 0 }}
              >
                <Img
                  src={treasurybalancegraph.src}
                  w={{ lg: "700px", xl: "800px" }}
                />

                <Flex
                  position={"absolute"}
                  filter='blur(4px)'
                  top={{ sm: "30%", lg: "30%", xl: "30%" }}
                  right={{ sm: "28%", lg: "28%", xl: "28%" }}
                >
                  <Flex
                    borderRadius={"50%"}
                    opacity={0.2}
                    bg='black'
                    w={{ sm: "160px", lg: "280px", xl: "320px" }}
                    h={{ sm: "160px", lg: "280px", xl: "320px" }}
                  ></Flex>
                </Flex>
                <Flex
                  w={{ sm: "160px", lg: "280px", xl: "320px" }}
                  h={{ sm: "160px", lg: "280px", xl: "320px" }}
                  position={"absolute"}
                  top={{ sm: "30%", lg: "30%", xl: "30%" }}
                  right={{ sm: "30%", lg: "30%", xl: "30%" }}
                  background={'url("../../bigtreasurybalancecircle.png")'}
                  backgroundSize={"cover"}
                  backgroundRepeat='repeat'
                  backgroundPosition={"center"}
                  justifyContent='center'
                  alignItems={"center"}
                >
                  <Flex flexDirection={"column"} alignItems='center'>
                    <Text
                      fontFamily={"manrope"}
                      fontSize={{
                        sm: "24px",
                        smd: "24px",
                        lg: "50px",
                        xl: "56px",
                      }}
                      color='#F5F5F5'
                    >
                      $600K
                    </Text>
                    <Text
                      fontFamily={"manrope"}
                      fontSize={{
                        sm: "12px",
                        smd: "12px",
                        lg: "24px",
                        xl: "28px",
                      }}
                      color='#F5F5F5'
                      textAlign={"center"}
                    >
                      Total Ecosystem <br /> Reserve
                    </Text>
                  </Flex>
                </Flex>

                <Flex
                  position={"absolute"}
                  filter='blur(4px)'
                  top={{ sm: 4, lg: 4, xl: 6 }}
                  right={{ sm: "58px", lg: "85px", xl: "105px" }}
                >
                  <Flex
                    borderRadius={"50%"}
                    opacity={0.2}
                    bg='black'
                    w={{ sm: "78px", lg: "200px", xl: "200px" }}
                    h={{ sm: "78px", lg: "200px", xl: "200px" }}
                  ></Flex>
                </Flex>
                <Flex
                  w={{ sm: "78px", lg: "200px", xl: "200px" }}
                  h={{ sm: "78px", lg: "200px", xl: "200px" }}
                  position={"absolute"}
                  top={{ sm: 4, lg: 4, xl: 6 }}
                  right={{ sm: 16, lg: 24, xl: 28 }}
                  background={'url("../../bigtreasurybalancecircle.png")'}
                  backgroundSize={"cover"}
                  backgroundRepeat='repeat'
                  backgroundPosition={"center"}
                  alignItems='center'
                  justifyContent={"center"}
                >
                  <Flex flexDirection={"column"} alignItems='center'>
                    <Img
                      w={{ sm: "20px", smd: "20px", lg: "50px", xl: "50px" }}
                      src={busdlogo.src}
                    />
                    <Text
                      fontFamily={"manropebd"}
                      fontSize={{ sm: "12px", lg: "20px", xl: "22px" }}
                      color='#F5F5F5'
                    >
                      BUSD
                    </Text>
                    <Text
                      fontFamily={"manrope"}
                      fontSize={{ sm: "12px", lg: "20px", xl: "22px" }}
                      color='#F5F5F5'
                    >
                      $150k
                    </Text>
                  </Flex>
                </Flex>

                <Flex
                  position={"absolute"}
                  filter='blur(4px)'
                  top={{ sm: 16, lg: 28, xl: 32 }}
                  left={{ sm: 8, lg: 10, xl: 10 }}
                >
                  <Flex
                    borderRadius={"50%"}
                    opacity={0.2}
                    bg='black'
                    w={{ sm: "78px", lg: "200px", xl: "200px" }}
                    h={{ sm: "78px", lg: "200px", xl: "200px" }}
                  ></Flex>
                </Flex>
                <Flex
                  w={{ sm: "78px", lg: "200px", xl: "200px" }}
                  h={{ sm: "78px", lg: "200px", xl: "200px" }}
                  // border='1px solid red'
                  position={"absolute"}
                  borderRadius='50%'
                  top={{ sm: 16, lg: 28, xl: 32 }}
                  left={{ sm: 22, lg: 26, xl: 30 }}
                  background={'url("../../bigtreasurybalancecircle.png")'}
                  backgroundSize={"cover"}
                  backgroundRepeat='repeat'
                  backgroundPosition={"center"}
                  justifyContent='center'
                  alignItems={"center"}
                >
                  <Flex flexDirection={"column"} alignItems='center'>
                    <Img
                      w={{ sm: "20px", smd: "20px", lg: "50px", xl: "50px" }}
                      src={usdclogo.src}
                    />
                    <Text
                      fontFamily={"manropebd"}
                      fontSize={{ sm: "12px", lg: "20px", xl: "22px" }}
                      color='#F5F5F5'
                    >
                      USDC
                    </Text>
                    <Text
                      fontFamily={"manrope"}
                      fontSize={{ sm: "12px", lg: "20px", xl: "22px" }}
                      color='#F5F5F5'
                    >
                      $150k
                    </Text>
                  </Flex>
                </Flex>

                <Flex
                  position={"absolute"}
                  filter='blur(4px)'
                  bottom={{ sm: 4, lg: 4, xl: 6 }}
                  left={{ sm: "70px", lg: 28, xl: 32 }}
                >
                  <Flex
                    borderRadius={"50%"}
                    opacity={0.2}
                    bg='black'
                    w={{ sm: "78px", lg: "200px", xl: "200px" }}
                    h={{ sm: "78px", lg: "200px", xl: "200px" }}
                  ></Flex>
                </Flex>
                <Flex
                  w={{ sm: "78px", lg: "200px", xl: "200px" }}
                  h={{ sm: "78px", lg: "200px", xl: "200px" }}
                  position={"absolute"}
                  bottom={{ sm: 4, lg: 4, xl: 6 }}
                  left={{ sm: 16, lg: 24, xl: 28 }}
                  background={'url("../../bigtreasurybalancecircle.png")'}
                  backgroundSize={"cover"}
                  backgroundRepeat='repeat'
                  backgroundPosition={"center"}
                  justifyContent='center'
                  alignItems={"center"}
                >
                  <Flex flexDirection={"column"} alignItems='center'>
                    <Img
                      w={{ sm: "20px", smd: "20px", lg: "50px", xl: "50px" }}
                      src={chainzlogo.src}
                    />
                    <Text
                      fontFamily={"manropebd"}
                      fontSize={{ sm: "12px", lg: "20px", xl: "22px" }}
                      color='#F5F5F5'
                    >
                      CHAINZ
                    </Text>
                    <Text
                      fontFamily={"manrope"}
                      fontSize={{ sm: "12px", lg: "20px", xl: "22px" }}
                      color='#F5F5F5'
                    >
                      $150k
                    </Text>
                  </Flex>
                </Flex>

                <Flex
                  position={"absolute"}
                  filter='blur(4px)'
                  bottom={{ sm: 20, lg: 32, xl: 40 }}
                  right={{ sm: 2, lg: 2, xl: 4 }}
                >
                  <Flex
                    borderRadius={"50%"}
                    opacity={0.2}
                    bg='black'
                    w={{ sm: "78px", lg: "200px", xl: "200px" }}
                    h={{ sm: "78px", lg: "200px", xl: "200px" }}
                  ></Flex>
                </Flex>
                <Flex
                  w={{ sm: "78px", lg: "200px", xl: "200px" }}
                  h={{ sm: "78px", lg: "200px", xl: "200px" }}
                  position={"absolute"}
                  bottom={{ sm: 20, lg: 32, xl: 40 }}
                  right={{ sm: 4, lg: 4, xl: 6 }}
                  background={'url("../../bigtreasurybalancecircle.png")'}
                  backgroundSize={"cover"}
                  backgroundRepeat='repeat'
                  backgroundPosition={"center"}
                  justifyContent='center'
                  alignItems={"center"}
                >
                  <Flex flexDirection={"column"} alignItems='center'>
                    <Img
                      w={{ sm: "20px", smd: "20px", lg: "50px", xl: "50px" }}
                      src={usdtlogo.src}
                    />
                    <Text
                      fontFamily={"manropebd"}
                      fontSize={{ sm: "12px", lg: "20px", xl: "22px" }}
                      color='#F5F5F5'
                    >
                      USDT
                    </Text>
                    <Text
                      fontFamily={"manrope"}
                      fontSize={{ sm: "12px", lg: "20px", xl: "22px" }}
                      color='#F5F5F5'
                    >
                      $150k
                    </Text>
                  </Flex>
                </Flex>
              </Flex>

              <Flex flexDirection={"column"} pt={{ sm: 32 }}>
                <Text
                  textAlign={{
                    sm: "center",
                    smd: "center",
                    lg: "unset",
                    xl: "unset",
                  }}
                  color='white'
                  fontFamily={"grotesk"}
                  fontSize={{ sm: "50px", lg: "100px", xl: "100px" }}
                  lineHeight={"0.8"}
                >
                  Treasury
                  <br />
                  Balance
                </Text>
                {isMobileDevice ? (
                  <Text
                    mt={6}
                    color='white'
                    fontFamily={"manrope"}
                    fontSize={{ sm: "16px", lg: "24px", xl: "24px" }}
                    textAlign='center'
                  >
                    Multichainz has a robust ecosystem <br /> treasury reserve{" "}
                    composed by foundation <br /> tokens and protocol fees and
                    interests.
                  </Text>
                ) : (
                  <Text
                    mt={6}
                    color='white'
                    fontFamily={"manrope"}
                    fontSize={{ sm: "16px", lg: "24px", xl: "24px" }}
                  >
                    Multichainz has a robust <br /> ecosystem treasury reserve{" "}
                    <br /> composed by foundation tokens <br /> and protocol
                    fees and interests.
                  </Text>
                )}
              </Flex>
            </Flex>
          </Flex>
          <Flex
            background={
              isMobileDevice
                ? 'url("../../landing/ecosystempartnersmobilebg.webp")'
                : 'url("../../ecosystempartnerhero.png")'
            }
            backgroundSize={"cover"}
            backgroundRepeat='repeat'
            backgroundPosition={"center"}
            // zIndex={1}
            height={{ sm: "1000px", smd: "1000px", lg: "1200px", xl: "1300px" }}
            w='100%'
            mt={-72}
            flexDirection='column'
            position={"relative"}
          >
            <Flex
              h='100%'
              pt={{ sm: 60, smd: 10, lg: 40, xl: 40 }}
              alignItems={"center"}
              justifyContent={{
                sm: "center",
                smd: "center",
                md: "space-around",
                lg: "space-around",
                xl: "space-around",
              }}
              gap={{ sm: 10, smd: 20, md: 0, lg: 0, xl: 0 }}
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
                  fontSize={{
                    sm: "50px",
                    smd: "50px",
                    md: "80px",
                    lg: "100px",
                    xl: "100px",
                  }}
                  fontFamily={"grotesk"}
                  lineHeight='0.8'
                  mb={8}
                >
                  Ecosystem <br /> Integration <br /> Partners
                </Text>
                <Flex justifyContent={"center"}>
                  <Img
                    w={{ sm: "250px", smd: "250px", lg: "450px", xl: "450px" }}
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
                      smd: "14px",
                      md: "16px",
                      lg: "18px",
                      xl: "18px",
                    }}
                    fontFamily='manropebd'
                    bgColor={"white"}
                    color='black'
                    px={{ sm: 8, smd: 8, md: 12, lg: 14, xl: 14 }}
                    py={{ sm: 4, smd: 4, md: 4, lg: 4, xl: 4 }}
                  >
                    <Text>Powered by</Text>
                  </Flex>
                </Flex>

                <Img
                  w={{ sm: "310px", smd: "320px", lg: "640px", xl: "640px" }}
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
