import * as React from "react";
import { styled, alpha } from "@mui/material/styles";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import Divider from "@mui/material/Divider";

import ShieldOutlinedIcon from "@mui/icons-material/ShieldOutlined";
import ModeNightOutlinedIcon from "@mui/icons-material/ModeNightOutlined";
import TranslateOutlinedIcon from "@mui/icons-material/TranslateOutlined";
import AdminPanelSettingsOutlinedIcon from "@mui/icons-material/AdminPanelSettingsOutlined";
import LanguageOutlinedIcon from "@mui/icons-material/LanguageOutlined";
import KeyboardOutlinedIcon from "@mui/icons-material/KeyboardOutlined";
import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined";
import HelpOutlineOutlinedIcon from "@mui/icons-material/HelpOutlineOutlined";
import FeedbackOutlinedIcon from "@mui/icons-material/FeedbackOutlined";

const StyledMenu = styled((props) => (
  <Menu
    elevation={0}
    anchorOrigin={{
      vertical: "bottom",
      horizontal: "right",
    }}
    transformOrigin={{
      vertical: "top",
      horizontal: "right",
    }}
    {...props}
  />
))(({ theme }) => ({
  "& .MuiPaper-root": {
    borderRadius: 8,
    marginTop: theme.spacing(1),
    minWidth: 300,
    color:
      theme.palette.mode === "light"
        ? "rgb(55, 65, 81)"
        : theme.palette.grey[300],
    boxShadow:
      "rgb(255, 255, 255) 0px 0px 0px 0px, rgba(0, 0, 0, 0.05) 0px 0px 0px 1px, rgba(0, 0, 0, 0.1) 0px 10px 15px -3px, rgba(0, 0, 0, 0.05) 0px 4px 6px -2px",
    "& .MuiMenu-list": {
      padding: "4px 0",
    },
    "& .MuiMenuItem-root": {
      "& .MuiSvgIcon-root": {
        fontSize: 18,
        color: theme.palette.text.secondary,
        marginRight: theme.spacing(1.5),
      },
      "&:active": {
        backgroundColor: alpha(
          theme.palette.primary.main,
          theme.palette.action.selectedOpacity
        ),
      },
    },
  },
}));

export default function CustomMenuItem({
  customMenuItem,
  open,
  handleCloseMenuItem,
}) {
  return (
    <div>
      <StyledMenu
        id="demo-customized-menu"
        MenuListProps={{
          "aria-labelledby": "demo-customized-button",
        }}
        anchorEl={customMenuItem}
        open={open}
        onClose={handleCloseMenuItem}
      >
        <MenuItem onClick={handleCloseMenuItem} disableRipple>
          <ShieldOutlinedIcon />
          Your data in YouTube
        </MenuItem>
        <Divider sx={{ my: 0.5 }} />
        <MenuItem onClick={handleCloseMenuItem} disableRipple>
          <ModeNightOutlinedIcon />
          Apperance: Device theme
        </MenuItem>
        <MenuItem onClick={handleCloseMenuItem} disableRipple>
          <TranslateOutlinedIcon />
          Language: English
        </MenuItem>
        <MenuItem onClick={handleCloseMenuItem} disableRipple>
          <AdminPanelSettingsOutlinedIcon />
          Restricted Mode: off
        </MenuItem>
        <MenuItem onClick={handleCloseMenuItem} disableRipple>
          <LanguageOutlinedIcon />
          Location: India
        </MenuItem>
        <MenuItem onClick={handleCloseMenuItem} disableRipple>
          <KeyboardOutlinedIcon />
          Keyboard Shortcuts
        </MenuItem>
        <Divider sx={{ my: 0.5 }} />
        <MenuItem onClick={handleCloseMenuItem} disableRipple>
          <SettingsOutlinedIcon />
          Settings
        </MenuItem>
        <Divider sx={{ my: 0.5 }} />
        <MenuItem onClick={handleCloseMenuItem} disableRipple>
          <HelpOutlineOutlinedIcon />
          Help
        </MenuItem>
        <MenuItem onClick={handleCloseMenuItem} disableRipple>
          <FeedbackOutlinedIcon />
          Send Feedback
        </MenuItem>
      </StyledMenu>
    </div>
  );
}
