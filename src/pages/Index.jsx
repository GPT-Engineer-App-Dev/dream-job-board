import { Container, Text, VStack, Box, Heading, SimpleGrid, Card, CardHeader, CardBody, CardFooter, Button } from "@chakra-ui/react";
import { FaBriefcase, FaMapMarkerAlt, FaDollarSign } from "react-icons/fa";

const jobListings = [
  {
    id: 1,
    title: "Software Engineer",
    company: "Tech Corp",
    location: "San Francisco, CA",
    salary: "$120,000 - $140,000",
    description: "We are looking for a skilled software engineer to join our team.",
  },
  {
    id: 2,
    title: "Product Manager",
    company: "Innovate Ltd.",
    location: "New York, NY",
    salary: "$110,000 - $130,000",
    description: "Seeking an experienced product manager to lead our product team.",
  },
  {
    id: 3,
    title: "UX Designer",
    company: "Design Studio",
    location: "Remote",
    salary: "$90,000 - $110,000",
    description: "A creative UX designer needed to improve user experience.",
  },
];

const Index = () => {
  return (
    <Container maxW="container.xl" py={10}>
      <VStack spacing={8}>
        <Heading as="h1" size="2xl" mb={4}>Job Listings</Heading>
        <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} spacing={10}>
          {jobListings.map((job) => (
            <Card key={job.id} borderWidth="1px" borderRadius="lg" overflow="hidden">
              <CardHeader>
                <Heading size="md">{job.title}</Heading>
                <Text>{job.company}</Text>
              </CardHeader>
              <CardBody>
                <Box display="flex" alignItems="center" mb={2}>
                  <FaMapMarkerAlt />
                  <Text ml={2}>{job.location}</Text>
                </Box>
                <Box display="flex" alignItems="center" mb={2}>
                  <FaDollarSign />
                  <Text ml={2}>{job.salary}</Text>
                </Box>
                <Text>{job.description}</Text>
              </CardBody>
              <CardFooter>
                <Button colorScheme="teal">Apply Now</Button>
              </CardFooter>
            </Card>
          ))}
        </SimpleGrid>
      </VStack>
    </Container>
  );
};

export default Index;