import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBeer } from "@fortawesome/free-solid-svg-icons";
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

export default function LandingCardsOne() {
  const classes = useStyles();

  return (
    // <Link to="/" style={{ textDecoration: "none" }}>
    <Grid
      item
      component={Card}
      xs={12}
      s={6}
      md={3}
      className="card"
      id="makers-color"
    >
      <CardContent>
        <CardMedia title="Beer Makers">
          <FontAwesomeIcon icon={faBeer} className="icons" />
        </CardMedia>

        <Typography className="categoryTitle">MAKERS</Typography>
      </CardContent>
    </Grid>
    // </Link>
  );
}
