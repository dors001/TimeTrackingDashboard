import { Box, Flex, Text } from "@chakra-ui/layout";
import { Image, Show } from "@chakra-ui/react";

interface Props {
  CardTitle: string;
  CardTimeFrames: {
    current: number;
    previous: number;
  };
}

const CardContent = ({ CardTitle, CardTimeFrames }: Props) => {
  return (
    <>
      <Box
        backgroundColor="#1d204b"
        position="relative"
        zIndex={1}
        borderRadius="2rem"
        padding="3rem"
      >
        <Show breakpoint="(max-width: 767px)">
          <Flex
            justifyContent="space-between"
            placeSelf="center"
            width="100%"
            paddingBottom="1rem"
            marginBottom="1rem"
          >
            <Text
              width="100%"
              fontSize="1.8rem"
              fontWeight="bold"
              display="inline-box"
            >
              {CardTitle}
            </Text>
            <Image
              src="./src/assets/icon-ellipsis.svg"
              display="box"
              margin="0 auto"
              alignSelf="center"
            />
          </Flex>
          <Flex width="100%" justifyContent="space-between">
            <Text className="lightFont" fontSize="3.2rem" display="inline">
              {CardTimeFrames.current}hrs
            </Text>
            <Text className="lightFont" fontSize="1.3rem" paddingTop="1.5rem">
              Last Week - {CardTimeFrames.previous}hrs
            </Text>
          </Flex>
        </Show>
      </Box>
      <Show breakpoint="(min-width: 768px)">
        <Flex width="80%" marginLeft="2rem">
          <Text
            width="100%"
            fontSize="1.8rem"
            fontWeight="bold"
            display="inline-box"
          >
            {CardTitle}
          </Text>
          <Image
            src="./src/assets/icon-ellipsis.svg"
            display="box"
            margin="0 auto"
            alignSelf="center"
          />
        </Flex>
        <Text
          className="lightFont"
          fontSize="5.6rem"
          marginLeft="2rem"
          marginTop="1rem"
        >
          {CardTimeFrames.current}hrs
        </Text>
        <Text
          className="lightFont"
          fontSize="1.4rem"
          marginLeft="2rem"
          paddingBottom="1rem"
        >
          Last Week - {CardTimeFrames.previous}hrs
        </Text>
      </Show>
    </>
  );
};

export default CardContent;
