import React from "react";
import { Helmet } from "react-helmet";
import Header from "../../components/Header";
import { Image, Text, Flex, Heading, Button, AbsoluteCenter, Box, Container } from "@chakra-ui/react";

export default function DesktopOnePage() {
  return (
    <>
      <Helmet>
        <title>pixel</title>
        <meta name="description" content="Web site created using create-react-app" />
      </Helmet>
      <Flex
        pt={{ md: "42px", base: "20px" }}
        gap={{ md: "93px", base: "46px", sm: "69px" }}
        bg="white.A700"
        w="100%"
        flexDirection="column"
        alignItems="center"
      >
        <Header
          display="flex"
          w={{ md: "94%", base: "100%" }}
          justifyContent="space-between"
          alignItems="center"
          gap="20px"
          flexDirection={{ md: "row", base: "column" }}
          p={{ md: "", base: "20px" }}
        />
        <Flex gap="19px" alignSelf="stretch" flexDirection="column">
          <Container
            display="flex"
            flexDirection="column"
            alignItems="start"
            maxW="1368px"
            w="100%"
            px="0px"
            mx="auto"
            p={{ md: "", base: "20px" }}
          >
            <Text size="6xl" fontFamily="Lexend Deca" fontSize="80px" w={{ md: "83%", base: "100%" }}>
              We bridge the gap between vision and reality
            </Text>
            <Box h={{ md: "1025px", base: "auto" }} mt="127px" alignSelf="stretch" position="relative">
              <Text mt="125px" mr={{ md: "115px", base: "0px" }} fontFamily="Lexend Deca" w="24%" lineHeight="28px">
                Full-Stack Development & Marketing Solutions for Growth-Driven Businesses
              </Text>
              <AbsoluteCenter
                w="100%"
                display="flex"
                flexDirection="column"
                alignItems="start"
                h="max-content"
                m="auto"
              >
                <Image src="images/img_exclude.png" h="484px" ml={{ md: "94px", base: "0px" }} w="54%" />
                <Flex
                  h={{ md: "720px", base: "auto" }}
                  mt="-179px"
                  position="relative"
                  bgImage="url(/images/img_group_346.png)"
                  bgSize="cover"
                  bgRepeat="no-repeat"
                  alignSelf="stretch"
                  alignItems="end"
                  p={{ md: "44px", base: "20px" }}
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
                </Flex>
              </AbsoluteCenter>
            </Box>
            <Text
              size="3xl"
              mt="215px"
              ml={{ md: "48px", base: "0px" }}
              fontFamily="Lexend Deca"
              fontSize="32px"
              w={{ md: "82%", base: "100%" }}
              lineHeight="48px"
            >
              <Text size="3xl" as="span" color="black.900_02">
                At Haptico, we&#39;re your one-stop shop for crafting exceptional digital products and propelling them
                to success. We&#39;re a passionate team of&nbsp;
              </Text>
              <Text size="3xl" as="span" color="black.900_02" fontWeight={500}>
                developers, designers, and marketing experts who believe in the power of collaboration. We partner with
                businesses like yours to bring your vision to life, from the initial concept to launch and beyond.
              </Text>
            </Text>
            <Text
              size="5xl"
              mt="222px"
              mr={{ md: "8px", base: "0px" }}
              fontFamily="Lexend Deca"
              textAlign="right"
              fontSize="64px"
              fontWeight={300}
              alignSelf="end"
            >
              Here&#39;s how we can help
            </Text>
            <Flex mt="112px" gap="24px" alignSelf="stretch" flexDirection={{ md: "row", base: "column" }}>
              <Flex
                borderWidth="1px"
                borderStyle="solid"
                w="100%"
                flexDirection="column"
                p={{ base: "20px", sm: "40px" }}
                borderRadius="32px"
                sx={{ "border-image": "linear-gradient(139deg, #5bbad2,#e1859f) 1" }}
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
                    Our skilled developers build robust front-end and back-end solutions tailored to your specific
                    needs.
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
                <Image
                  src="images/img_rectangle_6.png"
                  h={{ md: "220px", base: "auto" }}
                  w="100%"
                  borderRadius="16px"
                />
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
                <Image
                  src="images/img_rectangle_7.png"
                  h={{ md: "220px", base: "auto" }}
                  w="100%"
                  borderRadius="16px"
                />
                <Text color="gray.600" w={{ md: "98%", base: "100%" }} lineHeight="28px">
                  We utilize data insights to optimize your product and marketing strategies for maximum impact.
                </Text>
              </Flex>
            </Flex>
            <Text size="5xl" mt="120px" fontFamily="Lexend Deca" textAlign="right" fontSize="64px" fontWeight={300}>
              Recent work
            </Text>
            <Flex mt="119px" gap="72px" alignSelf="stretch" flexDirection="column">
              <Flex gap="24px" flex={1} alignItems="start" flexDirection={{ md: "row", base: "column" }}>
                <Image src="images/img_rectangle_8.png" h="355px" w={{ md: "76%", base: "100%" }} borderRadius="32px" />
                <Flex gap="23px" w={{ md: "24%", base: "100%" }} flexDirection="column">
                  <Flex justifyContent="space-between" alignItems="start" gap="20px">
                    <Text size="4xl" fontSize="40px" fontWeight={400}>
                      HIP HIP
                    </Text>
                    <Image src="images/img_arrow_left.svg" h="8px" mt="7px" w="8px" />
                  </Flex>
                  <Text color="gray.600" w={{ md: "83%", base: "100%" }} lineHeight="28px">
                    A coffee brand’s complete branding and helped them to 3x their growth rate
                  </Text>
                </Flex>
              </Flex>
              <Flex gap="45px" flex={1} alignItems="start" flexDirection={{ md: "row", base: "column" }}>
                <Flex
                  gap="24px"
                  flex={1}
                  alignItems="start"
                  flexDirection={{ md: "row", base: "column" }}
                  alignSelf="stretch"
                >
                  <Image
                    src="images/img_rectangle_9.png"
                    h="355px"
                    w={{ md: "79%", base: "100%" }}
                    borderRadius="32px"
                  />
                  <Flex gap="23px" w={{ md: "21%", base: "100%" }} flexDirection="column" alignItems="start">
                    <Text size="4xl" fontSize="40px" fontWeight={400}>
                      HIP HIP
                    </Text>
                    <Text color="gray.600" lineHeight="28px">
                      A coffee brand’s complete branding and helped them to 3x their growth rate
                    </Text>
                  </Flex>
                </Flex>
                <Image src="images/img_arrow_left.svg" h="8px" mt="8px" w={{ md: "8px", base: "100%" }} />
              </Flex>
              <Flex gap="24px" flex={1} alignItems="start" flexDirection={{ md: "row", base: "column" }}>
                <Image
                  src="images/img_rectangle_10.png"
                  h="355px"
                  w={{ md: "76%", base: "100%" }}
                  borderRadius="32px"
                />
                <Flex gap="23px" w={{ md: "24%", base: "100%" }} flexDirection="column">
                  <Flex justifyContent="space-between" alignItems="start" gap="20px">
                    <Text size="4xl" fontSize="40px" fontWeight={400}>
                      HIP HIP
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
              mr={{ md: "8px", base: "0px" }}
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
              borderColor="blue_gray.50"
              borderBottomWidth="0.5px"
              borderStyle="solid"
              alignSelf="stretch"
              flexDirection={{ md: "row", base: "column" }}
            >
              <Flex
                gap={{ md: "128px", base: "64px", sm: "96px" }}
                w={{ md: "21%", base: "100%" }}
                flexDirection="column"
              >
                <Text size="2xl" fontSize="24px">
                  Seamless Collaboration
                </Text>
                <Text color="gray.600" lineHeight="28px">
                  We work closely with you to understand your vision and goals.
                </Text>
              </Flex>
              <Flex
                gap={{ md: "128px", base: "64px", sm: "96px" }}
                w={{ md: "21%", base: "100%" }}
                flexDirection="column"
                alignItems="start"
              >
                <Text size="2xl" fontSize="24px">
                  Faster Time to Market
                </Text>
                <Text color="gray.600" lineHeight="28px">
                  Our streamlined approach helps you launch your product efficiently.
                </Text>
              </Flex>
              <Text size="2xl" fontSize="24px">
                Scalable Solutions
              </Text>
              <Text color="gray.600" mb={{ md: "56px", base: "0px" }} w={{ md: "21%", base: "100%" }} lineHeight="28px">
                We build products that can grow alongside your business.
              </Text>
              <Flex
                gap={{ md: "127px", base: "63px", sm: "95px" }}
                w={{ md: "21%", base: "100%" }}
                flexDirection="column"
                alignItems="start"
              >
                <Text size="2xl" fontSize="24px">
                  Measurable Results
                </Text>
                <Text color="gray.600" lineHeight="28px">
                  We track key metrics to demonstrate the success of your product and marketing efforts.
                </Text>
              </Flex>
            </Flex>
            <Text
              size="5xl"
              mt="160px"
              fontFamily="Lexend Deca"
              fontSize="64px"
              fontWeight={300}
              w={{ md: "69%", base: "100%" }}
              lineHeight="80px"
            >
              <Text size="5xl" as="span" color="black.900_02">
                Ready to stop chasing trends and&nbsp;
              </Text>
              <Text
                size="5xl"
                as="span"
                color="transparent"
                bgGradient="linear-gradient(109deg, #5ebad2,#e1859f)"
                sx={{ "background-clip": "text" }}
              >
                start creating something truly remarkable?
              </Text>
            </Text>
            <Flex
              mt="273px"
              w={{ md: "36%", base: "100%" }}
              alignItems="start"
              flexDirection={{ base: "column", sm: "row" }}
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
              <Text
                size="s"
                color="transparent"
                mt="15px"
                ml={{ base: "0px", sm: "24px" }}
                bgGradient="linear-gradient(90deg, #5bbad2,#e1859f)"
                sx={{ "background-clip": "text" }}
              >
                Learn More About Our Services
              </Text>
              <Image
                src="images/img_group_8.png"
                h="8px"
                mt="21px"
                ml={{ base: "0px", sm: "12px" }}
                w={{ base: "100%", sm: "8px" }}
              />
            </Flex>
            <Flex
              mt="170px"
              gap="7px"
              borderColor="blue_gray.50"
              borderTopWidth="0.5px"
              borderStyle="solid"
              w={{ md: "64%", base: "100%" }}
              flexDirection="column"
              alignItems="end"
            >
              <Flex
                alignSelf="stretch"
                justifyContent="space-between"
                alignItems="start"
                gap="20px"
                flexDirection={{ base: "column", sm: "row" }}
              >
                <Flex gap="6px" alignItems="start">
                  <Image src="images/img_mobile.svg" h="20px" mt="2px" />
                  <Heading as="h1" letterSpacing="-4.80px" fontSize="24px">
                    Haptica
                  </Heading>
                </Flex>
                <Flex mt="3px" w={{ base: "100%", sm: "51%" }} justifyContent="space-between" gap="20px">
                  <Flex w="52%" justifyContent="space-between" flexWrap="wrap" gap="20px">
                    <Text size="xs" letterSpacing="2.00px">
                      WHAT WE DO
                    </Text>
                    <Text size="xs" letterSpacing="2.00px">
                      OUR WORK
                    </Text>
                  </Flex>
                  <Text size="xs" letterSpacing="2.00px">
                    WHY US?
                  </Text>
                </Flex>
              </Flex>
              <Flex flexWrap="wrap">
                <Text size="xs" letterSpacing="2.00px">
                  BLOG
                </Text>
                <Text size="xs" ml="125px" letterSpacing="2.00px">
                  CUSTOMER STORIES
                </Text>
                <Text size="xs" ml="93px" letterSpacing="2.00px">
                  IN NEWS
                </Text>
              </Flex>
            </Flex>
          </Container>
          <Image src="images/img_rectangle_11.png" h="510px" borderTopRightRadius="32px" borderTopLeftRadius="32px" />
        </Flex>
      </Flex>
    </>
  );
}
