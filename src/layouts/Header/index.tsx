import {
  Avatar,
  Container,
  Divider,
  Grid,
  IconButton,
  Link,
  Stack,
  Typography,
  useMediaQuery,
} from "@mui/material";
import React, { FC } from "react";
import { Img } from "@/uis/Img";
import { ButtonDefault } from "@/uis/Button";
import Vip from "@/icons/Vip";
import { routes } from "@/types/routes";
import { StyledLink } from "./components/styled";
import NavItem from "./components/NavItem";
import MobileHeader from "./components/MobileHeader";
import LargeScreenHeader from "./components/LargeScreenHeader";

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

export const Header: FC = () => {
  const isMobile = useMediaQuery("(max-width:1024px)");
  return <>{isMobile ? <MobileHeader /> : <LargeScreenHeader />}</>;
};
