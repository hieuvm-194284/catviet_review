import Phone from "@/icons/Phone";
import { Layout } from "@/layouts";
import { GradientButton } from "@/uis/GradientButton";
import { Img } from "@/uis/Img";
import TextFieldCustom from "@/uis/TextFieldCustom";
import { useRouter } from 'next/router';
import {
  CardMedia,
  Container,
  Grid,
  Stack,
  Typography,
  Link,
} from "@mui/material";
import { PageComponent } from "next";
import { StyledBox } from "./styled";
import { routes } from "@/types/routes";

type packageItem = {
  id: string;
  imgSrc: string;
  link: string;
};

const packagesCalendar: packageItem[] = [
  { id: "1", imgSrc: "/images/packageCalendar/package1.png", link: routes.selectGoodDay },
  { id: "2", imgSrc: "/images/packageCalendar/package2.png", link: routes.home },
  { id: "3", imgSrc: "/images/packageCalendar/package3.png", link: routes.home },
  { id: "4", imgSrc: "/images/packageCalendar/package4.png", link: routes.home },
  { id: "5", imgSrc: "/images/packageCalendar/package5.png", link: routes.home },
  { id: "6", imgSrc: "/images/packageCalendar/package6.png", link: routes.home },
  { id: "7", imgSrc: "/images/packageCalendar/package7.png", link: routes.home },
  { id: "8", imgSrc: "/images/packageCalendar/package8.png", link: routes.home },
];

export const HomePage: PageComponent = () => {
  const router = useRouter();
  return (
    <>
      <Container maxWidth="md">
        <Grid container direction="column">
          <Grid item direction="row">
              <CardMedia
                sx={{
                  position: "relative",
                  height: "250px",
                  width: "100%",
                  background: "#FFF",
                  backgroundSize: "contain",
                  backgroundRepeat: "no-repeat",
                  backgroundPosition: "center center",
                }}
                image={"/images/banner.png"}
                title="banner"
              >
                &nbsp;
              </CardMedia>
          </Grid>
          <Grid
            container
            direction="column"
          >
            <Stack my={{ xs: 1.5, md: 3 }}>
              <Typography variant="caption" color="primary">
                Các gói Lịch Việt Pro
              </Typography>
            </Stack>
            <Container maxWidth="sm">
            <Grid
              container
              item
              xs={12}
              spacing={2}
              justifyContent="space-between"
              alignItems="center"
            >
              {packagesCalendar.map((item: packageItem) => (
                <Grid
                  key={item.id}
                  container
                  item
                  xs={6}
                  md={3}
                  justifyContent="center"
                  alignItems="center"
                >
                  <Link
                    sx={{ ":hover": { cursor: "pointer" } }}
                    onClick={() => router.push(item.link)}
                  >
                    <Img
                      height={196}
                      width={170}
                      alt="logo"
                      src={item.imgSrc}
                    />
                  </Link>
                </Grid>
              ))}
            </Grid>
            </Container>
          </Grid>
          <Grid
            container
            direction="column"
            justifyContent="center"
          >
            <Stack my={{ xs: 1.5, md: 3 }}>
              <Typography variant="caption" color="primary">
                Quý khách cần hỗ trợ?
              </Typography>
            </Stack>
            <Container maxWidth="sm">
            <StyledBox>
              <Stack justifyContent="center" mb={2}>
                <Typography variant="h1" color="primary" textAlign="center">LIÊN HỆ</Typography>
              </Stack>
              <Stack>
                <Typography variant="h5" color="secondary">
                  Quý khách vui lòng nhập chính khác thông tin.
                </Typography>
                <Typography variant="h5" color="secondary">
                  Chúng tôi sẽ liên hệ lại trong thời gian sớm nhất
                </Typography>
                <Grid container spacing={3} justifyContent="center" mt={2}>
                  <Grid item xs={6}>
                    <TextFieldCustom
                      placeholder="Số điện thoại"
                      icon={<Phone />}
                    />
                  </Grid>
                  <Grid container item xs={12} justifyContent={"center"}>
                    <GradientButton>
                      <Typography
                        sx={{
                          fontSize: "16px",
                          lineHeight: "14px",
                          fontWeight: "500",
                        }}
                      >
                        Kích hoạt
                      </Typography>
                    </GradientButton>
                  </Grid>
                </Grid>
                <Stack justifyContent="center">
                  <CardMedia
                    sx={{
                      position: "relative",
                      height: "154px",
                      width: "100%",
                      background: "#FFF",
                      backgroundSize: "contain",
                      backgroundRepeat: "no-repeat",
                      backgroundPosition: "center center",
                    }}
                    image={"/images/contact.png"}
                    title="contact"
                  >
                    &nbsp;
                  </CardMedia>
                </Stack>
              </Stack>
            </StyledBox>
            </Container>
          </Grid>
        </Grid>
      </Container>
    </>
  );
};

HomePage.getLayout = function getLayout(page) {
  return <Layout>{page}</Layout>;
};
