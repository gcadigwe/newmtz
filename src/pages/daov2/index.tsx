import Navbar from "@/components/YieldV2/Navbar";
import { Box, Flex, Img, Text, Button, useMediaQuery } from "@chakra-ui/react";
import Head from "next/head";
import daocompletestar3d from "../../assets/3d/dao/daocompletestar3d.png";
import daocoil3d from "../../assets/3d/dao/daocoil3d.png";
import ChainsCard from "@/components/DaoV2/ChainsCard";

import binance from "../../assets/svg/binance.svg";
import polygon from "../../assets/svg/polygon.svg";

import optimism from "../../assets/svg/optimism.svg";
import arbitrum from "../../assets/svg/arbitrumnormal.svg";
import cmcgecko from "../../assets/cmcgecko.png";
import daohalfsmallsphere from "../../assets/3d/dao/daohalfsmallsphere.png";
import daohalfbigsphere from "../../assets/3d/dao/daohalfbigsphere.png";
import decisionmakers from "../../assets/decisionmakers.png";
import daocircles3d from "../../assets/3d/dao/daocircles3d.png";
import daostar3d from "../../assets/3d/dao/daostar3d.png";
import daotriangle3d from "../../assets/3d/dao/daotriangle3d.png";
import { ChevronLeftIcon, ChevronRightIcon } from "@chakra-ui/icons";
import Footer from "@/components/NewFooter";
import dao3dmobilecoil from "../../assets/3d/dao/dao3dmobilecoil.webp";
import dao3dhalfstar from "../../assets/3d/dao/dao3dhalfstar.webp";
import daomobilecircles from "../../assets/3d/dao/daomobilecircles.webp";
import lendingcross from "../../assets/3d/lending/lendingcross.png";
import lendinginfocard1 from "../../assets/lendinginfocard1.png";
import lendinginfocard2 from "../../assets/lendinginfocard2.png";
import lendinginfocard3 from "../../assets/lendinginfocard3.png";
import lsdwhycard from "../../assets/lsdwhycard.png";
import AboutCard from "@/components/DaoV2/AboutCard";
import { useRef, useState } from "react";

