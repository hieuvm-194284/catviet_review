import {
  Container,
  Grid,
  Typography,
  Box,
  Link,
  Stack,
  Divider,
} from "@mui/material";
import Logo from "@/icons/Logo";
import Facebook from "@/icons/Facebook";
import Youtube from "@/icons/Youtube";
import Tiktok from "@/icons/Tiktok";
import Mail from "@/icons/Mail";
import { GradientTypo } from "@/uis/GradientTypo";
import Apple from "@/icons/Apple";
import Android from "@/icons/Android";
import Huawei from "@/icons/Huawei";
import Address from "@/icons/Address";
import Phone from "@/icons/Phone";
import Email from "@/icons/Email";

interface ICategory {
  id: string;
  label: string;
}
const categoryFooter: ICategory[] = [
  {
    id: "1",
    label: "Xem lịch",
  },
  {
    id: "2",
    label: "Giải mã giấc mơ",
  },
  {
    id: "3",
    label: "Tử vi",
  },
  {
    id: "4",
    label: "Con số may mắn",
  },
  {
    id: "5",
    label: "Phong thuỷ",
  },
  {
    id: "6",
    label: "Gieo quẻ hỏi việc",
  },
  {
    id: "7",
    label: "Cung hoàng đạo",
  },
  {
    id: "8",
    label: "Xem ngày tốt",
  },
  {
    id: "9",
    label: "Xem bói",
  },
  {
    id: "10",
    label: "Lá số tử vi",
  },
  {
    id: "11",
    label: "Văn khấn",
  },
  {
    id: "12",
    label: "Đổi ngày âm dương",
  },
];

export const Footer = () => {
  return (
    <Container maxWidth="xl">
      <Grid container item justifyContent="center">
        <Divider
          sx={{ my: 3, width: "100%" }}
        />
      </Grid>

      <Grid container direction="column" spacing={3} mt={4}>
        <Grid
          direction={{
            xs: "column-reverse",
            md: "row",
          }}
          container
          item
          spacing={8}
          justifyContent="flex-end"
        >
          <Grid
            container
            item
            xs={12}
            md={3}
            direction="column"
            justifyContent="flex-start"
            spacing={2}
            ml={1.5}
          >
            <Logo />
            <Typography marginTop={1} variant="h4" color="secondary">
              Công ty cổ phần truyền thông và phát triển phần mềm Cát Việt
            </Typography>
            <Stack
              direction="row"
              justifyContent="start"
              alignItems="start"
              spacing={2}
            >
              <Address />
              <Typography variant="h5" color="secondary">
                Số 10, ngõ 2, phố Quần Ngựa, phường Liễu Giai, quận Ba Đình,
                thành phố Hà Nội
              </Typography>
            </Stack>
            <Stack
              direction="row"
              justifyContent="start"
              alignItems="center"
              spacing={2}
            >
              <Phone />
              <Typography variant="h5" color="secondary">
                024 32321265
              </Typography>
            </Stack>
            <Stack
              direction="row"
              justifyContent="start"
              alignItems="center"
              spacing={2}
            >
              <Email />
              <Typography variant="h5" color="secondary">
                ppclink@gmail.com
              </Typography>
            </Stack>
          </Grid>

          <Grid
            sx={{
              display: {
                xs: "none",
                md: "flex",
              },
            }}
            container
            item
            xs={12}
            md={4}
            spacing={2}
          >
            <Typography variant="subtitle1" color="primary">
              Danh mục
            </Typography>

            <Grid container item spacing={1}>
              {categoryFooter.map((category: ICategory, index: number) => (
                <Grid
                  key={category.id}
                  container
                  item
                  xs={6}
                  justifyContent="flex-start"
                  alignItems="center"
                >
                  <Typography variant="body1" color="secondary">
                    {category.label}
                  </Typography>
                </Grid>
              ))}
            </Grid>
          </Grid>

          <Grid
            container
            item
            xs={12}
            md={4}
            direction="column"
            justifyContent="flex-start"
            alignItems="flex-start"
            spacing={1}
          >
            <Grid item>
              <Stack spacing={3}>
                <Typography variant="subtitle1" color="primary">
                  Kết nối với chúng tôi
                </Typography>
                <Stack
                  spacing={5}
                  direction="row"
                  justifyContent="start"
                  alignItems="center"
                >
                  <Link href={""} target="_blank" rel="noopener noreferrer">
                    <Facebook />
                  </Link>
                  <Link href={""} target="_blank" rel="noopener noreferrer">
                    <Youtube />
                  </Link>
                  <Link href={""} target="_blank" rel="noopener noreferrer">
                    <Tiktok />
                  </Link>
                  <Link href={""} target="_blank" rel="noopener noreferrer">
                    <Mail />
                  </Link>
                </Stack>
              </Stack>
            </Grid>
            <Grid container item justifyContent="center">
              <Divider
                sx={{
                  my: 2,
                  display: { xs: "flex", md: "none" },
                  width: "90%",
                }}
              />
            </Grid>
            <Grid item>
              <Stack spacing={3}>
                <Typography variant="subtitle1" color="primary">
                  Tải ứng dụng Lịch Việt
                </Typography>
                <Stack
                  spacing={5}
                  direction="row"
                  justifyContent="start"
                  alignItems="center"
                >
                  <Link href={""} target="_blank" rel="noopener noreferrer">
                    <Apple />
                  </Link>
                  <Link href={""} target="_blank" rel="noopener noreferrer">
                    <Android />
                  </Link>
                  <Link href={""} target="_blank" rel="noopener noreferrer">
                    <Huawei />
                  </Link>
                </Stack>
              </Stack>
            </Grid>
            <Grid container item justifyContent="center">
              <Divider
                sx={{
                  my: 2,
                  display: { xs: "flex", md: "none" },
                  width: "90%",
                }}
              />
            </Grid>
          </Grid>
        </Grid>
        <Grid container item justifyContent="center">
          <Divider sx={{ my: 2, width: "100%" }} />
        </Grid>
        <Grid container pb={1} justifyContent="center">
          <Typography variant="body1" color="#35C03C">
            © Copyright 2021 - PPCLINK
          </Typography>
        </Grid>
      </Grid>
    </Container>
  );
};
