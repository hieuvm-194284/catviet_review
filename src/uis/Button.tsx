import { Button } from "@mui/material";
import { styled } from "@mui/material/styles";

export const ButtonDefault = styled(Button)(({ theme }) => ({
  borderRadius: "4px",
  border: "1px solid #E1E1E1",
  background: "#FFF",
  textTransform: 'none',
}));

ButtonDefault.defaultProps = {
  variant: "outlined",
};
