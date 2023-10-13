"use client";

import nftliquidityimage from "../../../assets/nftliquidityimage.png";
import collateralimage from "../../../assets/collateralimage.png";
import empowerimage from "../../../assets/empowerimage.png";
import nftliquborroidityimage from "../../../assets/nftliquidityimage.png";
import borrowersimage from "../../../assets/borrowersimage.png";
import lendersimage from "../../../assets/lendersimage.png";
import { Card, Flex, Img, Text } from "@chakra-ui/react";
import { motion, useScroll, useInView, useAnimation } from "framer-motion";
import { useEffect, useRef } from "react";
import { Parallax, ParallaxLayer } from "@react-spring/parallax";
import { ScaleFade } from "@chakra-ui/react";

export function CardComponent({ mt, cardInfo }: any) {
  const ref = useRef<HTMLDivElement>(null);
  //   const { scrollYProgress } = useScroll({
  //     target: ref,
  //     offset: ["0 1", "1.33 1"],
  //   });
  const isInView = useInView(ref, { margin: "-50% 0px -50% 0px" });
  const mainControls = useAnimation();

  console.log(isInView);

  useEffect(() => {
    if (isInView) {
      mainControls.start("visible");
    } else {
      mainControls.start("hidden");
    }
  }, [isInView]);
  return (
    // <ScaleFade in={isInView}>
    <motion.div
      ref={ref}
      variants={{
        hidden: {
          opacity: 0,
        },
        visible: {
          opacity: 1,
        },
      }}
      initial='hidden'
      animate={mainControls}
      transition={{ duration: 0.5 }}
    >
      <Flex
        w='400px'
        flexDirection={"column"}
        border='2px solid black'
        borderRadius={"30px"}
        minH='450px'
        // mt={mt}
        p={6}
      >
        <Img src={cardInfo.img.src} />
        <Text my={4} fontFamily={"manrope"} fontSize='36px'>
          {cardInfo.title}
        </Text>
        <Text fontSize={"24px"} fontFamily='manrope'>
          {cardInfo.subText}
          {/* Access permissionless liquidity across multiple blockchains for your
          fund, startup, real estate or other financial needs */}
        </Text>
      </Flex>
    </motion.div>
    // {/* </ScaleFade> */}
  );
}

export default function LendingInfo({ sectionInfo }: any) {
  console.log(sectionInfo);
  return (
    <Flex
      w='100%'
      mt={60}
      // h='600px'
      // h='1000px'
      // overflow={"scroll"}
      justifyContent='space-evenly'
    >
      <Flex
        flexDirection={"column"}
        alignSelf={"flex-start"}
        position='sticky'
        top={"30%"}
      >
        {sectionInfo.title}
        {sectionInfo.subText}
      </Flex>

      <Flex flexDirection={"column"}>
        {sectionInfo?.cards.map((card: any, idx: any) => (
          <CardComponent
            key={idx}
            mt={idx == 0 ? "0px" : "600px"}
            cardInfo={card}
          />
        ))}
        {/* <CardComponent mt={"0px"} element={"first"} />
        <CardComponent mt={"600px"} element={"second"} />
        <CardComponent mt={"600px"} element={"third"} /> */}
      </Flex>
    </Flex>
  );
}
