import React from "react";
import { Helmet } from "react-helmet";
import Header from "../../components/Header";
import { Button, Input, Text, Progress, Flex, Image, Box, Container } from "@chakra-ui/react";

export default function SignUpPagePage({fetchLogin}) {
  return (
    <>
      <Helmet>
        <title>pixel</title>
        <meta name="description" content="Web site created using create-react-app" />
      </Helmet>
      <Box bg="white.A700" w="100%">
        <Flex
          gap={{ md: "109px", base: "54px", sm: "81px" }}
          bg="gray.900"
          flexDirection="column"
          alignItems="center"
          p={{ base: "20px", sm: "40px" }}
        >
          <Header
            mt="2px"
            display="flex"
            alignSelf="stretch"
            justifyContent="space-between"
            alignItems="center"
            gap="20px"
            flexDirection={{ md: "row", base: "column" }}
          />
          <Container
            mb="5px"
            alignSelf="stretch"
            display="flex"
            justifyContent="space-between"
            maxW="1360px"
            w="100%"
            gap="20px"
            px="0px"
            mx="auto"
            flexDirection={{ md: "row", base: "column" }}
          >
            <Flex w={{ md: "32%", base: "100%" }} flexDirection="column" alignItems="start">
              <Box h={{ md: "451px", base: "auto" }} alignSelf="stretch" position="relative">
                <Flex gap={{ md: "88px", base: "44px", sm: "66px" }} w="100%" flexDirection="column">
                  <Image
                    src="images/img_rectangle_22.png"
                    h="267px"
                    borderTopRightRadius="40px"
                    borderTopLeftRadius="40px"
                  />
                  <Text
                    size="2xl"
                    color="white.A700"
                    fontFamily="Lexend Deca"
                    fontSize="24px"
                    fontWeight={300}
                    lineHeight="32px"
                  >
                    Haptica went above and beyond to make sure we got something we were happy with
                  </Text>
                </Flex>
                <Text
                  size="7xl"
                  color="white.A700"
                  fontFamily="Lexend Deca"
                  fontSize="128px"
                  position="absolute"
                  bottom="12%"
                  left="0.00px"
                  m="auto"
                >
                  “
                </Text>
              </Box>
              <Text color="white.A700" mt="26px">
                Johnson Root
              </Text>
              <Text size="s" color="white.A700" mt="12px" fontWeight={300}>
                Creative Director, Black Wheel
              </Text>
            </Flex>
            <Flex
              bg="gray.900_01"
              w={{ md: "58%", base: "100%" }}
              justifyContent="center"
              p={{ base: "20px", sm: "40px" }}
              borderRadius="40px"
            >
              <Flex w="100%" flexDirection="column" alignItems="start">
                <Flex gap="24px" alignSelf="stretch" alignItems="start" flexDirection={{ md: "row", base: "column" }}>
                  <Text size="md" color="white.A700" fontFamily="Lexend Deca" fontWeight={300}>
                    Step 01 of 04
                  </Text>
                  <Progress value={26} h="6px" mt="5px" bg="gray.700" flex={1} borderRadius="3px" alignSelf="stretch" />
                </Flex>
                <Text size="3xl" color="white.A700" mt="41px" fontFamily="Lexend Deca" fontSize="32px">
                  Let’s start at the very beginning
                </Text>
                <Input placeholder={`Name`} type="text" mt="28px" px={{ base: "20px", sm: "" }} />
                <Input placeholder={`Email`} type="email" mt="16px" px={{ base: "20px", sm: "" }} />
                <Input placeholder={`Company`} mt="16px" px={{ base: "20px", sm: "" }} />
                <Button
                  variant="fill"
                  colorScheme="light_green_A200"
                  mt="56px"
                  fontFamily="Lexend Deca"
                  minW="126px"
                  borderRadius="28px"
                  px={{ base: "20px", sm: "" }}
                  onClick={()=>fetchLogin(true)}
                >
                  Next Step
                </Button>
              </Flex>
            </Flex>
          </Container>
        </Flex>
      </Box>
    </>
  );
}
