import data from '../data.json'
import { GridItem } from '@chakra-ui/react';
import CardContainer from '../Components/CardContainer';
import CardContent from '../Components/CardContent';

const useCards = (timeframe: string) => {

    if(timeframe.toLowerCase() === "daily") {
        return data.cards.map((c) => (
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
    }

    if(timeframe.toLowerCase() === "monthly") {
        return data.cards.map((c) => (
            <GridItem w="100%" h="245px">
              <CardContainer CardBgGradient={c.backgroundColor} CardImg={c.image}>
                <CardContent
                  CardTitle={c.title}
                  CardTimeFrames={{
                    current: c.timeframes.monthly.current,
                    previous: c.timeframes.monthly.previous,
                  }}
                />
              </CardContainer>
            </GridItem>
          ));
    }

  return data.cards.map((c) => (
    <GridItem w="100%" h="245px">
      <CardContainer CardBgGradient={c.backgroundColor} CardImg={c.image}>
        <CardContent
          CardTitle={c.title}
          CardTimeFrames={{
            current: c.timeframes.weekly.current,
            previous: c.timeframes.weekly.previous,
          }}
        />
      </CardContainer>
    </GridItem>
  ));
}

export default useCards