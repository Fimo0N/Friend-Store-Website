import React from "react";
import { Box, Heading, Text, VStack, Image, Container, Divider, Link, Grid } from "@chakra-ui/react";

const AboutUs = () => {
  // Define teammates information in an array for easy modification
  const teammates = [
    {
      name: "Kinnalone Philavong",
      email: "kinnalonesit@gmail.com",
      facebook: "Kinnalone Philavong",
      github: "Numsompplv",
      image: "numsomp.jpg", 
    },
    {
      name: "Talha Kamran",
      email: "ktalha4053@gmail.com",
      facebook: "Talha Kamran",
      github: "Fimo0N",
      image: "talha.jpg", // Replace with actual image URL
    },
    {
      name: "Abe Shosei",
      email: "syousei1999@gmail.com",
      facebook: "Shosei Abe",
      github: "Shosei-Abe",
      image: "shosei.jpg", // Replace with actual image URL
    },
    {
      name: "Amine Ait Mouss",
      email: "ktalha4053@gmail.com",
      facebook: "Amine Sanchez",
      github: "AmineAitMouss",
      image: "ami.jpg", // Replace with actual image URL
    },
    {
      name: "Guoyuan Liao",
      email: "chris.johnson@friendstore.com",
      facebook: "Karl",
      github: "3118067182",
      image: "karl.jpg", // Replace with actual image URL
    },
  ];

  return (
    <Box bgGradient="linear(to-r, blue.500, red.500)" color="white" minH="100vh" py={10} display="flex" flexDirection="column">
      <Container maxW="container.md" textAlign="center" mb={10}>
        <Heading as="h1" size="2xl" mb={6}>
          "Welcome to the Friend Store!"
        </Heading>
        <Text fontSize="xl" mb={8}>
          Ever wished managing your friendships could be easy, fun, and organized? Well, now it is! At Friend Store, 
          we’ve got everything you need to <b>search</b>, <b>organize</b>, and <b>celebrate</b> your friends – all in one spot.
           Think of us as the ultimate tool for keeping your connections alive and thriving. 
           Let’s make friendships <b>unforgettable!</b>
        </Text> 
      </Container>

      <Container maxW="container.lg">
        <VStack spacing={5} align="stretch">
          <Heading as="h2" size="lg" textAlign="center" color="white">
            Meet Our Team
          </Heading>
          <Grid templateColumns={{ base: "1fr", md: "repeat(3, 1fr)" }} gap={4}>
            {teammates.map((member, index) => (
              <VStack key={index} spacing={4} bg="white" color="black" borderRadius="lg" boxShadow="md" p={4}>
                <Image
                  src={member.image} // Modify teammate image here in the `teammates` array
                  alt={member.name}
                  boxSize="50px"
                  borderRadius="full"
                />
                <Text fontSize="lg" fontWeight="bold">
                  {member.name} {/* Modify teammate name here in the `teammates` array */}
                </Text>
                <Text fontSize="sm" color="gray.600">
                  Email: <Link href={`mailto:${member.email}`} color="teal.500">{/* Modify email here in the `teammates` array */}
                    {member.email}
                  </Link>
                </Text>
                <Text fontSize="sm" color="gray.600">
                  Facebook: <Link href={`https://${member.facebook}`} color="teal.500">{/* Modify Facebook link here in the `teammates` array */}
                    {member.facebook}
                  </Link>
                </Text>
                <Text fontSize="sm" color="gray.600">
                  GitHub: <Link href={`https://${member.github}`} color="teal.500">{/* Modify GitHub link here in the `teammates` array */}
                    {member.github}
                  </Link>
                </Text>
              </VStack>
            ))}
          </Grid>
        </VStack>
      </Container>

      <Box as="footer" bg="teal.700" py={6} mt={10} textAlign="center">
        <Container maxW="container.md">
          <Divider mb={4} borderColor="whiteAlpha.700" />
          <Text fontSize="md" mb={2}>
            Contact us at: <Link href="mailto:support@friendstore.com" color="teal.200">support@friendstore.com</Link>
          </Text>
          <Text fontSize="sm">
            &copy; {new Date().getFullYear()} Friend Store. All rights reserved.
          </Text>
        </Container>
      </Box>
    </Box>
  );
};

export default AboutUs;
