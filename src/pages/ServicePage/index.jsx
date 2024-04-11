import React from "react";
import { Helmet } from "react-helmet";
import Header from "../../components/Header";
import {
  Link,
  Text,
  UnorderedList,
  ListItem,
  Heading,
  Image,
  Flex,
  Container,
  Button,
  Box,
  IconButton,
  AccordionButton,
  Accordion,
  AccordionItem,
  Checkbox,
} from "@chakra-ui/react";

export default function ServicePagePage() {
  return (
    <>
      <Helmet>
        <title>pixel</title>
        <meta name="description" content="Web site created using create-react-app" />
      </Helmet>
      <Box bg="white.A700" w="100%">
        <Flex gap={{ md: "96px", base: "48px", sm: "72px" }} overflow="auto" flexDirection="column">
          <Flex gap={{ md: "96px", base: "48px", sm: "72px" }} flexDirection="column" alignItems="center">
            <Flex alignSelf="stretch" flexDirection="column" alignItems="center">
              <Flex
                borderBottomLeftRadius="40px"
                borderBottomRightRadius="40px"
                bg="amber.300"
                alignSelf="stretch"
                flexDirection="column"
                alignItems="center"
                p={{ base: "20px", sm: "40px" }}
              >
                <Container
                  mt="2px"
                  mb="269px"
                  gap={{ md: "159px", base: "79px", sm: "119px" }}
                  display="flex"
                  alignSelf="stretch"
                  flexDirection="column"
                  alignItems="center"
                  maxW="1360px"
                  w="100%"
                  px="0px"
                  mx="auto"
                >
                  <Header
                    display="flex"
                    alignSelf="stretch"
                    justifyContent="space-between"
                    alignItems="center"
                    gap="20px"
                    flexDirection={{ md: "row", base: "column" }}
                  />
                  <Text size="5xl" fontFamily="Lexend Deca" fontSize="64px" fontWeight={300}>
                    Product Development
                  </Text>
                </Container>
              </Flex>
              <Image
                src="images/img_rectangle_1.png"
                h={{ md: "586px", base: "auto" }}
                mt="-157px"
                position="relative"
                w="100%"
                maxW="1130px"
                mx="auto"
                borderRadius="32px"
                p={{ md: "", base: "20px" }}
              />
            </Flex>
            <Text w={{ md: "38%", base: "100%" }} lineHeight="28px" p={{ md: "", base: "20px" }}>
              Pretium nunc nulla eu dolor pellentesque. Hendrerit tempor malesuada justo aliquet accumsan nulla arcu
              dolor. Tortor lorem nec ut vulputate purus quis tellus proin at. Urna diam blandit at sit pellentesque
              lacinia lectus rhoncus. Turpis egestas venenatis nulla bibendum.
            </Text>
          </Flex>
          <Flex
            as="footer"
            pl="73px"
            pr="56px"
            alignSelf="end"
            flexDirection="column"
            alignItems="center"
            justifyContent="center"
            px={{ md: "", base: "20px" }}
          >
            <Box h="1px" bg="blue_gray.50" w="93%" />
            <Flex
              mt="31px"
              ml={{ md: "40px", base: "0px" }}
              gap="39px"
              w={{ md: "86%", base: "100%" }}
              flexDirection="column"
              alignItems="start"
            >
              <Text size="md" fontFamily="Lexend Deca">
                Brands trust us are more than 500
              </Text>
              <Flex
                alignSelf="stretch"
                justifyContent="space-between"
                alignItems="center"
                gap="20px"
                flexDirection={{ md: "row", base: "column" }}
              >
                <Image src="images/img_image_1.png" h="28px" w={{ md: "10%", base: "100%" }} />
                <Image src="images/img_image_2.png" h="37px" w={{ md: "10%", base: "100%" }} />
                <Image src="images/img_image_3.png" h="21px" mb="7px" alignSelf="end" w={{ md: "11%", base: "100%" }} />
                <Image src="images/img_image_4.png" h="24px" w={{ md: "8%", base: "100%" }} />
                <Image src="images/img_image_5.png" h="28px" w={{ md: "9%", base: "100%" }} />
                <Image src="images/img_image_6.png" h="30px" w={{ md: "7%", base: "100%" }} />
              </Flex>
            </Flex>
            <Flex
              mt="32px"
              borderColor="blue_gray.50"
              borderTopWidth="0.5px"
              borderStyle="solid"
              bg="gray.900"
              w={{ md: "93%", base: "100%" }}
              p={{ base: "20px", sm: "40px" }}
            >
              <Container w="100%" display="flex" maxW="1225px" px="0px" mx="auto" my="197px">
                <Flex
                  w="100%"
                  justifyContent="space-between"
                  alignItems="center"
                  gap="20px"
                  flexDirection={{ md: "row", base: "column" }}
                >
                  <Text
                    size="4xl"
                    color="white.A700"
                    fontFamily="Lexend Deca"
                    fontSize="40px"
                    w={{ md: "55%", base: "100%" }}
                    lineHeight="56px"
                  >
                    Are you a startup brand, well established company, in the India or worldwide? It doesn&#39;t matter.
                    We work with a range of clients.
                  </Text>
                  <Flex gap="24px" w={{ md: "31%", base: "100%" }} flexDirection="column" alignItems="start">
                    <Text color="gray.600_01">Our Website Capabilities</Text>
                    <Box h={{ md: "96px", base: "auto" }} alignSelf="stretch" position="relative">
                      <Flex w="100%" justifyContent="center" flexDirection={{ base: "column", sm: "row" }}>
                        <Flex flex={1} alignSelf="stretch">
                          <Checkbox value="true" gap="35px" zIndex={1} position="relative" />
                          <Checkbox
                            size="xs"
                            value="undefined"
                            ml="-93px"
                            pr={{ base: "20px", sm: "35px" }}
                            fontSize="16px"
                            position="relative"
                            flex={1}
                            lineHeight="24px"
                          >
                            <>
                              Web Design
                              <br />
                              eCommerce
                              <br />
                              Wireframes
                            </>
                          </Checkbox>
                        </Flex>
                        <Checkbox
                          value="true"
                          ml={{ base: "0px", sm: "-16px" }}
                          fontSize="16px"
                          gap="12px"
                          position="relative"
                          lineHeight="24px"
                        >
                          <>
                            UX Design
                            <br />
                            Responsive Design
                            <br />
                            Strategy
                          </>
                        </Checkbox>
                      </Flex>
                      <Flex
                        gap={{ base: "28px", sm: "57px" }}
                        flexDirection="column"
                        position="absolute"
                        left="0.00px"
                        bottom="0px"
                        top="0px"
                        h="max-content"
                        my="auto"
                      >
                        <Image src="images/img_checkmark.svg" h="16px" />
                        <Image src="images/img_checkmark.svg" h="16px" />
                      </Flex>
                      <Flex
                        gap={{ base: "28px", sm: "57px" }}
                        flexDirection="column"
                        position="absolute"
                        right="42%"
                        bottom="0px"
                        top="0px"
                        h="max-content"
                        my="auto"
                      >
                        <Image src="images/img_checkmark.svg" h="16px" />
                        <Image src="images/img_checkmark.svg" h="16px" />
                      </Flex>
                    </Box>
                  </Flex>
                </Flex>
              </Container>
            </Flex>
            <Container
              mt="160px"
              w="100%"
              display="flex"
              justifyContent="space-between"
              alignItems="center"
              maxW="1230px"
              gap="20px"
              px="0px"
              mx="auto"
              flexDirection={{ md: "row", base: "column" }}
            >
              <Image src="images/img_rectangle_13.png" h="620px" w={{ md: "49%", base: "100%" }} borderRadius="32px" />
              <Flex w={{ md: "44%", base: "100%" }} flexDirection="column" alignItems="start">
                <Text color="gray.600">Our Website Capabilities</Text>
                <Text size="4xl" mt="16px" fontFamily="Lexend Deca" fontSize="40px" lineHeight="48px">
                  We know it’s hard for brands to setup an online experience, and budgets can be tight.
                </Text>
                <Text size="md" color="gray.600" mt="24px" lineHeight="28px">
                  Magna sit duis netus mauris cursus pellentesque pellentesque imperdiet. Commodo nullam tellus turpis
                  dapibus et lectus egestas vitae. Vestibulum risus dolor enim turpis. Aliquam adipiscing id tristique
                  nec. Non quis id fermentum vitae pulvinar. Semper elit at posuere mauris phasellus. Dignissim posuere
                  faucibus phasellus sit iaculis elementum id ipsum. Enim mattis pellentesque.
                </Text>
                <Button
                  variant="fill"
                  colorScheme="black_900_02"
                  mt="40px"
                  fontFamily="Lexend Deca"
                  minW="278px"
                  borderRadius="28px"
                  px={{ base: "20px", sm: "" }}
                >
                  Schedule a call with our team
                </Button>
              </Flex>
            </Container>
            <Container
              mt="212px"
              alignSelf="center"
              w="100%"
              display="flex"
              justifyContent="space-between"
              alignItems="center"
              maxW="1230px"
              gap="20px"
              px="0px"
              mx="auto"
              flexDirection={{ md: "row", base: "column" }}
            >
              <Flex w={{ md: "44%", base: "100%" }} flexDirection="column" alignItems="start">
                <Text color="gray.600">Our Website Capabilities</Text>
                <Text size="4xl" mt="16px" fontFamily="Lexend Deca" fontSize="40px" lineHeight="48px">
                  We know it’s hard for brands to setup an online experience, and budgets can be tight.
                </Text>
                <Text size="md" color="gray.600" mt="24px" lineHeight="28px">
                  Magna sit duis netus mauris cursus pellentesque pellentesque imperdiet. Commodo nullam tellus turpis
                  dapibus et lectus egestas vitae. Vestibulum risus dolor enim turpis. Aliquam adipiscing id tristique
                  nec. Non quis id fermentum vitae pulvinar. Semper elit at posuere mauris phasellus. Dignissim posuere
                  faucibus phasellus sit iaculis elementum id ipsum. Enim mattis pellentesque.
                </Text>
                <Button
                  variant="fill"
                  colorScheme="black_900_02"
                  mt="40px"
                  fontFamily="Lexend Deca"
                  minW="189px"
                  borderRadius="28px"
                  px={{ base: "20px", sm: "" }}
                >
                  Get Demo for free
                </Button>
              </Flex>
              <Image src="images/img_rectangle_13.png" h="620px" w={{ md: "49%", base: "100%" }} borderRadius="32px" />
            </Container>
            <Text
              size="4xl"
              mt="160px"
              mr={{ md: "160px", base: "0px" }}
              fontFamily="Lexend Deca"
              textAlign="right"
              fontSize="40px"
              alignSelf="end"
              w={{ md: "54%", base: "100%" }}
              lineHeight="56px"
            >
              We use the latest technologies available to create timeless products.
            </Text>
            <Flex mt="80px" gap="16px" w={{ md: "93%", base: "100%" }} flexDirection={{ md: "row", base: "column" }}>
              <Flex gap="16px" w={{ md: "94%", base: "100%" }} flexDirection={{ md: "row", base: "column" }}>
                <Flex
                  bg="gray.100"
                  w="100%"
                  justifyContent="center"
                  p={{ md: "51px", base: "20px" }}
                  borderRadius="32px"
                >
                  <Image src="images/img_image_3.png" h="21px" w="63%" />
                </Flex>
                <Flex
                  bg="gray.100"
                  w="100%"
                  justifyContent="center"
                  p={{ md: "51px", base: "20px" }}
                  borderRadius="32px"
                >
                  <Image src="images/img_image_3.png" h="21px" w="63%" />
                </Flex>
                <Flex
                  bg="gray.100"
                  w="100%"
                  justifyContent="center"
                  p={{ md: "51px", base: "20px" }}
                  borderRadius="32px"
                >
                  <Image src="images/img_image_3.png" h="21px" w="63%" />
                </Flex>
                <Flex
                  bg="gray.100"
                  w="100%"
                  justifyContent="center"
                  p={{ md: "51px", base: "20px" }}
                  borderRadius="32px"
                >
                  <Image src="images/img_image_3.png" h="21px" w="63%" />
                </Flex>
              </Flex>
              <Flex
                bg="gray.100"
                w={{ md: "23%", base: "100%" }}
                justifyContent="center"
                p={{ md: "51px", base: "20px" }}
                borderRadius="32px"
              >
                <Image src="images/img_image_3.png" h="21px" w="63%" />
              </Flex>
            </Flex>
            <Flex mt="164px" w={{ md: "91%", base: "100%" }} flexDirection="column" alignItems="start">
              <Text color="gray.600" ml={{ md: "40px", base: "0px" }}>
                What we can help you with
              </Text>
              <Text
                size="4xl"
                mt="16px"
                ml={{ md: "40px", base: "0px" }}
                fontFamily="Lexend Deca"
                fontSize="40px"
                w={{ md: "57%", base: "100%" }}
                lineHeight="48px"
              >
                A team of product development experts that can help you design and build a website you’re proud of
              </Text>
              <Container
                mt="119px"
                alignSelf="stretch"
                display="flex"
                justifyContent="space-between"
                alignItems="start"
                maxW="1368px"
                w="100%"
                gap="20px"
                px="0px"
                mx="auto"
                flexDirection={{ md: "row", base: "column" }}
                p={{ md: "", base: "20px" }}
              >
                <Flex
                  mt="2px"
                  gap={{ md: "125px", base: "62px", sm: "93px" }}
                  w={{ md: "21%", base: "100%" }}
                  flexDirection="column"
                  alignItems="start"
                >
                  <Text size="2xl" fontSize="24px">
                    Web Design
                  </Text>
                  <Text color="gray.600" lineHeight="28px">
                    We work closely with you to understand your vision and goals.
                  </Text>
                </Flex>
                <Flex
                  gap={{ md: "127px", base: "63px", sm: "95px" }}
                  w={{ md: "21%", base: "100%" }}
                  flexDirection="column"
                  alignItems="start"
                >
                  <Text size="2xl" fontSize="24px">
                    eCommerce
                  </Text>
                  <Text color="gray.600" lineHeight="28px">
                    Our streamlined approach helps you launch your product efficiently.
                  </Text>
                </Flex>
                <Flex
                  gap={{ md: "128px", base: "64px", sm: "96px" }}
                  w={{ md: "21%", base: "100%" }}
                  flexDirection="column"
                  alignItems="start"
                >
                  <Text size="2xl" fontSize="24px">
                    Wireframes
                  </Text>
                  <Text color="gray.600" lineHeight="28px">
                    We build products that can grow alongside your business.
                  </Text>
                </Flex>
                <Flex
                  mt="2px"
                  gap={{ md: "125px", base: "62px", sm: "93px" }}
                  w={{ md: "21%", base: "100%" }}
                  flexDirection="column"
                  alignItems="start"
                >
                  <Text size="2xl" fontSize="24px">
                    UX Design
                  </Text>
                  <Text color="gray.600" lineHeight="28px">
                    We track key metrics to demonstrate the success of your product and marketing efforts.
                  </Text>
                </Flex>
              </Container>
              <Container
                mt="82px"
                alignSelf="stretch"
                display="flex"
                justifyContent="space-between"
                alignItems="start"
                maxW="1361px"
                w="100%"
                gap="20px"
                px="0px"
                mx="auto"
                flexDirection={{ md: "row", base: "column" }}
                p={{ md: "", base: "20px" }}
              >
                <Flex
                  gap={{ md: "125px", base: "62px", sm: "93px" }}
                  w={{ md: "21%", base: "100%" }}
                  flexDirection="column"
                  alignItems="start"
                >
                  <Text size="2xl" fontSize="24px">
                    Responsive Design
                  </Text>
                  <Text color="gray.600" lineHeight="28px">
                    We work closely with you to understand your vision and goals.
                  </Text>
                </Flex>
                <Flex
                  gap={{ md: "124px", base: "62px", sm: "93px" }}
                  w={{ md: "73%", base: "100%" }}
                  flexDirection="column"
                  alignItems="start"
                >
                  <Text size="2xl" fontSize="24px">
                    Strategy
                  </Text>
                  <Flex alignSelf="stretch" alignItems="end" flexDirection={{ md: "row", base: "column" }}>
                    <Text color="gray.600" mb="28px" w={{ md: "46%", base: "100%" }} lineHeight="28px">
                      Our streamlined approach helps you launch your product efficiently.
                    </Text>
                    <Text size="md" mb="17px" ml={{ md: "323px", base: "0px" }} fontFamily="Lexend Deca">
                      Get Demo for free
                    </Text>
                    <Image
                      src="images/img_arrow_left.svg"
                      h="8px"
                      mb="24px"
                      ml={{ md: "12px", base: "0px" }}
                      w={{ md: "8px", base: "100%" }}
                    />
                    <Button
                      variant="fill"
                      colorScheme="black_900_02"
                      ml={{ md: "40px", base: "0px" }}
                      fontFamily="Lexend Deca"
                      minW="193px"
                      borderRadius="28px"
                      px={{ base: "20px", sm: "" }}
                    >
                      Get in touch today
                    </Button>
                  </Flex>
                </Flex>
              </Container>
              <Box h="1px" mt="40px" bg="blue_gray.50" w="51%" />
            </Flex>
            <Flex
              mt="162px"
              ml={{ md: "40px", base: "0px" }}
              w={{ md: "90%", base: "100%" }}
              flexDirection="column"
              alignItems="start"
            >
              <Text size="4xl" fontFamily="Lexend Deca" fontSize="40px">
                What our happy clients say about us
              </Text>
              <Flex
                mt="74px"
                pt={{ md: "68px", base: "20px" }}
                alignSelf="stretch"
                bg="amber.300"
                justifyContent="center"
                px={{ md: "56px", base: "20px" }}
                borderRadius="40px"
              >
                <Container w="100%" display="flex" justifyContent="center" maxW="1172px" px="0px" mx="auto">
                  <Flex
                    w="100%"
                    justifyContent="space-between"
                    alignItems="start"
                    gap="20px"
                    flexDirection={{ md: "row", base: "column" }}
                  >
                    <Flex mt="6px" w={{ md: "54%", base: "100%" }} flexDirection="column" alignItems="start">
                      <Flex alignSelf="stretch" flexDirection="column" alignItems="start">
                        <Text size="7xl" fontFamily="Lexend Deca" fontSize="128px" zIndex={2} position="relative">
                          “
                        </Text>
                        <Text
                          size="4xl"
                          mt="-39px"
                          fontFamily="Lexend Deca"
                          fontSize="40px"
                          position="relative"
                          lineHeight="48px"
                        >
                      Pixelize went above and beyond to make sure we got something we were happy with
                        </Text>
                      </Flex>
                      <Text size="xl" mt="34px">
                        Johnson Root
                      </Text>
                      <Text size="md" mt="10px" fontWeight={300}>
                        Creative Director, Black Wheel
                      </Text>
                    </Flex>
                    <Image
                      src="images/img_rectangle_22.png"
                      h="435px"
                      borderTopRightRadius="40px"
                      borderTopLeftRadius="40px"
                      w={{ md: "29%", base: "100%" }}
                    />
                  </Flex>
                </Container>
              </Flex>
              <Flex mt="24px" gap="8px" alignSelf="end" w={{ md: "9%", base: "100%" }}>
                <Image src="images/img_frame_14.svg" borderRadius="50%" h="43px" w="50%" />
                <Image src="images/img_frame_14.svg" borderRadius="50%" h="43px" w="50%" />
              </Flex>
            </Flex>
            <Flex
              mt="139px"
              ml={{ md: "41px", base: "0px" }}
              gap={{ md: "80px", base: "40px", sm: "60px" }}
              w={{ md: "90%", base: "100%" }}
              flexDirection="column"
              alignItems="end"
            >
              <Text
                size="4xl"
                mr={{ md: "11px", base: "0px" }}
                fontFamily="Lexend Deca"
                textAlign="right"
                fontSize="40px"
                w={{ md: "55%", base: "100%" }}
                lineHeight="56px"
              >
                <>
                  Our favourite
                  <br />
                  Recent Developed Products
                </>
              </Text>
              <Flex gap="24px" alignSelf="stretch" flexDirection={{ md: "row", base: "column" }}>
                <Flex
                  pt={{ base: "20px", sm: "40px" }}
                  bg="gray.900"
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
            <Container
              mt="160px"
              w="100%"
              display="flex"
              justifyContent="space-between"
              alignItems="start"
              maxW="1360px"
              gap="20px"
              px="0px"
              mx="auto"
              flexDirection={{ md: "row", base: "column" }}
            >
              <Text
                size="4xl"
                mt="20px"
                fontFamily="Lexend Deca"
                fontSize="40px"
                w={{ md: "32%", base: "100%" }}
                lineHeight="48px"
              >
                The answers to your questions.
              </Text>
              <Accordion
                defaultIndex={[0]}
                gap="12px"
                display="flex"
                w={{ md: "58%", base: "100%" }}
                flexDirection="column"
              >
                {[...Array(6)].map(() => (
                  <AccordionItem>
                    {(props) => (
                      <>
                        <AccordionButton
                          mt="12px"
                          bg="gray.100"
                          flex={1}
                          display="flex"
                          justifyContent="space-between"
                          alignItems="center"
                          gap="20px"
                          p={{ base: "20px", sm: "32px" }}
                          borderRadius="32px"
                        >
                          <Text mb="5px" alignSelf="end">
                            How long does it take to build a website?
                          </Text>
                          <IconButton
                            size="xs"
                            icon={<Image src="images/img_frame_15.svg" />}
                            aria-label="100:95-arrowleft_five"
                            mr={{ md: "16px", base: "0px" }}
                            w="35px"
                            borderRadius="17px"
                          />
                        </AccordionButton>
                      </>
                    )}
                  </AccordionItem>
                ))}
              </Accordion>
            </Container>
            <Flex mt="160px" w={{ md: "93%", base: "100%" }} flexDirection="column" alignItems="center">
              <Container
                pl="69px"
                pr="56px"
                zIndex={3}
                bg="gray.900"
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
                 <Flex gap="6px" alignItems="center">
                    <Image src="images/img_mobile.svg" h="20px" mt="2px" />
                    <Heading as="h4" letterSpacing="-4.80px" fontSize="24px">
                      Pixelize
                    </Heading>
                  </Flex>
                <Container
                  display="flex"
                  justifyContent="space-around"
                  alignItems="end"
                  maxW="870px"
                  w="100%"
                  px="0px"
                  mx="auto"
                  my="127px"
                  flexDirection={{ md: "row", base: "column" }}
                >
                 
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
                    gap="20px"
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
        </Flex>
      </Box>
    </>
  );
}
