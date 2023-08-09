import { Box, Grid, GridItem } from "@chakra-ui/react";
import "./index.css";
import data from "./data.json";
import CardContainer from "./Components/CardContainer";
import CardContent from "./Components/CardContent";

function App() {
  //TODO: create a hook for carDaily method & make it able to change daily/weekly/monthly
  const cardDaily = data.cards.map((c) => (
    <GridItem w="100%" h="245px">
      <CardContainer CardBgGradient={c.backgroundColor} CardImg={c.image}>
        <CardContent
          CardTitle={c.title}
          CardTimeFrames={{
            current: c.timeframes.daily.current,
            previous: c.timeframes.daily.previous,
          }}
        />
      </CardContainer>
    </GridItem>
  ));

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
        {cardDaily}
      </Grid>
    </>
  );
}

export default App;
