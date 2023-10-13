import Navbar from "@/components/Landing/Navbar";
import { Box, Button, Flex, Img, Text } from "@chakra-ui/react";
import Head from "next/head";
import bigcross from "../../assets/3d/landing/bigcross.webp";
import mediumcross from "../../assets/3d/landing/mediumcross.webp";
import smallcross from "../../assets/3d/landing/smallcross.webp";
import sphereholograph from "../../assets/3d/landing/sphereholograph.webp";
import springholograph from "../../assets/3d/landing/springholograph.webp";
import Marquee from "react-fast-marquee";
import coinpic from "../../assets/coinspic.png";

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
import LendingInfo from "@/components/Landing/LandingInfo";
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

export default function Lending() {
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
      <Text mt={4} fontFamily={"manrope"} fontSize='24px' lineHeight={"1.3"}>
        Unlocking new horizons,
        <br /> Multichainz empowers NFT lending <br /> with custom tools,
        benefiting both <br /> borrowers and lenders.
      </Text>
    ),
    cards: [
      {
        img: nftliquidityimage,
        title: (
          <Text fontFamily={"manrope"} fontSize='32px'>
            NFT Lending
          </Text>
        ),
        subText: (
          <Text fontSize={"18px"} fontFamily='manrope'>
            Access permissionless liquidity across multiple blockchains for your
            fund, startup, real estate or other financial needs
          </Text>
        ),
      },
      {
        img: collateralimage,
        title: (
          <Text fontFamily={"manrope"} fontSize='32px'>
            Collateral Boost
          </Text>
        ),
        subText: (
          <Text fontSize={"18px"} fontFamily='manrope'>
            Lend any tokenized asset to verified counter-parties to support
            their real-life causes and initiatives
          </Text>
        ),
      },
      {
        img: empowerimage,
        title: (
          <Text fontFamily={"manrope"} fontSize='32px'>
            NFT Empower
          </Text>
        ),
        subText: (
          <Text fontSize={"18px"} fontFamily='manrope'>
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
          <Text fontFamily={"manrope"} fontSize='32px'>
            For Borrowers
          </Text>
        ),
        subText: (
          <Text fontSize={"18px"} fontFamily='manrope'>
            Access permissionless liquidity across multiple blockchains for your
            fund, startup, real estate or other financial needs
          </Text>
        ),
      },
      {
        img: lendersimage,
        title: (
          <Text fontFamily={"manrope"} fontSize='32px'>
            For Lenders
          </Text>
        ),
        subText: (
          <Text fontSize={"18px"} fontFamily='manrope'>
            Lend any tokenized asset to verified counter-parties to support
            their real-life causes and initiatives
          </Text>
        ),
      },
      {
        img: institutionsimage,
        title: (
          <Text fontFamily={"manrope"} fontSize='32px'>
            NFT Empower
          </Text>
        ),
        subText: (
          <Text fontSize={"18px"} fontFamily='manrope'>
            Borrow or lend liquid tokenized assets with institutional- grade
            security to meet your company financial needs and goals
          </Text>
        ),
      },
    ],
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
        <Flex
          position={"relative"}
          border='1px solid red'
          flexDirection={"column"}
        >
          <Flex
            w='100%'
            background={'url("../../hero.png")'}
            backgroundSize={"cover"}
            backgroundRepeat='repeat'
            backgroundPosition={"center"}
            flexDirection='column'
            height={{ lg: "1100px", xl: "1400px" }}
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
              <Img w={{ lg: "340px", xl: "380px" }} src={sphereholograph.src} />
            </Flex>

            <Flex position={"absolute"} right={20} top={"45%"}>
              <Img src={bigcross.src} />
            </Flex>

            <Flex position={"absolute"} left={"30%"} top={"80%"}>
              <Img src={mediumcross.src} />
            </Flex>

            <Flex position={"absolute"} left={"10%"} top={"10%"}>
              <Img src={smallcross.src} />
            </Flex>

            <Flex position={"absolute"} left={0} top={60}>
              <Img w={{ lg: "380px", xl: "580px" }} src={springholograph.src} />
            </Flex>

            <Flex
              pt={{ lg: 20, xl: 28 }}
              flexDirection={"column"}
              alignItems='center'
            >
              <Text
                color='white'
                fontFamily={"grotesk"}
                fontSize={{ lg: "100px", xl: "140px" }}
                textAlign={"center"}
                lineHeight='1'
              >
                MULTICHAINZ <br /> PROTOCOL
              </Text>
              <Text
                color='white'
                textAlign={"center"}
                fontFamily={"manrope"}
                fontWeight={"400"}
                fontSize={{ lg: "28px", xl: "36px" }}
                lineHeight={"1.2"}
                py={10}
              >
                Lend, borrow, and stake cryptocurrencies,
                <br /> NFTs, and tokenized real-world assets across <br />{" "}
                multiple blockchain networks
              </Text>
              <Button
                color='rgba(91, 71, 239, 1)'
                fontSize={{ lg: "24px", xl: "28px" }}
                w={{ lg: "160px", xl: "200px" }}
                h={{ lg: "62px", xl: "70px" }}
                borderRadius={"44px"}
              >
                Get started
              </Button>
            </Flex>

            <Marquee>
              <Text
                mt={{ lg: 20, xl: 40 }}
                fontSize={{ lg: "100px", xl: "120px" }}
                color='white'
              >
                {" "}
                NFT/RWA Lending | Cross-chain infrastructure | Institutional
                Compliance DAO Governance |{" "}
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
            height={{ lg: "900px", xl: "1200px" }}
            border='1px solid blue'
            w='100%'
            mt={-60}
            // mt={"1170px"}
            zIndex={1}
          >
            <Flex
              flexDirection={"column"}
              w='100%'
              pt={20}
              justifyContent='center'
            >
              <Text
                textAlign={"center"}
                fontFamily='grotesklight'
                fontSize={{ lg: "40px", xl: "60px" }}
                lineHeight='1'
                color='rgba(245, 245, 245, 1)'
              >
                $20m locked in collateral <br /> to back the loans
              </Text>

              <Flex justifyContent={"center"} mt={10}>
                <Flex
                  mr={2}
                  background={'url("../../coinpicbg.png")'}
                  backgroundSize={"cover"}
                  backgroundRepeat='repeat'
                  backgroundPosition={"center"}
                  h={{ lg: "408px", xl: "468px" }}
                  w={{ lg: "320px", xl: "400px" }}
                  borderRadius={"12px"}
                  position='relative'
                  justifyContent={"center"}
                >
                  <Flex position={"absolute"} top={-5} flexDirection='column'>
                    <Img w={{ lg: "220px", xl: "260px" }} src={coinpic.src} />

                    <Text
                      mt={6}
                      color='white'
                      textAlign={"center"}
                      fontSize={"40px"}
                      fontFamily='grotesklight'
                    >
                      $5 Million+
                    </Text>
                    <Text
                      textAlign={"center"}
                      color='white'
                      fontSize={"20px"}
                      fontFamily='grotesklight'
                    >
                      Processed Loans
                    </Text>
                  </Flex>
                </Flex>
                <Flex flexDirection={"column"}>
                  <Flex
                    borderRadius={"12px"}
                    h={{ lg: "200px", xl: "230px" }}
                    w={{ lg: "450px", xl: "560px" }}
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
                        w={{ lg: "160px", xl: "180px" }}
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
                    h={{ lg: "200px", xl: "230px" }}
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
                      w='100%'
                      h='100%'
                    >
                      <Img
                        w={{ lg: "180px", xl: "200px" }}
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
            background={'url("../../explorehero.png")'}
            backgroundSize={"cover"}
            backgroundRepeat='repeat'
            backgroundPosition={"center"}
            height='1170px'
            w='100%'
            mt={-24}
            // mt={"2480px"}
            zIndex={4}
            position='relative'
          >
            <Flex alignItems={"center"} justifyContent='center' w='100%'>
              <Flex flexDirection={"column"} alignItems='center' mr={10}>
                <Text
                  fontSize={{ lg: "80px", xl: "100px" }}
                  lineHeight='1'
                  textAlign={"center"}
                  fontFamily={"grotesk"}
                >
                  Explore <br /> MultichainZ
                </Text>
                <Flex alignItems={"center"} mt={6}>
                  <Button
                    fontFamily={"manrope"}
                    h='60px'
                    w='160px'
                    borderRadius={"50px"}
                    mr={4}
                  >
                    Get started
                  </Button>
                  <Text
                    lineHeight={"1.2"}
                    fontFamily={"manrope"}
                    fontSize='32px'
                  >
                    Community Pools
                    <br />
                    across Multiple Chains
                  </Text>
                </Flex>
              </Flex>

              <Flex flexDirection={"column"}>
                <Flex>
                  <Flex
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
                  </Flex>
                </Flex>
                <Flex mt={4}>
                  <Flex
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
                  </Flex>
                </Flex>
                <Flex mt={4}>
                  <Flex
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
                  </Flex>
                </Flex>
              </Flex>
            </Flex>

            <Flex position={"absolute"} bottom={-40}>
              <Img w='240px' src={holographicstring.src} />
            </Flex>

            <Flex position={"absolute"} bottom={{ lg: 0, xl: -28 }} right={0}>
              <Img w={{ lg: "200px", xl: "400px" }} src={holographic3d.src} />
            </Flex>
          </Flex>

          <Flex
            // position={"absolute"}

            background={'url("../../enablelendinghero.png")'}
            backgroundSize={"cover"}
            backgroundRepeat='repeat'
            backgroundPosition={"center"}
            height='1470px'
            border='1px solid blue'
            w='100%'
            mt={-64}
            // mt={"3400px"}
            zIndex={3}
          >
            <Flex
              alignItems={"center"}
              //   justifyContent='flex-start'
              //   pl={60}
              w='100%'
            >
              <Flex border='1px solid blue' w='60%' justifyContent={"center"}>
                <Flex flexDirection={"column"} alignItems='center'>
                  <Text
                    fontSize={{ lg: "80px", xl: "100px" }}
                    lineHeight='1'
                    textAlign={"center"}
                    fontFamily={"grotesk"}
                    color='white'
                  >
                    Enabling <br /> Institutional <br /> Lending
                  </Text>
                  <Flex alignItems={"center"} mt={6}>
                    <Button
                      fontFamily={"manrope"}
                      h='60px'
                      w='160px'
                      borderRadius={"50px"}
                      mr={4}
                    >
                      Get started
                    </Button>
                    <Text
                      lineHeight={"1.2"}
                      fontFamily={"manrope"}
                      fontSize='32px'
                      color='white'
                    >
                      Institutional features to <br /> enhance on-chain lending{" "}
                      <br /> security and trust
                    </Text>
                  </Flex>
                </Flex>
              </Flex>
              {/* todo: manrope light */}

              <Flex w='40%' flexDirection={"column"}>
                <Flex mb={8} pr={10} justifyContent={"flex-end"}>
                  <Flex
                    cursor={"pointer"}
                    bgColor={"#F5F5F5"}
                    p={2}
                    borderRadius='6px'
                    mr={4}
                    onClick={() => {
                      // setcontrolClicked(true);
                      // handleScrollBack();
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
                    }}
                  >
                    <ChevronRightIcon />
                  </Flex>
                </Flex>
                <Flex overflowX='scroll'>
                  <Flex
                    minW='379px'
                    h='327px'
                    background={'url("../../landing/enablingsection1.png")'}
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
                        Multichainz has on-chain Know-Your-Customer (KYC)
                        verification for users
                      </Text>

                      <Flex color='white' alignItems={"center"}>
                        <Text fontFamily={"manrope"}>Read more</Text>
                        <ChevronRightIcon />
                      </Flex>
                    </Flex>
                  </Flex>
                  <Flex
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
                  </Flex>
                  <Flex
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
            height='4400px'
            w='100%'
            mt={-48}
            flexDirection='column'
            position={"relative"}
            zIndex={2}
          >
            <LendingInfo sectionInfo={nftLendingInfo} />
            <LendingInfo sectionInfo={rwaInfo} />
            <Flex position={"absolute"} top='70%'>
              <Img w='540px' src={holographiccircle.src} />
            </Flex>

            <Flex pt={"500px"} justifyContent='center' gap={6}>
              <Flex
                flexDirection={"column"}
                color='white'
                alignItems={"center"}
              >
                <Text
                  textAlign={"center"}
                  fontSize='100px'
                  lineHeight={"0.8"}
                  fontFamily='grotesk'
                >
                  Community <br /> Led DAO
                </Text>
                <Text my={8} fontFamily={"manrope"} fontSize='24px'>
                  Propose protocol suggestions and <br /> improvements within
                  seconds <br />
                  through our community forum.
                </Text>
                <Button
                  color='black'
                  bgColor={"rgba(245, 245, 245, 1)"}
                  fontSize='manrope'
                  py={8}
                  borderRadius='32px'
                >
                  Governance Forum
                </Button>
              </Flex>

              <Flex gap={4}>
                <Flex
                  background={'url("../../engagebg.png")'}
                  backgroundSize={"cover"}
                  backgroundRepeat='repeat'
                  backgroundPosition={"center"}
                  h='420px'
                  w='300px'
                  flexDirection={"column"}
                  color='white'
                  gap={4}
                  p={6}
                >
                  <Img src={engagehand.src} />
                  <Text fontSize={"32px"} fontFamily='manrope'>
                    Engage
                  </Text>
                  <Text fontSize={"18px"} fontFamily='manrope'>
                    Learn more about initiatives proposed by community members
                  </Text>
                </Flex>
                <Flex
                  background={'url("../../proposebg.png")'}
                  backgroundSize={"cover"}
                  backgroundRepeat='repeat'
                  backgroundPosition={"center"}
                  h='420px'
                  w='300px'
                  flexDirection={"column"}
                  color='white'
                  gap={4}
                  p={6}
                >
                  <Img src={proposehand.src} />
                  <Text fontSize={"32px"} fontFamily='manrope'>
                    Propose
                  </Text>
                  <Text fontSize={"18px"} fontFamily='manrope'>
                    Share your suggestions or improvements for the protocol
                  </Text>
                </Flex>
                <Flex
                  background={'url("../../votebg.png")'}
                  backgroundSize={"cover"}
                  backgroundRepeat='repeat'
                  backgroundPosition={"center"}
                  h='420px'
                  w='300px'
                  flexDirection={"column"}
                  color='white'
                  gap={4}
                  p={6}
                >
                  <Img src={votehand.src} />
                  <Text fontSize={"32px"} fontFamily='manrope'>
                    Vote
                  </Text>
                  <Text fontSize={"18px"} fontFamily='manrope'>
                    Support proposals that you agree with
                  </Text>
                </Flex>
              </Flex>
            </Flex>
            <Flex position={"absolute"} top='95%'>
              <Img w='2400px' src={holographicdivider.src} />
            </Flex>
          </Flex>
          <Flex
            background={'url("../../treasurybalancehero.png")'}
            backgroundSize={"cover"}
            backgroundRepeat='repeat'
            backgroundPosition={"center"}
            zIndex={1}
            height='1690px'
            w='100%'
            mt={-48}
            flexDirection='column'
            position={"relative"}
          >
            <Flex alignItems={"center"} h='100%' justifyContent='space-evenly'>
              <Flex position={"relative"}>
                <Img
                  src={treasurybalancegraph.src}
                  w={{ lg: "700px", xl: "800px" }}
                />
                <Flex
                  w={{ lg: "280px", xl: "320px" }}
                  h={{ lg: "280px", xl: "320px" }}
                  position={"absolute"}
                  top='30%'
                  // left={10}
                  right={"30%"}
                  background={'url("../../bigtreasurybalancecircle.png")'}
                  backgroundSize={"cover"}
                  backgroundRepeat='repeat'
                  backgroundPosition={"center"}
                ></Flex>

                <Flex
                  w='200px'
                  h='200px'
                  position={"absolute"}
                  top={{ lg: 4, xl: 6 }}
                  // top='30%'
                  // left={10}
                  right={{ lg: 24, xl: 28 }}
                  background={'url("../../bigtreasurybalancecircle.png")'}
                  backgroundSize={"cover"}
                  backgroundRepeat='repeat'
                  backgroundPosition={"center"}
                ></Flex>

                <Flex
                  w='200px'
                  h='200px'
                  position={"absolute"}
                  top={{ lg: 28, xl: 32 }}
                  left={{ lg: 26, xl: 30 }}
                  background={'url("../../bigtreasurybalancecircle.png")'}
                  backgroundSize={"cover"}
                  backgroundRepeat='repeat'
                  backgroundPosition={"center"}
                ></Flex>

                <Flex
                  w='200px'
                  h='200px'
                  position={"absolute"}
                  bottom={{ lg: 4, xl: 6 }}
                  left={{ lg: 24, xl: 28 }}
                  background={'url("../../bigtreasurybalancecircle.png")'}
                  backgroundSize={"cover"}
                  backgroundRepeat='repeat'
                  backgroundPosition={"center"}
                ></Flex>
                <Flex
                  w='200px'
                  h='200px'
                  position={"absolute"}
                  bottom={{ lg: 32, xl: 40 }}
                  right={{ lg: 4, xl: 6 }}
                  background={'url("../../bigtreasurybalancecircle.png")'}
                  backgroundSize={"cover"}
                  backgroundRepeat='repeat'
                  backgroundPosition={"center"}
                ></Flex>
              </Flex>

              <Flex flexDirection={"column"}>
                <Text
                  color='white'
                  fontFamily={"grotesk"}
                  fontSize='100px'
                  lineHeight={"0.8"}
                >
                  Treasury
                  <br />
                  Balance
                </Text>
                <Text
                  mt={6}
                  color='white'
                  fontFamily={"manrope"}
                  fontSize='24px'
                >
                  Multichainz has a robust <br /> ecosystem treasury reserve{" "}
                  <br /> composed by foundation tokens <br /> and protocol fees
                  and interests.
                </Text>
              </Flex>
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
              justifyContent='space-around'
            >
              <Flex flexDirection={"column"}>
                <Text
                  textAlign={"center"}
                  fontSize='100px'
                  fontFamily={"grotesk"}
                  lineHeight='0.8'
                  mb={8}
                >
                  Ecosystem <br /> Integration <br /> Partners
                </Text>
                <Flex justifyContent={"center"}>
                  <Img w='450px' src={partners.src} />
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
                    px={14}
                    py={4}
                  >
                    <Text>Powered by</Text>
                  </Flex>
                </Flex>

                <Img w='640px' src={ecosystempartners.src} />
              </Flex>
            </Flex>
          </Flex>
          <Footer />
        </Flex>
      </Box>
    </>
  );
}
