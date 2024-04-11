import React from "react";
import { Helmet } from "react-helmet";
import Header from "../../components/Header";
import { Link, Text, UnorderedList, ListItem, Heading, Image, Flex, Container, Button, Box } from "@chakra-ui/react";

export default function HomePagePage() {


  return (
    <>
      <Helmet>
        <title>pixel</title>
        <meta name="description" content="Web site created using create-react-app" />
      </Helmet>
      <Box bg="white.A700" w="100%">
        <Flex flexDirection="column" alignItems="start">
          <Box h="1518px" alignSelf="stretch" position="relative">
            <Flex
              borderBottomLeftRadius="40px"
              borderBottomRightRadius="40px"
              bg="lime.200"
              w="100%"
              flexDirection="column"
              alignItems="center"
              position="absolute"
              top="0.00px"
              right="0px"
              left="0px"
              p={{ base: "20px", sm: "40px" }}
              m="auto"
            >
              <Container
                mt="2px"
                mb="423px"
                alignSelf="stretch"
                display="flex"
                flexDirection="column"
                maxW="1360px"
                w="100%"
                px="0px"
              >
                <Header
                  display="flex"
                  justifyContent="space-between"
                  alignItems="center"
                  gap="20px"
                  flexDirection={{ md: "row", base: "column" }}
                />
                <Text size="6xl" mt="93px" fontFamily="Lexend Deca" fontSize="80px" w={{ md: "83%", base: "100%" }}>
                  We bridge the gap between vision and reality
                </Text>
                <Text
                  mt="252px"
                  mr={{ md: "115px", base: "0px" }}
                  fontFamily="Lexend Deca"
                  alignSelf="end"
                  w={{ md: "26%", base: "100%" }}
                  lineHeight="28px"
                >
                  Full-Stack Development & Marketing Solutions for Growth-Driven Businesses
                </Text>
              </Container>
            </Flex>
            <Container
              h={{ md: "720px", base: "auto" }}
              bgImage="url(/images/img_group_346.png)"
              bgSize="cover"
              bgRepeat="no-repeat"
              w="100%"
              display="flex"
              alignItems="end"
              position="absolute"
              bottom="0.00px"
              right="0px"
              left="0px"
              maxW="1360px"
              p={{ md: "44px", base: "20px" }}
              m="auto"
              borderRadius="32px"
            >
              <Flex mt="535px" ml={{ md: "3px", base: "0px" }}>
                <Flex gap="16px" flexDirection="column" alignItems="start">
                  <Text size="3xl" color="white.A700" fontFamily="Lexend Deca" fontSize="32px">
                    Feeling overwhelmed by the product development process?
                  </Text>
                  <Text size="3xl" color="white.A700" fontFamily="Lexend Deca" fontSize="32px">
                    Struggling to translate your brilliant idea into a market-ready solution?
                  </Text>
                </Flex>
              </Flex>
            </Container>
          </Box>
          <Text
            size="3xl"
            mt="215px"
            ml={{ md: "88px", base: "0px" }}
            fontFamily="Lexend Deca"
            fontSize="32px"
            w={{ md: "80%", base: "100%" }}
            lineHeight="48px"
            p={{ md: "", base: "20px" }}
          >
            <Text size="3xl" as="span" color="black.900_02">
              At Pixelize, we&#39;re your one-stop shop for crafting exceptional digital products and propelling them to
              success. We&#39;re a passionate team of&nbsp;
            </Text>
            <Text size="3xl" as="span" color="black.900_02" fontWeight={500}>
              developers, designers, and marketing experts who believe in the power of collaboration. We partner with
              businesses like yours to bring your vision to life, from the initial concept to launch and beyond.
            </Text>
          </Text>
          <Text
            size="5xl"
            mt="222px"
            mr={{ md: "40px", base: "0px" }}
            fontFamily="Lexend Deca"
            textAlign="right"
            fontSize="64px"
            fontWeight={300}
            alignSelf="end"
          >
            Here&#39;s how we can help
          </Text>
          <Flex
            mt="112px"
            gap="24px"
            alignSelf="center"
            w="100%"
            maxW="1356px"
            mx="auto"
            flexDirection={{ md: "row", base: "column" }}
            p={{ md: "", base: "20px" }}
          >
            <Flex
              borderColor="gray.900_03"
              borderWidth="1px"
              borderStyle="solid"
              w="100%"
              flexDirection="column"
              p={{ base: "20px", sm: "40px" }}
              borderRadius="32px"
            >
              <Flex gap="24px" flexDirection="column">
                <Flex alignItems="start">
                  <Text size="4xl" fontSize="40px" fontWeight={400} w="98%">
                    Product Development
                  </Text>
                  <Image src="images/img_arrow_left.svg" h="8px" w="8px" />
                </Flex>
                <Image src="images/img_rectangle_5.png" h="220px" borderRadius="16px" />
                <Text color="gray.600" w={{ md: "98%", base: "100%" }} lineHeight="28px">
                  Our skilled developers build robust front-end and back-end solutions tailored to your specific needs.
                </Text>
              </Flex>
            </Flex>
            <Flex
              gap="24px"
              borderColor="blue_gray.50"
              borderWidth="1px"
              borderStyle="solid"
              w="100%"
              flexDirection="column"
              alignItems="center"
              p={{ base: "20px", sm: "40px" }}
              borderRadius="32px"
            >
              <Flex alignSelf="stretch" flexDirection="column" alignItems="end">
                <Image src="images/img_arrow_left.svg" h="8px" zIndex={1} w="8px" position="relative" />
                <Text size="4xl" mt="-8px" fontSize="40px" fontWeight={400} position="relative">
                  Marketing Mastery
                </Text>
              </Flex>
              <Image src="images/img_rectangle_6.png" h={{ md: "220px", base: "auto" }} w="100%" borderRadius="16px" />
              <Text color="gray.600" w={{ md: "98%", base: "100%" }} lineHeight="28px">
                We leverage SEO, SEM, and SMM strategies to ensure your product reaches the right audience.
              </Text>
            </Flex>
            <Flex
              gap="24px"
              borderColor="blue_gray.50"
              borderWidth="1px"
              borderStyle="solid"
              w="100%"
              flexDirection="column"
              alignItems="center"
              p={{ base: "20px", sm: "40px" }}
              borderRadius="32px"
            >
              <Flex alignSelf="stretch" flexDirection="column" alignItems="end">
                <Image src="images/img_arrow_left.svg" h="8px" zIndex={2} w="8px" position="relative" />
                <Text size="4xl" mt="-8px" fontSize="40px" fontWeight={400} position="relative">
                  Data-Driven Decisions
                </Text>
              </Flex>
              <Image src="images/img_rectangle_7.png" h={{ md: "220px", base: "auto" }} w="100%" borderRadius="16px" />
              <Text color="gray.600" w={{ md: "98%", base: "100%" }} lineHeight="28px">
                We utilize data insights to optimize your product and marketing strategies for maximum impact.
              </Text>
            </Flex>
          </Flex>
          <Text
            size="5xl"
            mt="120px"
            ml={{ md: "40px", base: "0px" }}
            fontFamily="Lexend Deca"
            textAlign="right"
            fontSize="64px"
            fontWeight={300}
          >
            Recent work
          </Text>
          <Flex
            mt="119px"
            gap="72px"
            alignSelf="center"
            w="100%"
            flexDirection="column"
            maxW="1356px"
            mx="auto"
            p={{ md: "", base: "20px" }}
          >
            <Flex gap="24px" flex={1} alignItems="start" flexDirection={{ md: "row", base: "column" }} cursor="pointer" onClick={()=>window.open("https://sign.centilio.com/")}>
              <Image src="Centilio.png" h="355px" w={{ md: "76%", base: "100%" }} borderRadius="32px" />
              <Flex gap="23px" w={{ md: "24%", base: "100%" }} flexDirection="column">
                <Flex justifyContent="space-between" alignItems="start" gap="20px">
                  <Text size="4xl" fontSize="40px" fontWeight={400}>
                   Centilio
                  </Text>
                  <Image src="images/img_arrow_left.svg" h="8px" mt="7px" w="8px" />
                </Flex>
                <Text color="gray.600" w={{ md: "83%", base: "100%" }} lineHeight="28px">
                  A coffee brand’s complete branding and helped them to 3x their growth rate
                </Text>
              </Flex>
            </Flex>
            <Flex gap="45px" flex={1} alignItems="start" flexDirection={{ md: "row", base: "column" }} cursor="pointer" onClick={()=>window.open("https://zolahost.com/")}>
              <Flex
                gap="24px"
                flex={1}
                alignItems="start"
                flexDirection={{ md: "row", base: "column" }}
                alignSelf="stretch"
              >
                <Image src="ZolaHost.png" h="355px" w={{ md: "79%", base: "100%" }} borderRadius="32px" />
                <Flex gap="23px" w={{ md: "21%", base: "100%" }} flexDirection="column" alignItems="start">
                  <Text size="4xl" fontSize="40px" fontWeight={400}>
                    Zola Host
                  </Text>
                  <Text color="gray.600" lineHeight="28px">
                    A coffee brand’s complete branding and helped them to 3x their growth rate
                  </Text>
                </Flex>
              </Flex>
              <Image src="MocDoc.png" h="8px" mt="8px" w={{ md: "8px", base: "100%" }} />
            </Flex>
            <Flex gap="24px" flex={1} alignItems="start" flexDirection={{ md: "row", base: "column" }} cursor="pointer" onClick={()=>window.open("https://mocdoc.in/")}>
              <Image src="MocDoc.png" h="355px" w={{ md: "76%", base: "100%" }} borderRadius="32px" />
              <Flex gap="23px" w={{ md: "24%", base: "100%" }} flexDirection="column">
                <Flex justifyContent="space-between" alignItems="start" gap="20px">
                  <Text size="4xl" fontSize="40px" fontWeight={400}>
                   Moc Doc
                  </Text>
                  <Image src="images/img_arrow_left.svg" h="8px" mt="7px" w="8px" />
                </Flex>
                <Text color="gray.600" w={{ md: "83%", base: "100%" }} lineHeight="28px">
                  A coffee brand’s complete branding and helped them to 3x their growth rate
                </Text>
              </Flex>
            </Flex>
          </Flex>
          <Text
            size="5xl"
            mt="127px"
            mr={{ md: "40px", base: "0px" }}
            fontFamily="Lexend Deca"
            textAlign="right"
            fontSize="64px"
            fontWeight={300}
            alignSelf="end"
          >
            Benefits of Working with Us
          </Text>
          <Flex
            mt="131px"
            gap="80px"
            alignSelf="center"
            borderColor="blue_gray.50"
            borderBottomWidth="0.5px"
            borderStyle="solid"
            w="100%"
            maxW="1368px"
            mx="auto"
            flexDirection={{ md: "row", base: "column" }}
            p={{ md: "", base: "20px" }}
          >
            <Flex gap={{ md: "128px", base: "64px", sm: "96px" }} w="100%" flexDirection="column">
              <Text size="2xl" fontSize="24px">
                Seamless Collaboration
              </Text>
              <Text color="gray.600" lineHeight="28px">
                We work closely with you to understand your vision and goals.
              </Text>
            </Flex>
            <Flex gap={{ md: "128px", base: "64px", sm: "96px" }} w="100%" flexDirection="column" alignItems="start">
              <Text size="2xl" fontSize="24px">
                Faster Time to Market
              </Text>
              <Text color="gray.600" lineHeight="28px">
                Our streamlined approach helps you launch your product efficiently.
              </Text>
            </Flex>
            <Flex gap={{ md: "128px", base: "64px", sm: "96px" }} w="100%" flexDirection="column" alignItems="start">
              <Text size="2xl" fontSize="24px">
                Scalable Solutions
              </Text>
              <Text color="gray.600" lineHeight="28px">
                We build products that can grow alongside your business.
              </Text>
            </Flex>
            <Flex gap={{ md: "127px", base: "63px", sm: "95px" }} w="100%" flexDirection="column" alignItems="start">
              <Text size="2xl" fontSize="24px">
                Measurable Results
              </Text>
              <Text color="gray.600" lineHeight="28px">
                We track key metrics to demonstrate the success of your product and marketing efforts.
              </Text>
            </Flex>
          </Flex>
          <Box
            h={{ md: "240px", base: "auto" }}
            mt="160px"
            ml={{ md: "40px", base: "0px" }}
            w="68%"
            position="relative"
          >
            <Image src="images/img_vector_1.svg" h="53px" ml={{ md: "123px", base: "0px" }} w="45%" />
            <Text
              size="5xl"
              fontFamily="Lexend Deca"
              fontSize="64px"
              fontWeight={300}
              w="100%"
              lineHeight="80px"
              position="absolute"
              left="0px"
              bottom="0px"
              right="0px"
              top="0px"
              h="max-content"
              m="auto"
            >
              Ready to stop chasing trends and start creating something truly remarkable?
            </Text>
          </Box>
          <Flex
            mt="273px"
            ml={{ md: "40px", base: "0px" }}
            w={{ md: "35%", base: "100%" }}
            alignItems="start"
            flexDirection={{ base: "column", sm: "row" }}
            p={{ md: "", base: "20px" }}
          >
            <Button
              variant="fill"
              colorScheme="black_900_02"
              fontFamily="Lexend Deca"
              flex={1}
              w="100%"
              borderRadius="28px"
              px={{ base: "20px", sm: "" }}
              alignSelf="stretch"
            >
              Get a Free Consultation
            </Button>
            <Text size="s" mt="15px"  ml={{ base: "0px", sm: "24px" }}>
              Learn More About Our Services
            </Text>
            <Image
              src="images/img_arrow_left_black_900_01.svg"
              h="8px"
              mt="21px"
              ml={{ base: "0px", sm: "12px" }}
              w={{ base: "100%", sm: "8px" }}
            />
          </Flex>
          <Flex
            as="footer"
            mt="95px"
            borderBottomLeftRadius="40px"
            borderBottomRightRadius="40px"
            bg="lime.200"
            alignSelf="stretch"
            justifyContent="center"
            alignItems="center"
            p={{ base: "20px", sm: "40px" }}
          >
              <Flex gap="6px" alignItems="center">
                  <Image src="images/img_mobile.svg" h="20px" mt="2px" />
                  <Heading as="h4" letterSpacing="-4.80px" fontSize="24px">
                    Pixelize
                  </Heading>
                </Flex>
            <Container
              mt="80px"
              mb="85px"
              display="flex"
              justifyContent="center"
              maxW="870px"
              w="100%"
              px="0px"
              mx="auto"
            >
              <Flex alignItems="space-evenly" flexDirection={{ md: "row", base: "column"  }} gap="180px">
                <UnorderedList
                  styleType="none"
                  mt="3px"
                  ml={{ md: "275px", base: "0px" }}
                  gap="21px"
                  display="flex"
                  justifyContent="space-around"
                  flexDirection="column"
                  alignItems="start"
                >
                  <ListItem>
                    <Link href="/servicePage">
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
              </Flex>
            </Container>
          </Flex>
        </Flex>
      </Box>
    </>
  );
}
