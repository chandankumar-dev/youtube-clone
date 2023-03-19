import * as React from "react";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import MuiAppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import CssBaseline from "@mui/material/CssBaseline";
import Typography from "@mui/material/Typography";
import MenuIcon from "@mui/icons-material/Menu";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import AccountIcon from "@mui/icons-material/AccountCircleOutlined";
import MoreVertIcon from "@mui/icons-material/MoreVertOutlined";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import InputBase from "@mui/material/InputBase";
import Paper from "@mui/material/Paper";
import SearchIcon from "@mui/icons-material/Search";

import youtubeLogo from "../../assets/youtubeLogo.svg";
import CustomMenuItem from "../Container/CustomMenuItem";
import Tooltip from "@mui/material/Tooltip";

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  zIndex: theme.zIndex.drawer + 1,
  transition: theme.transitions.create(["width", "margin"], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    transition: theme.transitions.create(["width", "margin"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

const theme = createTheme({
  components: {
    MuiToolbar: {
      styleOverrides: {
        root: {
          padding: 0,
        },
      },
    },
  },
});

export default function MiniDrawer(props) {
  const [customMenuItem, setCustomMenuItem] = React.useState(null);
  const open = Boolean(customMenuItem);
  const handleClickMenuItem = (event) => {
    setCustomMenuItem(event.currentTarget);
  };
  const handleCloseMenuItem = () => {
    setCustomMenuItem(null);
  };

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <ThemeProvider theme={theme}>
        <AppBar
          sx={{ backgroundColor: "white", color: "black" }}
          elevation={0}
          position="fixed"
          open={props.open}
        >
          <Toolbar
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <div
              style={{
                display: "flex",
                alignItems: "center",
              }}
            >
              <IconButton
                color="inherit"
                aria-label="open drawer"
                onClick={props.toggleDrawer}
                edge="start"
              >
                <MenuIcon />
              </IconButton>
              <img
                src={youtubeLogo}
                alt="Youtube Logo"
                width="40px"
                height="40px"
                style={{ marginLeft: "1.2rem" }}
              />
              <Typography
                sx={{
                  marginLeft: "3px",
                  fontSize: "2rem",
                  fontFamily: "League Gothic, sans-serif",
                }}
              >
                YouTube
              </Typography>
            </div>
            <Paper
              elevation={0}
              component="form"
              sx={{
                display: "flex",
                alignItems: "center",
                width: "40%",
                borderRadius: 5,
                border: "1px solid lightgray",
                paddingLeft: "15px",
              }}
            >
              <InputBase
                sx={{ ml: 1, flex: 1 }}
                placeholder="Search"
                inputProps={{ "aria-label": "search google maps" }}
              />
              <Tooltip title="Search">
                <IconButton
                  type="button"
                  sx={{
                    width: "10%",
                    borderTopLeftRadius: 0,
                    borderBottomLeftRadius: 0,
                    borderLeft: "1px solid lightgray",
                    backgroundColor: "#fafafa",
                    color: "grey",
                  }}
                >
                  <SearchIcon />
                </IconButton>
              </Tooltip>
            </Paper>
            <div style={{ display: "flex", alignItems: "center" }}>
              <Tooltip title="Settings">
                <IconButton onClick={handleClickMenuItem}>
                  <MoreVertIcon size="small" />
                </IconButton>
              </Tooltip>
              <CustomMenuItem
                customMenuItem={customMenuItem}
                open={open}
                handleCloseMenuItem={handleCloseMenuItem}
              />
              <Button
                variant="outlined"
                startIcon={<AccountIcon />}
                sx={{
                  borderRadius: 5,
                  textTransform: "none",
                  fontWeight: "bold",
                  marginLeft: "10px",
                }}
                // size="small"
              >
                Sign in
              </Button>
            </div>
          </Toolbar>
        </AppBar>
      </ThemeProvider>
    </Box>
  );
}
