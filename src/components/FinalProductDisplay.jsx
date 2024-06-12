import { Box, Image, Button, SimpleGrid } from "@chakra-ui/react";
import { useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";

function FinalProduct() {
  const navigate = useNavigate();
  const location = useLocation();

  const assembledParts = Array.isArray(location.state?.assembledParts)
    ? location.state.assembledParts
    : [];

  useEffect(() => {
    if (!assembledParts.length) {
      navigate("/assembly");
    }
  });

  return (
    <Box
      textAlign="center"
      p={5}
      w={"100%"}
      display={"flex"}
      justifyContent={"center"}
    >
      <Box w={"50%"}>
        <SimpleGrid columns={2} spacing="0" p="0" m="0" w={"100%"}>
          {assembledParts.map((part) => (
            <Box key={part.id} p="0" m="0" width="100%" height="100%">
              <Image
                src={part.image}
                alt={part.name}
                width="100%"
                height="100%"
                objectFit="cover"
              />
            </Box>
          ))}
        </SimpleGrid>
        <Button
          colorScheme="red"
          size="lg"
          w={"100%"}
          mt={4}
          variant={"ghost"}
          width={"fit-content"}
          onClick={() => navigate("/")}
        >
          Done
        </Button>
      </Box>
    </Box>
  );
}

export default FinalProduct;
