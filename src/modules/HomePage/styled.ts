import { Box, styled } from "@mui/material";

export const StyledBox = styled(Box)(({ theme }) => ({
    width: "100%",
    borderRadius: "8px",
    border: "1px solid #CDCDCD",
    background: "#FFF",
    boxShadow: "0px 20px 40px 0px rgba(0, 0, 0, 0.06)",
    padding: "32px 24px 24px 24px"
  }));