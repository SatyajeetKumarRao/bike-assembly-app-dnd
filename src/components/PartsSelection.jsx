import { Box, Image, Button, Grid, Heading, Flex } from "@chakra-ui/react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import bike_part1 from "../assets/part1.jpg";
import bike_part2 from "../assets/part2.jpg";
import bike_part3 from "../assets/part3.jpg";
import bike_part4 from "../assets/part4.jpg";

const parts = [
  { id: 1, name: "Part1", image: bike_part1 },
  { id: 2, name: "Part2", image: bike_part2 },
  { id: 3, name: "Part3", image: bike_part3 },
  { id: 4, name: "Part4", image: bike_part4 },
];

function PartsSelection() {
  const navigate = useNavigate();
  const [selectedParts, setSelectedParts] = useState([]);

  const toggleSelectPart = (id) => {
    setSelectedParts((prev) =>
      prev.includes(id) ? prev.filter((partId) => partId !== id) : [...prev, id]
    );
  };

  return (
    <Box
      display="flex"
      flexDirection="column"
      alignItems="center"
      justifyContent="center"
      p={5}
      textAlign="center"
    >
      <Heading mb={5}>Select Parts for Your Motorcycle</Heading>
      <Grid
        className="dark-scrollbar"
        overflowX="scroll"
        p={2}
        templateColumns="repeat(auto-fit, minmax(150px, 1fr))"
        gap={4}
        justifyContent="center"
        alignItems="center"
        width="100%"
      >
        {parts.map((part) => (
          <Box
            key={part.id}
            p={1}
            textAlign="center"
            bg={selectedParts.includes(part.id) ? "teal.100" : "black"}
            borderRadius={10}
          >
            <Flex direction="column" alignItems="center" borderRadius={10}>
              <Image
                src={part.image}
                alt={part.name}
                boxSize="100px"
                borderRadius="md"
              />
              <Box mt={2} fontSize="lg" fontWeight={"bold"}>
                {part.name}
              </Box>
              <Button
                mt={2}
                colorScheme={selectedParts.includes(part.id) ? "red" : "green"}
                variant="link"
                onClick={() => toggleSelectPart(part.id)}
              >
                {selectedParts.includes(part.id) ? "Deselect" : "Select"}
              </Button>
            </Flex>
          </Box>
        ))}
      </Grid>

      <Flex width={"100%"} justify={"flex-end"} gap={10}>
        <Button
          colorScheme="red"
          size="lg"
          mt={8}
          variant={"ghost"}
          onClick={() => navigate("/")}
        >
          Back
        </Button>
        <Button
          colorScheme="blue"
          isDisabled={selectedParts.length == 0}
          size="lg"
          mt={8}
          onClick={() => navigate("/assembly", { state: { selectedParts } })}
        >
          Next
        </Button>
      </Flex>
    </Box>
  );
}

export default PartsSelection;
