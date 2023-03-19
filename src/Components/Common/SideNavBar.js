import * as React from "react";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import MuiDrawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import SubscriptionsIcon from "@mui/icons-material/SubscriptionsOutlined";
import VideoLibraryIcon from "@mui/icons-material/VideoLibraryOutlined";
import HistoryIcon from "@mui/icons-material/HistoryOutlined";
import { Typography } from "@mui/material";
import WhatshotOutlinedIcon from "@mui/icons-material/WhatshotOutlined";
import MusicNoteOutlinedIcon from "@mui/icons-material/MusicNoteOutlined";
import MovieCreationOutlinedIcon from "@mui/icons-material/MovieCreationOutlined";
import SensorsOutlinedIcon from "@mui/icons-material/SensorsOutlined";
import SportsEsportsOutlinedIcon from "@mui/icons-material/SportsEsportsOutlined";
import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined";
import HomeSharpIcon from "@mui/icons-material/HomeSharp";

const theme = createTheme({
  components: {
    MuiDrawer: {
      styleOverrides: {
        paper: {
          borderRight: 0,
        },
      },
    },
  },
});

const drawerWidth = 220;

const openedMixin = (theme) => ({
  width: drawerWidth,
  // transition: theme.transitions.create("width", {
  //   easing: theme.transitions.easing.sharp,
  //   duration: theme.transitions.duration.enteringScreen,
  // }),
  overflowX: "hidden",
});

const closedMixin = (theme) => ({
  // transition: theme.transitions.create("width", {
  //   easing: theme.transitions.easing.sharp,
  //   duration: theme.transitions.duration.leavingScreen,
  // }),
  overflowX: "hidden",
  width: `calc(${theme.spacing(7)} + 1px)`,
  [theme.breakpoints.up("sm")]: {
    width: `calc(${theme.spacing(8)} + 1px)`,
  },
});

const DrawerHeader = styled("div")(({ theme }) => ({
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
}));

const Drawer = styled(MuiDrawer, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  width: drawerWidth,
  flexShrink: 0,
  whiteSpace: "nowrap",
  boxSizing: "border-box",
  ...(open && {
    ...openedMixin(theme),
    "& .MuiDrawer-paper": openedMixin(theme),
  }),
  ...(!open && {
    ...closedMixin(theme),
    "& .MuiDrawer-paper": closedMixin(theme),
  }),
}));

