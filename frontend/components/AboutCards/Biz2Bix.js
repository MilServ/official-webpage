import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Link from "next/link";
import BusinessIcon from "@material-ui/icons/Business";
import {
  Card,
  CardContent,
  CardMedia,
  Typography,
  Grid,
} from "@material-ui/core";

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
  },
});

export default function Biz2Biz() {
  const classes = useStyles();

  return (
    <Grid
      item
      component={Card}
      xs={12}
      s={6}
      md={3}
      className="card"
      style={{ position: "relative" }}
    >
      <CardContent>
        <CardMedia title="Veterans Card">
          <BusinessIcon style={{ fontSize: 100, color: "#383838" }} />
        </CardMedia>
        <Typography style={{ fontSize: "1.5rem", color: "#383838" }}>
          Business to Business
        </Typography>

        <button
          className="btn btn-warning"
          style={{ position: "absolute", bottom: 25, left: 25 }}
        >
          Read More
        </button>
      </CardContent>
    </Grid>
  );
}
