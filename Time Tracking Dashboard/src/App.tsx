import { Box, Grid, GridItem } from "@chakra-ui/react";
import "./index.css";
import data from "./data.json";
import CardContainer from "./Components/CardContainer";

function App() {
  const cardColor = data.cards.map((c) => c.backgroundColor);
  console.log(cardColor);
  return (
    <>
      <Grid
        templateRows="repeat(2, 1fr)"
        templateColumns="repeat(4, 1fr)"
        gap={4}
        margin="25vh 16.5vw"
      >
        <GridItem>
          <CardContainer
            CardBgGradient="linear-gradient(180deg, rgb(255, 138, 100, 1) 26%, rgba(18,23,37,0) 78%)"
            CardImg="./src/assets/icon-social.svg"
          />
        </GridItem>
        <GridItem>
          <Box w="100%" h="245px">
            Block 2
          </Box>
        </GridItem>
        <GridItem>
          <Box w="100%" h="245px">
            Block 3
          </Box>
        </GridItem>
        <GridItem>
          <Box w="100%" h="245px">
            Block 4
          </Box>
        </GridItem>
        <GridItem>
          <Box w="100%" h="245px">
            Block 5
          </Box>
        </GridItem>
        <GridItem>
          <Box w="100%" h="245px">
            Block 6
          </Box>
        </GridItem>
        <GridItem>
          <Box w="100%" h="245px">
            Block 7
          </Box>
        </GridItem>
        <GridItem>
          <Box w="100%" h="245px">
            Block 8
          </Box>
        </GridItem>
      </Grid>
    </>
  );
}

export default App;
