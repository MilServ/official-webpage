import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTruck } from "@fortawesome/free-solid-svg-icons";
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
      id="distributors-color"
    >
      <CardContent>
        <CardMedia title="Distributors Card">
          <FontAwesomeIcon className="icons" icon={faTruck} />
        </CardMedia>

        <Typography className="categoryTitle">DISTRIBUTORS</Typography>
      </CardContent>
    </Grid>
    // </Link>
  );
}
