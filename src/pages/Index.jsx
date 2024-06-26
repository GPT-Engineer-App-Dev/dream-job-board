import { Container, Text, VStack, Box, Heading, SimpleGrid, Card, CardHeader, CardBody, CardFooter, Button } from "@chakra-ui/react";
import { FaBriefcase, FaMapMarkerAlt, FaDollarSign } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";



const Index = () => {
  const [jobListings, setJobListings] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const storedJobListings = JSON.parse(localStorage.getItem("jobListings")) || [];
    setJobListings(storedJobListings);
  }, []);

  const handleApply = (jobId) => {
    navigate("/apply-job", { state: { jobId } });
  };

  return (
    <Container maxW="container.xl" py={10}>
      <VStack spacing={8}>
        <Heading as="h1" size="2xl" mb={4}>Job Listings</Heading>
        <Button as={Link} to="/post-job" colorScheme="teal" size="lg">Post a Job</Button>
        <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} spacing={10}>
          {jobListings.map((job, index) => (
            <Card key={index} borderWidth="1px" borderRadius="lg" overflow="hidden">
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
                <Button colorScheme="teal" onClick={() => handleApply(index)}>Apply Now</Button>
              </CardFooter>
            </Card>
          ))}
        </SimpleGrid>
      </VStack>
    </Container>
  );
};

export default Index;