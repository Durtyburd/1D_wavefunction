import React from "react";
import {
  AppBar,
  Box,
  Divider,
  Drawer,
  IconButton,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Toolbar,
  Button,
} from "@mui/material";

import logo from "../images/1D.png";

const drawerWidth = 240;

function NavbarMain(props) {
  const { window } = props;

  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: "center" }}>
      <img src={logo} alt="1D Wave Function" />
      <Divider />
      <List>
        <ListItem disablePadding>
          <ListItemButton sx={{ textAlign: "center" }}>
            <ListItemText>
              <a href="https://www.linkedin.com/in/sethperritt?challengeId=AQF9OECOD793ZgAAAYj-gwpfs6GrkGRWut6AjHBgiVK2FO9n5g76Q7fj40N1NwNKmvvZ7Ipz3mA139e6lCI-gNN_qn01DMm6wQ&submissionId=52b128f3-8a9d-6c17-0ee0-ceaa6d855023&challengeSource=AgHE4geJfxUEvgAAAYj-gzMDEfh1CqLP_Bw_NaHWqGp0wyXDogSAyJA9bmo2xHA&challegeType=AgFzIZtJigswawAAAYj-gzMGqQLwKCNHesRxxAIVxxyFoKjy_M91z5c&memberId=AgFEhmCFLrDyTwAAAYj-gzMJRSLbLfaAwyXx1nS9ksQng1g&recognizeDevice=AgF4JRx_G0uJYQAAAYj-gzMNxuMvSSalKguMlaC83bPouhu1nKqS">
                LinkedIn
              </a>
            </ListItemText>
          </ListItemButton>
        </ListItem>
        <ListItem disablePadding>
          <ListItemButton sx={{ textAlign: "center" }}>
            <ListItemText>
              <a href="https://github.com/Durtyburd?tab=repositories">Github</a>
            </ListItemText>
          </ListItemButton>
        </ListItem>
        <ListItem disablePadding>
          <ListItemButton sx={{ textAlign: "center" }}>
            <ListItemText>
              <a href="mailto:sethperritt@yahoo.com">Contact</a>
            </ListItemText>
          </ListItemButton>
        </ListItem>
      </List>
    </Box>
  );

  const container =
    window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{ display: "flex" }}>
      <AppBar component="nav" position="sticky">
        <Toolbar sx={{ backgroundColor: "#1A5F7A" }}>
          <IconButton
            // color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: "none" } }}
          >
            <span className="material-symbols-outlined">menu</span>
          </IconButton>
          <Box
            component="div"
            sx={{ flexGrow: 1, display: { xs: "none", sm: "block" } }}
          >
            <img src={logo} alt="1D Wave Function" />
          </Box>
          <Box sx={{ display: { xs: "none", sm: "block" } }}>
            <a href="https://www.linkedin.com/in/sethperritt?challengeId=AQF9OECOD793ZgAAAYj-gwpfs6GrkGRWut6AjHBgiVK2FO9n5g76Q7fj40N1NwNKmvvZ7Ipz3mA139e6lCI-gNN_qn01DMm6wQ&submissionId=52b128f3-8a9d-6c17-0ee0-ceaa6d855023&challengeSource=AgHE4geJfxUEvgAAAYj-gzMDEfh1CqLP_Bw_NaHWqGp0wyXDogSAyJA9bmo2xHA&challegeType=AgFzIZtJigswawAAAYj-gzMGqQLwKCNHesRxxAIVxxyFoKjy_M91z5c&memberId=AgFEhmCFLrDyTwAAAYj-gzMJRSLbLfaAwyXx1nS9ksQng1g&recognizeDevice=AgF4JRx_G0uJYQAAAYj-gzMNxuMvSSalKguMlaC83bPouhu1nKqS">
              {" "}
              <Button sx={{ color: "black" }}>LinkedIn</Button>
            </a>
            <a href="https://github.com/Durtyburd?tab=repositories">
              {" "}
              <Button sx={{ color: "black" }}>Github</Button>
            </a>
            <a href="mailto:sethperritt@yahoo.com">
              {" "}
              <Button sx={{ color: "black" }}>Contact</Button>
            </a>
          </Box>
        </Toolbar>
      </AppBar>
      <Box component="nav">
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: "block", sm: "none" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
              backgroundColor: "#1A5F7A",
            },
          }}
        >
          {drawer}
        </Drawer>
      </Box>
    </Box>
  );
}

export { NavbarMain };
