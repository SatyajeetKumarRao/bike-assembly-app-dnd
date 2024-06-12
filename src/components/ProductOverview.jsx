import { Box, Image, Text, Button, Flex } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";

const ProductDescription = () => {
  const navigate = useNavigate();

  const startAssembly = () => {
    navigate("/parts-selection");
  };

  return (
    <Flex textAlign="center" p={4} justify={"center"} align={"center"}>
      <Box maxW={"800px"} w={"100%"}>
        <Box w={"100%"}>
          <Flex
            w="full"
            bgImage="url('https://cdn.usegalileo.ai/stability/2da3b8ff-48c0-4646-b9d2-170c2f8867f5.png')"
            bgPosition="center"
            bgRepeat="no-repeat"
            bgSize="cover"
            flexDirection="column"
            justify="end"
            overflow="hidden"
            rounded={"xl"}
            minH="20rem"
          ></Flex>
        </Box>

        <Text fontSize="xl" mt={4}></Text>
        <Text
          as={"p"}
          fontSize={{ base: 20, md: 25 }}
          fontWeight={"700"}
          mt={2}
        >
          Your Dream Bike, Built by You
        </Text>

        <Flex justify="flex-end" p={4}>
          <Button
            mt={4}
            colorScheme="teal"
            bgColor={"#1f98e2"}
            onClick={startAssembly}
          >
            Start
          </Button>
        </Flex>
      </Box>
    </Flex>
  );
};

export default ProductDescription;
