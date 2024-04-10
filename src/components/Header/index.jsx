import React from "react";
import { Image, Text, Flex, Link, UnorderedList, ListItem, Heading, Box } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";

export default function Header({ ...props }) {

  const navigate=useNavigate();
  console.log(props,'props')
  return (
    <Box {...props} as="header">
      <Flex gap="6px" alignItems="center">
        <Image src="plogo.png" h="20px" mt="2px" />
        <Heading as="h4" letterSpacing="-4.80px" fontSize="24px" onClick={()=>navigate('/homePage')}>
          Pixelize
        </Heading>
      </Flex>
      <UnorderedList styleType="none" mt="3px" gap={{ md: "104px", base: "20px" }} display="flex" flexWrap="wrap">
        <ListItem>
          <Link onClick={()=>navigate('/servicePage')}>
            <Text size="s" letterSpacing="2.80px">
              WHAT WE DO
            </Text>
          </Link>
        </ListItem>
        <ListItem>
          <Link onClick={()=>navigate('/ourWork')}>
            <Text size="s" letterSpacing="2.80px">
              OUR WORK
            </Text>
          </Link>
        </ListItem>
        <ListItem>
          <Link  onClick={()=>navigate('/servicePage')}>
            <Text size="s" letterSpacing="2.80px">
              WHY US?
            </Text>
          </Link>
        </ListItem>
      </UnorderedList>
      <Flex mt="4px" gap="12px" alignItems="center">
        <Text size="s" letterSpacing="2.80px" onClick={()=>navigate('/contactUs')} style={{cursor:'pointer'}}>
          CONTACT US
        </Text>
        <Image src="images/img_arrow_left.svg" h="8px" w="8px" />
      </Flex>
    </Box>
  );
}
