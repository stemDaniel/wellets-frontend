import { chakra, Flex } from '@chakra-ui/react';

const ContentContainer = chakra(Flex, {
  baseStyle: {
    justifyContent: 'center',
    padding: '25px',
    flex: '1',
  },
});

export default ContentContainer;
