import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Avatar from "@mui/material/Avatar";
import Tooltip from "@mui/material/Tooltip";
import MenuItem from "@mui/material/MenuItem";
import Badge from "@mui/material/Badge";
import MailIcon from "@mui/icons-material/Mail";
import Logo from "../../assets/images/Logo.png";
import AvatarIcon from "../../assets/images/4.jpg";
import { Link } from "react-router-dom";

const settings = ["Profile", "Account"];

function Header() {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  const handleProfileMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMobileMenuOpen = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const menuId = "primary-search-account-menu";

  return (
    <AppBar position="sticky" className="navBar">
      <Container
        maxWidth="xl"
        sx={{
          background: "white",
          color: "#10002B",
          height: "100px",
        }}
      >
        <Toolbar disableGutters>
          <Link to={"/"}>
            <img
              src={Logo}
              className="navBar-logo"
              alt="Logo"
              style={{ height: "80px" }}
            />
          </Link>

          <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "left",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "left",
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: "block", md: "none" },
              }}
            ></Menu>
          </Box>

          <Box
            sx={{
              flexGrow: 1,
              display: {
                xs: "none",
                md: "flex",
                justifyContent: "flex-start",
                alignItems: "center",
              },
            }}
          >
            <Link to={"/Rent"} style={{ textDecoration: "none" }}>
              <MenuItem
                onClick={handleCloseNavMenu}
                sx={{
                  my: 2,
                  color: "#3f3e3e",
                  display: "block",
                  textDecoration: "none",
                  fontWeight: "600",
                }}
              >
                RENT
              </MenuItem>
            </Link>

            <Link to={"/Favourite"} style={{ textDecoration: "none" }}>
              <MenuItem
                onClick={handleCloseNavMenu}
                sx={{
                  my: 2,
                  color: "#3f3e3e",
                  display: "block",
                  textDecoration: "none",
                  fontWeight: "600",
                }}
              >
                YOUR'S FAVOURITE
              </MenuItem>
            </Link>

            <Link to={"/"} style={{ textDecoration: "none" }}>
              <MenuItem
                onClick={handleCloseNavMenu}
                sx={{
                  my: 2,
                  color: "#3f3e3e",
                  display: "block",
                  textDecoration: "none",
                  fontWeight: "600",
                }}
              >
                TENANT'S GUIDELINE
              </MenuItem>
            </Link>
          </Box>

          <Box sx={{ flexGrow: 1 }} />

          <Box sx={{ display: { xs: "none", md: "flex" } }}>
            <IconButton
              size="large"
              aria-label="show 4 new mails"
              color="inherit"
            >
              <Badge badgeContent={4} color="error">
                <MailIcon />
              </Badge>
            </IconButton>

            <IconButton
              size="large"
              edge="end"
              aria-label="account of current user"
              aria-controls={menuId}
              aria-haspopup="true"
              onClick={handleProfileMenuOpen}
              color="inherit"
            >
              {/* <AccountCircle /> */}
            </IconButton>
          </Box>

          <Box sx={{ display: { xs: "flex", md: "none" } }}>
            <IconButton
              size="large"
              aria-label="show more"
              aria-haspopup="true"
              onClick={handleMobileMenuOpen}
              color="inherit"
            >
              {/* <MoreIcon /> */}
            </IconButton>
          </Box>

          <Box sx={{ flexGrow: 0 }}>
            <Tooltip title="Open settings">
              <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                <Avatar alt="avatar" src={AvatarIcon} />
              </IconButton>
            </Tooltip>
            <Menu
              sx={{ mt: "45px" }}
              id="menu-appbar"
              anchorEl={anchorElUser}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}
              anchorOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              transformOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
            >
              {settings.map((setting) => (
                <MenuItem key={setting} onClick={handleCloseUserMenu}>
                  <Link
                    to={`/${setting}`}
                    style={{ textDecoration: "none", color: "black" }}
                  >
                    <Typography textAlign="center">{setting}</Typography>
                  </Link>
                </MenuItem>
              ))}
            </Menu>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}

export default Header;
