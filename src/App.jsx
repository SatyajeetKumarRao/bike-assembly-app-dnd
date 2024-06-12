import { Box } from "@chakra-ui/react";

import "./App.css";
import Navbar from "./components/Navbar";

import { Global, css } from "@emotion/react";
import AllRoutes from "./routes/AllRoutes";

const GlobalStyles = css`
  .dark-scrollbar {
    scrollbar-width: thin;
    scrollbar-color: #444 #222;
  }

  .dark-scrollbar::-webkit-scrollbar {
    width: 12px;
    height: 12px;
  }

  .dark-scrollbar::-webkit-scrollbar-track {
    background: #222;
  }

  .dark-scrollbar::-webkit-scrollbar-thumb {
    background-color: #444;
    border-radius: 6px;
    border: 3px solid #222;
  }
`;

function App() {
  return (
    <Box>
      <Global styles={GlobalStyles} />
      <Navbar />
      <AllRoutes />
    </Box>
  );
}

export default App;
