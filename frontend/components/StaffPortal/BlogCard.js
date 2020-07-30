import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import Link from "next/link";

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
    marginBottom: 20,
  },
});

export default function BlogCard() {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          component="img"
          alt="Contemplative Reptile"
          height="140"
          image="../../static/images/blog-image.jpg"
          title="Contemplative Reptile"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            MILSERV NEWS
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            Write a blog or press release to keep customers and stakeholders
            informed.
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <a href="/admin/blog">
          <Button size="small" color="primary">
            Write
          </Button>
        </a>
        <a href="/admin/crud/category-tag">
          <Button size="small" color="primary">
            Create Categories
          </Button>
        </a>
      </CardActions>
    </Card>
  );
}
