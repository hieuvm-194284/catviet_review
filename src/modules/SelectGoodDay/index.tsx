import { Layout } from "@/layouts";
import YouTube, { YouTubeProps } from "react-youtube";
import {
  Box,
  CardMedia,
  Container,
  Divider,
  Grid,
  Link,
  Stack,
  Typography,
} from "@mui/material";
import { PageComponent } from "next";
import { StyledBox } from "./styled";
import { Img } from "@/uis/Img";
import TextFieldCustom from "@/uis/TextFieldCustom";
import { GradientButton } from "@/uis/GradientButton";
import Phone from "@/icons/Phone";
type packageItem = {
  id: string;
  imgSrc: string;
};

const packagesCalendar: packageItem[] = [
  { id: "1", imgSrc: "/images/benefitsVip/benefitsVip1.png" },
  { id: "2", imgSrc: "/images/benefitsVip/benefitsVip2.png" },
  { id: "3", imgSrc: "/images/benefitsVip/benefitsVip3.png" },
  { id: "4", imgSrc: "/images/benefitsVip/benefitsVip4.png" },
];

const opts: YouTubeProps["opts"] = {
  width: "100%",
  height: "300px",
};

const listWorks: packageItem[] = [
  { id: "1", imgSrc: "/images/works/work1.png" },
  { id: "2", imgSrc: "/images/works/work2.png" },
  { id: "3", imgSrc: "/images/works/work3.png" },
  { id: "4", imgSrc: "/images/works/work4.png" },
  { id: "5", imgSrc: "/images/works/work5.png" },
  { id: "6", imgSrc: "/images/works/work6.png" },
];

const listOffers: packageItem[] = [
  { id: "1", imgSrc: "/images/offers/offer1.png" },
  { id: "2", imgSrc: "/images/offers/offer2.png" },
  { id: "3", imgSrc: "/images/offers/offer3.png" },
];

const listOrders: packageItem[] = [
  { id: "1", imgSrc: "/images/offers/pack1.png" },
  { id: "2", imgSrc: "/images/offers/pack2.png" },
  { id: "3", imgSrc: "/images/offers/pack3.png" },
  { id: "4", imgSrc: "/images/offers/pack4.png" },
];

type goodDayItem = {
  id: string;
  title: string;
  imgSrc: string;
  description: string;
};

const howIsAGoodDay: goodDayItem[] = [
  {
    id: "1",
    title: "Thiên",
    imgSrc: "/images/sun.png",
    description:
      "Phân tích hệ thống sao mỗi ngày, đưa ra các ngày tốt, các việc nên làm, không nên làm theo đặc tính từng sao",
  },
  {
    id: "2",
    title: "Địa",
    imgSrc: "/images/earth.png",
    description:
      "Phân tích phương hướng theo năm, tháng, ngày và giờ để đưa ra ngày tốt cho các việc đại sự có hướng như: khởi công, động thổ, nhập trạch",
  },
  {
    id: "3",
    title: "Nhân",
    imgSrc: "/images/person.png",
    description:
      "Phân tích năm sinh để đưa ra dữ liệu chính xác cho từng cá nhân",
  },
];

