import Head from "next/head";
import { Box, Flex, Text, Img, Button, useMediaQuery } from "@chakra-ui/react";
import Navbar from "@/components/Landing/Navbar";
import lsdbigcross3d from "../../assets/3d/lsd/lsdbigcross3d.png";
import lsdcircles3d from "../../assets/3d/lsd/lsdcircles3d.png";
import lsdheromobilecircles from "../../assets/3d/lsd/lsdheromobilecircles.png";
import lsdmediumcross3d from "../../assets/3d/lsd/lsdmediumcross3d.png";
import lsdsmallcross3d from "../../assets/3d/lsd/lsdsmallcross3d.png";
import lsdactivestakerslogo from "../../assets/lsdactivestakerslogo.png";
import lsddao3dmobile from "../../assets/3d/lsd/lsddao3dmobile.png";

import lsdrewardpaidlogo from "../../assets/lsdrewardpaidlogo.png";

import lsdtvllogo from "../../assets/lsdtvllogo.png";
import lsdwhycircles3d from "../../assets/3d/lsd/lsdwhycircles3d.png";
import ethereum from "../../assets/svg/ethereum.svg";
import binance from "../../assets/svg/binance.svg";
import polygon from "../../assets/svg/polygon.svg";
import arbitrum from "../../assets/svg/arbitrumnormal.svg";
import ChainsCard from "@/components/Lsd/ChainsCard";
import lsdblock3d from "../../assets/3d/lsd/lsdblock3d.png";
import { ChevronLeftIcon, ChevronRightIcon } from "@chakra-ui/icons";
import halborn from "../../assets/halborn.png";
import peckshield from "../../assets/peckshield.png";
import quillhash from "../../assets/quilhash.png";
import lsddao3d from "../../assets/3d/lsd/lsddao3d.png";
import lsdring3d from "../../assets/3d/lsd/lsdring3d.png";
import lsdring3dmobile from "../../assets/3d/lsd/lsdringmobile3d.png";
import lsdstar3d from "../../assets/3d/lsd/lsdstar3d.png";
import lsdtriangle3d from "../../assets/3d/lsd/lsdtriangle3d.png";
import Footer from "@/components/NewFooter";

import { useEffect, useMemo, useState, useRef } from "react";
import { pb } from "@/utils/auth";
import WhyCard from "@/components/Lsd/WhyCard";
// import fs from "fs";

