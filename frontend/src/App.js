import React from 'react';
import {
  ChakraProvider,
  theme,
} from '@chakra-ui/react';
import { ColorModeSwitcher } from './ColorModeSwitcher';
import  WithSubnavigation  from '../src/components/Navbar/Navbar'

function App() {
  return (
    <ChakraProvider theme={theme}>
          <ColorModeSwitcher justifySelf="flex-end" />
          <WithSubnavigation/>

    </ChakraProvider>
  );
}

export default App;
