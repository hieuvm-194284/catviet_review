import { routes } from "@/types/routes";
import { ButtonDefault } from "@/uis/Button";
import { GradientButton } from "@/uis/GradientButton";
import {
  Box,
  Button,
  Container,
  Divider,
  Grid,
  IconButton,
  Link,
  Menu,
  MenuItem,
  Stack,
  Typography,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import SearchIcon from "@mui/icons-material/Search";
import React, { useEffect, useState } from "react";
import MobileLogo from "@/icons/MobileLogo";

interface INavbarItem {
  id: string;
  label: string;
  link: string;
}

const listNavbarItem: INavbarItem[] = [
  {
    id: "1",
    label: "Trang chủ",
    link: routes.home,
  },
  {
    id: "2",
    label: "Xem lịch",
    link: routes.home,
  },

  {
    id: "3",
    label: "Tử vi",
    link: routes.home,
  },
  {
    id: "4",
    label: "Xem bói",
    link: routes.home,
  },
  {
    id: "5",
    label: "Phong thuỷ",
    link: routes.home,
  },
  {
    id: "6",
    label: "Cung hoàng đạo",
    link: routes.home,
  },
  {
    id: "7",
    label: "Tiện ích hay",
    link: routes.home,
  },
  {
    id: "8",
    label: "Ứng dụng lịch việt",
    link: routes.selectGoodDay,
  },
  {
    id: "9",
    label: "Liên hệ",
    link: routes.home,
  },
];

const MobileHeader = () => {
  const [anchorElNav, setAnchorElNav] = useState<null | HTMLElement>(null);

  const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };
  return (
    <Container >
      <Grid container justifyContent="space-between" alignItems="center" paddingX={2}>
        <Box sx={{ display: { xs: "flex", md: "none" } }}>
          <IconButton
            size="large"
            aria-label="menu"
            aria-controls="menu-appbar"
            aria-haspopup="true"
            onClick={handleOpenNavMenu}
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
          >
            {listNavbarItem.map((item: INavbarItem) => (
              <MenuItem key={item.id} onClick={handleCloseNavMenu}>
                <Typography textAlign="center">{item.label}</Typography>
              </MenuItem>
            ))}
          </Menu>
        </Box>
        <MobileLogo />
        <IconButton>
          <SearchIcon />
        </IconButton>
      </Grid>
      <Divider />
    </Container>
  );
};

export default MobileHeader;
