import {
  TableContainer,
  Table,
  TableCaption,
  Thead,
  Tr,
  Th,
  Tbody,
  Td,
  Tfoot,
  Text,
  Flex,
} from "@chakra-ui/react";

export default function TokenSaleTable() {
  return (
    <TableContainer>
      <Table variant='simple' size={"xs"} colorScheme='black'>
        <Thead>
          <Tr>
            <Th
              bgColor={"rgba(239, 239, 239, 1)"}
              borderRight={"1px solid black"}
            >
              <Flex justifyContent={"center"}>
                <Text fontFamily={"Fira-Code"}>Round</Text>
              </Flex>
            </Th>
            <Th
              bgColor={"rgba(239, 239, 239, 1)"}
              borderRight={"1px solid black"}
            >
              <Flex justifyContent={"center"}>
                <Text fontFamily={"Fira-Code"}> % </Text>
              </Flex>
            </Th>
            <Th
              bgColor={"rgba(239, 239, 239, 1)"}
              isNumeric
              borderRight={"1px solid black"}
            >
              <Flex fontFamily={"Fira-Code"} justifyContent={"center"}>
                <Text>#</Text>
              </Flex>
            </Th>
            <Th
              bgColor={"rgba(239, 239, 239, 1)"}
              ml={4}
              justifyContent={"center"}
              py={4}
              borderRight={"1px solid black"}
            >
              <Flex justifyContent={"center"}>
                <Text fontFamily={"Fira-Code"}>Price</Text>
              </Flex>
            </Th>
            <Th
              bgColor={"rgba(239, 239, 239, 1)"}
              ml={4}
              justifyContent={"center"}
              py={4}
              borderRight={"1px solid black"}
            >
              <Flex justifyContent={"center"}>
                <Text fontFamily={"Fira-Code"}>Hard Cap</Text>
              </Flex>
            </Th>
            <Th
              bgColor={"rgba(239, 239, 239, 1)"}
              ml={4}
              justifyContent={"center"}
              py={4}
              borderRight={"1px solid black"}
            >
              <Flex justifyContent={"center"}>
                <Text fontFamily={"Fira-Code"}>BNB/ETH Raise</Text>
              </Flex>
            </Th>
            <Th
              bgColor={"rgba(239, 239, 239, 1)"}
              ml={4}
              justifyContent={"center"}
              py={4}
            >
              <Flex justifyContent={"center"}>
                <Text fontFamily={"Fira-Code"}>Vesting</Text>
              </Flex>
            </Th>
          </Tr>
        </Thead>
        <Tbody>
          <Tr>
            <Td
              fontSize={"14px"}
              fontFamily='Fira-Code'
              borderRight={"1px solid black"}
            >
              <Flex justifyContent={"center"}>
                <Text>Seed/Lead</Text>
              </Flex>
            </Td>
            <Td
              fontSize={"14px"}
              fontFamily='Fira-Code'
              borderRight={"1px solid black"}
            >
              <Flex justifyContent={"center"}>
                <Text> 20%</Text>
              </Flex>
            </Td>
            <Td
              fontSize={"14px"}
              fontFamily='Fira-Code'
              borderRight={"1px solid black"}
              isNumeric
            >
              <Flex justifyContent={"center"}>
                <Text> 400,000,000</Text>
              </Flex>
            </Td>
            <Td
              borderRight={"1px solid black"}
              fontSize={"14px"}
              fontFamily='Fira-Code'
              mx={0}
            >
              <Flex justifyContent={"center"}>
                <Text textAlign={"center"}>$0.003</Text>
              </Flex>
            </Td>
            <Td
              borderRight={"1px solid black"}
              fontSize={"14px"}
              fontFamily='Fira-Code'
              mx={0}
            >
              <Flex justifyContent={"center"}>
                <Text textAlign={"center"}>$1,200,000</Text>
              </Flex>
            </Td>

            <Td
              borderRight={"1px solid black"}
              fontSize={"14px"}
              fontFamily='Fira-Code'
              mx={0}
            >
              <Flex justifyContent={"center"}>
                <Text textAlign={"center"}>631.58 ETH</Text>
              </Flex>
            </Td>

            <Td fontSize={"14px"} fontFamily='Fira-Code' mx={0}>
              <Flex justifyContent={"center"}>
                <Text textAlign={"center"}>
                  Vested for 5 years. 6-month <br /> cliff with 10% unlocks{" "}
                  <br /> every semester
                </Text>
              </Flex>
            </Td>
          </Tr>

          <Tr>
            <Td
              fontSize={"14px"}
              fontFamily='Fira-Code'
              borderRight={"1px solid black"}
            >
              <Flex justifyContent={"center"}>
                <Text>Angels/KOLs</Text>
              </Flex>
            </Td>
            <Td
              fontSize={"14px"}
              fontFamily='Fira-Code'
              borderRight={"1px solid black"}
            >
              <Flex justifyContent={"center"}>
                <Text> 15%</Text>
              </Flex>
            </Td>
            <Td
              fontSize={"14px"}
              fontFamily='Fira-Code'
              borderRight={"1px solid black"}
              isNumeric
            >
              <Flex justifyContent={"center"}>
                <Text> 300,000,000</Text>
              </Flex>
            </Td>
            <Td
              borderRight={"1px solid black"}
              fontSize={"14px"}
              fontFamily='Fira-Code'
              mx={0}
            >
              <Flex justifyContent={"center"}>
                <Text textAlign={"center"}>$0.007</Text>
              </Flex>
            </Td>
            <Td
              borderRight={"1px solid black"}
              fontSize={"14px"}
              fontFamily='Fira-Code'
              mx={0}
            >
              <Flex justifyContent={"center"}>
                <Text textAlign={"center"}>$2,100,000</Text>
              </Flex>
            </Td>

            <Td
              borderRight={"1px solid black"}
              fontSize={"14px"}
              fontFamily='Fira-Code'
              mx={0}
            >
              <Flex justifyContent={"center"}>
                <Text textAlign={"center"}>1105.26 ETH</Text>
              </Flex>
            </Td>

            <Td fontSize={"14px"} fontFamily='Fira-Code' mx={0}>
              <Flex justifyContent={"center"}>
                <Text textAlign={"center"}>
                  Vested for 3 years. 10% <br /> unlock after 5 days of TGE{" "}
                  <br /> followed by 15% unlocks <br /> every semester
                </Text>
              </Flex>
            </Td>
          </Tr>

          <Tr>
            <Td
              fontSize={"14px"}
              fontFamily='Fira-Code'
              borderRight={"1px solid black"}
            >
              <Flex justifyContent={"center"}>
                <Text>Private</Text>
              </Flex>
            </Td>
            <Td
              fontSize={"14px"}
              fontFamily='Fira-Code'
              borderRight={"1px solid black"}
            >
              <Flex justifyContent={"center"}>
                <Text> 20%</Text>
              </Flex>
            </Td>
            <Td
              fontSize={"14px"}
              fontFamily='Fira-Code'
              borderRight={"1px solid black"}
              isNumeric
            >
              <Flex justifyContent={"center"}>
                <Text> 400,000,000</Text>
              </Flex>
            </Td>
            <Td
              borderRight={"1px solid black"}
              fontSize={"14px"}
              fontFamily='Fira-Code'
              mx={0}
            >
              <Flex justifyContent={"center"}>
                <Text textAlign={"center"}>$0.009</Text>
              </Flex>
            </Td>
            <Td
              borderRight={"1px solid black"}
              fontSize={"14px"}
              fontFamily='Fira-Code'
              mx={0}
            >
              <Flex justifyContent={"center"}>
                <Text textAlign={"center"}>$3,600,000</Text>
              </Flex>
            </Td>

            <Td
              borderRight={"1px solid black"}
              fontSize={"14px"}
              fontFamily='Fira-Code'
              mx={0}
            >
              <Flex justifyContent={"center"}>
                <Text textAlign={"center"}>1894.74 ETH</Text>
              </Flex>
            </Td>

            <Td fontSize={"14px"} fontFamily='Fira-Code' mx={0}>
              <Flex justifyContent={"center"}>
                <Text textAlign={"center"}>
                  Vested for 22 months. <br />
                  6-month cliff with 20% <br /> unlocks every quarter
                </Text>
              </Flex>
            </Td>
          </Tr>

          <Tr>
            <Td
              fontSize={"14px"}
              fontFamily='Fira-Code'
              borderRight={"1px solid black"}
            >
              <Flex justifyContent={"center"}>
                <Text>Discord OG</Text>
              </Flex>
            </Td>
            <Td
              fontSize={"14px"}
              fontFamily='Fira-Code'
              borderRight={"1px solid black"}
            >
              <Flex justifyContent={"center"}>
                <Text> 5%</Text>
              </Flex>
            </Td>
            <Td
              fontSize={"14px"}
              fontFamily='Fira-Code'
              borderRight={"1px solid black"}
              isNumeric
            >
              <Flex justifyContent={"center"}>
                <Text> 100,000,000</Text>
              </Flex>
            </Td>
            <Td
              borderRight={"1px solid black"}
              fontSize={"14px"}
              fontFamily='Fira-Code'
              mx={0}
            >
              <Flex justifyContent={"center"}>
                <Text textAlign={"center"}>$0.015</Text>
              </Flex>
            </Td>
            <Td
              borderRight={"1px solid black"}
              fontSize={"14px"}
              fontFamily='Fira-Code'
              mx={0}
            >
              <Flex justifyContent={"center"}>
                <Text textAlign={"center"}>$1,500,000</Text>
              </Flex>
            </Td>

            <Td
              borderRight={"1px solid black"}
              fontSize={"14px"}
              fontFamily='Fira-Code'
              mx={0}
            >
              <Flex justifyContent={"center"}>
                <Text textAlign={"center"}>789.47 ETH</Text>
              </Flex>
            </Td>

            <Td fontSize={"14px"} fontFamily='Fira-Code' mx={0}>
              <Flex justifyContent={"center"}>
                <Text textAlign={"center"}>
                  Vested for 10 months.
                  <br />
                  10% unlock at TGE <br />
                  followed <br /> by 9% monthly unlocks
                </Text>
              </Flex>
            </Td>
          </Tr>

          <Tr>
            <Td
              fontSize={"14px"}
              fontFamily='Fira-Code'
              borderRight={"1px solid black"}
            >
              <Flex justifyContent={"center"}>
                <Text>Twitter OG</Text>
              </Flex>
            </Td>
            <Td
              fontSize={"14px"}
              fontFamily='Fira-Code'
              borderRight={"1px solid black"}
            >
              <Flex justifyContent={"center"}>
                <Text> 5%</Text>
              </Flex>
            </Td>
            <Td
              fontSize={"14px"}
              fontFamily='Fira-Code'
              borderRight={"1px solid black"}
              isNumeric
            >
              <Flex justifyContent={"center"}>
                <Text> 100,000,000</Text>
              </Flex>
            </Td>
            <Td
              borderRight={"1px solid black"}
              fontSize={"14px"}
              fontFamily='Fira-Code'
              mx={0}
            >
              <Flex justifyContent={"center"}>
                <Text textAlign={"center"}>$0.015</Text>
              </Flex>
            </Td>
            <Td
              borderRight={"1px solid black"}
              fontSize={"14px"}
              fontFamily='Fira-Code'
              mx={0}
            >
              <Flex justifyContent={"center"}>
                <Text textAlign={"center"}>$1,500,000</Text>
              </Flex>
            </Td>

            <Td
              borderRight={"1px solid black"}
              fontSize={"14px"}
              fontFamily='Fira-Code'
              mx={0}
            >
              <Flex justifyContent={"center"}>
                <Text textAlign={"center"}>789.47 ETH</Text>
              </Flex>
            </Td>

            <Td fontSize={"14px"} fontFamily='Fira-Code' mx={0}>
              <Flex justifyContent={"center"}>
                <Text textAlign={"center"}>
                  Vested for 10 months.
                  <br />
                  10% unlock at TGE followed <br /> by 9% monthly unlocks
                </Text>
              </Flex>
            </Td>
          </Tr>

          <Tr>
            <Td
              fontSize={"14px"}
              fontFamily='Fira-Code'
              borderRight={"1px solid black"}
            >
              <Flex justifyContent={"center"}>
                <Text textAlign={"center"}>
                  BSC <br /> Community
                </Text>
              </Flex>
            </Td>
            <Td
              fontSize={"14px"}
              fontFamily='Fira-Code'
              borderRight={"1px solid black"}
            >
              <Flex justifyContent={"center"}>
                <Text> 5%</Text>
              </Flex>
            </Td>
            <Td
              fontSize={"14px"}
              fontFamily='Fira-Code'
              borderRight={"1px solid black"}
              isNumeric
            >
              <Flex justifyContent={"center"}>
                <Text> 100,000,000</Text>
              </Flex>
            </Td>
            <Td
              borderRight={"1px solid black"}
              fontSize={"14px"}
              fontFamily='Fira-Code'
              mx={0}
            >
              <Flex justifyContent={"center"}>
                <Text textAlign={"center"}>$0.015</Text>
              </Flex>
            </Td>
            <Td
              borderRight={"1px solid black"}
              fontSize={"14px"}
              fontFamily='Fira-Code'
              mx={0}
            >
              <Flex justifyContent={"center"}>
                <Text textAlign={"center"}>$1,500,000</Text>
              </Flex>
            </Td>

            <Td
              borderRight={"1px solid black"}
              fontSize={"14px"}
              fontFamily='Fira-Code'
              mx={0}
            >
              <Flex justifyContent={"center"}>
                <Text textAlign={"center"}>5000 BNB</Text>
              </Flex>
            </Td>

            <Td fontSize={"14px"} fontFamily='Fira-Code' mx={0}>
              <Flex justifyContent={"center"}>
                <Text textAlign={"center"}>
                  Vested for 9 months.
                  <br />
                  10% unlock at TGE followed <br /> by 10% monthly unlocks
                </Text>
              </Flex>
            </Td>
          </Tr>

          <Tr>
            <Td
              fontSize={"14px"}
              fontFamily='Fira-Code'
              borderRight={"1px solid black"}
            >
              <Flex justifyContent={"center"}>
                <Text>Public</Text>
              </Flex>
            </Td>
            <Td
              fontSize={"14px"}
              fontFamily='Fira-Code'
              borderRight={"1px solid black"}
            >
              <Flex justifyContent={"center"}>
                <Text> 30%</Text>
              </Flex>
            </Td>
            <Td
              fontSize={"14px"}
              fontFamily='Fira-Code'
              borderRight={"1px solid black"}
              isNumeric
            >
              <Flex justifyContent={"center"}>
                <Text> 600,000,000</Text>
              </Flex>
            </Td>
            <Td
              borderRight={"1px solid black"}
              fontSize={"14px"}
              fontFamily='Fira-Code'
              mx={0}
            >
              <Flex justifyContent={"center"}>
                <Text textAlign={"center"}>$0.02</Text>
              </Flex>
            </Td>
            <Td
              borderRight={"1px solid black"}
              fontSize={"14px"}
              fontFamily='Fira-Code'
              mx={0}
            >
              <Flex justifyContent={"center"}>
                <Text textAlign={"center"}>$12,000,000</Text>
              </Flex>
            </Td>

            <Td
              borderRight={"1px solid black"}
              fontSize={"14px"}
              fontFamily='Fira-Code'
              mx={0}
            >
              <Flex justifyContent={"center"}>
                <Text textAlign={"center"}>6315.79 ETH</Text>
              </Flex>
            </Td>

            <Td fontSize={"14px"} fontFamily='Fira-Code' mx={0}>
              <Flex justifyContent={"center"}>
                <Text textAlign={"center"}>
                  Vested for 9 months. <br />
                  10% unlock at TGE followed <br /> by 30% unlocks every 3{" "}
                  <br />
                  months with the last 10% <br /> unlock in the 9th month
                </Text>
              </Flex>
            </Td>
          </Tr>

          <Tr>
            <Td
              py={6}
              fontSize={"14px"}
              fontFamily='Fira-Code'
              borderRight={"1px solid black"}
              borderBottom={"none"}
            >
              <Flex justifyContent={"center"}>
                <Text fontWeight={"bold"}>Total</Text>
              </Flex>
            </Td>
            <Td
              py={6}
              fontSize={"14px"}
              fontFamily='Fira-Code'
              borderRight={"1px solid black"}
              borderBottom={"none"}
            >
              <Flex justifyContent={"center"}>
                <Text fontWeight={"bold"}>100%</Text>
              </Flex>
            </Td>
            <Td
              fontSize={"14px"}
              borderBottom={"none"}
              fontFamily='Fira-Code'
              isNumeric
              py={6}
              borderRight='1px solid black'
            >
              <Flex justifyContent={"center"}>
                <Text fontWeight={"bold"}> 2 billion</Text>
              </Flex>
            </Td>
            <Td
              fontSize={"14px"}
              borderBottom={"none"}
              fontFamily='Fira-Code'
              isNumeric
              py={6}
              borderRight='1px solid black'
            >
              <Flex justifyContent={"center"}></Flex>
            </Td>
            <Td
              fontSize={"14px"}
              borderBottom={"none"}
              fontFamily='Fira-Code'
              isNumeric
              py={6}
              borderRight='1px solid black'
            >
              <Flex justifyContent={"center"}>
                <Text fontWeight={"bold"}> $23.4 million</Text>
              </Flex>
            </Td>
          </Tr>
        </Tbody>
      </Table>
    </TableContainer>
  );
}