export const SelectGoodDay: PageComponent = () => {
  return (
    <>
      <Container maxWidth="md">
        <Grid container direction="column">
          <Grid item direction="row" mb={3}>
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
          <Grid container direction="column">
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
                  <CardMedia
                    sx={{
                      position: "relative",
                      height: "156px",
                      width: "100%",
                      background: "#FFF",
                      backgroundSize: "contain",
                      backgroundRepeat: "no-repeat",
                      backgroundPosition: "center center",
                    }}
                    image={item.imgSrc}
                    title="banner"
                  >
                    &nbsp;
                  </CardMedia>
                </Grid>
              ))}
            </Grid>
            <Divider sx={{ my: 3, width: "100%" }} />
          </Grid>
          <Grid container spacing={4}>
            <Grid container item xs={12} md={5} spacing={1}>
              <Grid container item xs={12}>
                <Typography
                  variant="h2"
                  sx={{ color: (theme) => theme.palette.text.secondary }}
                >
                  DUY NHẤT TẠI LỊCH VIỆT
                </Typography>
                <Typography
                  variant="h3"
                  sx={{ color: (theme) => theme.palette.text.primary }}
                >
                  Kết quả ngày tốt, xấu được phân tích theo ngày sinh của bạn
                </Typography>
              </Grid>
              <Box height={8} />
              <Grid container item xs={12}>
                <Box width={"100%"}>
                  <YouTube videoId="vgzYAylnFiE" opts={opts} />
                </Box>
              </Grid>
            </Grid>
            <Grid item xs={12} md={7}>
              <Typography
                variant="h4"
                sx={{ color: (theme) => theme.palette.text.secondary }}
              >
                Ngày tốt là một ngày phối hợp giữa thiên can, địa chi, âm dương
                ngũ hành của Thiên - Địa - Nhân một cách hài hòa. Chúng tôi dựa
                trên các yếu tố Thiên, Địa, Nhân để phân tích và đưa ra kết quả
                ngày tốt - xấu một cách khoa học, cụ thể:
              </Typography>
              <Grid sx={{ mt: 1 }} container spacing={2}>
                {howIsAGoodDay.map((item: goodDayItem) => (
                  <Grid
                    key={item.id}
                    container
                    item
                    xs={12}
                    justifyContent="center"
                    alignItems="center"
                  >
                    <Grid item xs={2}>
                      <Img
                        width={50}
                        height={50}
                        src={item.imgSrc}
                        alt="howIsAGoodDay"
                      />
                    </Grid>
                    <Grid container item xs={10}>
                      <Grid item xs={12}>
                        <Box
                          sx={{
                            backgroundColor: "orange",
                            width: 60,
                            p: 0.3,
                            color: "#fff",
                            borderRadius: "2px",
                          }}
                        >
                          <Typography textAlign="center">{item.title.toUpperCase()}</Typography>
                        </Box>
                      </Grid>
                      <Grid item xs={12}>
                        <Typography
                          variant="h5"
                          sx={{ color: (theme) => theme.palette.text.primary }}
                        >
                          {item.description}
                        </Typography>
                      </Grid>
                    </Grid>
                  </Grid>
                ))}
              </Grid>
            </Grid>
            <Divider sx={{ my: 3, width: "100%" }} />
          </Grid>

          <Grid container spacing={2}>
            <Grid item xs={12}>
              <Typography
                variant="h2"
                sx={{ color: (theme) => theme.palette.text.secondary }}
              >
                {" "}
                KIẾM DỄ DÀNG VÀ NHANH CHÓNG
              </Typography>
              <Typography
                variant="h5"
                sx={{ color: (theme) => theme.palette.text.primary }}
              >
                Theo 28 việc đại sự phổ biến nhất, như:
              </Typography>
            </Grid>
            <Grid container item xs={12} md={6} spacing={1}>
              <Grid container item xs={12} spacing={1}>
                {listWorks.map((item: packageItem) => (
                  <Grid
                    key={item.id}
                    container
                    item
                    xs={4}
                    justifyContent="center"
                    alignItems="center"
                  >
                    <CardMedia
                      sx={{
                        position: "relative",
                        height: "192px",
                        width: "100%",
                        background: "#FFF",
                        backgroundSize: "contain",
                        backgroundRepeat: "no-repeat",
                        backgroundPosition: "center center",
                      }}
                      image={item.imgSrc}
                      title="banner"
                    >
                      &nbsp;
                    </CardMedia>
                  </Grid>
                ))}
              </Grid>
            </Grid>
            <Grid container item xs={12} md={6}>
              <Stack
                direction="column"
                spacing={1}
                justifyContent="start"
                alignItems="start"
              >
                <Typography
                  variant="h5"
                  sx={{ color: (theme) => theme.palette.text.primary }}
                >
                  <span style={{ color: "orange" }}>► </span>
                  Thuật toán độc quyền từ các chuyên gia Lịch Việt, phân tích
                  dựa trên kiến thức tinh hoa cổ học Phương Đông áp dụng cho
                  thời hiện đại
                </Typography>

                <Typography
                  variant="h5"
                  sx={{ color: (theme) => theme.palette.text.primary }}
                >
                  <span style={{ color: "orange" }}>► </span>
                  Tính năng "CHỌN NGÀY TỐT" mới này là kết quả dựa trên quá
                  trình nghiên cứu, đúc rút từ kiến thức tinh hoa cổ học Phương
                  Đông & cơ sở khoa học cũng như thuật toán đọc quyền từ các
                  chuyên gia Lịch Việt, có sự chi tiết và chính xác cao hơn.
                </Typography>
              </Stack>
            </Grid>
            <Divider sx={{ my: 3, width: "100%" }} />
          </Grid>

          <Grid container direction="column" spacing={4}>
            <Grid item xs={12}>
              <Typography
                variant="h2"
                sx={{ color: (theme) => theme.palette.text.secondary }}
              >
                ƯU ĐÃI ĐI KÈM
              </Typography>
            </Grid>
            <Grid
              container
              item
              xs={12}
              spacing={2}
              justifyContent="space-between"
              alignItems="center"
            >
              {listOffers.map((item: packageItem) => (
                <Grid
                  key={item.id}
                  container
                  item
                  xs={12}
                  md={3}
                  justifyContent="center"
                  alignItems="center"
                >
                  <CardMedia
                    sx={{
                      position: "relative",
                      height: "174px",
                      width: "100%",
                      background: "#FFF",
                      backgroundSize: "contain",
                      backgroundRepeat: "no-repeat",
                      backgroundPosition: "center center",
                    }}
                    image={item.imgSrc}
                    title="banner"
                  >
                    &nbsp;
                  </CardMedia>
                </Grid>
              ))}
            </Grid>
            <Divider sx={{ my: 3, width: "100%" }} />
          </Grid>

          <Grid container direction="column" spacing={4}>
            <Grid item xs={12}>
              <Typography variant="h3" color="#008C2D" textAlign="center">
                ĐĂNG KÝ ĐỂ NHẬN NGAY ƯU ĐÃI
              </Typography>
              <Typography
                variant="h3"
                sx={{ color: (theme) => theme.palette.text.primary }}
                textAlign="center"
              >
                “ SỐ LƯỢNG CÓ HẠN ”
              </Typography>
            </Grid>
            <Grid
              container
              item
              xs={12}
              spacing={2}
              justifyContent="space-between"
              alignItems="center"
            >
              {listOrders.map((item: packageItem) => (
                <Grid
                  key={item.id}
                  container
                  item
                  xs={6}
                  md={3}
                  justifyContent="center"
                  alignItems="center"
                >
                  <CardMedia
                    sx={{
                      position: "relative",
                      height: "197px",
                      width: "100%",
                      background: "#FFF",
                      backgroundSize: "contain",
                      backgroundRepeat: "no-repeat",
                      backgroundPosition: "center center",
                    }}
                    image={item.imgSrc}
                    title="banner"
                  >
                    &nbsp;
                  </CardMedia>
                </Grid>
              ))}
            </Grid>
          </Grid>
          <Container maxWidth="sm">
            <Grid container spacing={2} mt={4} justifyContent="center">
              <Grid xs={0} md={5}></Grid>
              <Grid
                container
                item
                xs={12}
                md={7}
                justifyContent={{ xs: "center", md: "flex-start" }}
              >
                <Link>
                  <Typography
                    variant="h5"
                    sx={{ color: (theme) => theme.palette.text.secondary }}
                  >
                    Hướng dẫn thanh toán qua Momo/ShopeePay
                  </Typography>
                </Link>
              </Grid>

              <Grid
                container
                item
                xs={12}
                spacing={2}
                alignItems={"flex-start"}
              >
                <Grid xs={0} sm={2}></Grid>
                <Grid container item justifyContent="flex-end" xs={4} sm={3}>
                  <CardMedia
                    sx={{
                      position: "relative",
                      height: "192px",
                      width: "100%",
                      background: "#FFF",
                      backgroundSize: "contain",
                      backgroundRepeat: "no-repeat",
                      backgroundPosition: "center center",
                    }}
                    image={"/images/sell.png"}
                    title="banner"
                  >
                    &nbsp;
                  </CardMedia>
                </Grid>
                <Grid container item xs={8} sm={5} spacing={2}>
                  <Grid item xs={12}>
                    <Typography
                      variant="h5"
                      sx={{ color: (theme) => theme.palette.text.primary }}
                    >
                      Bạn không thể thanh toán? Vui lòng để lại số điện thoại để
                      chúng tôi hỗ trợ bạn đăng ký.
                    </Typography>
                  </Grid>
                  <Grid item xs={12}>
                    <TextFieldCustom
                      placeholder="Số điện thoại"
                      icon={<Phone />}
                    />
                  </Grid>
                  <Grid item xs={12}>
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
                <Grid xs={0} sm={2}></Grid>
              </Grid>
              <Grid xs={0} sm={3}></Grid>
              <Grid container item justifyContent="center" xs={12} sm={9}>
                <Stack direction="row" justifyContent="center" spacing={2}>
                  <Link href="/">
                    <Typography
                      variant="h5"
                      sx={{ color: (theme) => theme.palette.text.secondary }}
                    >
                      Điều khoản sử dụng
                    </Typography>
                  </Link>
                  <Link href="/">
                    <Typography
                      variant="h5"
                      sx={{ color: (theme) => theme.palette.text.secondary }}
                    >
                      Chính sách bảo mật
                    </Typography>
                  </Link>
                </Stack>
              </Grid>
            </Grid>
          </Container>
        </Grid>
      </Container>
    </>
  );
};

SelectGoodDay.getLayout = function getLayout(page) {
  return <Layout>{page}</Layout>;
};
