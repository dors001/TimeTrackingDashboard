import { Box, Grid, GridItem } from "@chakra-ui/react";
import "./index.css";

function App() {
  return (
    <>
      <Grid
        templateRows="repeat(2, 1fr)"
        templateColumns="repeat(4, 1fr)"
        gap={4}
        margin="25vh 16.5vw"
      >
        <GridItem>
          <Box w="100%" h="245px">
            Block 1
          </Box>
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
