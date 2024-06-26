import { Container, VStack, Heading, Text, Button } from "@chakra-ui/react";
import { Link } from "react-router-dom";

const ApplicationConfirmation = () => {
  return (
    <Container maxW="container.md" py={10}>
      <VStack spacing={8}>
        <Heading as="h1" size="2xl">Application Submitted</Heading>
        <Text fontSize="lg">Thank you for applying. We will review your application and get back to you soon.</Text>
        <Button as={Link} to="/" colorScheme="teal" size="lg">Back to Home</Button>
      </VStack>
    </Container>
  );
};

export default ApplicationConfirmation;