export default function LSD() {
  const [isMobileDevice] = useMediaQuery("(max-width: 559px)");
  //   useEffect(() => {
  //     const load = async () => {
  //       try {
  //         pb.admins.authWithPassword("gcadigwe@gmail.com", "gcsalzkid24");
  //         const data = await pb.collection("testnet_signups").getFullList({
  //           sort: "-created",
  //         });
  //         console.log(data);
  //         let emails = [];
  //         for (let i = 0; i < data.length; i++) {
  //           const address = data[i].email;
  //           emails.push({
  //             emails: address,
  //             walletAddress: data[i].walletAddress,
  //           });
  //         }

  //         // console.log(emails);
  //         const response = await axios.post("/api/hello", {
  //           emails: JSON.stringify(emails),
  //         });
  //         console.log(response);
  //       } catch (err) {
  //         console.log(err);
  //       }
  //     };
  //     load();
  //   }, []);

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
        <title>MultichainZ | LSD</title>
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
                ? 'url("../../lsd/lsdmobilehero.webp")'
                : 'url("../../lsd/lsdherobg.webp")'
            }
            backgroundSize={"cover"}
            backgroundRepeat='repeat'
            backgroundPosition={"center"}
            flexDirection='column'
            height={{
              sm: "700px",
              smd: "900px",
              md: "1000px",
              lg: "1100px",
              xl: "1300px",
            }}
            position='relative'
            zIndex={8}
          >
            <Navbar />

            <Flex
              visibility={{
                sm: "hidden",
                smd: "visible",
                md: "visible",
                lg: "visible",
                xl: "visible",
              }}
              position={"absolute"}
              right={0}
              zIndex={1}
            >
              <Img
                w={{ smd: "380px", md: "400px", lg: "520px", xl: "520px" }}
                src={lsdcircles3d.src}
              />
            </Flex>

            <Flex
              visibility={{
                sm: "visible",
                smd: "hidden",
                md: "hidden",
                lg: "hidden",
                xl: "hidden",
              }}
              position={"absolute"}
              zIndex={1}
              left={0}
              bottom={-20}
            >
              <Img w={"200px"} src={lsdheromobilecircles.src} />
            </Flex>

            <Flex
              position={"absolute"}
              top={{ sm: 28, smd: 48, md: 48, lg: 48, xl: 48 }}
              left={{ sm: 72, smd: 20, md: 20, lg: 20, xl: 20 }}
            >
              <Img src={lsdsmallcross3d.src} />
            </Flex>

            <Flex
              position={"absolute"}
              bottom={{ sm: "80%", smd: 40, md: 40, lg: 40, xl: 40 }}
              //   top={{ sm: 10, smd: 0 }}
              left={isMobileDevice ? 10 : undefined}
            >
              <Img
                w={{
                  sm: "40px",
                  smd: "240px",
                  md: "260px",
                  lg: "490px",
                  xl: "490px",
                }}
                src={lsdbigcross3d.src}
              />
            </Flex>

            <Flex
              position={"absolute"}
              right={{ sm: 4, smd: 82, md: 82, lg: 64, xl: 64 }}
              bottom={{ sm: 40, smd: 42, md: 48, lg: 80, xl: 80 }}
            >
              <Img
                src={lsdmediumcross3d.src}
                w={{
                  sm: "100px",
                  smd: "100px",
                  md: "120px",
                  lg: "160px",
                  xl: "160px",
                }}
              />
            </Flex>

            <Flex
              pt={{ sm: 16, smd: 40, md: 40, lg: 32, xl: 40 }}
              flexDirection={"column"}
              alignItems='center'
              zIndex={2}
            >
              {isMobileDevice ? (
                <Text
                  color='#F5F5F5'
                  fontFamily={"grotesk"}
                  fontSize={{
                    sm: "50px",
                    smd: "80px",
                    md: "80px",
                    lg: "100px",
                    xl: "140px",
                  }}
                  textAlign={"center"}
                  lineHeight='1'
                >
                  LIQUID <br /> STAKING MADE <br /> EFFORTLESS
                </Text>
              ) : (
                <Text
                  color='#F5F5F5'
                  fontFamily={"grotesk"}
                  fontSize={{
                    sm: "50px",
                    smd: "80px",
                    md: "80px",
                    lg: "100px",
                    xl: "140px",
                  }}
                  textAlign={"center"}
                  lineHeight='1'
                >
                  LIQUID STAKING <br /> MADE EFFORTLESS
                </Text>
              )}
              {isMobileDevice ? (
                <Text
                  color='#F5F5F5'
                  textAlign={"center"}
                  fontFamily={"manrope"}
                  fontWeight={"400"}
                  fontSize={{
                    sm: "22px",
                    smd: "20px",
                    md: "22px",
                    lg: "28px",
                    xl: "36px",
                  }}
                  lineHeight={"1.2"}
                  py={10}
                >
                  Revolutionize your Staking <br /> Experience: Unlock Dual
                  Rewards,
                  <br /> Seamless Liquidity, and Endless <br /> Opportunities in
                  the New Era <br /> of Finance!
                </Text>
              ) : (
                <Text
                  color='#F5F5F5'
                  textAlign={"center"}
                  fontFamily={"manrope"}
                  fontWeight={"400"}
                  fontSize={{
                    sm: "20px",
                    smd: "20px",
                    md: "22px",
                    lg: "28px",
                    xl: "36px",
                  }}
                  lineHeight={"1.2"}
                  py={10}
                >
                  Revolutionize your Staking Experience: Unlock <br /> Dual
                  Rewards, Seamless Liquidity, and Endless <br /> Opportunities
                  in the New Era of Finance!
                </Text>
              )}
              <Button
                color='rgba(91, 71, 239, 1)'
                fontSize={{ lg: "20px", xl: "22px" }}
                w={{
                  sm: "128px",
                  smd: "110px",
                  md: "120px",
                  lg: "160px",
                  xl: "200px",
                }}
                h={{
                  sm: "46px",
                  smd: "38px",
                  md: "40px",
                  lg: "62px",
                  xl: "70px",
                }}
                borderRadius={"44px"}
                fontFamily='manropebd'
              >
                Get started
              </Button>
            </Flex>
          </Flex>
          <Flex
            w='100%'
            background={'url("../../lsd/lsdauditingbg.webp")'}
            backgroundSize={"cover"}
            backgroundRepeat='repeat'
            backgroundPosition={"center"}
            flexDirection='column'
            height={{
              sm: "900px",
              smd: "900px",
              md: "900px",
              lg: "1000px",
              xl: "1100px",
            }}
            position='relative'
            zIndex={6}
            mt={{ sm: -20, smd: -40, lg: -40, xl: -40 }}
            justifyContent='center'
          >
            <Flex flexDirection={"column"} mb={isMobileDevice ? 20 : undefined}>
              <Text
                textAlign={"center"}
                fontFamily='grotesklight'
                fontSize={{
                  sm: "26px",
                  smd: "32px",
                  md: "32px",
                  lg: "40px",
                  xl: "60px",
                }}
                lineHeight='1'
                color='rgba(245, 245, 245, 1)'
              >
                MultiChainZ Stake Pool <br /> Live Stats
              </Text>

              <Flex
                flexDirection={{
                  sm: "column",
                  smd: "row",
                  md: "row",
                  lg: "row",
                  xl: "row",
                }}
                justifyContent={"center"}
                alignItems={isMobileDevice ? "center" : undefined}
                mt={{ sm: 10, smd: 20, md: 20, lg: 20, xl: 20 }}
              >
                <Flex
                  mr={2}
                  background={'url("../../coinpicbg.png")'}
                  backgroundSize={"cover"}
                  backgroundRepeat='repeat'
                  backgroundPosition={"center"}
                  h={{
                    sm: "140px",
                    smd: "348px",
                    md: "348px",
                    lg: "408px",
                    xl: "468px",
                  }}
                  w={{
                    sm: "320px",
                    smd: "280px",
                    md: "280px",
                    lg: "320px",
                    xl: "360px",
                  }}
                  borderRadius={"12px"}
                  position='relative'
                  justifyContent={"center"}
                  alignItems='center'
                >
                  <Flex
                    flexDirection={{
                      sm: "row",
                      smd: "column",
                      md: "column",
                      lg: "column",
                      xl: "column",
                    }}
                    alignItems={"center"}
                    w='100%'
                    justifyContent={isMobileDevice ? "space-around" : undefined}
                  >
                    <Img
                      w={{
                        sm: "100px",
                        smd: "160px",
                        md: "160px",
                        lg: "220px",
                        xl: "260px",
                      }}
                      src={lsdtvllogo.src}
                    />

                    <Flex flexDirection={"column"}>
                      <Text
                        mt={6}
                        color='white'
                        textAlign={"center"}
                        fontSize={{
                          sm: "24px",
                          smd: "28px",
                          md: "28px",
                          lg: "40px",
                          xl: "40px",
                        }}
                        fontFamily='grotesklight'
                      >
                        $12,274,217
                      </Text>
                      <Text
                        textAlign={"center"}
                        color='white'
                        fontSize={{
                          sm: "16px",
                          smd: "16px",
                          md: "16px",
                          lg: "20px",
                          xl: "20px",
                        }}
                        fontFamily='manrope'
                      >
                        Total Value Locked
                      </Text>
                    </Flex>
                  </Flex>
                </Flex>
                <Flex
                  flexDirection={"column"}
                  mt={isMobileDevice ? "14px" : undefined}
                >
                  <Flex
                    borderRadius={"12px"}
                    h={{
                      sm: "140px",
                      smd: "170px",
                      md: "170px",
                      lg: "200px",
                      xl: "230px",
                    }}
                    w={{
                      sm: "320px",
                      smd: "400px",
                      md: "400px",
                      lg: "450px",
                      xl: "560px",
                    }}
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
                      top={-5}
                    >
                      <Img
                        w={{
                          sm: "160px",
                          smd: "190px",
                          md: "190px",
                          lg: "200px",
                          xl: "270px",
                        }}
                        src={lsdactivestakerslogo.src}
                      />
                      <Flex
                        flexDirection={"column"}
                        mt={isMobileDevice ? 10 : undefined}
                      >
                        <Text
                          color='white'
                          textAlign={"center"}
                          fontSize={{
                            sm: "24px",
                            smd: "28px",
                            md: "28px",
                            lg: "40px",
                            xl: "40px",
                          }}
                          fontFamily='grotesklight'
                        >
                          20
                        </Text>
                        <Text
                          textAlign={"center"}
                          color='white'
                          fontSize={{
                            sm: "16px",
                            smd: "16px",
                            md: "16px",
                            lg: "20px",
                            xl: "20px",
                          }}
                          fontFamily='manrope'
                        >
                          Active Stakers
                        </Text>
                      </Flex>
                    </Flex>
                  </Flex>
                  <Flex
                    borderRadius={"12px"}
                    mt={isMobileDevice ? "12px" : "8px"}
                    h={{
                      sm: "140px",
                      smd: "170px",
                      md: "170px",
                      lg: "200px",
                      xl: "230px",
                    }}
                    w={{
                      sm: "320px",
                      smd: "400px",
                      md: "400px",
                      lg: "450px",
                      xl: "560px",
                    }}
                    // h={{ lg: "200px", xl: "230px" }}
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
                        w={{
                          sm: "120px",
                          smd: "140px",
                          md: "140px",
                          lg: "180px",
                          xl: "200px",
                        }}
                        src={lsdrewardpaidlogo.src}
                      />
                      <Flex flexDirection={"column"}>
                        <Text
                          color='white'
                          textAlign={"center"}
                          fontSize={{
                            sm: "24px",
                            smd: "28px",
                            md: "28px",
                            lg: "40px",
                            xl: "40px",
                          }}
                          fontFamily='grotesklight'
                        >
                          $122,274,23
                        </Text>
                        <Text
                          textAlign={"center"}
                          color='white'
                          fontSize={{
                            sm: "16px",
                            smd: "16px",
                            md: "16px",
                            lg: "20px",
                            xl: "20px",
                          }}
                          fontFamily='manrope'
                        >
                          Total Rewards Paid
                        </Text>
                      </Flex>
                    </Flex>
                  </Flex>
                </Flex>
              </Flex>
            </Flex>
          </Flex>
          <Flex
            w='100%'
            background={
              isMobileDevice
                ? 'url("../../lsd/lsdinfomobileherobg.webp")'
                : 'url("../../lsd/lsdinfoherobg.webp")'
            }
            backgroundSize={"cover"}
            backgroundRepeat='repeat'
            backgroundPosition={isMobileDevice ? "center" : "top bottom"}
            flexDirection='column'
            height={{
              sm: "1260px",
              smd: "1800px",
              md: "1800px",
              lg: "2000px",
              xl: "2380px",
            }}
            position='relative'
            zIndex={6}
            mt={-40}
          >
            <Flex
              pt={isMobileDevice ? 10 : 40}
              flexDirection={"column"}
              color='#2D2F50'
            >
              <Flex flexDirection={"column"} alignItems='center'>
                {isMobileDevice ? (
                  <Text
                    textAlign={"center"}
                    mt={20}
                    fontFamily={"grotesk"}
                    fontSize={{
                      sm: "40px",
                      smd: "60px",
                      md: "60px",
                      lg: "100px",
                      xl: "120px",
                    }}
                    lineHeight={"0.9"}
                  >
                    Embarking on Your <br /> Liquid Staking <br /> Adventure
                  </Text>
                ) : (
                  <Text
                    textAlign={"center"}
                    mt={20}
                    fontFamily={"grotesk"}
                    fontSize={{
                      smd: "60px",
                      md: "60px",
                      lg: "100px",
                      xl: "120px",
                    }}
                    lineHeight={"0.9"}
                  >
                    Embarking on Your <br /> Liquid Staking <br /> Adventure
                  </Text>
                )}

                <Text
                  mt={8}
                  fontFamily={"manrope"}
                  fontSize={{
                    sm: "18px",
                    smd: "26px",
                    md: "26px",
                    lg: "32px",
                    xl: "32px",
                  }}
                >
                  It’s as easy as it sounds
                </Text>
              </Flex>
            </Flex>
            <Flex position={"relative"}>
              <Flex
                position={"absolute"}
                display={isMobileDevice ? "none" : undefined}
                right={0}
              >
                <Img
                  src={lsdwhycircles3d.src}
                  w={{ smd: "320px", md: "400px", lg: "600px", xl: "800px" }}
                />
              </Flex>
              <Flex
                flexDirection={"column"}
                gap={{ sm: 8, smd: 16, md: 16, lg: 20, xl: 20 }}
                mt={20}
                pl={{ sm: 4, smd: 16, md: 24, lg: 40, xl: 80 }}
                pr={isMobileDevice ? 6 : undefined}
              >
                <Flex gap={4}>
                  <Flex
                    mt={1}
                    p={isMobileDevice ? 4 : undefined}
                    w={{
                      sm: "28px",
                      smd: "28px",
                      md: "30px",
                      lg: "40px",
                      xl: "40px",
                    }}
                    h={{
                      sm: "28px",
                      smd: "28px",
                      md: "30px",
                      lg: "40px",
                      xl: "40px",
                    }}
                    right={{ lg: 24, xl: 28 }}
                    background={'url("../../bigtreasurybalancecircle.png")'}
                    backgroundSize={"cover"}
                    backgroundRepeat='repeat'
                    backgroundPosition={"center"}
                    justifyContent='center'
                    alignItems={"center"}
                    color='white'
                    fontFamily={"manropebd"}
                    fontSize={{
                      sm: "14px",
                      smd: "16px",
                      md: "18px",
                      lg: "24px",
                      xl: "24px",
                    }}
                  >
                    1
                  </Flex>

                  <Flex
                    flexDirection={"column"}
                    mb={4}
                    gap={isMobileDevice ? 2 : 6}
                  >
                    <Text
                      fontFamily={"manropebd"}
                      fontSize={{
                        sm: "22px",
                        smd: "24px",
                        md: "26px",
                        lg: "32px",
                        xl: "32px",
                      }}
                    >
                      Deposit tokens
                    </Text>

                    {isMobileDevice ? (
                      <Text
                        fontFamily={"manrope"}
                        fontSize={{
                          sm: "16px",
                          smd: "20px",
                          md: "22px",
                          lg: "26px",
                          xl: "26px",
                        }}
                      >
                        Kickstart your journey by selecting your desired assets
                        for staking, and entrusting them to our fortified,
                        decentralized protocol.
                      </Text>
                    ) : (
                      <Text
                        fontFamily={"manrope"}
                        fontSize={{
                          sm: "18px",
                          smd: "20px",
                          md: "22px",
                          lg: "26px",
                          xl: "26px",
                        }}
                      >
                        Kickstart your journey by selecting your <br /> desired
                        assets for staking, and entrusting <br /> them to our
                        fortified, decentralized protocol.
                      </Text>
                    )}
                  </Flex>
                </Flex>

                <Flex gap={4}>
                  <Flex
                    mt={1}
                    p={isMobileDevice ? 4 : undefined}
                    w={{
                      sm: "28px",
                      smd: "28px",
                      md: "30px",
                      lg: "40px",
                      xl: "40px",
                    }}
                    h={{
                      sm: "28px",
                      smd: "28px",
                      md: "30px",
                      lg: "40px",
                      xl: "40px",
                    }}
                    right={{ lg: 24, xl: 28 }}
                    background={'url("../../bigtreasurybalancecircle.png")'}
                    backgroundSize={"cover"}
                    backgroundRepeat='repeat'
                    backgroundPosition={"center"}
                    justifyContent='center'
                    alignItems={"center"}
                    color='white'
                    fontFamily={"manropebd"}
                    fontSize={{
                      sm: "14px",
                      smd: "16px",
                      md: "18px",
                      lg: "24px",
                      xl: "24px",
                    }}
                  >
                    2
                  </Flex>

                  <Flex
                    flexDirection={"column"}
                    mb={4}
                    gap={isMobileDevice ? 2 : 6}
                  >
                    <Text
                      fontFamily={"manropebd"}
                      fontSize={{
                        sm: "22px",
                        smd: "24px",
                        md: "26px",
                        lg: "32px",
                        xl: "32px",
                      }}
                    >
                      Acquire Representative Tokens
                    </Text>

                    {isMobileDevice ? (
                      <Text
                        fontFamily={"manrope"}
                        fontSize={{
                          sm: "16px",
                          smd: "20px",
                          md: "22px",
                          lg: "26px",
                          xl: "26px",
                        }}
                      >
                        As you stake, you will be rewarded with liquid tokens
                        mirroring your staked value, a testament to your smart
                        investment.
                      </Text>
                    ) : (
                      <Text
                        fontFamily={"manrope"}
                        fontSize={{
                          smd: "20px",
                          md: "22px",
                          lg: "26px",
                          xl: "26px",
                        }}
                      >
                        As you stake, you will be rewarded with <br /> liquid
                        tokens mirroring your staked value, <br /> a testament
                        to your smart investment.
                      </Text>
                    )}
                  </Flex>
                </Flex>

                <Flex gap={4}>
                  <Flex
                    mt={1}
                    p={isMobileDevice ? 4 : undefined}
                    w={{
                      sm: "28px",
                      smd: "28px",
                      md: "30px",
                      lg: "40px",
                      xl: "40px",
                    }}
                    h={{
                      sm: "28px",
                      smd: "28px",
                      md: "30px",
                      lg: "40px",
                      xl: "40px",
                    }}
                    right={{ lg: 24, xl: 28 }}
                    background={'url("../../bigtreasurybalancecircle.png")'}
                    backgroundSize={"cover"}
                    backgroundRepeat='repeat'
                    backgroundPosition={"center"}
                    justifyContent='center'
                    alignItems={"center"}
                    color='white'
                    fontFamily={"manropebd"}
                    fontSize={{
                      sm: "14px",
                      smd: "16px",
                      md: "18px",
                      lg: "24px",
                      xl: "24px",
                    }}
                  >
                    3
                  </Flex>

                  <Flex
                    flexDirection={"column"}
                    mb={4}
                    gap={isMobileDevice ? 2 : 6}
                  >
                    <Text
                      fontFamily={"manropebd"}
                      fontSize={{
                        sm: "22px",
                        smd: "24px",
                        md: "26px",
                        lg: "32px",
                        xl: "32px",
                      }}
                    >
                      Harness Your Liquid Tokens
                    </Text>

                    {isMobileDevice ? (
                      <Text
                        fontFamily={"manrope"}
                        fontSize={{
                          sm: "16px",
                          smd: "20px",
                          md: "22px",
                          lg: "26px",
                          xl: "26px",
                        }}
                      >
                        The world of DeFi awaits. Employ your liquid tokens
                        across its vast spectrum or trade to your heart’s
                        content.
                      </Text>
                    ) : (
                      <Text
                        fontFamily={"manrope"}
                        fontSize={{
                          smd: "20px",
                          md: "22px",
                          lg: "26px",
                          xl: "26px",
                        }}
                      >
                        The world of DeFi awaits. Employ <br /> your liquid
                        tokens across its vast spectrum <br /> or trade to your
                        heart’s content.
                      </Text>
                    )}
                  </Flex>
                </Flex>

                <Flex gap={4}>
                  <Flex
                    mt={1}
                    p={isMobileDevice ? 4 : undefined}
                    w={{
                      sm: "28px",
                      smd: "28px",
                      md: "30px",
                      lg: "40px",
                      xl: "40px",
                    }}
                    h={{
                      sm: "28px",
                      smd: "28px",
                      md: "30px",
                      lg: "40px",
                      xl: "40px",
                    }}
                    right={{ lg: 24, xl: 28 }}
                    background={'url("../../bigtreasurybalancecircle.png")'}
                    backgroundSize={"cover"}
                    backgroundRepeat='repeat'
                    backgroundPosition={"center"}
                    justifyContent='center'
                    alignItems={"center"}
                    color='white'
                    fontFamily={"manropebd"}
                    fontSize={{
                      sm: "14px",
                      smd: "16px",
                      md: "18px",
                      lg: "24px",
                      xl: "24px",
                    }}
                  >
                    4
                  </Flex>

                  <Flex
                    flexDirection={"column"}
                    mb={4}
                    gap={isMobileDevice ? 2 : 6}
                  >
                    <Text
                      fontFamily={"manropebd"}
                      fontSize={{
                        sm: "22px",
                        smd: "24px",
                        md: "26px",
                        lg: "32px",
                        xl: "32px",
                      }}
                    >
                      Reap Staking Dividends
                    </Text>

                    {isMobileDevice ? (
                      <Text
                        fontFamily={"manrope"}
                        fontSize={{
                          sm: "16px",
                          smd: "20px",
                          md: "22px",
                          lg: "26px",
                          xl: "26px",
                        }}
                      >
                        The rewards of traditional staking, but better.
                        Accumulate your rewards and, when you’re set, claim them
                        straight from our intuitive platform.
                      </Text>
                    ) : (
                      <Text
                        fontFamily={"manrope"}
                        fontSize={{
                          smd: "20px",
                          md: "22px",
                          lg: "26px",
                          xl: "26px",
                        }}
                      >
                        The rewards of traditional staking, but better. <br />{" "}
                        Accumulate your rewards and, when you’re set, <br />{" "}
                        claim them straight from our intuitive platform.
                      </Text>
                    )}

                    <Flex display={isMobileDevice ? "none" : undefined}>
                      <Button
                        fontSize={{ sm: "18px", lg: "20px", xl: "22px" }}
                        w={{
                          sm: "140px",
                          smd: "120px",
                          md: "140px",
                          lg: "160px",
                          xl: "200px",
                        }}
                        h={{
                          sm: "50px",
                          smd: "50px",
                          md: "52px",
                          lg: "62px",
                          xl: "70px",
                        }}
                        borderRadius={"44px"}
                        fontFamily='manropebd'
                      >
                        Stake
                      </Button>
                    </Flex>
                  </Flex>
                </Flex>
              </Flex>
            </Flex>
            <Flex
              justifyContent={isMobileDevice ? "center" : undefined}
              //   mt={isMobileDevice ? 10 : undefined}
              display={!isMobileDevice ? "none" : undefined}
            >
              <Button
                fontSize={{ sm: "18px", lg: "20px", xl: "22px" }}
                w={{
                  sm: "140px",
                  smd: "120px",
                  md: "140px",
                  lg: "160px",
                  xl: "200px",
                }}
                h={{
                  sm: "50px",
                  smd: "50px",
                  md: "52px",
                  lg: "62px",
                  xl: "70px",
                }}
                borderRadius={"44px"}
                fontFamily='manropebd'
              >
                Stake
              </Button>
            </Flex>

            <Flex
              position={"absolute"}
              bottom={isMobileDevice ? -20 : -40}
              //   top={isMobileDevice ? 20 : undefined}
            >
              <Img
                w={{
                  sm: "140px",
                  smd: "240px",
                  md: "260px",
                  lg: "280px",
                  xl: "320px",
                }}
                src={isMobileDevice ? lsdring3dmobile.src : lsdring3d.src}
              />
            </Flex>
          </Flex>
          <Flex
            background={
              isMobileDevice
                ? 'url("../../lsd/supportednetworkheromobilebg.webp") '
                : 'url("../../lsd/lsdsupportednetworkherobg.webp")'
            }
            backgroundSize={"cover"}
            backgroundRepeat='repeat'
            backgroundPosition={"bottom"}
            flexDirection='column'
            height={{
              sm: "1300px",
              smd: "1200px",
              md: "1000px",
              lg: "1200px",
              xl: "1300px",
            }}
            position='relative'
            mt={isMobileDevice ? -60 : -40}
            justifyContent='center'
            zIndex={5}
          >
            <Flex
              alignItems={{
                sm: "center",
                smd: "center",
                md: "unset",
                lg: "unset",
                xl: "unset",
              }}
              flexDirection={{
                sm: "column",
                smd: "column",
                md: "row",
                lg: "row",
                xl: "row",
              }}
              justifyContent={"space-evenly"}
              gap={{ sm: 6, smd: 6, md: 0, lg: 0, xl: 0 }}
            >
              <Flex flexDirection={"column"} color='#F5F5F5'>
                <Text
                  textAlign={"center"}
                  fontFamily={"grotesk"}
                  fontSize={{
                    sm: "50px",
                    smd: "60px",
                    md: "80px",
                    lg: "100px",
                    xl: "120px",
                  }}
                  lineHeight={"0.9"}
                >
                  Supported <br /> Networks
                </Text>
                <Text
                  fontSize={{ smd: "20px", md: "20px", lg: "24px", xl: "32px" }}
                  color='#F5F5F5'
                  fontFamily='manrope'
                  mt={6}
                >
                  Discover seamless staking across chains <br /> with our
                  groundbreaking liquid staking <br /> ecosystem
                </Text>
              </Flex>
              <Flex
                flexDirection={"column"}
                gap={{ sm: 4, smd: 4, md: 4, lg: 6, xl: 6 }}
                alignItems={isMobileDevice ? "center" : undefined}
                w={isMobileDevice ? "100%" : undefined}
              >
                <Flex gap={{ sm: 0, md: 2, lg: 4, xl: 4 }}>
                  <ChainsCard blur={false} img={ethereum.src} />
                  <ChainsCard blur={true} img={arbitrum.src} />
                </Flex>
                <Flex gap={{ sm: 0, md: 2, lg: 4, xl: 4 }}>
                  <ChainsCard blur={true} img={binance.src} />
                  <ChainsCard blur={true} img={polygon.src} />
                </Flex>
              </Flex>
            </Flex>

            <Flex
              justifyContent={"center"}
              display={!isMobileDevice ? "none" : undefined}
            >
              <Img
                position={"absolute"}
                bottom={-20}
                zIndex={8}
                w={{
                  sm: "200px",
                  smd: "380px",
                  md: "400px",
                  lg: "500px",
                  xl: "640px",
                }}
                src={lsdblock3d.src}
              />
            </Flex>
          </Flex>
          <Flex
            background={'url("../../lsd/lsdnodeoperatorbg.webp")'}
            backgroundSize={"cover"}
            backgroundRepeat='repeat'
            backgroundPosition={"center"}
            flexDirection='column'
            height={{
              sm: "800px",
              smd: "1000px",
              md: "1000px",
              lg: "1200px",
              xl: "1300px",
            }}
            position='relative'
            mt={-60}
            zIndex={4}
            justifyContent='center'
          >
            <Flex
              pt={isMobileDevice ? 60 : undefined}
              justifyContent={"space-evenly"}
              alignItems='center'
            >
              <Flex flexDirection={"column"} color='#2D2F50' gap={6}>
                <Text
                  textAlign={"center"}
                  fontFamily={"grotesk"}
                  fontSize={{
                    sm: "50px",
                    smd: "60px",
                    md: "80px",
                    lg: "100px",
                    xl: "120px",
                  }}
                  lineHeight={"0.9"}
                >
                  Become a <br /> Node operator
                </Text>
                {isMobileDevice ? (
                  <Text
                    fontSize={{
                      sm: "18px",
                      smd: "18px",
                      md: "20px",
                      lg: "24px",
                      xl: "32px",
                    }}
                    color='#2D2F50'
                    fontFamily='manrope'
                    textAlign={isMobileDevice ? "center" : undefined}
                    px={6}
                  >
                    By joining our network of node operators, you play a pivotal
                    role in maintaining the integrity and functionality of our
                    supported networks.
                  </Text>
                ) : (
                  <Text
                    fontSize={{
                      sm: "18px",
                      smd: "18px",
                      md: "20px",
                      lg: "24px",
                      xl: "32px",
                    }}
                    color='#2D2F50'
                    fontFamily='manrope'
                  >
                    By joining our network of node operators, you <br /> play a
                    pivotal role in maintaining the integrity and <br />{" "}
                    functionality of our supported networks.
                  </Text>
                )}
                <Text
                  fontSize={{
                    sm: "18px",
                    smd: "18px",
                    md: "20px",
                    lg: "24px",
                    xl: "32px",
                  }}
                  color='#2D2F50'
                  fontFamily='manrope'
                  textAlign={isMobileDevice ? "center" : undefined}
                >
                  Learn about our requirements here:
                </Text>

                <Flex justifyContent={"center"}>
                  <Button
                    color='#F5F5F5'
                    borderRadius={"32px"}
                    fontSize={{
                      sm: "16px",
                      md: "16px",
                      lg: "18px",
                      xl: "22px",
                    }}
                    py={{ sm: 6, lg: 6, xl: 8 }}
                    px={{ sm: 6, smd: 6, md: 6, lg: 8, xl: 12 }}
                    bgColor={"#2D2F50"}
                    fontFamily='manropebd'
                    _active={{
                      bgColor: "#2D2F50",
                      color: "#F5F5F5",
                    }}
                    _focus={{
                      bgColor: "#2D2F50",
                      color: "#F5F5F5",
                    }}
                    _hover={{
                      bgColor: "#2D2F50",
                      color: "#F5F5F5",
                    }}
                  >
                    Join as a Node Operator
                  </Button>
                </Flex>
              </Flex>
              <Img
                display={isMobileDevice ? "none" : undefined}
                w={{
                  sm: "200px",
                  smd: "380px",
                  md: "400px",
                  lg: "500px",
                  xl: "640px",
                }}
                src={lsdblock3d.src}
              />
            </Flex>
          </Flex>
          <Flex
            background={
              isMobileDevice
                ? 'url("../../lsd/whystakingmobilebg.webp")'
                : 'url("../../lsd/lsdwhybg.webp")'
            }
            backgroundSize={"cover"}
            backgroundRepeat='repeat'
            backgroundPosition={"bottom"}
            flexDirection='column'
            height={{
              sm: "800px",
              smd: "1000px",
              md: "1000px",
              lg: "1100px",
              xl: "1300px",
            }}
            position='relative'
            mt={{ sm: -20, smd: -14, md: -14, lg: -14, xl: 0 }}
            zIndex={4}
          >
            <Flex flexDirection={"column"} pt={isMobileDevice ? 28 : 44}>
              <Text
                textAlign={"center"}
                fontFamily={"grotesk"}
                fontSize={{
                  sm: "50px",
                  smd: "60px",
                  md: "80px",
                  lg: "100px",
                  xl: "120px",
                }}
                lineHeight={"0.9"}
                color='#F5F5F5'
              >
                Why Choose Multichainz <br /> Liquid Staking?{" "}
              </Text>

              <Flex
                flexDirection={"column"}
                mt={{ smd: 16, md: 20, lg: 24, xl: 40 }}
              >
                <Flex
                  display={isMobileDevice ? "none" : undefined}
                  mb={10}
                  justifyContent={"flex-end"}
                  mr={20}
                >
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
                      scrollToRight();
                    }}
                  >
                    <ChevronRightIcon />
                  </Flex>
                </Flex>
                <Flex
                  mt={isMobileDevice ? 20 : undefined}
                  gap={{ sm: 6, smd: 6, md: 8, lg: 14, xl: 14 }}
                  ml={{ sm: 8, smd: 20, md: 24, lg: 40, xl: 40 }}
                  overflowX='hidden'
                  ref={scrollContainerRef}
                >
                  {/* <Flex
                    borderRadius={"20px"}
                    border='1.33px solid #FCFCFC'
                    minW={{
                      sm: "250px",
                      smd: "280px",
                      md: "320px",
                      lg: "380px",
                      xl: "460px",
                    }}
                    h={{
                      sm: "250px",
                      smd: "260px",
                      md: "280px",
                      lg: "320px",
                      xl: "400px",
                    }}
                    background={'url("../../lsdwhycardbg.png")'}
                    backgroundRepeat='repeat'
                    backgroundPosition={"center"}
                    flexDirection='column'
                    color='#F5F5F5'
                    py={{ sm: 6, smd: 6, md: 6, lg: 10, xl: 10 }}
                    px={{ sm: 4, smd: 6, md: 6, lg: 10, xl: 10 }}
                    // justifyContent='space-around'
                  >
                    <Text
                      fontSize={{
                        sm: "22px",
                        smd: "24px",
                        md: "26px",
                        lg: "32px",
                        xl: "32px",
                      }}
                      fontFamily='manropebd'
                    >
                      Instant Liquidity
                    </Text>
                    <Text
                      fontSize={{
                        sm: "14px",
                        smd: "15px",
                        md: "16px",
                        lg: "18px",
                        xl: "22px",
                      }}
                      fontFamily='manrope'
                      lineHeight={"1.2"}
                      mt={{ sm: 8, smd: 10, md: 10, lg: 12, xl: 12 }}
                    >
                      Our liquid staking solution ensures that while your assets
                      are locked in, they remain at your fingertips, allowing
                      for quick conversions and transactions whenever you
                      desire.
                    </Text>
                  </Flex> */}

                  <WhyCard
                    title='Instant Liquidity'
                    text=' Our liquid staking solution ensures that while your assets
                      are locked in, they remain at your fingertips, allowing
                      for quick conversions and transactions whenever you
                      desire.'
                  />

                  <WhyCard
                    title='Optimized Returns'
                    text=' Our state-of-the-art algorithms and partnerships are
                    designed to scan the market and ensure that you always get
                    the best returns. This ensures that every penny invested
                    with Multichainz is always hard at work, maximizing your
                    profits.'
                  />

                  <WhyCard
                    title='Multi-Chain Exploration'
                    text='Our platform offers seamless integration and compatibility
                    with multiple chains, granting you the freedom to explore,
                    transact, and maximize benefits across diverse networks.'
                  />

                  <WhyCard
                    title='Enhanced Security and Transparency'
                    text=' Our robust security mechanisms ensure that your assets are
                    always protected, while the transparent operations let you
                    monitor and track every movement, giving you complete
                    control and assurance.'
                  />

                  {/* <Flex
                    borderRadius={"20px"}
                    border='1.33px solid #FCFCFC'
                    minW={{
                      sm: "250px",
                      smd: "280px",
                      md: "320px",
                      lg: "380px",
                      xl: "460px",
                    }}
                    h={{
                      sm: "250px",
                      smd: "260px",
                      md: "280px",
                      lg: "320px",
                      xl: "400px",
                    }}
                    background={'url("../../lsdwhycardbg.png")'}
                    backgroundRepeat='repeat'
                    backgroundPosition={"center"}
                    flexDirection='column'
                    // gap={8}
                    color='#F5F5F5'
                    py={{ sm: 6, smd: 6, md: 6, lg: 10, xl: 10 }}
                    px={{ sm: 4, smd: 6, md: 6, lg: 10, xl: 10 }}
                    // justifyContent='space-around'
                  >
                    <Text
                      fontSize={{
                        sm: "22px",
                        smd: "24px",
                        md: "26px",
                        lg: "32px",
                        xl: "32px",
                      }}
                      fontFamily='manropebd'
                    >
                      Optimized Returns
                    </Text>
                    <Text
                      fontSize={{
                        sm: "14px",
                        smd: "15px",
                        md: "16px",
                        lg: "18px",
                        xl: "22px",
                      }}
                      fontFamily='manrope'
                      lineHeight={"1.2"}
                      mt={{ sm: 8, smd: 10, md: 10, lg: 12, xl: 12 }}
                    >
                      Our state-of-the-art algorithms and partnerships are
                      designed to scan the market and ensure that you always get
                      the best returns. This ensures that every penny invested
                      with Multichainz is always hard at work, maximizing your
                      profits.
                    </Text>
                  </Flex> */}

                  {/* <Flex
                    borderRadius={"20px"}
                    border='1.33px solid #FCFCFC'
                    minW={{
                      sm: "250px",
                      smd: "280px",
                      md: "320px",
                      lg: "380px",
                      xl: "460px",
                    }}
                    h={{
                      sm: "250px",
                      smd: "260px",
                      md: "280px",
                      lg: "320px",
                      xl: "400px",
                    }}
                    background={'url("../../lsdwhycardbg.png")'}
                    backgroundRepeat='repeat'
                    backgroundPosition={"center"}
                    flexDirection='column'
                    // gap={8}
                    color='#F5F5F5'
                    py={{ sm: 6, smd: 6, md: 6, lg: 10, xl: 10 }}
                    px={{ sm: 4, smd: 6, md: 6, lg: 10, xl: 10 }}
                    // justifyContent='space-around'
                  >
                    <Text
                      fontSize={{
                        sm: "22px",
                        smd: "24px",
                        md: "26px",
                        lg: "32px",
                        xl: "32px",
                      }}
                      fontFamily='manropebd'
                    >
                      Multi-Chain Exploration
                    </Text>
                    <Text
                      fontSize={{
                        sm: "14px",
                        smd: "15px",
                        md: "16px",
                        lg: "18px",
                        xl: "22px",
                      }}
                      fontFamily='manrope'
                      lineHeight={"1.2"}
                      mt={{ sm: 6, smd: 10, md: 10, lg: 12, xl: 12 }}
                    >
                      Our platform offers seamless integration and compatibility
                      with multiple chains, granting you the freedom to explore,
                      transact, and maximize benefits across diverse networks.
                    </Text>
                  </Flex> */}

                  {/* <Flex
                    borderRadius={"20px"}
                    border='1.33px solid #FCFCFC'
                    minW={{
                      sm: "250px",
                      smd: "280px",
                      md: "320px",
                      lg: "380px",
                      xl: "460px",
                    }}
                    h={{
                      sm: "250px",
                      smd: "260px",
                      md: "280px",
                      lg: "320px",
                      xl: "400px",
                    }}
                    background={'url("../../lsdwhycardbg.png")'}
                    backgroundRepeat='repeat'
                    backgroundPosition={"center"}
                    flexDirection='column'
                    // gap={8}
                    color='#F5F5F5'
                    py={{ sm: 6, smd: 6, md: 6, lg: 10, xl: 10 }}
                    px={{ sm: 4, smd: 6, md: 6, lg: 10, xl: 10 }}
                    // justifyContent='space-around'
                  >
                    <Text
                      fontSize={{
                        sm: "22px",
                        smd: "24px",
                        md: "26px",
                        lg: "32px",
                        xl: "32px",
                      }}
                      fontFamily='manropebd'
                    >
                      Enhanced Security and Transparency
                    </Text>
                    <Text
                      fontSize={{
                        sm: "14px",
                        smd: "15px",
                        md: "16px",
                        lg: "18px",
                        xl: "22px",
                      }}
                      fontFamily='manrope'
                      lineHeight={"1.2"}
                      mt={{ sm: 4, smd: 10, md: 10, lg: 12, xl: 12 }}
                    >
                      Our robust security mechanisms ensure that your assets are
                      always protected, while the transparent operations let you
                      monitor and track every movement, giving you complete
                      control and assurance.
                    </Text>
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
            </Flex>
          </Flex>
          <Flex
            background={'url("../../lsd/lsdauditingbg.webp")'}
            backgroundSize={"cover"}
            backgroundRepeat='repeat'
            backgroundPosition={"bottom"}
            flexDirection='column'
            height={{
              sm: "900px",
              smd: "1000px",
              md: "1000px",
              lg: "1200px",
              xl: "1350px",
            }}
            position='relative'
            mt={isMobileDevice ? -48 : -60}
          >
            <Flex
              position={"absolute"}
              right={0}
              top={isMobileDevice ? 10 : -20}
              zIndex={6}
            >
              <Img
                w={{
                  sm: "180px",
                  smd: "260px",
                  md: "280px",
                  lg: "320px",
                  xl: "400px",
                }}
                src={lsdtriangle3d.src}
              />
            </Flex>

            <Flex
              position={"absolute"}
              display={isMobileDevice ? "none" : undefined}
              bottom={-40}
              zIndex={6}
            >
              <Img
                w={{ smd: "240px", md: "260px", lg: "280px", xl: "320px" }}
                src={lsdstar3d.src}
              />
            </Flex>
            <Flex flexDirection={"column"} pt={60}>
              <Flex
                flexDirection={"column"}
                color='#F5F5F5'
                // alignItems={"center"}
              >
                <Text
                  textAlign={"center"}
                  fontFamily={"grotesk"}
                  fontSize={{
                    sm: "50px",
                    smd: "60px",
                    md: "80px",
                    lg: "100px",
                    xl: "120px",
                  }}
                  lineHeight={"0.9"}
                >
                  Trusted Staking <br /> Solution
                </Text>

                <Flex
                  justifyContent={"center"}
                  mr={{ smd: 30, md: 28, lg: 20, xl: 20 }}
                >
                  {isMobileDevice ? (
                    <Text
                      px={6}
                      fontSize={{
                        sm: "16px",
                        smd: "18px",
                        md: "20px",
                        lg: "24px",
                        xl: "32px",
                      }}
                      color='#F5F5F5'
                      fontFamily='manrope'
                      mt={6}
                      textAlign='center'
                    >
                      Our smart contract underwent thorough auditing by
                      industry-leading professionals, ensuring top- notch
                      security and reliability
                    </Text>
                  ) : (
                    <Text
                      fontSize={{
                        smd: "18px",
                        md: "20px",
                        lg: "24px",
                        xl: "32px",
                      }}
                      color='#F5F5F5'
                      fontFamily='manrope'
                      mt={6}
                    >
                      Our smart contract underwent thorough auditing <br /> by
                      industry-leading professionals, ensuring <br /> top- notch
                      security and reliability
                    </Text>
                  )}
                </Flex>
              </Flex>

              <Flex
                justifyContent={"center"}
                gap={{ smd: 4, md: 10, lg: 14, xl: 20 }}
                mt={isMobileDevice ? 20 : 32}
                flexDirection={isMobileDevice ? "column" : "row"}
                alignItems={isMobileDevice ? "center" : undefined}
              >
                <Flex
                  gap={isMobileDevice ? 2 : { smd: 4, md: 10, lg: 14, xl: 20 }}
                >
                  <Flex
                    borderRadius={"32px"}
                    border='1.33px solid #FCFCFC'
                    minW={{
                      sm: "160px",
                      smd: "240px",
                      md: "280px",
                      lg: "360px",
                      xl: "420px",
                    }}
                    h={{
                      sm: "140px",
                      smd: "240px",
                      md: "280px",
                      lg: "320px",
                      xl: "380px",
                    }}
                    background={'url("../../halbornbg.png")'}
                    backgroundRepeat='repeat'
                    backgroundPosition={"center"}
                    flexDirection='column'
                    alignItems={"center"}
                    justifyContent='center'
                    position={"relative"}
                  >
                    <Img
                      src={halborn.src}
                      position='absolute'
                      top={isMobileDevice ? 10 : 24}
                      w={{
                        sm: "60px",
                        smd: "100px",
                        md: "100px",
                        lg: "120px",
                        xl: "160px",
                      }}
                    />
                    <Text
                      position={"absolute"}
                      bottom={isMobileDevice ? 4 : 10}
                      color='#F5F5F5'
                      fontFamily={"manropebd"}
                      fontSize={{
                        sm: "18px",
                        smd: "22px",
                        md: "24px",
                        lg: "32px",
                        xl: "40px",
                      }}
                    >
                      HALBORN
                    </Text>
                  </Flex>

                  <Flex
                    borderRadius={"32px"}
                    border='1.33px solid #FCFCFC'
                    minW={{
                      sm: "160px",
                      smd: "240px",
                      md: "280px",
                      lg: "360px",
                      xl: "420px",
                    }}
                    h={{
                      sm: "140px",
                      smd: "240px",
                      md: "280px",
                      lg: "320px",
                      xl: "380px",
                    }}
                    background={'url("../../halbornbg.png")'}
                    backgroundRepeat='repeat'
                    backgroundPosition={"center"}
                    flexDirection='column'
                    alignItems={"center"}
                    justifyContent='center'
                    position={"relative"}
                  >
                    <Img
                      src={peckshield.src}
                      position='absolute'
                      top={isMobileDevice ? 6 : 20}
                      w={{
                        sm: "60px",
                        smd: "100px",
                        md: "100px",
                        lg: "120px",
                        xl: "160px",
                      }}
                    />
                    <Text
                      position={"absolute"}
                      bottom={isMobileDevice ? 4 : 10}
                      color='#F5F5F5'
                      fontFamily={"manropebd"}
                      fontSize={{
                        sm: "18px",
                        smd: "22px",
                        md: "24px",
                        lg: "32px",
                        xl: "40px",
                      }}
                    >
                      PeckShield
                    </Text>
                  </Flex>
                </Flex>

                <Flex
                  ml={isMobileDevice ? 8 : undefined}
                  mt={isMobileDevice ? 2 : undefined}
                  alignSelf={isMobileDevice ? "flex-start" : undefined}
                  borderRadius={"32px"}
                  border='1.33px solid #FCFCFC'
                  minW={{
                    sm: "160px",
                    smd: "240px",
                    md: "280px",
                    lg: "360px",
                    xl: "420px",
                  }}
                  h={{
                    sm: "140px",
                    smd: "240px",
                    md: "280px",
                    lg: "320px",
                    xl: "380px",
                  }}
                  background={'url("../../halbornbg.png")'}
                  backgroundRepeat='repeat'
                  backgroundPosition={"center"}
                  flexDirection='column'
                  alignItems={"center"}
                  justifyContent='center'
                  position={"relative"}
                >
                  <Img
                    src={quillhash.src}
                    position='absolute'
                    top={isMobileDevice ? 10 : 20}
                    w={{
                      sm: "80px",
                      smd: "120px",
                      md: "140px",
                      lg: "180px",
                      xl: "250px",
                    }}
                  />
                  <Text
                    position={"absolute"}
                    bottom={isMobileDevice ? 4 : 10}
                    color='#F5F5F5'
                    fontFamily={"manropebd"}
                    fontSize={{
                      sm: "18px",
                      smd: "22px",
                      md: "24px",
                      lg: "32px",
                      xl: "40px",
                    }}
                  >
                    Quillhash
                  </Text>
                </Flex>
              </Flex>
            </Flex>
          </Flex>
          <Flex
            background={'url("../../lsd/lsddaoherobg.webp")'}
            backgroundSize={"cover"}
            // backgroundRepeat='repeat'
            mt={{ sm: -20, smd: -24, md: -24, lg: -28, xl: -32 }}
            backgroundPosition={"left"}
            flexDirection='column'
            height={{
              sm: "700px",
              smd: "1000px",
              md: "1000px",
              lg: "1200px",
              xl: "1500px",
            }}
            zIndex={5}
            justifyContent='center'
          >
            <Flex
              //   justifyContent={"space-evenly"}
              pl={{ sm: 0, smd: 10, md: 20, lg: 40, xl: 40 }}
              alignItems='center'
              position={"relative"}
            >
              <Flex
                flexDirection={"column"}
                alignItems={isMobileDevice ? "center" : undefined}
                color='#2D2F50'
                gap={8}
              >
                <Text
                  textAlign={"center"}
                  fontFamily={"grotesk"}
                  fontSize={{
                    sm: "50px",
                    smd: "60px",
                    md: "80px",
                    lg: "100px",
                    xl: "120px",
                  }}
                  lineHeight={"0.9"}
                >
                  DAO <br /> Governance
                </Text>
                {isMobileDevice ? (
                  <Text
                    textAlign={"center"}
                    px={6}
                    fontSize={{
                      sm: "16px",
                      smd: "18px",
                      md: "20px",
                      lg: "24px",
                      xl: "32px",
                    }}
                    color='#2D2F50'
                    fontFamily='manrope'
                  >
                    The Multichainz DAO operates as a Decentralized Autonomous
                    Organization, utilizing the governance tokens (CHAINZ) for
                    voting to determine the essential parameters of liquid
                    staking protocols.
                  </Text>
                ) : (
                  <Text
                    fontSize={{
                      smd: "18px",
                      md: "20px",
                      lg: "24px",
                      xl: "32px",
                    }}
                    color='#2D2F50'
                    fontFamily='manrope'
                  >
                    The Multichainz DAO operates as a Decentralized <br />{" "}
                    Autonomous Organization, utilizing the governance <br />{" "}
                    tokens (CHAINZ) for voting to determine the <br /> essential
                    parameters of liquid staking protocols.
                  </Text>
                )}
                <Text
                  fontSize={{ smd: "18px", md: "20px", lg: "24px", xl: "32px" }}
                  color='#2D2F50'
                  fontFamily='manrope'
                  textAlign={isMobileDevice ? "center" : undefined}
                >
                  Explore how the decisions in Multichainz <br /> governance
                  processes are made
                </Text>

                <Flex justifyContent={"center"}>
                  <Button
                    color='#F5F5F5'
                    borderRadius={"32px"}
                    fontSize={{
                      smd: "16px",
                      md: "18px",
                      lg: "22px",
                      xl: "22px",
                    }}
                    py={{ md: 6, lg: 8, xl: 8 }}
                    px={12}
                    bgColor={"#2D2F50"}
                    _active={{
                      bgColor: "#2D2F50",
                      color: "#F5F5F5",
                    }}
                    _focus={{
                      bgColor: "#2D2F50",
                      color: "#F5F5F5",
                    }}
                    _hover={{
                      bgColor: "#2D2F50",
                      color: "#F5F5F5",
                    }}
                    fontFamily='manropebd'
                  >
                    Explore Here
                  </Button>
                </Flex>
              </Flex>
              <Flex
                position={"absolute"}
                right={0}
                top={isMobileDevice ? -60 : undefined}
              >
                <Img
                  w={{
                    sm: "240px",
                    smd: "400px",
                    md: "500px",
                    lg: "600px",
                    xl: "840px",
                  }}
                  src={isMobileDevice ? lsddao3dmobile.src : lsddao3d.src}
                />
              </Flex>
            </Flex>
          </Flex>
          <Flex w='100%' mt={{ sm: -24, smd: -24, md: -24, lg: -28, xl: -40 }}>
            <Footer lsd={true} />
          </Flex>
        </Flex>
      </Box>
    </>
  );
}
