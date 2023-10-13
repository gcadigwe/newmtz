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

export default function AllocationTable() {
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
                <Text fontFamily={"Fira-Code"}>Category</Text>
              </Flex>
            </Th>
            <Th
              bgColor={"rgba(239, 239, 239, 1)"}
              borderRight={"1px solid black"}
            >
              <Flex justifyContent={"center"}>
                <Text fontFamily={"Fira-Code"}> % of Tokens</Text>
              </Flex>
            </Th>
            <Th
              bgColor={"rgba(239, 239, 239, 1)"}
              isNumeric
              borderRight={"1px solid black"}
            >
              <Flex fontFamily={"Fira-Code"} justifyContent={"center"}>
                <Text>Amount</Text>
              </Flex>
            </Th>
            <Th
              bgColor={"rgba(239, 239, 239, 1)"}
              ml={4}
              justifyContent={"center"}
              py={4}
            >
              <Flex justifyContent={"center"}>
                <Text fontFamily={"Fira-Code"}>Vesting Schedule</Text>
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
                <Text>Foundation Allocation</Text>
              </Flex>
            </Td>
            <Td
              fontSize={"14px"}
              fontFamily='Fira-Code'
              borderRight={"1px solid black"}
            >
              <Flex justifyContent={"center"}>
                <Text> 40%</Text>
              </Flex>
            </Td>
            <Td
              fontSize={"14px"}
              fontFamily='Fira-Code'
              borderRight={"1px solid black"}
              isNumeric
            >
              <Flex justifyContent={"center"}>
                <Text> 4,000,000,000</Text>
              </Flex>
            </Td>
            <Td fontSize={"14px"} fontFamily='Fira-Code' mx={0}>
              <Flex justifyContent={"center"}>
                <Text textAlign={"center"}>
                  Unlocked after Year1(to be used <br /> over10 years). Stored
                  with
                  <br />
                  custodian partner and managed <br /> by DAO.
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
                <Text>Marketing</Text>
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
                <Text> 2,000,000,000</Text>
              </Flex>
            </Td>
            <Td fontSize={"14px"} fontFamily='Fira-Code' mx={0}>
              <Flex justifyContent={"center"}>
                <Text textAlign={"center"}>
                  Vested for 3 years. Linear <br /> vesting with 9% unlocks
                  every <br /> quarter.
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
                <Text>Multi-Stage Sale</Text>
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
                <Text> 2,000,000,000</Text>
              </Flex>
            </Td>
            <Td fontSize={"14px"} fontFamily='Fira-Code' mx={0}>
              <Flex justifyContent={"center"}>
                <Text textAlign={"center"}>
                  Different vesting schedule for <br />
                  each stage (see Token Sale <br /> section).
                </Text>
              </Flex>
            </Td>
          </Tr>

          <Tr>
            <Td
              fontSize={"14px"}
              fontFamily='Fira-Code'
              borderRight={"1px solid black"}
              py={4}
            >
              <Flex justifyContent={"center"}>
                <Text>Liquidity & Exchanges</Text>
              </Flex>
            </Td>
            <Td
              fontSize={"14px"}
              fontFamily='Fira-Code'
              borderRight={"1px solid black"}
            >
              <Flex justifyContent={"center"}>
                <Text> 10%</Text>
              </Flex>
            </Td>
            <Td
              fontSize={"14px"}
              fontFamily='Fira-Code'
              borderRight={"1px solid black"}
              isNumeric
            >
              <Flex justifyContent={"center"}>
                <Text> 1,000,000,000</Text>
              </Flex>
            </Td>
            <Td fontSize={"14px"} fontFamily='Fira-Code'>
              <Flex justifyContent={"center"}>
                <Text textAlign={"center"}>To be used over 2 years.</Text>
              </Flex>
            </Td>
          </Tr>

          <Tr>
            <Td
              py={4}
              fontSize={"14px"}
              fontFamily='Fira-Code'
              borderRight={"1px solid black"}
            >
              <Flex justifyContent={"center"}>
                <Text>Team</Text>
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
                <Text> 500,000,000</Text>
              </Flex>
            </Td>
            <Td fontSize={"14px"} fontFamily='Fira-Code' mx={0}>
              <Flex justifyContent={"center"}>
                <Text textAlign={"center"}>
                  Vested for 1 year. Linear <br /> vesting with monthly unlocks.
                </Text>
              </Flex>
            </Td>
          </Tr>

          <Tr>
            <Td
              py={4}
              fontSize={"14px"}
              fontFamily='Fira-Code'
              borderRight={"1px solid black"}
            >
              <Flex justifyContent={"center"}>
                <Text>Initial Adopters</Text>
              </Flex>
            </Td>
            <Td
              fontSize={"14px"}
              fontFamily='Fira-Code'
              borderRight={"1px solid black"}
            >
              <Flex justifyContent={"center"}>
                <Text> 3%</Text>
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
            <Td fontSize={"14px"} fontFamily='Fira-Code' mx={0}>
              <Flex justifyContent={"center"}>
                <Text textAlign={"center"}>
                  Vested for 1 year. Linear <br /> vesting with monthly unlocks.
                </Text>
              </Flex>
            </Td>
          </Tr>

          <Tr>
            <Td
              fontSize={"14px"}
              fontFamily='Fira-Code'
              borderRight={"1px solid black"}
              py={4}
            >
              <Flex justifyContent={"center"}>
                <Text>Treasury</Text>
              </Flex>
            </Td>
            <Td
              fontSize={"14px"}
              fontFamily='Fira-Code'
              borderRight={"1px solid black"}
            >
              <Flex justifyContent={"center"}>
                <Text> 2%</Text>
              </Flex>
            </Td>
            <Td
              fontSize={"14px"}
              fontFamily='Fira-Code'
              borderRight={"1px solid black"}
              isNumeric
            >
              <Flex justifyContent={"center"}>
                <Text> 200,000,000</Text>
              </Flex>
            </Td>
            <Td fontSize={"14px"} fontFamily='Fira-Code' mx={0}>
              <Flex justifyContent={"center"}>
                <Text textAlign={"center"}>
                  Vested for 2 years. Linear <br /> vesting with monthly
                  unlocks.
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
                <Text fontWeight={"bold"}>Total Supply</Text>
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
                <Text fontWeight={"bold"}> 10,000,000,000</Text>
              </Flex>
            </Td>
          </Tr>
        </Tbody>
      </Table>
    </TableContainer>
  );
}
