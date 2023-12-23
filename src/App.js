import {Box, Stack, createTheme, ThemeProvider} from "@mui/material"
import './App.css';
import SideBar from "./Components/SideBar";
import Feeds from "./Components/Feeds";
import RightBar from "./Components/RightBar";
import NavBar from "./Components/NavBar";
import Add from "./Components/Add";
import { useState } from "react";

function App() {
  const [mode,setMode]=useState('dark')

  const darkTheme=createTheme({
    palette:{
      mode:mode
    }
  })

  return (
    <ThemeProvider theme={darkTheme}>
      <Box bgcolor={'background.default'} color={'text.primary'}>
        <NavBar/>
        <Stack  direction="row" justifyContent={"space-between"} sx={{spacing:{xs:0,md:2}}}  >
          <SideBar  setMode={setMode} mode={mode}/>
          <Feeds/>
          <RightBar/>
        </Stack>
        <Add/>
      </Box> 
    </ThemeProvider> 
  );
}



export default App;
