import { StrictMode } from 'react';
import ReactDOM from 'react-dom/client';  // Correct import
import App from './App.jsx';
import { ChakraProvider } from '@chakra-ui/react';

ReactDOM.createRoot(document.getElementById("root")).render(
  <StrictMode>
    <ChakraProvider>
      <App />
    </ChakraProvider>
  </StrictMode>
);
