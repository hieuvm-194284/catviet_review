import { ButtonDefault } from "@/uis/Button";
import { GradientButton } from "@/uis/GradientButton";
import { Button, Grid, Link, Stack, Typography } from "@mui/material";
import React, { useEffect } from "react";

interface IProps {
  label: string;
  link: string;
  isActive: boolean;
}

const NavItem = (props: IProps) => {
  const { label, link, isActive } = props;
  return (
    <>
      {isActive ? (
        <Link
          sx={{ textDecoration: "#35C03C" }}
          textTransform="uppercase"
          href={link}
        >
          <Typography variant="subtitle2" color="#020202">
            {label}
          </Typography>
        </Link>
      ) : (
        <Link
          sx={{ textDecoration: "none" }}
          textTransform="uppercase"
          href={link}
        >
          <Typography variant="subtitle2" color="#484E54">
            {label}
          </Typography>
        </Link>
      )}
    </>
  );
};

export default NavItem;
