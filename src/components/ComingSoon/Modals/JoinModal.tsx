import {
  Modal,
  ModalOverlay,
  ModalContent,
  Flex,
  Img,
  Text,
  useMediaQuery,
  Button,
  Toast,
  useToast,
} from "@chakra-ui/react";
import registrationmodalbg from "../../../assets/svg/registrationmodalbg.svg";
import mobilejoinmodalbg from "../../../assets/svg/mobilejoinmodalbg.svg";
import successcheck from "../../../assets/svg/successcheck.svg";
import { ChevronDownIcon, CloseIcon } from "@chakra-ui/icons";
import { useEffect, useRef, useState } from "react";

import { ethers } from "ethers";
import { pb } from "@/utils/auth";

export default function JoinModal({
  isOpen,
  onClose,
}: {
  isOpen: boolean;
  onClose: () => void;
}) {
  // const { isOpen, onOpen, onClose } = useDisclosure()

  const [success, setSuccess] = useState(false);

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [walletAddress, setwalletAddress] = useState("");
  const [telegramJoined, setTelegramJoined] = useState(false);
  const [twitterFollowed, setTwitterFollowed] = useState(false);
  const [emailValid, setemailValid] = useState(false);
  const [error, setError] = useState("");
  const [isMobileDevice] = useMediaQuery("(max-width: 750px)");
  const toast = useToast();

  useEffect(() => {
    if (email) {
      if (email.includes("@")) {
        setemailValid(true);
      } else {
        setemailValid(false);
      }
    }
  }, [email]);

  const handleSubmit = async () => {
    try {
      const register = await pb.collection("testnet_signups").create({
        email: email,
        walletAddress: walletAddress,
        name: name,
      });

      toast({
        title: "Registration Successful",
        position: "top-right",
        isClosable: true,
        status: "success",
      });

      setSuccess(true);
    } catch (err) {
      console.log(err);
      toast({
        title: "An Error Occurred, Please Try Again Later",
        position: "top-right",
        isClosable: true,
        status: "error",
      });
    }
  };

  return (
    <>
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <Flex position={"relative"} fontFamily='droidsans'>
            <Img
              w='100%'
              src={
                isMobileDevice ? mobilejoinmodalbg.src : registrationmodalbg.src
              }
            />

            {success ? (
              <>
                <Flex
                  position={"absolute"}
                  top={0}
                  right={0}
                  p={8}
                  color='white'
                  cursor='pointer'
                  onClick={() => {
                    onClose();
                    setSuccess(false);
                  }}
                  justifyContent={"flex-end"}
                >
                  <CloseIcon />
                </Flex>
                <Flex
                  w='100%'
                  top='20%'
                  position={"absolute"}
                  flexDirection='column'
                >
                  <Flex w='100%' justifyContent={"center"}>
                    <Img w='200px' h='200px' src={successcheck.src} />
                  </Flex>
                  <Flex justifyContent={"center"} mt={32}>
                    <Text
                      fontFamily={"mulish"}
                      color='white'
                      fontSize={"32px"}
                      fontWeight='800'
                    >
                      Submission <br /> Registered!{" "}
                    </Text>
                  </Flex>
                </Flex>
              </>
            ) : (
              <>
                <Flex
                  py={8}
                  px={10}
                  position={"absolute"}
                  flexDirection='column'
                  color='white'
                  w='100%'
                >
                  <Flex
                    mb={6}
                    cursor='pointer'
                    onClick={() => onClose()}
                    justifyContent={"flex-end"}
                  >
                    <CloseIcon />
                  </Flex>
                  <Text
                    fontFamily={"mulish"}
                    fontWeight='800'
                    fontSize={"32px"}
                  >
                    Beta Testnet Whitelist
                  </Text>

                  <Flex mt={8} flexDirection={"column"} w='100%'>
                    <Text fontSize={{ lg: "14px", xl: "16px" }} mb={2}>
                      Name
                    </Text>
                    <input
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      style={{
                        outline: "none",
                        background: "transparent",
                        borderBottom: "2px solid #FFCB63",
                        width: "100%",
                      }}
                    />
                  </Flex>

                  <Flex mt={10} flexDirection={"column"}>
                    <Text mb={2} fontSize={{ lg: "14px", xl: "16px" }}>
                      Email
                    </Text>
                    <input
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      style={{
                        outline: "none",
                        background: "transparent",
                        borderBottom: "2px solid #FFCB63",
                        width: "100%",
                      }}
                    />
                  </Flex>

                  <Flex mt={10} flexDirection={"column"}>
                    <Text mb={2} fontSize={{ lg: "14px", xl: "16px" }}>
                      Wallet Address (BNB Chain / ARB Chain)
                    </Text>
                    <input
                      value={walletAddress}
                      onChange={(e) => setwalletAddress(e.target.value)}
                      style={{
                        outline: "none",
                        background: "transparent",
                        borderBottom: "2px solid #FFCB63",
                        width: "100%",
                      }}
                    />
                  </Flex>

                  <Flex mt={4} alignItems='center' mb={4}>
                    <input
                      onChange={(e) => setTwitterFollowed(e.target.checked)}
                      checked={twitterFollowed}
                      style={{ width: "20px", height: "20px", padding: "16px" }}
                      type='checkbox'
                    />

                    <Flex
                      ml={4}
                      px={4}
                      py={2}
                      bg='#FFFFFF0A'
                      alignItems={"center"}
                      cursor='pointer'
                    >
                      <a
                        href='https://twitter.com/multi_chainz/'
                        target={"_blank"}
                      >
                        <Text
                          ml={2}
                          textDecoration='underline'
                          fontSize={"18px"}
                        >
                          Follow us on Twitter
                        </Text>
                      </a>
                    </Flex>
                  </Flex>

                  <Flex alignItems={"center"} mb={4}>
                    <input
                      onChange={(e) => setTelegramJoined(e.target.checked)}
                      checked={telegramJoined}
                      style={{ width: "20px", height: "20px", padding: "16px" }}
                      type='checkbox'
                    />

                    <Flex
                      ml={4}
                      py={2}
                      px={4}
                      alignItems={"center"}
                      bg='#FFFFFF0A'
                      cursor={"pointer"}
                    >
                      <a href='https://t.me/Multi_ChainZ ' target={"_blank"}>
                        <Text
                          ml={2}
                          fontSize={"18px"}
                          textDecoration='underline'
                        >
                          Join us on Telegram
                        </Text>
                      </a>
                    </Flex>
                  </Flex>

                  <Text
                    visibility={error ? "hidden" : "visible"}
                    fontSize={"12px"}
                    color='red'
                  >
                    {error}
                  </Text>

                  <Button
                    isDisabled={
                      !name ||
                      !email ||
                      !walletAddress ||
                      !telegramJoined ||
                      !twitterFollowed ||
                      !emailValid
                    }
                    borderRadius={"24px"}
                    py={6}
                    _hover={{
                      bgColor: "#FFCB63",
                    }}
                    _active={{
                      bgColor: "#FFCB63",
                    }}
                    bgColor='#FFCB63'
                    mt={8}
                    justifyContent={"center"}
                    fontWeight='800'
                    cursor={"pointer"}
                    onClick={() => handleSubmit()}
                  >
                    <Text fontSize={"18px"} color='black'>
                      Submit
                    </Text>
                  </Button>
                </Flex>
              </>
            )}
          </Flex>
        </ModalContent>
      </Modal>
    </>
  );
}
