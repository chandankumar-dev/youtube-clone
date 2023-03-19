import * as React from "react";
import Box from "@mui/material/Box";
import "./App.css";
import Header from "./Components/Common/Header";
import SideNavBar from "./Components/Common/SideNavBar";
import MainContent from "./Components/Common/MainContent";

function App() {
  const [open, setOpen] = React.useState(true);

  const toggleDrawer = () => {
    setOpen(!open);
  };

  return (
    <div>
      <Box
        sx={{
          display: "flex",
          backgroundColor: "#F8F8F8",
          height: "100vh",
        }}
      >
        <Header toggleDrawer={toggleDrawer} open={open} />
        <SideNavBar open={open} />
        <Box sx={{ flexGrow: 1, p: 0 }}>
          <MainContent open={open} />
        </Box>
      </Box>
    </div>
  );
}

export default App;
