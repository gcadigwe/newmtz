import Navbar from "@/components/YieldV2/Navbar";
import { Box, Flex, Img, Text, Button } from "@chakra-ui/react";
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
import { ChevronRightIcon } from "@chakra-ui/icons";
import Footer from "@/components/NewFooter";

export default function DaoV2() {
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
            background={'url("../../yield/yieldherobg.webp")'}
            backgroundSize={"cover"}
            backgroundRepeat='repeat'
            backgroundPosition={"right"}
            flexDirection='column'
            height={{ lg: "1000px", xl: "1100px" }}
            position='relative'
            zIndex={5}
          >
            <Flex position={"absolute"} bottom={20}>
              <Img
                src={daocompletestar3d.src}
                w={{ lg: "440px", xl: "480px" }}
              />
            </Flex>

            <Flex position={"absolute"} right={0} top={40}>
              <Img src={daocoil3d.src} w='460px' />
            </Flex>
            <Navbar />
            <Flex
              zIndex={2}
              flexDirection={"column"}
              mt={{ lg: 24, xl: 20 }}
              alignItems='center'
            >
              <Text
                fontFamily={"grotesk"}
                fontSize={{ lg: "100px", xl: "140px" }}
                textAlign='center'
                lineHeight={"0.9"}
              >
                MULTICHAINZ DAO
                <br />
                EMPOWERING <br /> COMMUNITY
              </Text>

              <Text
                mt={20}
                textAlign={"center"}
                fontSize={{ lg: "26px", xl: "32px" }}
                lineHeight={"1.2"}
                fontFamily='manrope'
              >
                Propose, vote, and engage to help us shape the <br /> future of
                our decentralized ecosystem through <br /> your active
                participation
              </Text>

              <Button
                mt={20}
                color='black'
                fontSize={{ lg: "18px", xl: "22px" }}
                w={{ lg: "160px", xl: "200px" }}
                h={{ lg: "62px", xl: "70px" }}
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
            height={{ lg: "1200px", xl: "1200px" }}
            position='relative'
            mt={-40}
            justifyContent='center'
            zIndex={4}
          >
            <Flex
              justifyContent={"space-evenly"}
              zIndex={2}
              alignItems='center'
            >
              <Flex flexDirection={"column"} color='white'>
                <Text
                  textAlign={"center"}
                  mt={20}
                  fontFamily={"grotesk"}
                  fontSize={{ lg: "100px", xl: "120px" }}
                  lineHeight={"0.9"}
                >
                  CHAINZ the <br /> Governance <br /> Token
                </Text>
                <Text
                  fontSize={{ lg: "24px", xl: "32px" }}
                  color='#F5F5F5'
                  fontFamily='manrope'
                  mt={6}
                >
                  Use CHAINZ to submit priority proposals, <br /> get voting
                  powers, and access exclusive <br /> benefits to govern
                  Multichainz
                </Text>
              </Flex>

              <Flex flexDirection={"column"} gap={4}>
                <Flex>
                  <ChainsCard img={binance.src} />
                  <ChainsCard img={polygon.src} />
                </Flex>
                <Flex>
                  <ChainsCard img={arbitrum.src} />
                  <ChainsCard img={optimism.src} />
                </Flex>

                <Flex flexDirection={"column"} justifySelf='flex-start'>
                  <Text
                    fontFamily={"manropebd"}
                    fontSize='26px'
                    color='white'
                    my={6}
                  >
                    Learn More
                  </Text>
                  <Img w='500px' src={cmcgecko.src} />
                </Flex>
              </Flex>
            </Flex>
          </Flex>
          <Flex
            mt={{ lg: -60, xl: -40 }}
            w='100%'
            background={'url("../../dao/decisionmakersherobg.webp")'}
            backgroundSize={"cover"}
            backgroundRepeat='repeat'
            backgroundPosition={"center"}
            flexDirection='column'
            height={{ lg: "1200px", xl: "1200px" }}
            position='relative'
            justifyContent={"center"}
          >
            <Flex position={"absolute"} zIndex={5} top={-32}>
              <Img src={daohalfsmallsphere.src} />
            </Flex>

            <Flex position={"absolute"} zIndex={1} right={0} top={20}>
              <Img src={daohalfbigsphere.src} w='480px' />
            </Flex>

            <Flex
              justifyContent={"space-evenly"}
              zIndex={2}
              alignItems='center'
            >
              <Flex flexDirection={"column"} color='white'>
                <Text
                  textAlign={"center"}
                  mt={20}
                  fontFamily={"grotesk"}
                  fontSize={{ lg: "100px", xl: "120px" }}
                  lineHeight={"0.9"}
                >
                  The <br /> Decision <br /> Makers
                </Text>
                <Text
                  fontSize={{ lg: "24px", xl: "32px" }}
                  color='#F5F5F5'
                  fontFamily='manrope'
                  mt={6}
                >
                  Actively participate in protocol <br /> decisions to help
                  shape the future <br /> of the ecosystem through <br />{" "}
                  proposing and voting mechanisms <br /> formed by all relevant
                  stakeholders
                </Text>
              </Flex>

              <Img w='680px' src={decisionmakers.src} zIndex={2} />
            </Flex>
          </Flex>
          <Flex
            mt={-40}
            zIndex={2}
            w='100%'
            background={'url("../../dao/daosubmitproposalbg.webp")'}
            backgroundSize={"cover"}
            backgroundRepeat='repeat'
            // backgroundPosition={"center"}
            flexDirection='column'
            height={{ lg: "1800px", xl: "2000px" }}
            position='relative'
          >
            <Flex justifyContent={"space-evenly"} pt={{ lg: 60, xl: 80 }}>
              <Flex flexDirection={"column"} gap={20} mt={20}>
                <Flex gap={4}>
                  <Flex
                    mt={1}
                    w='40px'
                    h='40px'
                    right={{ lg: 24, xl: 28 }}
                    background={'url("../../bigtreasurybalancecircle.png")'}
                    backgroundSize={"cover"}
                    backgroundRepeat='repeat'
                    backgroundPosition={"center"}
                    justifyContent='center'
                    alignItems={"center"}
                    color='white'
                    fontFamily={"manropebd"}
                    fontSize='24px'
                  >
                    1
                  </Flex>

                  <Flex flexDirection={"column"} mb={4} gap={6}>
                    <Text fontFamily={"manropebd"} fontSize='32px'>
                      Sign Up to Forum
                    </Text>

                    <Text fontFamily={"manrope"} fontSize='26px'>
                      Create an account on our forum and <br /> get approved to
                      propose and <br /> comment in the interface
                    </Text>
                  </Flex>
                </Flex>

                <Flex gap={4}>
                  <Flex
                    mt={1}
                    w='40px'
                    h='40px'
                    right={{ lg: 24, xl: 28 }}
                    background={'url("../../bigtreasurybalancecircle.png")'}
                    backgroundSize={"cover"}
                    backgroundRepeat='repeat'
                    backgroundPosition={"center"}
                    justifyContent='center'
                    alignItems={"center"}
                    color='white'
                    fontFamily={"manropebd"}
                    fontSize='24px'
                  >
                    2
                  </Flex>

                  <Flex flexDirection={"column"} mb={4} gap={6}>
                    <Text fontFamily={"manropebd"} fontSize='32px'>
                      Submit a Forum Proposal
                    </Text>

                    <Text fontFamily={"manrope"} fontSize='26px'>
                      Upload your proposal for improvement <br /> or suggestion
                      to the forum and receive <br /> feedback and community
                      interest
                    </Text>
                  </Flex>
                </Flex>

                <Flex gap={4}>
                  <Flex
                    mt={1}
                    w='40px'
                    h='40px'
                    right={{ lg: 24, xl: 28 }}
                    background={'url("../../bigtreasurybalancecircle.png")'}
                    backgroundSize={"cover"}
                    backgroundRepeat='repeat'
                    backgroundPosition={"center"}
                    justifyContent='center'
                    alignItems={"center"}
                    color='white'
                    fontFamily={"manropebd"}
                    fontSize='24px'
                  >
                    3
                  </Flex>

                  <Flex flexDirection={"column"} mb={4} gap={6}>
                    <Text fontFamily={"manropebd"} fontSize='32px'>
                      Submit a Forum Proposal
                    </Text>

                    <Text fontFamily={"manrope"} fontSize='26px'>
                      If the forum interest is big, connect <br /> your wallet
                      to Snapshot, and submit <br /> the proposal
                    </Text>
                  </Flex>
                </Flex>

                <Flex gap={4}>
                  <Flex
                    mt={1}
                    w='40px'
                    h='40px'
                    right={{ lg: 24, xl: 28 }}
                    background={'url("../../bigtreasurybalancecircle.png")'}
                    backgroundSize={"cover"}
                    backgroundRepeat='repeat'
                    backgroundPosition={"center"}
                    justifyContent='center'
                    alignItems={"center"}
                    color='white'
                    fontFamily={"manropebd"}
                    fontSize='24px'
                  >
                    4
                  </Flex>

                  <Flex flexDirection={"column"} mb={4} gap={6}>
                    <Text fontFamily={"manropebd"} fontSize='32px'>
                      Submit a Github Proposal
                    </Text>

                    <Text fontFamily={"manrope"} fontSize='26px'>
                      Once approved in Snapshot, create a <br /> Github request
                      for the proposal to be <br /> voted by all MTZ token
                      holders
                    </Text>
                  </Flex>
                </Flex>
              </Flex>

              <Flex flexDirection={"column"} color='black'>
                <Img src={daocircles3d.src} w='460px' />
                <Text
                  textAlign={"center"}
                  fontFamily={"grotesk"}
                  fontSize={{ lg: "100px", xl: "120px" }}
                  lineHeight={"0.9"}
                >
                  Submit a <br /> Proposal
                </Text>
                <Text
                  fontSize={{ lg: "24px", xl: "32px" }}
                  color='black'
                  fontFamily='manrope'
                  mt={6}
                >
                  The DAO Process to submit a <br /> proposal is easy and
                  intuitive, <br /> allowing everyone to submit any <br />{" "}
                  proposal at any time
                </Text>
              </Flex>
            </Flex>
            <Flex position={"absolute"} right={0} bottom={{ lg: -40, xl: -60 }}>
              <Img src={daostar3d.src} w={{ lg: "400px", xl: "500px" }} />
            </Flex>
          </Flex>
          <Flex
            mt={-48}
            zIndex={1}
            w='100%'
            background={'url("../../dao/daoaboutbg.webp")'}
            backgroundSize={"cover"}
            backgroundRepeat='repeat'
            backgroundPosition={"center"}
            flexDirection='column'
            height={{ lg: "1200px", xl: "1200px" }}
            position='relative'
          >
            <Flex flexDirection={"column"} mt={60}>
              <Text
                color='#F5F5F5'
                textAlign={"center"}
                fontFamily={"grotesk"}
                fontSize={{ lg: "100px", xl: "120px" }}
                lineHeight={"0.9"}
              >
                About MultichainZ <br /> Governance
              </Text>

              <Flex flexDirection={"column"} mt={40}>
                <Flex gap={14} ml={60} overflow='scroll'>
                  <Flex
                    borderRadius={"20px"}
                    border='1.33px solid #FCFCFC'
                    minW='400px'
                    h={"360px"}
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
                    <Text fontSize={"32px"} fontFamily='manropebd'>
                      Our Forum
                    </Text>
                    <Text
                      fontSize={"22px"}
                      fontFamily='manrope'
                      lineHeight={"1.2"}
                    >
                      Visit our forum to know and <br /> engage with active
                      proposals <br /> and its categories
                    </Text>

                    <Flex alignItems={"center"}>
                      <Text fontSize={"16px"} fontFamily={"manropemd"}>
                        Go to Forum
                      </Text>
                      <ChevronRightIcon />
                    </Flex>
                  </Flex>

                  <Flex
                    borderRadius={"20px"}
                    border='1.33px solid #FCFCFC'
                    minW='400px'
                    h={"360px"}
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
                    <Text fontSize={"32px"} fontFamily='manropebd'>
                      Proposals
                    </Text>
                    <Text
                      fontSize={"22px"}
                      fontFamily='manrope'
                      lineHeight={"1.2"}
                    >
                      Read our process to submit <br /> proposals to our DAO and
                      learn <br /> its guidelines
                    </Text>

                    <Flex alignItems={"center"}>
                      <Text fontSize={"16px"} fontFamily={"manropemd"}>
                        Go to Guide
                      </Text>
                      <ChevronRightIcon />
                    </Flex>
                  </Flex>

                  <Flex
                    borderRadius={"20px"}
                    border='1.33px solid #FCFCFC'
                    minW='400px'
                    h={"360px"}
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
                    <Text fontSize={"32px"} fontFamily='manropebd'>
                      Voting
                    </Text>
                    <Text
                      fontSize={"22px"}
                      fontFamily='manrope'
                      lineHeight={"1.2"}
                    >
                      Learn more about voting <br /> processes, vote delegation,{" "}
                      <br /> and vote types
                    </Text>

                    <Flex alignItems={"center"}>
                      <Text fontSize={"16px"} fontFamily={"manropemd"}>
                        Go to Manual
                      </Text>
                      <ChevronRightIcon />
                    </Flex>
                  </Flex>

                  <Flex
                    borderRadius={"20px"}
                    border='1.33px solid #FCFCFC'
                    minW='400px'
                    h={"360px"}
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
                    <Text fontSize={"32px"} fontFamily='manropebd'>
                      FAQs
                    </Text>
                    <Text
                      fontSize={"22px"}
                      fontFamily='manrope'
                      lineHeight={"1.2"}
                    >
                      Solve any questions you have about <br /> our governance
                      model <br /> and process
                    </Text>

                    <Flex alignItems={"center"}>
                      <Text fontSize={"16px"} fontFamily={"manropemd"}>
                        Go to FAQs
                      </Text>
                      <ChevronRightIcon />
                    </Flex>
                  </Flex>
                </Flex>
              </Flex>
            </Flex>
            <Flex position={"absolute"} bottom={-80}>
              <Img src={daotriangle3d.src} w='500px' />
            </Flex>
          </Flex>
          <Footer />
        </Flex>
      </Box>
    </>
  );
}
