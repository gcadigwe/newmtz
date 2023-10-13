import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.css";
import { Box, Img, Flex, Text, useMediaQuery, Button } from "@chakra-ui/react";
import gradient1 from "../../assets/svg/backgroundgradient1.svg";
import multichainz from "../../assets/svg/multichainz.svg";
// import telegram from "../assets/svg/telegram.svg";
// import twitter from "../assets/svg/twitter.svg";
import Navbar from "@/components/Navbar";
import Head from "next/head";
import airdropbg from "../../assets/airdropbg.png";
import JoinModal from "@/components/ComingSoon/Modals/JoinModal";
import { useState } from "react";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const [isMobileDevice] = useMediaQuery("(max-width: 750px)");
  const [isModalOpen, setisModalOpen] = useState(false);
  return (
    <>
      <Head>
        <title>MultichainZ</title>
        <meta name='description' content='Multichainz Protocol' />
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <link rel='icon' href='/icon.ico' />
      </Head>
      <Box
        // h={isMobileDevice ? "100vh" : "100vh"}
        position={"relative"}
        bgColor={"#070525"}
      >
        <Navbar />

        <Flex
          // w='100%'
          h={isMobileDevice ? "100vh" : "100vh"}
          bgColor={"#070525"}
          position={"relative"}
        >
          {!isMobileDevice && (
            <Img
              w='100vw'
              // h='100vh !important'
              src={airdropbg.src}
            />
          )}

          <Box
            zIndex={4}
            h='100%'
            w='100%'
            opacity={"0.4"}
            position={"absolute"}
            backgroundImage='url(http://www.transparenttextures.com/patterns/worn-dots.png);'
          ></Box>

          <Flex
            w='100%'
            top={isMobileDevice ? "30%" : "20%"}
            position={"absolute"}
            alignItems='center'
            flexDirection='column'
            pb={10}
          >
            <Img w='80%' src={multichainz.src} />

            <Text
              fontFamily={"summer-dreams"}
              textAlign={"center"}
              color='rgba(255, 203, 99, 1)'
              fontSize={{ sm: "18px", md: "24px", lg: "30px", xl: "30px" }}
              mt={20}
            >
              JOIN THE EARLY TESTNET BETA WHITELIST
            </Text>

            <Button
              onClick={() => setisModalOpen(true)}
              cursor={"pointer"}
              py={6}
              px={10}
              mt={10}
              fontFamily={"clash-display"}
              zIndex={8}
            >
              Join here
            </Button>
          </Flex>
        </Flex>
      </Box>

      <JoinModal isOpen={isModalOpen} onClose={() => setisModalOpen(false)} />
    </>
  );
}
