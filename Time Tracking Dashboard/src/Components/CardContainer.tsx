import { Box, Image, Show } from "@chakra-ui/react";

export interface Props {
  CardBgGradient: string;
  CardImg: string;
  children: React.ReactElement;
}

const CardContainer = ({ CardBgGradient, CardImg, children }: Props) => {
  return (
    <>
      <Show breakpoint="(max-width: 767px)">
        <Box
          borderBottomRadius="2rem"
          borderTopRadius="2rem"
          bgGradient={CardBgGradient}
        >
          <Box w="100%" h="40px">
            <Image src={CardImg} float="right" paddingRight="1.5rem" />
          </Box>
          {children}
        </Box>
      </Show>
      <Show breakpoint="(min-width: 768px)">
        <Box
          maxW="255px"
          borderBottomRadius="2rem"
          borderTopRadius="2rem"
          bgGradient={CardBgGradient}
        >
          <Box w="100%" h="45px">
            <Image src={CardImg} float="right" paddingRight="1.5rem" />
          </Box>
          <Box
            w="100%"
            backgroundColor="#1d204b"
            position="relative"
            zIndex={1}
            borderRadius="2rem"
          >
            {children}
          </Box>
        </Box>
      </Show>
    </>
  );
};

export default CardContainer;
