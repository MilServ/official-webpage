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

export default function DistVideoCard() {
  const classes = useStyles();

  return (
    <div className={classes.wrapper}>
      <br></br>
      <Card className={classes.root}>
        <CardActionArea>
          <CardContent>
            <Typography gutterBottom variant="h5" component="h2">
              WATCH VIDEO FOR DISTRIBUTORS
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
              From helping you save money to expanding your reach, press play to
              learn how MilServ supports distributors.
            </Typography>
          </CardContent>
        </CardActionArea>
        <CardActions>
          <ReactPlayer
            className="react-player"
            style={{ padding: 0, margin: 0, height: "100%" }}
            // url={retailerVid}
            url={"../../static/videos/distExplainerVid.mp4"}
            width="100%"
            height="auto"
            controls={true}
          />
        </CardActions>
      </Card>
    </div>
  );
}
