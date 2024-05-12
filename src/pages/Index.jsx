import { Container, VStack, Heading, Input, Button, FormControl, FormLabel, InputGroup, InputRightElement, Text, Box, Divider } from "@chakra-ui/react";
import { FaSearch, FaUserEdit, FaMoneyCheckAlt } from "react-icons/fa";

const Index = () => {
  return (
    <Container maxW="container.xl" py={10}>
      <VStack spacing={8}>
        <Heading as="h1" size="xl">
          CRM Dashboard
        </Heading>
        <Text>Welcome, Customer Support Agent!</Text>

        {/* Search for user's order */}
        <Box w="full" p={5} borderWidth="1px" borderRadius="lg">
          <Heading as="h2" size="lg" mb={4}>
            Search Order
          </Heading>
          <InputGroup>
            <Input placeholder="Enter Order ID" />
            <InputRightElement width="4.5rem">
              <Button h="1.75rem" size="sm" rightIcon={<FaSearch />}>
                Search
              </Button>
            </InputRightElement>
          </InputGroup>
        </Box>

        {/* Update customer information */}
        <Box w="full" p={5} borderWidth="1px" borderRadius="lg">
          <Heading as="h2" size="lg" mb={4}>
            Update Customer Info
          </Heading>
          <FormControl id="email" mb={4}>
            <FormLabel>Customer ID</FormLabel>
            <Input type="text" />
          </FormControl>
          <FormControl id="address" mb={4}>
            <FormLabel>Address</FormLabel>
            <Input type="text" />
          </FormControl>
          <FormControl id="zipcode" mb={4}>
            <FormLabel>Zip Code</FormLabel>
            <Input type="text" />
          </FormControl>
          <FormControl id="phone" mb={4}>
            <FormLabel>Phone Number</FormLabel>
            <Input type="tel" />
          </FormControl>
          <Button leftIcon={<FaUserEdit />} colorScheme="blue">
            Update Info
          </Button>
        </Box>

        {/* Refund Section */}
        <Box w="full" p={5} borderWidth="1px" borderRadius="lg">
          <Heading as="h2" size="lg" mb={4}>
            Process Refund
          </Heading>
          <FormControl id="order-id" mb={4}>
            <FormLabel>Order ID</FormLabel>
            <Input type="text" />
          </FormControl>
          <Button leftIcon={<FaMoneyCheckAlt />} colorScheme="red">
            Refund Order
          </Button>
        </Box>
      </VStack>
    </Container>
  );
};

export default Index;
