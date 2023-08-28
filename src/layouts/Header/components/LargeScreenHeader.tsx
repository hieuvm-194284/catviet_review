import {
  Avatar,
  Container,
  Divider,
  Grid,
  IconButton,
  Link,
  Stack,
  Typography,
} from "@mui/material";
import React, { FC } from "react";
import { Img } from "@/uis/Img";
import { ButtonDefault } from "@/uis/Button";
import Vip from "@/icons/Vip";
import { routes } from "@/types/routes";
import NavItem from "./NavItem";

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

const LargeScreenHeader: FC = () => {
  return (
    <Container maxWidth="xl">
      <Grid
        container
        item
        direction="row"
        justifyContent="space-between"
        alignItems="center"
        bgcolor="#F5F8F9"
        paddingY="6px"
        paddingX="9%"
      >
        <Stack
          direction="row"
          justifyContent="flex-start"
          alignItems="center"
          spacing={2}
        >
          <Img height={50} width={50} alt="logo" src="/images/lichviet.png" />
          <Typography color="#089D00" variant="h1">
            Xem Ngày Tốt, Tử Vi & Phong Thuỷ
          </Typography>
        </Stack>

        <Stack
          direction="row"
          justifyContent="flex-end"
          alignItems="center"
          spacing={2}
        >
          <ButtonDefault>
            <Vip />
            <Typography
              sx={{
                ml: "5px",
                fontSize: "14px",
                fontWeight: "500",
                color: "#484E54",
              }}
            >
              Nâng cấp Lịch Việt Pro
            </Typography>
          </ButtonDefault>
          <IconButton>
            <Avatar alt="Remy Sharp" src="/static/images/avatar/2.jpg" />
          </IconButton>
        </Stack>
      </Grid>
      <Stack
        direction="row"
        justifyContent="space-between"
        alignItems="center"
        paddingY="6px"
        paddingX="9%"
      >
        {listNavbarItem?.map((item: INavbarItem, index: number) =>(
          <NavItem key={item.id} link={item.link} label={item.label} isActive={ Boolean(item.id === '8')}/>
        ) )}
      </Stack>
    </Container>
  );
};

export default LargeScreenHeader;