import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFlagUsa } from "@fortawesome/free-solid-svg-icons";
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
    <Grid
      item
      component={Card}
      xs={12}
      s={6}
      md={3}
      className="card"
      id="veterans-color"
    >
      <CardContent>
        <CardMedia title="Veterans Card">
          <FontAwesomeIcon icon={faFlagUsa} className="icons" />
        </CardMedia>

        <Typography className="categoryTitle">VETERANS</Typography>
      </CardContent>
    </Grid>
  );
}
