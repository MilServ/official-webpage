import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
// import pic from "../../static/images/mildiscowl.png";
import ReactPlayer from "react-player";

const useStyles = makeStyles({
  root: {
    width: "auto",
    marginTop: 10,
  },
  wrapper: {
    marginBottom: 10,
  },
});

export default function RetVideoCard() {
  const classes = useStyles();

  return (
    <div className={classes.wrapper}>
      <br></br>
      <Card className={classes.root}>
        <CardActionArea>
          <CardContent>
            <Typography gutterBottom variant="h5" component="h2">
              WATCH VIDEO FOR RETAILERS
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
              Watch video to learn about our E-Commerce platform to order
              alcohol. Delivered by military veterans at no cost to you.
            </Typography>
          </CardContent>
        </CardActionArea>
        <CardActions>
          <ReactPlayer
            className="react-player"
            style={{ padding: 0, margin: 0, height: "100%" }}
            // url={retailerVid}
            url={"../../static/videos/retailerExplainerVid.mp4"}
            width="100%"
            height="auto"
            controls={true}
          />
        </CardActions>
      </Card>
    </div>
  );
}