export default function DaoV2() {
  const [isMobileDevice] = useMediaQuery("(max-width: 559px)");

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
        <title>MultichainZ | DAO</title>
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
                ? 'url("../../dao/daomobileherobg.webp")'
                : 'url("../../yield/yieldherobg.webp")'
            }
            backgroundSize={"cover"}
            backgroundRepeat='repeat'
            backgroundPosition={"right"}
            flexDirection='column'
            height={{
              sm: "720px",
              smd: "800px",
              md: "900px",
              lg: "1000px",
              xl: "1100px",
            }}
            position='relative'
            zIndex={5}
          >
            <Flex
              position={"absolute"}
              bottom={isMobileDevice ? -10 : 20}
              right={isMobileDevice ? 0 : undefined}
            >
              <Img
                src={isMobileDevice ? dao3dhalfstar.src : daocompletestar3d.src}
                w={{ smd: "260px", md: "300px", lg: "440px", xl: "480px" }}
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
              transform={{
                sm: "rotate(40deg)",
                md: "none",
                lg: "none",
                xl: "none",
              }}
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
              right={isMobileDevice ? undefined : 0}
              top={isMobileDevice ? 80 : 40}
            >
              <Img
                src={isMobileDevice ? dao3dmobilecoil.src : daocoil3d.src}
                w={{
                  sm: "120px",
                  smd: "260px",
                  md: "300px",
                  lg: "460px",
                  xl: "460px",
                }}
              />
            </Flex>
            <Navbar />
            <Flex
              zIndex={2}
              flexDirection={"column"}
              mt={{ sm: 20, smd: 20, md: 20, lg: 24, xl: 20 }}
              alignItems='center'
            >
              <Text
                fontFamily={"grotesk"}
                fontSize={{
                  sm: "50px",
                  smd: "60px",
                  md: "80px",
                  lg: "100px",
                  xl: "140px",
                }}
                textAlign='center'
                lineHeight={"0.9"}
              >
                MULTICHAINZ DAO
                <br />
                EMPOWERING <br /> COMMUNITY
              </Text>

              {isMobileDevice ? (
                <Text
                  mt={{ sm: 6, smd: 8, md: 10, lg: 20, xl: 20 }}
                  textAlign={"center"}
                  fontSize={{
                    sm: "20px",
                    smd: "22px",
                    md: "24px",
                    lg: "26px",
                    xl: "32px",
                  }}
                  lineHeight={"1.2"}
                  fontFamily='manrope'
                >
                  Propose, vote, and engage to help us shape the future of our
                  decentralized ecosystem through your active participation
                </Text>
              ) : (
                <Text
                  mt={{ sm: 6, smd: 8, md: 10, lg: 20, xl: 20 }}
                  textAlign={"center"}
                  fontSize={{
                    sm: "20px",
                    smd: "22px",
                    md: "24px",
                    lg: "26px",
                    xl: "32px",
                  }}
                  lineHeight={"1.2"}
                  fontFamily='manrope'
                >
                  Propose, vote, and engage to help us shape the <br /> future
                  of our decentralized ecosystem through <br /> your active
                  participation
                </Text>
              )}

              <Button
                mt={isMobileDevice ? 6 : 20}
                color='black'
                fontSize={{ lg: "18px", xl: "22px" }}
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
                fontFamily='manrope'
              >
                Go to Forum
              </Button>
            </Flex>
          </Flex>

          <Flex
            w='100%'
            background={'url("../../yield/yieldpoolsbg.webp")'}
            backgroundSize={"cover"}
            backgroundRepeat='repeat'
            backgroundPosition={"center"}
            flexDirection='column'
            height={{
              sm: "860px",
              smd: "1000px",
              md: "1000px",
              lg: "1200px",
              xl: "1200px",
            }}
            position='relative'
            mt={isMobileDevice ? -20 : -40}
            justifyContent='center'
            zIndex={4}
          >
            <Flex
              justifyContent={"space-evenly"}
              zIndex={2}
              //   alignItems='center'
              flexDirection={{
                sm: "column",
                smd: "column",
                md: "row",
                lg: "row",
                xl: "row",
              }}
            >
              <Flex flexDirection={"column"} color='white'>
                <Text
                  textAlign={"center"}
                  mt={isMobileDevice ? 0 : 10}
                  fontFamily={"grotesk"}
                  fontSize={{
                    sm: "50px",
                    smd: "50px",
                    md: "70px",
                    lg: "100px",
                    xl: "120px",
                  }}
                  lineHeight={"0.9"}
                >
                  CHAINZ the <br /> Governance <br /> Token
                </Text>
                <Text
                  textAlign={isMobileDevice ? "center" : undefined}
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
                >
                  Use CHAINZ to submit priority proposals, <br /> get voting
                  powers, and access exclusive <br /> benefits to govern
                  Multichainz
                </Text>
              </Flex>

              <Flex
                mt={isMobileDevice ? 6 : undefined}
                flexDirection={"column"}
                gap={isMobileDevice ? 2 : 4}
                alignItems={isMobileDevice ? "center" : undefined}
              >
                <Flex
                  w={"100%"}
                  justifyContent={isMobileDevice ? "center" : undefined}
                  gap={isMobileDevice ? 2 : undefined}
                >
                  <ChainsCard img={binance.src} />
                  <ChainsCard img={polygon.src} />
                </Flex>
                <Flex
                  w={"100%"}
                  justifyContent={isMobileDevice ? "center" : undefined}
                  gap={isMobileDevice ? 2 : undefined}
                >
                  <ChainsCard img={arbitrum.src} />
                  <ChainsCard img={optimism.src} />
                </Flex>

                <Flex flexDirection={"column"} justifySelf='flex-start'>
                  <Text
                    textAlign={isMobileDevice ? "center" : undefined}
                    fontFamily={"manropebd"}
                    fontSize={{
                      smd: "16px",
                      md: "22px",
                      lg: "24px",
                      xl: "26px",
                    }}
                    color='white'
                    my={isMobileDevice ? 3 : 6}
                  >
                    Learn More
                  </Text>
                  <Img
                    w={{
                      sm: "200px",
                      smd: "280px",
                      md: "340px",
                      lg: "480px",
                      xl: "500px",
                    }}
                    src={cmcgecko.src}
                  />
                </Flex>
              </Flex>
            </Flex>
          </Flex>
          <Flex
            mt={{ sm: -36, smd: -48, md: -48, lg: -60, xl: -40 }}
            w='100%'
            background={'url("../../dao/decisionmakersherobg.webp")'}
            backgroundSize={"cover"}
            backgroundRepeat='repeat'
            backgroundPosition={"center"}
            flexDirection='column'
            height={{
              sm: "900px",
              smd: "1000px",
              md: "1100px",
              lg: "1200px",
              xl: "1200px",
            }}
            position='relative'
            justifyContent={isMobileDevice ? undefined : "center"}
          >
            <Flex
              position={"absolute"}
              zIndex={5}
              top={{ sm: -10, smd: -10, md: -10, lg: -32, xl: -32 }}
            >
              <Img
                w={{
                  sm: "100px",
                  smd: "160px",
                  md: "200px",
                  lg: "340px",
                  xl: "360px",
                }}
                src={daohalfsmallsphere.src}
              />
            </Flex>

            <Flex
              position={"absolute"}
              zIndex={1}
              right={0}
              top={isMobileDevice ? 64 : 20}
              //   bottom={isMobileDevice ? -40 : undefined}
            >
              <Img
                src={daohalfbigsphere.src}
                w={{
                  sm: "300px",
                  smd: "300px",
                  md: "380px",
                  lg: "440px",
                  xl: "480px",
                }}
              />
            </Flex>

            <Flex
              flexDirection={{
                sm: "column",
                smd: "column",
                md: "row",
                lg: "row",
                xl: "row",
              }}
              justifyContent={"space-evenly"}
              zIndex={2}
              alignItems='center'
              gap={isMobileDevice ? 10 : undefined}
            >
              <Flex flexDirection={"column"} color='white'>
                {isMobileDevice ? (
                  <Text
                    textAlign={"center"}
                    mt={40}
                    fontFamily={"grotesk"}
                    fontSize={{
                      sm: "50px",
                      smd: "50px",
                      md: "70px",
                      lg: "100px",
                      xl: "120px",
                    }}
                    lineHeight={"0.9"}
                  >
                    The Decision <br /> Makers
                  </Text>
                ) : (
                  <Text
                    textAlign={"center"}
                    mt={20}
                    fontFamily={"grotesk"}
                    fontSize={{
                      sm: "50px",
                      smd: "50px",
                      md: "70px",
                      lg: "100px",
                      xl: "120px",
                    }}
                    lineHeight={"0.9"}
                  >
                    The <br /> Decision <br /> Makers
                  </Text>
                )}
                {isMobileDevice ? (
                  <Text
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
                    textAlign={isMobileDevice ? "center" : undefined}
                  >
                    Actively participate in protocol decisions to <br /> help
                    shape the future of the ecosystem <br /> through proposing
                    and voting mechanisms <br /> formed by all relevant
                    stakeholders
                  </Text>
                ) : (
                  <Text
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
                    textAlign={isMobileDevice ? "center" : undefined}
                  >
                    Actively participate in protocol <br /> decisions to help
                    shape the future <br /> of the ecosystem through <br />{" "}
                    proposing and voting mechanisms <br /> formed by all
                    relevant stakeholders
                  </Text>
                )}
              </Flex>

              <Img
                w={{
                  sm: "340px",
                  smd: "400px",
                  md: "500px",
                  lg: "620px",
                  xl: "680px",
                }}
                src={decisionmakers.src}
                zIndex={2}
              />
            </Flex>
          </Flex>
          <Flex
            mt={isMobileDevice ? -20 : -40}
            zIndex={2}
            w='100%'
            background={
              isMobileDevice
                ? 'url("../../dao/daosubmitproposalherobg.webp")'
                : 'url("../../dao/daosubmitproposalbg.webp")'
            }
            backgroundSize={"cover"}
            backgroundRepeat='repeat'
            // backgroundPosition={"center"}
            flexDirection='column'
            height={{
              sm: "1100px",
              smd: "1200px",
              md: "1800px",
              lg: "1800px",
              xl: "2000px",
            }}
            position='relative'
          >
            <Flex
              flexDirection={{
                sm: "column-reverse",
                smd: "column-reverse",
                md: "row",
                lg: "row",
                xl: "row",
              }}
              justifyContent={"space-evenly"}
              pt={{ sm: 20, smd: 40, md: 60, lg: 60, xl: 80 }}
            >
              <Flex
                position={"absolute"}
                top={-28}
                display={isMobileDevice ? undefined : "none"}
              >
                <Img w='140px' src={daomobilecircles.src} />
              </Flex>
              <Flex
                alignItems={isMobileDevice ? "center" : undefined}
                flexDirection={"column"}
                gap={{ sm: 4, smd: 10, md: 16, lg: 18, xl: 20 }}
                mt={20}
              >
                <Flex gap={4}>
                  <Flex
                    mt={1}
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
                      Sign Up to Forum
                    </Text>

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
                      Create an account on our forum and <br /> get approved to
                      propose and <br /> comment in the interface
                    </Text>
                  </Flex>
                </Flex>

                <Flex gap={4}>
                  <Flex
                    mt={1}
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
                      Submit a Forum Proposal
                    </Text>

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
                      Upload your proposal for improvement <br /> or suggestion
                      to the forum and receive <br /> feedback and community
                      interest
                    </Text>
                  </Flex>
                </Flex>

                <Flex gap={4}>
                  <Flex
                    mt={1}
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
                      Submit a Forum Proposal
                    </Text>

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
                      If the forum interest is big, connect <br /> your wallet
                      to Snapshot, and submit <br /> the proposal
                    </Text>
                  </Flex>
                </Flex>

                <Flex gap={4}>
                  <Flex
                    mt={1}
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
                      Submit a Github Proposal
                    </Text>

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
                      Once approved in Snapshot, create a <br /> Github request
                      for the proposal to be <br /> voted by all MTZ token
                      holders
                    </Text>
                  </Flex>
                </Flex>
              </Flex>

              <Flex
                flexDirection={"column"}
                color='black'
                alignItems={"center"}
              >
                <Img
                  display={isMobileDevice ? "none" : undefined}
                  src={daocircles3d.src}
                  w={{ smd: "320px", md: "380px", lg: "420px", xl: "460px" }}
                />
                <Text
                  textAlign={"center"}
                  fontFamily={"grotesk"}
                  fontSize={{
                    sm: "50px",
                    smd: "50px",
                    md: "70px",
                    lg: "100px",
                    xl: "120px",
                  }}
                  lineHeight={"0.9"}
                >
                  Submit a <br /> Proposal
                </Text>
                {isMobileDevice ? (
                  <Text
                    fontSize={{
                      sm: "16px",
                      smd: "20px",
                      md: "22px",
                      lg: "24px",
                      xl: "32px",
                    }}
                    color='black'
                    fontFamily='manrope'
                    mt={6}
                    textAlign='center'
                  >
                    The DAO Process to submit a proposal is <br /> easy and
                    intuitive, allowing everyone to <br /> submit any proposal
                    at any time
                  </Text>
                ) : (
                  <Text
                    fontSize={{
                      sm: "16px",
                      smd: "20px",
                      md: "22px",
                      lg: "24px",
                      xl: "32px",
                    }}
                    color='black'
                    fontFamily='manrope'
                    mt={6}
                  >
                    The DAO Process to submit a <br /> proposal is easy and
                    intuitive, <br /> allowing everyone to submit any <br />{" "}
                    proposal at any time
                  </Text>
                )}
              </Flex>
            </Flex>
            <Flex
              position={"absolute"}
              right={0}
              bottom={{ sm: -32, smd: -20, md: -20, lg: -40, xl: -60 }}
            >
              <Img
                src={daostar3d.src}
                w={{
                  sm: "200px",
                  smd: "280px",
                  md: "320px",
                  lg: "400px",
                  xl: "500px",
                }}
              />
            </Flex>
          </Flex>
          <Flex
            mt={isMobileDevice ? -32 : -48}
            zIndex={1}
            w='100%'
            background={'url("../../dao/daoaboutbg.webp")'}
            backgroundSize={"cover"}
            backgroundRepeat='repeat'
            backgroundPosition={"center"}
            flexDirection='column'
            height={{
              sm: "900px",
              smd: "1000px",
              md: "1100px",
              lg: "1200px",
              xl: "1200px",
            }}
            position='relative'
          >
            <Flex flexDirection={"column"} mt={60}>
              <Text
                color='#F5F5F5'
                textAlign={"center"}
                fontFamily={"grotesk"}
                fontSize={{
                  sm: "50px",
                  smd: "50px",
                  md: "70px",
                  lg: "100px",
                  xl: "120px",
                }}
                lineHeight={"0.9"}
              >
                About MultichainZ <br /> Governance
              </Text>

              <Flex
                flexDirection={"column"}
                mt={{ smd: 10, md: 10, lg: 10, xl: 10 }}
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
              </Flex>

              <Flex flexDirection={"column"} mt={10}>
                <Flex
                  gap={{ sm: 4, smd: 6, md: 8, lg: 8, xl: 8 }}
                  ml={{ sm: 10, smd: 28, md: 32, lg: 56, xl: 60 }}
                  overflow='hidden'
                  ref={scrollContainerRef}
                >
                  <AboutCard
                    img={lendinginfocard1}
                    title='Our Forum'
                    text=' Visit our forum to know and engage with active
                      proposals and its categories'
                    linkText='Go to Forum'
                  />

                  <AboutCard
                    img={lendinginfocard2}
                    title='Proposals'
                    text=' Read our process to submit proposals to our DAO and
                    learn  its guidelines'
                    linkText='Go to Guide'
                  />
                  {/* <Flex
                    borderRadius={"32px"}
                    border='1.33px solid #FCFCFC'
                    minW={{
                      sm: "260px",
                      smd: "280px",
                      md: "320px",
                      lg: "380px",
                      xl: "400px",
                    }}
                    h={{
                      sm: "240px",
                      smd: "280px",
                      md: "300px",
                      lg: "340px",
                      xl: "360px",
                    }}
                    background={'url("../../dao/daoforumbg.png")'}
                    backgroundRepeat='repeat'
                    backgroundPosition={"center"}
                    flexDirection='column'
                    gap={8}
                    color='#F5F5F5'
                    py={10}
                    px={8}
                    justifyContent='space-around'
                  >
                    <Text
                      fontSize={{
                        sm: "22px",
                        smd: "24px",
                        md: "26px",
                        lg: "28px",
                        xl: "32px",
                      }}
                      fontFamily='manropebd'
                    >
                      Our Forum
                    </Text>
                    <Text
                      fontSize={{
                        sm: "14px",
                        smd: "16px",
                        md: "18px",
                        lg: "20px",
                        xl: "22px",
                      }}
                      fontFamily='manrope'
                      lineHeight={"1.2"}
                    >
                      Visit our forum to know and <br /> engage with active
                      proposals <br /> and its categories
                    </Text>

                    <Flex alignItems={"center"}>
                      <Text
                        fontSize={{
                          sm: "12px",
                          smd: "14px",
                          md: "14px",
                          lg: "14px",
                          xl: "16px",
                        }}
                        fontFamily={"manropemd"}
                      >
                        Go to Forum
                      </Text>
                      <ChevronRightIcon />
                    </Flex>
                  </Flex> */}

                  {/* <Flex
                    borderRadius={"32px"}
                    border='1.33px solid #FCFCFC'
                    minW={{
                      sm: "260px",
                      smd: "280px",
                      md: "320px",
                      lg: "380px",
                      xl: "400px",
                    }}
                    h={{
                      sm: "240px",
                      smd: "280px",
                      md: "300px",
                      lg: "340px",
                      xl: "360px",
                    }}
                    background={'url("../../dao/daoforumbg.png")'}
                    backgroundRepeat='repeat'
                    backgroundPosition={"center"}
                    flexDirection='column'
                    gap={8}
                    color='#F5F5F5'
                    py={10}
                    px={8}
                    justifyContent='space-around'
                  >
                    <Text
                      fontSize={{
                        sm: "22px",
                        smd: "24px",
                        md: "26px",
                        lg: "28px",
                        xl: "32px",
                      }}
                      fontFamily='manropebd'
                    >
                      Proposals
                    </Text>
                    <Text
                      fontSize={{
                        sm: "14px",
                        smd: "16px",
                        md: "18px",
                        lg: "20px",
                        xl: "22px",
                      }}
                      fontFamily='manrope'
                      lineHeight={"1.2"}
                    >
                      Read our process to submit <br /> proposals to our DAO and
                      learn <br /> its guidelines
                    </Text>

                    <Flex alignItems={"center"}>
                      <Text
                        fontSize={{
                          sm: "12px",
                          smd: "14px",
                          md: "14px",
                          lg: "14px",
                          xl: "16px",
                        }}
                        fontFamily={"manropemd"}
                      >
                        Go to Guide
                      </Text>
                      <ChevronRightIcon />
                    </Flex>
                  </Flex> */}

                  <AboutCard
                    img={lendinginfocard3}
                    title='Voting'
                    text='Learn more about voting processes, vote delegation, and vote types'
                    linkText='Go to Manual'
                  />

                  <AboutCard
                    img={lsdwhycard}
                    title='FAQs'
                    text='Solve any questions you have about our governance
                    model and process'
                    linkText='Go to FAQs'
                  />
                  {/* <Flex
                    borderRadius={"32px"}
                    border='1.33px solid #FCFCFC'
                    minW={{
                      sm: "260px",
                      smd: "280px",
                      md: "320px",
                      lg: "380px",
                      xl: "400px",
                    }}
                    h={{
                      sm: "240px",
                      smd: "280px",
                      md: "300px",
                      lg: "340px",
                      xl: "360px",
                    }}
                    background={'url("../../dao/daoforumbg.png")'}
                    backgroundRepeat='repeat'
                    backgroundPosition={"center"}
                    flexDirection='column'
                    gap={8}
                    color='#F5F5F5'
                    py={10}
                    px={8}
                    justifyContent='space-around'
                  >
                    <Text
                      fontSize={{
                        sm: "22px",
                        smd: "24px",
                        md: "26px",
                        lg: "28px",
                        xl: "32px",
                      }}
                      fontFamily='manropebd'
                    >
                      Voting
                    </Text>
                    <Text
                      fontSize={{
                        sm: "14px",
                        smd: "16px",
                        md: "18px",
                        lg: "20px",
                        xl: "22px",
                      }}
                      fontFamily='manrope'
                      lineHeight={"1.2"}
                    >
                      Learn more about voting <br /> processes, vote delegation,{" "}
                      <br /> and vote types
                    </Text>

                    <Flex alignItems={"center"}>
                      <Text
                        fontSize={{
                          sm: "12px",
                          smd: "14px",
                          md: "14px",
                          lg: "14px",
                          xl: "16px",
                        }}
                        fontFamily={"manropemd"}
                      >
                        Go to Manual
                      </Text>
                      <ChevronRightIcon />
                    </Flex>
                  </Flex>

                  <Flex
                    borderRadius={"32px"}
                    border='1.33px solid #FCFCFC'
                    minW={{
                      sm: "260px",
                      smd: "280px",
                      md: "320px",
                      lg: "380px",
                      xl: "400px",
                    }}
                    h={{
                      sm: "240px",
                      smd: "280px",
                      md: "300px",
                      lg: "340px",
                      xl: "360px",
                    }}
                    background={'url("../../dao/daoforumbg.png")'}
                    backgroundRepeat='repeat'
                    backgroundPosition={"center"}
                    flexDirection='column'
                    gap={8}
                    color='#F5F5F5'
                    py={10}
                    px={8}
                    justifyContent='space-around'
                  >
                    <Text
                      fontSize={{
                        sm: "22px",
                        smd: "24px",
                        md: "26px",
                        lg: "28px",
                        xl: "32px",
                      }}
                      fontFamily='manropebd'
                    >
                      FAQs
                    </Text>
                    <Text
                      fontSize={{
                        sm: "14px",
                        smd: "16px",
                        md: "18px",
                        lg: "20px",
                        xl: "22px",
                      }}
                      fontFamily='manrope'
                      lineHeight={"1.2"}
                    >
                      Solve any questions you have about <br /> our governance
                      model <br /> and process
                    </Text>

                    <Flex alignItems={"center"}>
                      <Text
                        fontSize={{
                          sm: "12px",
                          smd: "14px",
                          md: "14px",
                          lg: "14px",
                          xl: "16px",
                        }}
                        fontFamily={"manropemd"}
                      >
                        Go to FAQs
                      </Text>
                      <ChevronRightIcon />
                    </Flex>
                  </Flex> */}
                </Flex>
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
              position={"absolute"}
              right={isMobileDevice ? 0 : undefined}
              bottom={{ sm: -24, smd: -60, md: -60, lg: -28, xl: -28 }}
            >
              <Img
                src={daotriangle3d.src}
                w={{
                  sm: "200px",
                  smd: "260px",
                  md: "300px",
                  lg: "320px",
                  xl: "340px",
                }}
              />
            </Flex>
          </Flex>
          <Footer />
        </Flex>
      </Box>
    </>
  );
}
