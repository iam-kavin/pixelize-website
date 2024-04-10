import React from "react";
import { Helmet } from "react-helmet";
import Header from "../../components/Header";
import { Link, Text, UnorderedList, ListItem, Heading, Image, Flex, Container, Button, Box } from "@chakra-ui/react";

export default function WorkPagePage() {
  return (
    <>
      <Helmet>
        <title>pixel</title>
        <meta name="description" content="Web site created using create-react-app" />
      </Helmet>
      <Flex
        pt={{ md: "42px", base: "20px" }}
        gap={{ md: "160px", base: "80px", sm: "120px" }}
        bg="gray.900"
        w="100%"
        flexDirection="column"
      >
        <Container
          gap={{ md: "159px", base: "79px", sm: "119px" }}
          display="flex"
          flexDirection="column"
          maxW="1400px"
          w="100%"
          px="0px"
          mx="auto"
          p={{ md: "", base: "20px" }}
        >
          <Header
            display="flex"
            w={{ md: "97%", base: "100%" }}
            justifyContent="space-between"
            alignItems="center"
            gap="20px"
            flexDirection={{ md: "row", base: "column" }}
          />
          <Flex gap={{ md: "156px", base: "78px", sm: "117px" }} flexDirection="column" alignItems="center">
            <Flex
              gap="29px"
              alignSelf="end"
              w={{ md: "71%", base: "100%" }}
              alignItems="start"
              flexDirection={{ md: "row", base: "column" }}
            >
              <Box h="32px" mt="16px" bg="blue_gray.100" w="32px" borderRadius="16px" />
              <Text size="5xl" color="white.A700" fontFamily="Lexend Deca" fontSize="64px" fontWeight={300}>
                Refreshing Cream&#39;s digital presence
              </Text>
            </Flex>
            <Flex gap={{ md: "80px", base: "40px", sm: "60px" }} w={{ md: "81%", base: "100%" }} flexDirection="column">
              <Image src="images/img_rectangle_1_586x1130.png" h="586px" borderRadius="32px" />
              <Flex
                justifyContent="space-between"
                alignItems="start"
                gap="20px"
                flexDirection={{ md: "row", base: "column" }}
              >
                <Text color="gray.600_01" w={{ md: "49%", base: "100%" }} lineHeight="28px">
                  Pretium nunc nulla eu dolor pellentesque. Hendrerit tempor malesuada justo aliquet accumsan nulla arcu
                  dolor. Tortor lorem nec ut vulputate purus quis tellus proin at. Urna diam blandit at sit pellentesque
                  lacinia lectus rhoncus. Turpis egestas venenatis nulla bibendum.
                </Text>
                <Flex
                  mt="3px"
                  w={{ md: "37%", base: "100%" }}
                  justifyContent="space-between"
                  alignItems="center"
                  gap="20px"
                >
                  <Flex gap="7px" flexDirection="column" alignItems="start">
                    <Text size="md" color="gray.600_01" fontFamily="Lexend Deca">
                      Client
                    </Text>
                    <Text color="white.A700">Cream</Text>
                  </Flex>
                  <Flex gap="4px" flexDirection="column" alignItems="start">
                    <Text size="md" color="gray.600_01" fontFamily="Lexend Deca">
                      Industry
                    </Text>
                    <Text color="white.A700">Cosmetics</Text>
                  </Flex>
                  <Flex gap="7px" flexDirection="column" alignItems="start">
                    <Text size="md" color="gray.600_01" fontFamily="Lexend Deca">
                      Duration
                    </Text>
                    <Text color="white.A700">12 Weeks</Text>
                  </Flex>
                </Flex>
              </Flex>
            </Flex>
            <Flex w={{ md: "97%", base: "100%" }} flexDirection="column" alignItems="end">
              <Flex gap="24px" alignSelf="stretch" flexDirection={{ md: "row", base: "column" }}>
                <Flex w="100%" flexDirection="column" alignItems="start">
                  <Box h="586px" bg="black.900" alignSelf="stretch" position="relative" p="11px" borderRadius="32px">
                    <Text
                      size="8xl"
                      color="blue_gray.500"
                      fontFamily="Londrina Solid"
                      fontSize="400px"
                      position="absolute"
                      left="32%"
                      top="11.00px"
                      m="auto"
                    >
                      c
                    </Text>
                    <Text
                      size="8xl"
                      color="white.A700"
                      fontFamily="Londrina Solid"
                      fontSize="400px"
                      transform="rotate(180deg)"
                      position="absolute"
                      bottom="11.00px"
                      right="32%"
                      m="auto"
                    >
                      c
                    </Text>
                  </Box>
                  <Text color="gray.600" mt="84px">
                    The logo
                  </Text>
                  <Text
                    size="4xl"
                    color="white.A700"
                    mt="16px"
                    fontFamily="Lexend Deca"
                    fontSize="40px"
                    w={{ md: "74%", base: "100%" }}
                    lineHeight="48px"
                  >
                    Identity of Cream&#39;s digital presence
                  </Text>
                </Flex>
                <Flex gap={{ md: "80px", base: "40px", sm: "60px" }} w="100%" flexDirection="column" alignItems="start">
                  <Flex
                    alignSelf="stretch"
                    bg="black.900"
                    justifyContent="center"
                    p={{ md: "54px", base: "20px" }}
                    borderRadius="32px"
                  >
                    <Image src="images/img_union.png" h="475px" w="83%" />
                  </Flex>
                  <Text color="gray.600_01" w={{ md: "83%", base: "100%" }} lineHeight="28px">
                    Pretium nunc nulla eu dolor pellentesque. Hendrerit tempor malesuada justo aliquet accumsan nulla
                    arcu dolor. Tortor lorem nec ut vulputate purus quis tellus proin at. Urna diam blandit at sit
                    pellentesque lacinia lectus rhoncus. Turpis egestas venenatis nulla bibendum.
                  </Text>
                </Flex>
              </Flex>
              <Flex
                h={{ md: "586px", base: "auto" }}
                mt="160px"
                alignSelf="stretch"
                bgImage="url(/images/img_group_386.png)"
                bgSize="cover"
                bgRepeat="no-repeat"
                justifyContent="center"
                alignItems="end"
                px="56px"
                py="254px"
                borderRadius="32px"
                p={{ md: "", base: "20px" }}
              >
                <Flex mt="6px">
                  <Flex bg="black.900_b2" p={{ base: "20px", sm: "21px" }} borderRadius="36px">
                    <Image src="images/img_overflow_menu.svg" h="30px" w="30px" borderRadius="2px" />
                  </Flex>
                </Flex>
              </Flex>
              <Flex mt="24px" gap="24px" alignSelf="stretch" flexDirection={{ md: "row", base: "column" }}>
                <Flex w="100%" flexDirection="column" alignItems="start">
                  <Image
                    src="images/img_rectangle_16.png"
                    h={{ md: "586px", base: "auto" }}
                    w="100%"
                    borderRadius="32px"
                  />
                  <Text color="gray.600" mt="84px">
                    The logo
                  </Text>
                  <Text
                    size="4xl"
                    color="white.A700"
                    mt="16px"
                    fontFamily="Lexend Deca"
                    fontSize="40px"
                    w={{ md: "74%", base: "100%" }}
                    lineHeight="48px"
                  >
                    Identity of Cream&#39;s digital presence
                  </Text>
                </Flex>
                <Flex gap={{ md: "80px", base: "40px", sm: "60px" }} w="100%" flexDirection="column" alignItems="start">
                  <Image
                    src="images/img_rectangle_17.png"
                    h={{ md: "586px", base: "auto" }}
                    w="100%"
                    borderRadius="32px"
                  />
                  <Text color="gray.600_01" w={{ md: "83%", base: "100%" }} lineHeight="28px">
                    Pretium nunc nulla eu dolor pellentesque. Hendrerit tempor malesuada justo aliquet accumsan nulla
                    arcu dolor. Tortor lorem nec ut vulputate purus quis tellus proin at. Urna diam blandit at sit
                    pellentesque lacinia lectus rhoncus. Turpis egestas venenatis nulla bibendum.
                  </Text>
                </Flex>
              </Flex>
              <Box mt="160px" alignSelf="stretch" bg="black.900" p={{ md: "47px", base: "20px" }} borderRadius="32px">
                <Box my="9px">
                  <Flex gap="24px" flexDirection={{ md: "row", base: "column" }}>
                    <Image
                      src="images/img_rectangle_19.png"
                      h="460px"
                      w={{ md: "32%", base: "100%" }}
                      borderRadius="32px"
                    />
                    <Image
                      src="images/img_rectangle_20.png"
                      h="460px"
                      w={{ md: "32%", base: "100%" }}
                      borderRadius="32px"
                    />
                    <Image
                      src="images/img_rectangle_21.png"
                      h="460px"
                      w={{ md: "32%", base: "100%" }}
                      borderRadius="32px"
                    />
                  </Flex>
                </Box>
              </Box>
              <Text
                size="4xl"
                color="white.A700"
                mt="160px"
                mr={{ md: "11px", base: "0px" }}
                fontFamily="Lexend Deca"
                textAlign="right"
                fontSize="40px"
                w={{ md: "55%", base: "100%" }}
                lineHeight="56px"
              >
                <>
                  Our other
                  <br />
                  Interesting projects
                </>
              </Text>
              <Flex mt="80px" gap="24px" alignSelf="stretch" flexDirection={{ md: "row", base: "column" }}>
                <Flex
                  pt={{ base: "20px", sm: "40px" }}
                  bg="black.900"
                  w="100%"
                  justifyContent="flex-end"
                  borderRadius="40px"
                >
                  <Flex
                    gap="10px"
                    w={{ md: "83%", base: "100%" }}
                    flexDirection="column"
                    alignItems="end"
                    p={{ md: "", base: "20px" }}
                  >
                    <Image
                      src="images/img_arrow_left_white_a700.svg"
                      h="12px"
                      mr={{ md: "40px", base: "0px" }}
                      w="12px"
                    />
                    <Box h="354px" alignSelf="stretch" position="relative">
                      <Flex
                        w="100%"
                        flexDirection="column"
                        alignItems="start"
                        position="absolute"
                        bottom="-0.33px"
                        right="0px"
                        left="0px"
                        m="auto"
                      >
                        <Text
                          size="5xl"
                          ml={{ md: "71px", base: "0px" }}
                          fontFamily="Leckerli One"
                          textAlign="right"
                          fontSize="64px"
                          sx={{ "backdrop-filter": "opacity(0.5)", filter: "blur(4.00px)" }}
                        >
                          Config
                        </Text>
                        <Image
                          src="images/img_rectangle_34.png"
                          h={{ md: "243px", base: "auto" }}
                          mt="-10px"
                          borderTopLeftRadius="24px"
                          borderBottomRightRadius="38px"
                          position="relative"
                          w="100%"
                        />
                      </Flex>
                      <Text
                        size="5xl"
                        color="orange.A100"
                        fontFamily="Leckerli One"
                        textAlign="right"
                        fontSize="64px"
                        position="absolute"
                        left="0.00px"
                        top="0.00px"
                        m="auto"
                      >
                        Config
                      </Text>
                    </Box>
                  </Flex>
                </Flex>
                <Flex
                  pt={{ base: "20px", sm: "40px" }}
                  bg="red.300"
                  w="100%"
                  justifyContent="flex-end"
                  borderRadius="40px"
                >
                  <Flex
                    gap="10px"
                    w={{ md: "83%", base: "100%" }}
                    flexDirection="column"
                    alignItems="end"
                    p={{ md: "", base: "20px" }}
                  >
                    <Image
                      src="images/img_arrow_left_white_a700.svg"
                      h="12px"
                      mr={{ md: "40px", base: "0px" }}
                      w="12px"
                    />
                    <Box h="354px" alignSelf="stretch" position="relative">
                      <Flex
                        w="100%"
                        flexDirection="column"
                        alignItems="start"
                        position="absolute"
                        bottom="-0.33px"
                        right="0px"
                        left="0px"
                        m="auto"
                      >
                        <Text
                          size="5xl"
                          ml={{ md: "71px", base: "0px" }}
                          fontFamily="Leckerli One"
                          textAlign="right"
                          fontSize="64px"
                          sx={{ "backdrop-filter": "opacity(0.5)", filter: "blur(4.00px)" }}
                        >
                          Config
                        </Text>
                        <Image
                          src="images/img_rectangle_34.png"
                          h={{ md: "243px", base: "auto" }}
                          mt="-10px"
                          borderTopLeftRadius="24px"
                          borderBottomRightRadius="38px"
                          position="relative"
                          w="100%"
                        />
                      </Flex>
                      <Text
                        size="5xl"
                        color="orange.A100"
                        fontFamily="Leckerli One"
                        textAlign="right"
                        fontSize="64px"
                        position="absolute"
                        left="0.00px"
                        top="0.00px"
                        m="auto"
                      >
                        Config
                      </Text>
                    </Box>
                  </Flex>
                </Flex>
                <Flex
                  pt={{ base: "20px", sm: "40px" }}
                  bg="pink.100"
                  w="100%"
                  justifyContent="flex-end"
                  borderRadius="40px"
                >
                  <Flex
                    gap="10px"
                    w={{ md: "83%", base: "100%" }}
                    flexDirection="column"
                    alignItems="end"
                    p={{ md: "", base: "20px" }}
                  >
                    <Image
                      src="images/img_arrow_left_white_a700.svg"
                      h="12px"
                      mr={{ md: "40px", base: "0px" }}
                      w="12px"
                    />
                    <Box h="354px" alignSelf="stretch" position="relative">
                      <Flex
                        w="100%"
                        flexDirection="column"
                        alignItems="start"
                        position="absolute"
                        bottom="-0.33px"
                        right="0px"
                        left="0px"
                        m="auto"
                      >
                        <Text
                          size="5xl"
                          ml={{ md: "71px", base: "0px" }}
                          fontFamily="Leckerli One"
                          textAlign="right"
                          fontSize="64px"
                          sx={{ "backdrop-filter": "opacity(0.5)", filter: "blur(4.00px)" }}
                        >
                          Config
                        </Text>
                        <Image
                          src="images/img_rectangle_34.png"
                          h={{ md: "243px", base: "auto" }}
                          mt="-10px"
                          borderTopLeftRadius="24px"
                          borderBottomRightRadius="38px"
                          position="relative"
                          w="100%"
                        />
                      </Flex>
                      <Text
                        size="5xl"
                        color="yellow.50"
                        fontFamily="Leckerli One"
                        textAlign="right"
                        fontSize="64px"
                        position="absolute"
                        left="0.00px"
                        top="0.00px"
                        m="auto"
                      >
                        Config
                      </Text>
                    </Box>
                  </Flex>
                </Flex>
              </Flex>
            </Flex>
          </Flex>
        </Container>
        <Flex as="footer" flexDirection="column" alignItems="center" justifyContent="center">
          <Container
            pl="69px"
            pr="56px"
            zIndex={1}
            bg="black.900"
            w="100%"
            position="relative"
            display="flex"
            maxW="1128px"
            py="69px"
            mx="auto"
            borderRadius="40px"
            p={{ md: "", base: "20px" }}
          >
            <Flex
              mt="11px"
              ml={{ md: "11px", base: "0px" }}
              gap={{ md: "116px", base: "58px", sm: "87px" }}
              w={{ md: "67%", base: "100%" }}
              flexDirection="column"
              alignItems="start"
            >
              <Box h={{ md: "96px", base: "auto" }} alignSelf="stretch" position="relative">
                <Image
                  src="images/img_vector_1_amber_300.svg"
                  h="27px"
                  mt="12px"
                  ml={{ md: "126px", base: "0px" }}
                  w="45%"
                />
                <Text
                  size="4xl"
                  color="white.A700"
                  fontFamily="Lexend Deca"
                  fontSize="40px"
                  w="100%"
                  lineHeight="48px"
                  position="absolute"
                  left="0px"
                  bottom="0px"
                  right="0px"
                  top="0px"
                  h="max-content"
                  m="auto"
                >
                  Get a stunning product developed and online within the next 10 days.
                </Text>
              </Box>
              <Button
                variant="fill"
                colorScheme="amber_300"
                fontFamily="Lexend Deca"
                minW="208px"
                borderRadius="28px"
                px={{ base: "20px", sm: "" }}
              >
                Get an instant quote
              </Button>
            </Flex>
          </Container>
          <Flex
            mt="-87px"
            borderBottomLeftRadius="40px"
            borderBottomRightRadius="40px"
            alignSelf="stretch"
            position="relative"
            bg="amber.300"
            p={{ md: "42px", base: "20px" }}
          >
            <Container
              display="flex"
              alignItems="end"
              maxW="870px"
              w="100%"
              px="0px"
              mx="auto"
              my="127px"
              flexDirection={{ md: "row", base: "column" }}
            >
              <Flex gap="6px" alignItems="start">
                <Image src="images/img_mobile.svg" h="20px" mt="2px" />
                <Heading as="h4" letterSpacing="-4.80px" fontSize="24px">
                  Haptica
                </Heading>
              </Flex>
              <UnorderedList
                styleType="none"
                mt="3px"
                ml={{ md: "275px", base: "0px" }}
                gap="21px"
                display="flex"
                flexDirection="column"
                alignItems="start"
              >
                <ListItem>
                  <Link href="#">
                    <Text size="xs" letterSpacing="2.00px">
                      WHAT WE DO
                    </Text>
                  </Link>
                </ListItem>
                <ListItem>
                  <Link href="#">
                    <Text size="xs" letterSpacing="2.00px">
                      BLOG
                    </Text>
                  </Link>
                </ListItem>
              </UnorderedList>
              <UnorderedList
                styleType="none"
                ml={{ md: "74px", base: "0px" }}
                gap="21px"
                display="flex"
                flexDirection="column"
                alignItems="start"
              >
                <ListItem>
                  <Link href="#">
                    <Text size="xs" letterSpacing="2.00px">
                      OUR WORK
                    </Text>
                  </Link>
                </ListItem>
                <ListItem>
                  <Link href="#">
                    <Text size="xs" letterSpacing="2.00px">
                      CUSTOMER STORIES
                    </Text>
                  </Link>
                </ListItem>
              </UnorderedList>
              <UnorderedList
                styleType="none"
                ml={{ md: "93px", base: "0px" }}
                gap="21px"
                display="flex"
                flexDirection="column"
              >
                <ListItem>
                  <Link href="#">
                    <Text size="xs" letterSpacing="2.00px">
                      WHY US?
                    </Text>
                  </Link>
                </ListItem>
                <ListItem>
                  <Link href="#">
                    <Text size="xs" letterSpacing="2.00px">
                      IN NEWS
                    </Text>
                  </Link>
                </ListItem>
              </UnorderedList>
            </Container>
          </Flex>
        </Flex>
      </Flex>
    </>
  );
}
