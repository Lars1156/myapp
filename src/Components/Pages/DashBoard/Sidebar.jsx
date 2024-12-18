import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  List,
  ListItem,
  ListItemText,
  ListItemIcon,
  Typography,
  Divider,
  IconButton,
  Box,
} from "@mui/material";
import {
  Notifications as NotificationsIcon,
  Dashboard as DashboardIcon,
  People as PeopleIcon,
  Security as SecurityIcon,
  Settings as SettingsIcon,
} from "@mui/icons-material";
import AssignmentIndIcon from "@mui/icons-material/AssignmentInd";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";

function Sidebar() {
  const [isSidebarVisible, setSidebarVisible] = useState(false);

  const toggleSidebar = () => {
    setSidebarVisible(!isSidebarVisible);
  };

  return (
    <>
      {/* Hamburger Menu Icon - Placed at the top of the page */}
      <IconButton
        className="menu-icon"
        onClick={toggleSidebar}
        aria-label="toggle sidebar"
      >
        <MenuIcon />
      </IconButton>

      {/* Sidebar */}
      <Box
        className={`sidebar ${isSidebarVisible ? "sidebar-visible" : "sidebar-hidden"}`}
        sx={{
          position: "fixed",
          left: 0,
          top: 0,
          height: "100vh",
          width: "250px",
          backgroundColor: "#fff",
          boxShadow: "2px 0 5px rgba(0, 0, 0, 0.1)",
          transform: isSidebarVisible ? "translateX(0)" : "translateX(-100%)",
          transition: "transform 0.3s ease-in-out",
        }}
      >
        <Box sx={{ height: 48, width: "100%" }}>
          {/* Sidebar Header with Logo and Close Button */}
          <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center", padding: "10px" }}>
            <Typography sx={{ fontSize: "200", marginLeft: "20px" }}>
              LOGO
            </Typography>
            <IconButton onClick={toggleSidebar} sx={{ color: "black" }}>
              <CloseIcon />
            </IconButton>
          </Box>
        </Box>

        <Divider />

        <List>
          <ListItem button component={Link} to={"/card"}>
            <ListItemIcon>
              <NotificationsIcon sx={{ color: "black" }} />
            </ListItemIcon>
            <ListItemText primary="Activity" />
          </ListItem>
          <ListItem button component={Link} to={"/"}>
            <ListItemIcon>
              <DashboardIcon sx={{ color: "black" }} />
            </ListItemIcon>
            <ListItemText primary="Dashboard" />
          </ListItem>
          <ListItem button component={Link} to={"/client"}>
            <ListItemIcon>
              <PeopleIcon sx={{ color: "black" }} />
            </ListItemIcon>
            <ListItemText primary="Clients" />
          </ListItem>
          <ListItem button>
            <ListItemIcon>
              <SecurityIcon sx={{ color: "black" }} />
            </ListItemIcon>
            <ListItemText primary="Role" />
          </ListItem>
          <ListItem button component={Link} to={"/vendor"}>
            <ListItemIcon>
              <AssignmentIndIcon sx={{ color: "black" }} />
            </ListItemIcon>
            <ListItemText primary="Vendor Details" />
          </ListItem>
        </List>

        <Box sx={{ marginTop: "auto" }}>
          <Divider />
          <List>
            <ListItem button>
              <ListItemIcon>
                <SettingsIcon sx={{ color: "black" }} />
              </ListItemIcon>
              <ListItemText primary="Settings" />
            </ListItem>
          </List>
        </Box>
      </Box>
    </>
  );
}

export default Sidebar;
