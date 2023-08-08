import { Box, Image } from "@chakra-ui/react";

interface Props {
  CardBgGradient: string;
  CardImg: string;
}

const CardContainer = ({ CardBgGradient, CardImg }: Props) => {
  return (
    <>
      <Box
        maxW="255px"
        h="245px"
        borderBottomRadius="2rem"
        borderTopRadius="2rem"
        bgGradient={CardBgGradient}
      >
        <Box w="100%" h="45px">
          <Image src={CardImg} float="right" paddingRight="1.5rem" />
        </Box>
        <Box
          w="100%"
          h="200px"
          backgroundColor="#1d204b"
          position="relative"
          zIndex={1}
          borderRadius="2rem"
        ></Box>
      </Box>
    </>
  );
};

export default CardContainer;