export default function SideNavBar({ open }) {
  return (
    <Box sx={{ display: "flex" }}>
      <ThemeProvider theme={theme}>
        <Drawer variant="permanent" open={open}>
          <DrawerHeader />
          <List>
            <ListItem disablePadding sx={{ display: "block" }}>
              <ListItemButton
                sx={{
                  minHeight: 48,
                  justifyContent: open ? "initial" : "center",
                  px: 2.5,
                  pb: open ? "auto" : 2.5,
                }}
              >
                <ListItemIcon
                  sx={{
                    minWidth: 0,
                    mr: open ? 3 : "auto",
                    justifyContent: "center",
                    color: "#393E46",
                  }}
                >
                  <HomeSharpIcon />
                </ListItemIcon>
                <ListItemText sx={{ opacity: open ? 1 : 0 }}>Home</ListItemText>
              </ListItemButton>
              <ListItemButton
                sx={{
                  minHeight: 48,
                  justifyContent: open ? "initial" : "center",
                  px: 2.5,
                  pb: open ? "auto" : 2.5,
                }}
              >
                <ListItemIcon
                  sx={{
                    minWidth: 0,
                    mr: open ? 3 : "auto",
                    justifyContent: "center",
                    color: "#393E46",
                  }}
                >
                  <InboxIcon />
                </ListItemIcon>
                <ListItemText sx={{ opacity: open ? 1 : 0 }}>
                  Shorts
                </ListItemText>
              </ListItemButton>
              <ListItemButton
                sx={{
                  minHeight: 48,
                  justifyContent: open ? "initial" : "center",
                  px: 2.5,
                  pb: open ? "auto" : 2.5,
                }}
              >
                <ListItemIcon
                  sx={{
                    minWidth: 0,
                    mr: open ? 3 : "auto",
                    justifyContent: "center",
                    color: "#393E46",
                  }}
                >
                  <SubscriptionsIcon />
                </ListItemIcon>
                <ListItemText sx={{ opacity: open ? 1 : 0 }}>
                  Subscriptions
                </ListItemText>
              </ListItemButton>
              {open === true ? <Divider /> : undefined}
              <ListItemButton
                sx={{
                  minHeight: 48,
                  justifyContent: open ? "initial" : "center",
                  px: 2.5,
                  pb: open ? "auto" : 2.5,
                }}
              >
                <ListItemIcon
                  sx={{
                    minWidth: 0,
                    mr: open ? 3 : "auto",
                    justifyContent: "center",
                    color: "#393E46",
                  }}
                >
                  <VideoLibraryIcon />
                </ListItemIcon>
                <ListItemText sx={{ opacity: open ? 1 : 0 }}>
                  Library
                </ListItemText>
              </ListItemButton>
              <ListItemButton
                sx={{
                  minHeight: 48,
                  justifyContent: open ? "initial" : "center",
                  px: 2.5,
                  pb: open ? "auto" : 2.5,
                }}
              >
                <ListItemIcon
                  sx={{
                    minWidth: 0,
                    mr: open ? 3 : "auto",
                    justifyContent: "center",
                    color: "#393E46",
                  }}
                >
                  <HistoryIcon />
                </ListItemIcon>
                <ListItemText sx={{ opacity: open ? 1 : 0 }}>
                  History
                </ListItemText>
              </ListItemButton>
              {open === true ? (
                <div>
                  <Divider />
                  <Typography sx={{ padding: 2, paddingBottom: 0.3 }}>
                    Explore
                  </Typography>
                  <ListItemButton
                    sx={{
                      minHeight: 48,
                      justifyContent: open ? "initial" : "center",
                      px: 2.5,
                    }}
                  >
                    <ListItemIcon
                      sx={{
                        minWidth: 0,
                        mr: open ? 3 : "auto",
                        justifyContent: "center",
                        color: "#393E46",
                      }}
                    >
                      <WhatshotOutlinedIcon />
                    </ListItemIcon>
                    <ListItemText sx={{ opacity: open ? 1 : 0 }}>
                      Trending
                    </ListItemText>
                  </ListItemButton>
                  <ListItemButton
                    sx={{
                      minHeight: 48,
                      justifyContent: open ? "initial" : "center",
                      px: 2.5,
                    }}
                  >
                    <ListItemIcon
                      sx={{
                        minWidth: 0,
                        mr: open ? 3 : "auto",
                        justifyContent: "center",
                        color: "#393E46",
                      }}
                    >
                      <MusicNoteOutlinedIcon />
                    </ListItemIcon>
                    <ListItemText sx={{ opacity: open ? 1 : 0 }}>
                      Music
                    </ListItemText>
                  </ListItemButton>
                  <ListItemButton
                    sx={{
                      minHeight: 48,
                      justifyContent: open ? "initial" : "center",
                      px: 2.5,
                    }}
                  >
                    <ListItemIcon
                      sx={{
                        minWidth: 0,
                        mr: open ? 3 : "auto",
                        justifyContent: "center",
                        color: "#393E46",
                      }}
                    >
                      <MovieCreationOutlinedIcon />
                    </ListItemIcon>
                    <ListItemText sx={{ opacity: open ? 1 : 0 }}>
                      Movies
                    </ListItemText>
                  </ListItemButton>
                  <ListItemButton
                    sx={{
                      minHeight: 48,
                      justifyContent: open ? "initial" : "center",
                      px: 2.5,
                    }}
                  >
                    <ListItemIcon
                      sx={{
                        minWidth: 0,
                        mr: open ? 3 : "auto",
                        justifyContent: "center",
                        color: "#393E46",
                      }}
                    >
                      <SensorsOutlinedIcon />
                    </ListItemIcon>
                    <ListItemText sx={{ opacity: open ? 1 : 0 }}>
                      Live
                    </ListItemText>
                  </ListItemButton>
                  <ListItemButton
                    sx={{
                      minHeight: 48,
                      justifyContent: open ? "initial" : "center",
                      px: 2.5,
                    }}
                  >
                    <ListItemIcon
                      sx={{
                        minWidth: 0,
                        mr: open ? 3 : "auto",
                        justifyContent: "center",
                        color: "#393E46",
                      }}
                    >
                      <SportsEsportsOutlinedIcon />
                    </ListItemIcon>
                    <ListItemText sx={{ opacity: open ? 1 : 0 }}>
                      Gaming
                    </ListItemText>
                  </ListItemButton>
                  <Divider />
                  <ListItemButton
                    sx={{
                      minHeight: 48,
                      justifyContent: open ? "initial" : "center",
                      px: 2.5,
                    }}
                  >
                    <ListItemIcon
                      sx={{
                        minWidth: 0,
                        mr: open ? 3 : "auto",
                        justifyContent: "center",
                        color: "#393E46",
                      }}
                    >
                      <SettingsOutlinedIcon />
                    </ListItemIcon>
                    <ListItemText sx={{ opacity: open ? 1 : 0 }}>
                      Settings
                    </ListItemText>
                  </ListItemButton>
                </div>
              ) : undefined}
            </ListItem>
          </List>
        </Drawer>
      </ThemeProvider>
    </Box>
  );
}
