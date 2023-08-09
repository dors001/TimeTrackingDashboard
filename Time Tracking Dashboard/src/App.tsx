import { Button, Flex, Grid } from "@chakra-ui/react";
import "./index.css";
import useCards from "./Hooks/useTimeframes";

function App() {
  const cards = useCards("");

  return (
    <>
      <Grid
        templateRows="repeat(2, 1fr)"
        templateColumns={{
          base: "1fr",
          md: "repeat(4, 1fr)",
        }}
        gap={4}
        margin="2rem"
      >
        <Flex direction="column" gap={2}>
          <Button>daily</Button>
          <Button>weekly</Button>
          <Button>monthly</Button>
        </Flex>
        {cards}
      </Grid>
    </>
  );
}

export default App;
