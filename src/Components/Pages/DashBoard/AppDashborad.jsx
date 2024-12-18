import React, { useState } from "react";
import { Outlet } from "react-router-dom";
import { Box, CssBaseline, AppBar, Toolbar, Typography, IconButton, useMediaQuery } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import Sidebar from "./Sidebar";

function AppDashboard() {
  const [mobileOpen, setMobileOpen] = useState(false);

  // Check if the screen size is mobile
  const isMobile = useMediaQuery("(max-width:960px)");

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />

      {/* AppBar */}
      <AppBar position="fixed" sx={{ backgroundColor: "white" }}>
        <Toolbar>
          {/* Show Menu Icon on Mobile Screens */}
          {isMobile && (
            <IconButton
              color="inherit"
              aria-label="open drawer"
              edge="start"
              onClick={handleDrawerToggle}
              sx={{ mr: 2 }}
            >
              <MenuIcon sx={{ color: "black" }} />
            </IconButton>
          )}
          <Typography variant="h6" sx={{ color: "black" }}>
            Dashboard
          </Typography>
        </Toolbar>
      </AppBar>

      {/* Sidebar */}
      <Sidebar mobileOpen={mobileOpen} onToggle={handleDrawerToggle} isMobile={isMobile} />

      {/* Main Content */}
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          bgcolor: "background.default",
          p: 3,
          marginTop: "64px", // Adjusts for the height of the AppBar
        }}
      >
        <Outlet /> {/* Renders the nested route */}
      </Box>
    </Box>
  );
}

export default AppDashboard;
