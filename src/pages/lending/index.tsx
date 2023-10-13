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
import { ChevronRightIcon } from "@chakra-ui/icons";

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
import { useState } from "react";
import Footer from "@/components/NewFooter";

export default function Landing2() {
  const [isMobileDevice] = useMediaQuery("(max-width: 750px)");

  const width = { sm: "80vw", md: "70vw", lg: "70vw", xl: "70vw" };

  const [complianceBoxActive, setcomplianceBoxActive] = useState(false);
  const [custodyBoxActive, setcustodyBoxActive] = useState(false);
  const [securityBoxActive, setsecurityBoxActive] = useState(false);
  const [efficiencyBoxActive, setefficiencyBoxActive] = useState(false);
  const [transparencyBoxActive, settransparencyBoxActive] = useState(false);
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
            background={'url("../../lending/lendingherobg.webp")'}
            backgroundSize={"cover"}
            backgroundRepeat='repeat'
            backgroundPosition={"center"}
            flexDirection='column'
            height={{ lg: "1100px", xl: "1300px" }}
            position='relative'
            zIndex={4}
          >
            <Flex position={"absolute"} top={0}>
              <Img
                src={lendingheroleft3d.src}
                w={{ lg: "600px", xl: "840px" }}
              />
            </Flex>

            <Flex position={"absolute"} right={0} top={-10}>
              <Img
                src={lendingheroright3d.src}
                w={{ lg: "600px", xl: "800px" }}
              />
            </Flex>

            <Flex position={"absolute"} bottom={-6} zIndex={3}>
              <Img src={lendingcross.src} />
            </Flex>

            <Flex position={"absolute"} bottom={28} right={10}>
              <Img src={lendinginvertedcross.src} />
            </Flex>
            <Navbar />

            <Flex flexDirection={"column"} mt={{ lg: 20, xl: 40 }} zIndex={2}>
              <Text
                color='white'
                fontFamily={"grotesk"}
                fontSize={{ lg: "100px", xl: "140px" }}
                textAlign='center'
                lineHeight={"1"}
              >
                THE LENDING <br /> SOLUTION FOR ALL
              </Text>

              <Text
                mt={8}
                textAlign={"center"}
                fontSize={{ lg: "26px", xl: "32px" }}
                lineHeight={"1.2"}
                fontFamily='manrope'
                color='white'
              >
                Bringing real-life use cases to DeFi lending through <br />{" "}
                interconnected, secure, and versatile <br /> infrastructures
                available for every type of user
              </Text>

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
                    Total Collateral
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
                    Total Collateral
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
                    Total Collateral
                  </Text>
                  <Text fontFamily={"grotesk"} fontSize='60px'>
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
            height={{ lg: "1100px", xl: "1300px" }}
            position='relative'
            mt={-28}
            zIndex={3}
            // justifyContent='center'
            pt={40}
          >
            <Flex justifyContent={"space-around"} zIndex={2}>
              <Text
                textAlign={"center"}
                mt={20}
                fontFamily={"grotesk"}
                fontSize='80px'
                lineHeight={"1"}
              >
                Lend and <br /> Borrow <br />
                in Multiple <br /> Chains
              </Text>

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

            <Flex
              zIndex={1}
              position={"absolute"}
              right={0}
              bottom={"-20%"}
              // w={{ lg: "600px", xl: "1000px" }}
            >
              <Img src={spring3dshape.src} />
            </Flex>
          </Flex>
          <Flex
            mt={-72}
            zIndex={2}
            w='100%'
            background={'url("../../lending/lendinginfoherobg.webp")'}
            backgroundSize={"cover"}
            backgroundRepeat='repeat'
            backgroundPosition={"center"}
            height={{ lg: "1100px", xl: "1300px" }}
            flexDirection='column'
          >
            <Flex justifyContent={"center"} w='100%'>
              <Text
                color='white'
                lineHeight={"1"}
                pt={60}
                textAlign={"center"}
                fontFamily='grotesk'
                fontSize={{ lg: "80px", xl: "110px" }}
              >
                Safe and Efficient <br /> Interoperable Lending
              </Text>
            </Flex>

            <Flex justifyContent={"center"} mt={40} gap={{ lg: 10, xl: 20 }}>
              <Flex
                w={{ lg: "320px", xl: "379px" }}
                h={{ lg: "280px", xl: "327px" }}
                background={'url("../../lending/firstlendinginfobg.png")'}
                backgroundSize={"cover"}
                backgroundRepeat='repeat'
                backgroundPosition={"center"}
              >
                <Flex
                  flexDirection={"column"}
                  px={{ lg: 6, xl: 12 }}
                  justifyContent='space-evenly'
                >
                  <Text
                    fontSize={{ lg: "18px", xl: "20px" }}
                    fontFamily='manrope'
                    color='white'
                  >
                    Seamlessly connecting secure interactions across diverse
                    blockchain networks, ensuring data integrity and
                    interoperability.
                  </Text>

                  <Flex color='white' alignItems={"center"}>
                    <Text fontFamily={"manrope"}>Read more</Text>
                    <ChevronRightIcon />
                  </Flex>
                </Flex>
              </Flex>

              <Flex
                w={{ lg: "320px", xl: "379px" }}
                h={{ lg: "280px", xl: "327px" }}
                background={'url("../../lending/secondlendinginfobg.png")'}
                backgroundSize={"cover"}
                backgroundRepeat='repeat'
                backgroundPosition={"center"}
              >
                <Flex
                  flexDirection={"column"}
                  px={{ lg: 6, xl: 12 }}
                  justifyContent='space-evenly'
                >
                  <Text
                    fontSize={{ lg: "18px", xl: "20px" }}
                    fontFamily='manrope'
                    color='white'
                  >
                    Strategy for borrowing while minimizing risk, creating a
                    secure and balanced financial approach
                  </Text>

                  <Flex color='white' alignItems={"center"}>
                    <Text fontFamily={"manrope"}>Read more</Text>
                    <ChevronRightIcon />
                  </Flex>
                </Flex>
              </Flex>

              <Flex
                w={{ lg: "320px", xl: "379px" }}
                h={{ lg: "280px", xl: "327px" }}
                background={'url("../../lending/thirdlendinginfobg.png")'}
                backgroundSize={"cover"}
                backgroundRepeat='repeat'
                backgroundPosition={"center"}
              >
                <Flex
                  flexDirection={"column"}
                  px={{ lg: 6, xl: 12 }}
                  justifyContent='space-evenly'
                >
                  <Text
                    fontSize={{ lg: "18px", xl: "20px" }}
                    fontFamily='manrope'
                    color='white'
                  >
                    Optimized lending pools for effective capital utilization
                    and enhanced borrowing and lending activities
                  </Text>

                  <Flex color='white' alignItems={"center"}>
                    <Text fontFamily={"manrope"}>Read more</Text>
                    <ChevronRightIcon />
                  </Flex>
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
            height={{ lg: "1100px", xl: "1300px" }}
            flexDirection='column'
          >
            <Text
              mt={60}
              lineHeight={"1"}
              textAlign={"center"}
              color='white'
              fontSize={{ lg: "60px", xl: "80px" }}
            >
              On-Chain lending available <br /> for all Institutions
            </Text>

            <Flex flexDirection={"column"} alignItems='center' mt={20}>
              <Flex gap={4}>
                <Flex
                  onMouseEnter={() => setcomplianceBoxActive(true)}
                  onMouseLeave={() => setcomplianceBoxActive(false)}
                  cursor={"pointer"}
                  background={
                    !complianceBoxActive
                      ? 'url("../../lending/complianceinactive.png")'
                      : 'url("../../lending/complianceactivebg.png")'
                  }
                  w={{ lg: "680px", xl: "900px" }}
                  h={{ lg: "260px", xl: "300px" }}
                  backgroundSize={"cover"}
                  backgroundRepeat='repeat'
                  backgroundPosition={"center"}
                  borderRadius={"20px"}
                  py={10}
                  px={10}
                >
                  <Flex flexDirection={"column"} gap={16} color='white'>
                    <Flex alignItems={"center"} gap={4}>
                      <Img
                        w={{ lg: "60px", xl: "80px" }}
                        src={
                          complianceBoxActive
                            ? activecompliancelogo.src
                            : compliancelogo.src
                        }
                      />
                      <Text
                        fontSize={{ lg: "34px", xl: "40px" }}
                        fontFamily='groteskmedium'
                      >
                        Compliance
                      </Text>
                    </Flex>
                    <Text
                      fontSize={{ lg: "20px", xl: "24px" }}
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
                  borderRadius={"20px"}
                  cursor={"pointer"}
                  background={
                    !custodyBoxActive
                      ? 'url("../../lending/custodyinactive.png")'
                      : 'url("../../lending/custodyactive.png")'
                  }
                  w={{ lg: "520px", xl: "600px" }}
                  h={{ lg: "260px", xl: "300px" }}
                  backgroundSize={"cover"}
                  backgroundRepeat='repeat'
                  backgroundPosition={"center"}
                  py={10}
                  px={8}
                >
                  <Flex flexDirection={"column"} gap={16} color='white'>
                    <Flex alignItems={"center"} gap={4}>
                      <Img
                        w={{ lg: "60px", xl: "80px" }}
                        src={
                          custodyBoxActive
                            ? activecustodylogo.src
                            : custodylogo.src
                        }
                      />
                      <Text
                        fontSize={{ lg: "34px", xl: "40px" }}
                        fontFamily='groteskmedium'
                      >
                        Custody
                      </Text>
                    </Flex>
                    <Text
                      fontSize={{ lg: "20px", xl: "24px" }}
                      fontFamily='manrope'
                    >
                      Institutional-grade asset custody partners to enhance
                      protocol liquidity security
                    </Text>
                  </Flex>
                </Flex>
              </Flex>

              <Flex gap={"9px"} mt={4}>
                <Flex
                  onMouseEnter={() => setsecurityBoxActive(true)}
                  onMouseLeave={() => setsecurityBoxActive(false)}
                  background={
                    !securityBoxActive
                      ? 'url("../../lending/securityinactive.png")'
                      : 'url("../../lending/securityactive.png")'
                  }
                  cursor='pointer'
                  borderRadius='20px'
                  w={{ lg: "400px", xl: "500px" }}
                  h={{ lg: "260px", xl: "300px" }}
                  backgroundSize={"cover"}
                  backgroundRepeat='repeat'
                  backgroundPosition={"center"}
                  py={8}
                  px={10}
                >
                  <Flex flexDirection={"column"} gap={16} color='white'>
                    <Flex alignItems={"center"} gap={4}>
                      <Img
                        w={{ lg: "60px", xl: "80px" }}
                        src={
                          securityBoxActive
                            ? activesecuritylogo.src
                            : securitylogo.src
                        }
                      />
                      <Text
                        fontSize={{ lg: "34px", xl: "40px" }}
                        fontFamily='groteskmedium'
                      >
                        Security
                      </Text>
                    </Flex>
                    <Text
                      fontSize={{ lg: "20px", xl: "24px" }}
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
                  w={{ lg: "400px", xl: "500px" }}
                  h={{ lg: "260px", xl: "300px" }}
                  backgroundSize={"cover"}
                  backgroundRepeat='repeat'
                  backgroundPosition={"center"}
                  cursor='pointer'
                  borderRadius='20px'
                  py={8}
                  px={10}
                >
                  <Flex flexDirection={"column"} gap={16} color='white'>
                    <Flex alignItems={"center"} gap={4}>
                      <Img
                        w={{ lg: "60px", xl: "80px" }}
                        src={
                          efficiencyBoxActive
                            ? activeefficiencylogo.src
                            : efficiencylogo.src
                        }
                      />
                      <Text
                        fontSize={{ lg: "34px", xl: "40px" }}
                        fontFamily='groteskmedium'
                      >
                        Efficiency
                      </Text>
                    </Flex>
                    <Text
                      fontSize={{ lg: "20px", xl: "24px" }}
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
                  w={{ lg: "400px", xl: "500px" }}
                  h={{ lg: "260px", xl: "300px" }}
                  backgroundSize={"cover"}
                  backgroundRepeat='repeat'
                  backgroundPosition={"center"}
                  cursor='pointer'
                  borderRadius='20px'
                  py={8}
                  px={10}
                >
                  <Flex flexDirection={"column"} gap={16} color='white'>
                    <Flex alignItems={"center"} gap={4}>
                      <Img
                        src={transparencylogo.src}
                        w={{ lg: "60px", xl: "80px" }}
                      />
                      <Text
                        fontSize={{ lg: "34px", xl: "40px" }}
                        fontFamily='groteskmedium'
                      >
                        Transparency
                      </Text>
                    </Flex>
                    <Text
                      fontSize={{ lg: "20px", xl: "24px" }}
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
            background={'url("../../lending/lendingsupportherobg.webp")'}
            backgroundSize={"cover"}
            // backgroundRepeat='repeat'
            // backgroundPosition={"center"}
            w='100%'
            height={{ lg: "940px", xl: "960px" }}
            zIndex={4}
            mt={-10}
            position='relative'
            alignItems={"center"}
          >
            <Flex position={"absolute"} top={14}>
              <Img src={lendingsupportleft3d.src} />
            </Flex>
            <Flex alignItems={"center"} justifyContent='space-evenly' w='100%'>
              <Flex flexDirection={"column"} gap={8}>
                <Text
                  fontSize={{ lg: "80px", xl: "120px" }}
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
