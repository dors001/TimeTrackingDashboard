import { Button, Flex, Grid } from "@chakra-ui/react";
import "./index.css";
import useCards from "./Hooks/useTimeframes";
import { useState } from "react";
import Buttons from "./Components/Buttons";

function App() {
  const [timeframe, setTimeframe] = useState("weekly");
  const cards = useCards(timeframe);

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
        <Buttons selectTimeframe={setTimeframe} />
        {cards}
      </Grid>
    </>
  );
}

export default App;
