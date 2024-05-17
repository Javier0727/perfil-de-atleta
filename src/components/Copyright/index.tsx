import { Link, Typography } from "@mui/material";
import React from "react";

export const Copyright = (props: any) => {
  return (
    <Typography
      variant="body2"
      color="text.secondary"
      align="center"
      {...props}
    >
      {"Copyright © "}
      <Link
        color="inherit"
        href="https://www.facebook.com/profile.php?id=100001624689766"
      >
        #EasyShet
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
};
