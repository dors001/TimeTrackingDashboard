import { Box } from "@chakra-ui/react";

interface Props {
  selectTimeframe: (timeframe: string) => void;
}

const Buttons = ({ selectTimeframe }: Props) => {
  return (
    <>
      <Box
        as="button"
        _hover={{
          color: "#FFFFFF",
          transition: "0.5s",
          textShadow: "1px 1px 4px white",
        }}
        backgroundColor="transparent"
        className="ligtFont"
        color="#6a6ca6"
        fontSize="1.8rem"
        onClick={() => selectTimeframe("daily")}
        textAlign="left"
      >
        Daily
      </Box>
      <Box
        as="button"
        _hover={{
          color: "#FFFFFF",
          transition: "0.5s",
          textShadow: "1px 1px 4px white",
        }}
        backgroundColor="transparent"
        className="ligtFont"
        color="#6a6ca6"
        fontSize="1.8rem"
        onClick={() => selectTimeframe("weekly")}
        textAlign="left"
      >
        Weekly
      </Box>
      <Box
        as="button"
        _hover={{
          color: "#FFFFFF",
          transition: "0.5s",
          textShadow: "1px 1px 4px white",
        }}
        backgroundColor="transparent"
        className="ligtFont"
        color="#6a6ca6"
        fontSize="1.8rem"
        onClick={() => selectTimeframe("monthly")}
        textAlign="left"
      >
        Monthly
      </Box>
    </>
  );
};

export default Buttons;
