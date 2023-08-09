import { Button, Flex } from "@chakra-ui/react";
import { useState } from "react";

interface Props {
  selectTimeframe: (timeframe: string) => void;
}

const Buttons = ({ selectTimeframe }: Props) => {
  return (
    <>
      <Flex direction="column" gap={4}>
        <Button
          className="ligtFont"
          fontSize="1.8rem"
          backgroundColor="transparent"
          onClick={() => selectTimeframe("daily")}
        >
          Daily
        </Button>
        <Button
          className="ligtFont"
          fontSize="1.8rem"
          backgroundColor="transparent"
          onClick={() => selectTimeframe("weekly")}
        >
          Weekly
        </Button>
        <Button
          className="ligtFont"
          fontSize="1.8rem"
          backgroundColor="transparent"
          onClick={() => selectTimeframe("monthly")}
        >
          Monthly
        </Button>
      </Flex>
    </>
  );
};

export default Buttons;
