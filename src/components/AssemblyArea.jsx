import { Box, Button, Flex, Text } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { DndProvider, useDrag, useDrop } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import { useLocation, useNavigate } from "react-router-dom";

import bike_part1 from "../assets/part1.jpg";
import bike_part2 from "../assets/part2.jpg";
import bike_part3 from "../assets/part3.jpg";
import bike_part4 from "../assets/part4.jpg";

const parts = [
  { id: 1, name: "part1", image: bike_part1 },
  { id: 2, name: "part2", image: bike_part2 },
  { id: 3, name: "part3", image: bike_part3 },
  { id: 4, name: "part4", image: bike_part4 },
];

const ItemType = {
  PART: "part",
};

const DraggablePart = ({ part }) => {
  const [{ isDragging }, drag] = useDrag(() => ({
    type: ItemType.PART,
    item: { part },
    collect: (monitor) => ({
      isDragging: !!monitor.isDragging(),
    }),
  }));

  return (
    <Flex
      align={"center"}
      justify={"center"}
      ref={drag}
      direction={{ base: "column", md: "row" }}
      opacity={isDragging ? 0.5 : 1}
      p={2}
      border="1px solid"
      borderColor={"gray.400"}
      borderRadius={10}
      textAlign={"center"}
      m={1}
      width={"fit-content"}
      gap={2}
    >
      <img
        src={part.image}
        alt={part.name}
        width="100"
        style={{ margin: "0px auto" }}
      />
      <Text fontSize={20} fontWeight={500}>
        {part.name}
      </Text>
    </Flex>
  );
};

const DroppableArea = ({ id, droppedParts, children }) => {
  const [{ isOver }, drop] = useDrop(() => ({
    accept: ItemType.PART,
    drop: (item) => droppedParts(id, item.part),
    collect: (monitor) => ({
      isOver: !!monitor.isOver(),
    }),
  }));

  return (
    <Box
      ref={drop}
      width="48%"
      height="200px"
      border="2px dashed gray"
      bg={isOver ? "gray.700" : "gray.900"}
      position="relative"
      display="flex"
      alignItems="center"
      justifyContent="center"
      m={1}
    >
      {isOver && (
        <Box
          textAlign="center"
          position="absolute"
          top="50%"
          left="50%"
          transform="translate(-50%, -50%)"
          color="white"
        >
          Drop here
        </Box>
      )}
      {children}
    </Box>
  );
};

function Assembly() {
  const navigate = useNavigate();
  const location = useLocation();
  const [assembledParts, setAssembledParts] = useState({
    1: null,
    2: null,
    3: null,
    4: null,
  });

  const selectedParts = location.state?.selectedParts || [];

  useEffect(() => {
    if (!selectedParts.length) {
      navigate("/parts-selection");
    }
  });

  const handleDrop = (zoneId, part) => {
    setAssembledParts((prev) => ({ ...prev, [zoneId]: part }));
  };

  const filteredParts = parts.filter(
    (part) =>
      selectedParts.includes(part.id) &&
      !Object.values(assembledParts).includes(part)
  );

  return (
    <DndProvider backend={HTML5Backend}>
      <Box p={5}>
        <Flex>
          <Box width="30%" mr="10px">
            <Text as={"p"} fontSize={20} fontWeight={600} ml={2} my={2}>
              Your Build
            </Text>
            {filteredParts.map((part) => (
              <DraggablePart key={part.id} part={part} />
            ))}
          </Box>
          <Box width="70%">
            <Flex wrap="wrap" justify="center">
              <DroppableArea id={1} droppedParts={handleDrop}>
                {assembledParts[1] && (
                  <Box p={2} m={1}>
                    <img
                      src={assembledParts[1].image}
                      alt={assembledParts[1].name}
                      width="100px"
                    />
                    {/* <Box>{assembledParts[1].name}</Box> */}
                  </Box>
                )}
              </DroppableArea>
              <DroppableArea id={2} droppedParts={handleDrop}>
                {assembledParts[2] && (
                  <Box p={2} m={1}>
                    <img
                      src={assembledParts[2].image}
                      alt={assembledParts[2].name}
                      width="100px"
                    />
                    <Box>{assembledParts[2].name}</Box>
                  </Box>
                )}
              </DroppableArea>
              <DroppableArea id={3} droppedParts={handleDrop}>
                {assembledParts[3] && (
                  <Box p={2} m={1}>
                    <img
                      src={assembledParts[3].image}
                      alt={assembledParts[3].name}
                      width="100px"
                    />
                    <Box>{assembledParts[3].name}</Box>
                  </Box>
                )}
              </DroppableArea>
              <DroppableArea id={4} droppedParts={handleDrop}>
                {assembledParts[4] && (
                  <Box p={2} m={1}>
                    <img
                      src={assembledParts[4].image}
                      alt={assembledParts[4].name}
                      width="100px"
                    />
                    <Box>{assembledParts[4].name}</Box>
                  </Box>
                )}
              </DroppableArea>
            </Flex>
          </Box>
        </Flex>

        <Flex justify={"flex-end"} gap={10}>
          <Button
            colorScheme="red"
            size="lg"
            mt={4}
            variant={"ghost"}
            onClick={() => navigate("/parts-selection")}
          >
            Back
          </Button>

          <Button
            colorScheme="blue"
            size="lg"
            mt={4}
            isDisabled={
              !Object.values(assembledParts).filter((item) => item != null)
                .length
            }
            onClick={() =>
              navigate("/final-product", {
                state: {
                  assembledParts: Object.values(assembledParts).filter(Boolean),
                },
              })
            }
          >
            Finish
          </Button>
        </Flex>
      </Box>
    </DndProvider>
  );
}

export default Assembly;
