import { Box, Button, Container, Grid, Input, Text } from "@chakra-ui/react";
import Header from "components/Header";
import React, { useRef } from "react";


const ContactUs = () => {
    const form = useRef();
    const sendEmail =(e)=>{
        e.preventDefault()
    //     emailjs.sendForm('service_7kxwg2e', 'template_ur780oo', form.current, '5BuCsvVRMhOJbwkaG')
    //   .then((result) => {
    //       console.log("Email Send",result.text);
    //   }, (error) => {
    //       console.log("Email Send",error.text);
    //   });
    //   e.target.reset()
    }
 return (
  <>
  <Box style={{paddingTop:'42px',paddingBottom:'15px'}}>
  <Header
   display="flex"
   justifyContent="space-around"
   alignItems="center"
   gap="20px"
   flexDirection={{ md: "row", base: "column" }} />
   </Box>
   <Box
    style={{
     backgroundImage: `url(images/about-bg-img.webp)`,
     backgroundPosition: "center",
     padding: "0px",
    }}
   >
    <Box style={{ backgroundColor: "#3d3d3d99" }}>
     <Container
      style={{ textAlign: "center", paddingTop: "15%", paddingBottom: "15%" }}
     >
      <Text variant="h4" sx={{ color: "white" }}>
       Contact Us
      </Text>
      <Text variant="body1" sx={{ color: "white" }}>
       Contact for Premium Business Services
      </Text>
     </Container>
    </Box>
   </Box>

   <Box>
    <Container>
     <Grid container>
      <Grid item xs={12} lg={6} sm={12} md={6}>
       <Text variant="h4" sx={{ margin: "4% 0 4%" }}>
        Get In Touch
       </Text>
       <Text variant="h5" sx={{ margin: "3% 0 3%" }}>
        Reach Us
       </Text>
       <Text
        variant="body1"
        sx={{ fontWeight: "300", margin: "2% 0 2%" }}
       >
        {/* <LocationOnIcon sx={{ margin: "0% 1% 0%" }} /> */}
        210/3, Kovai Road, Kundadam Dharapuram,
       </Text>
       <Text variant="body1" sx={{ fontWeight: "300", marginLeft: "4%" }}>
        Tirupur,Tamil Nadu–638702, Tamilnadu, India.
       </Text>
       <Text
        variant="body1"
        sx={{ fontWeight: "300", margin: "2% 0 2%" }}
       >
        {/* <MailIcon sx={{ margin: "0% 1% 0%" }} /> zqubetec@gmail.com */}
       </Text>
       <Text variant="h4" sx={{ margin: "4% 0 4%" }}>
        Call us
       </Text>
       <Text variant="h4" sx={{ margin: "4% 0 4%" }}>
        +91 93443 35333 <br /> +91 90952 66280
       </Text>
      </Grid>
      <Grid item xs={12} lg={6} sm={12} md={6}>
       <img src="images/ecommerce-mobile-app-development.webp" alt="" />
      </Grid>
     </Grid>
    </Container>
   </Box>

   <Box
    style={{
     backgroundColor: "#0c2e7d",
     alignItems: "center",
     margin: "3% 0% 3% 0%",
    }}
   >
    <Container style={{ padding: "3% 3% 3% 13%" }}>
     <img src="./source/places-map.webp" alt="" />
    </Container>
   </Box>

   <Box>
    <Container>
     <Text
      variant="h6"
      style={{ textAlign: "center", fontWeight: "300", fontSize: "1rem" }}
     >
      WE HELP YOU
     </Text>
     <Text variant="h4" style={{ textAlign: "center" }}>
      CONTACT US
     </Text>
     <form ref={form} onSubmit={sendEmail}>
     <Grid container>
      <Grid item xs={12} lg={6} sm={12} md={6} sx={{ padding: "2%" }}>
       <Input fullWidth id="Name" label="Name" type="text" name="name" variant="standard" />
      </Grid>
      <Grid item xs={12} lg={6} sm={12} md={6} sx={{ padding: "2%" }}>
       <Input fullWidth id="Email" label="Email" type="email" name="email" variant="standard" />
      </Grid>
      <Grid item xs={12} lg={6} sm={12} md={6} sx={{ padding: "2%" }}>
       <Input fullWidth id="Phone" label="Phone" type="number" name="phone" variant="standard" />
      </Grid>
      <Grid item xs={12} lg={6} sm={12} md={6} sx={{ padding: "2%" }}>
       <Input fullWidth id="Subject" label="Subject" variant="standard" type="text" name="subject"/>
      </Grid>
      <Grid item xs={12} lg={12} sm={12} md={12} sx={{ padding: "2%" }}>
       <Input
        fullWidth
        id="Description"
        label="Description"
        variant="standard"
        type="text"
        name="message"
       />
      </Grid>
      <Grid item xs={12} lg={12} sm={12} md={12} sx={{ padding: "2%", textAlign: "center" }}>
       <Button variant="contained" type="submit" value="Send" >
        Send
       </Button>
      </Grid>
     </Grid>
     </form>
    </Container>
   </Box>
  </>
 );
};
export default ContactUs;



