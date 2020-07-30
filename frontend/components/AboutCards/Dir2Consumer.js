import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Link from "next/link";
import PeopleIcon from "@material-ui/icons/People";
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

export default function Dir2Consumer() {
  const classes = useStyles();

  return (
    // <Link to="/" style={{ textDecoration: "none" }}>
    <Grid item component={Card} xs={12} s={6} md={3} className="card">
      <CardContent>
        <CardMedia title="Direct to Consumer">
          <PeopleIcon style={{ fontSize: 100, color: "#383838" }} />
        </CardMedia>

        <Typography style={{ fontSize: "1.5rem", color: "#383838" }}>
          Direct to Consumer
        </Typography>

        <button
          className="btn btn-warning"
          style={{ position: "absolute", bottom: 25, left: 25 }}
        >
          Read More
        </button>
      </CardContent>
    </Grid>
    // </Link>
  );
}
