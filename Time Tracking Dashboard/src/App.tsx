import { Box, Flex, Grid, GridItem, Image, Show, Text } from "@chakra-ui/react";
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
        <Show breakpoint="(min-width: 769px)">
          <GridItem rowSpan={2} maxW="255px" placeSelf="center">
            <Box backgroundColor="#1d204b" borderRadius="20px">
              <Flex
                backgroundColor="#5746ea"
                borderRadius="20px"
                height="355px"
                padding="1.5rem"
                direction="column"
              >
                <Image
                  src="/src/assets/image-jeremy.png"
                  boxSize="32"
                  border="3px solid white"
                  borderRadius="100%"
                />
                <Box marginTop="4rem">
                  <Text
                    className="lightFont"
                    fontSize="1.8rem"
                    paddingLeft="0.5rem"
                    letterSpacing="tight"
                  >
                    Report for
                  </Text>
                  <Text
                    fontWeight="normal"
                    fontSize="4rem"
                    letterSpacing="tight"
                  >
                    Jeremy Robson
                  </Text>
                </Box>
              </Flex>
              <Box
                backgroundColor="#1d204b"
                borderBottomRadius="20px"
                height="165px"
                paddingTop="1.5rem"
              >
                <Flex direction="column" gap={8} paddingLeft="2rem">
                  <Buttons selectTimeframe={setTimeframe} />
                </Flex>
              </Box>
            </Box>
          </GridItem>
        </Show>
        <Show breakpoint="(max-width: 768px)">
          <GridItem rowSpan={2} placeSelf="center" width="335px">
            <Box
              backgroundColor="#1d204b"
              borderRadius="20px"
              marginBottom="2rem"
            >
              <Flex
                backgroundColor="#5746ea"
                borderRadius="20px"
                height="120px"
                padding="1.5rem"
              >
                <Image
                  src="/src/assets/image-jeremy.png"
                  boxSize="32"
                  border="3px solid white"
                  borderRadius="100%"
                />
                <Box marginLeft="1.5rem">
                  <Text
                    className="lightFont"
                    fontSize="1.6rem"
                    paddingLeft="0.5rem"
                    letterSpacing="tight"
                  >
                    Report for
                  </Text>
                  <Text
                    fontWeight="normal"
                    fontSize="2.8rem"
                    letterSpacing="tight"
                  >
                    Jeremy Robson
                  </Text>
                </Box>
              </Flex>
              <Box
                backgroundColor="#1d204b"
                borderBottomRadius="20px"
                height="65px"
                paddingTop="1.5rem"
              >
                <Flex gap={8} placeContent="center">
                  <Buttons selectTimeframe={setTimeframe} />
                </Flex>
              </Box>
            </Box>
          </GridItem>
        </Show>
        {cards}
      </Grid>
    </>
  );
}

export default App;
