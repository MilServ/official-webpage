import React from "react";
import ReactPlayer from "react-player";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles({
  root: {
    width: "auto",
    marginTop: 10,
  },
  wrapper: {
    marginBottom: 10,
  },
});

export default function VetVideoCard() {
  const classes = useStyles();

  return (
    <div className={classes.wrapper}>
      <h2>
        <b
          style={{
            color: "whitesmoke",
            marginBottom: 10,
          }}
        >
          WE'RE HIRING!
        </b>
      </h2>
      <br></br>
      <section>
        <p
          style={{
            color: "whitesmoke",
            fontWeight: 600,
          }}
        >
          <em>Click on location to learn more!</em>
        </p>
        <button className="btn btn-primary">Maryland</button>{" "}
        <button className="btn btn-danger">Texas</button>{" "}
        <button className="btn btn-success">New York</button>
      </section>
      <br></br>
      <Card className={classes.root}>
        <CardActionArea>
          <CardContent>
            <Typography gutterBottom variant="h5" component="h2">
              WATCH VIDEO TO LEARN MORE
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
              Learn more about our training program for prior service and
              transitioning servicemembers.
            </Typography>
          </CardContent>
        </CardActionArea>
        <CardActions>
          <ReactPlayer
            className="react-player"
            style={{ padding: 0, margin: 0, height: "100%" }}
            // url={retailerVid}
            url={"../../static/videos/veteranExplainerVid.mp4"}
            width="100%"
            height="auto"
            controls={true}
          />
        </CardActions>
      </Card>
    </div>
  );
}
