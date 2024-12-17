import React from "react";
import { Box, Heading, Text, Stack, VStack, Image, Container, Divider, Link, Grid } from "@chakra-ui/react";

const AboutUs = () => {
  return (
    <Box bgGradient="linear(to-r, teal.500, green.500)" color="white" minH="100vh" py={10} display="flex" flexDirection="column">
      <Container maxW="container.md" textAlign="center" mb={10}>
        <Heading as="h1" size="2xl" mb={6}>
          "Do you struggle with remembering your friends?"
        </Heading>
        <Text fontSize="xl" mb={8}>
          We understand how important it is to maintain strong connections. That's why we're here to help! Let us
          introduce ourselves and show you how we can make your life a bit easier.
        </Text>
      </Container>

      <Container maxW="container.lg">
        <VStack spacing={10} align="stretch">
          <Stack
            direction={{ base: "column", md: "row" }}
            align="center"
            spacing={6}
            bg="white"
            color="black"
            borderRadius="lg"
            boxShadow="xl"
            p={6}
          >
            <Image
              src="https://via.placeholder.com/150"
              alt="Our Mission"
              boxSize="150px"
              borderRadius="full"
            />
            <VStack align="start">
              <Heading as="h2" size="lg">
                Our Mission
              </Heading>
              <Text>
                We aim to simplify the way you manage your relationships by providing a friendly and intuitive platform
                to keep track of your cherished connections.
              </Text>
            </VStack>
          </Stack>

          <Stack
            direction={{ base: "column", md: "row-reverse" }}
            align="center"
            spacing={6}
            bg="white"
            color="black"
            borderRadius="lg"
            boxShadow="xl"
            p={6}
          >
            <Image
              src="https://via.placeholder.com/150"
              alt="Our Values"
              boxSize="150px"
              borderRadius="full"
            />
            <VStack align="start">
              <Heading as="h2" size="lg">
                Our Values
              </Heading>
              <Text>
                We believe in the power of community and connection. Our platform is designed to foster stronger bonds
                with the people who matter most to you.
              </Text>
            </VStack>
          </Stack>

          <Stack
            direction={{ base: "column", md: "row" }}
            align="center"
            spacing={6}
            bg="white"
            color="black"
            borderRadius="lg"
            boxShadow="xl"
            p={6}
          >
            <Image
              src="https://via.placeholder.com/150"
              alt="Why Choose Us"
              boxSize="150px"
              borderRadius="full"
            />
            <VStack align="start">
              <Heading as="h2" size="lg">
                Why Choose Us
              </Heading>
              <Text>
                Our innovative approach and commitment to your needs make us the perfect choice for staying organized
                and connected with your friends.
              </Text>
            </VStack>
          </Stack>

          <VStack spacing={8} align="stretch" pt={10}>
            <Heading as="h2" size="lg" textAlign="center" color="white">
              Meet Our Team
            </Heading>
            <Grid templateColumns={{ base: "1fr", md: "repeat(3, 1fr)" }} gap={8}>
              {["John Doe", "Jane Smith", "Michael Lee", "Emily Davis", "Chris Johnson"].map((member, index) => (
                <VStack key={index} spacing={4} bg="white" color="black" borderRadius="lg" boxShadow="md" p={6}>
                  <Image
                    src={`https://via.placeholder.com/150?text=${member.split(" ").join("+")}`}
                    alt={member}
                    boxSize="100px"
                    borderRadius="full"
                  />
                  <Text fontSize="lg" fontWeight="bold">
                    {member}
                  </Text>
                  <Text fontSize="sm" color="gray.600">
                    Email: <Link href={`mailto:${member.split(" ").join(".").toLowerCase()}@friendstore.com`} color="teal.500">
                      {member.split(" ").join(".").toLowerCase()}@friendstore.com
                    </Link>
                  </Text>
                  <Text fontSize="sm" color="gray.600">
                    Facebook: <Link href="#" color="teal.500">facebook.com/{member.split(" ").join(".").toLowerCase()}</Link>
                  </Text>
                  <Text fontSize="sm" color="gray.600">
                    Instagram: <Link href="#" color="teal.500">instagram.com/{member.split(" ").join(".").toLowerCase()}</Link>
                  </Text>
                  <Text fontSize="sm" color="gray.600">
                    GitHub: <Link href="#" color="teal.500">github.com/{member.split(" ").join(".").toLowerCase()}</Link>
                  </Text>
                  <Text fontSize="sm" color="gray.600">
                    LinkedIn: <Link href="#" color="teal.500">linkedin.com/in/{member.split(" ").join(".").toLowerCase()}</Link>
                  </Text>
                </VStack>
              ))}
            </Grid>
          </VStack>
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
