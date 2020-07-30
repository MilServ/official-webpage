// Find out why phone number is ot CanvasRenderingContext2D.  Start with checking the db

import React, { Component } from "react";
import { API } from "../../config";
import Moment from "react-moment";
import Axios from "axios";
import moment from "moment";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faBeer } from "@fortawesome/free-solid-svg-icons";
import {
  Card,
  CardContent,
  CardActions,
  Typography,
  Grid,
  Button,
} from "@material-ui/core";
import AccountCircleIcon from "@material-ui/icons/AccountCircleOutlined";
import EmailIcon from "@material-ui/icons/EmailOutlined";
import PhoneIcon from "@material-ui/icons/Phone";

// The ...props means, spread all of the passed props onto this element

// That way we don't have to define them all individually
export default class RetailerList extends Component {
  state = {
    retailers: [],
    lastDate: [],
  };

  componentDidMount() {
    this.loadRetsList();
    this.loadLastSubmission();
    // this.displayRecentNo();
  }

  loadRetsList = () => {
    Axios.get(`${API}/retailers`)
      .then(
        (res) =>
          this.setState(
            {
              retailers: res.data,
            },
            console.log("this is the data " + JSON.stringify(res.data))
          )
        // this.setState({ ...this.state, numbers: res.data })
      )
      .catch((err) => console.log(err));
  };

  loadLastSubmission = () => {
    Axios.get(`${API}/retailers-last-submission`)
      .then(
        (res) =>
          this.setState(
            {
              lastDate: res.data[0].date,
            },
            console.log("this is the data " + JSON.stringify(res.data[0].date))
          )
        // this.setState({ ...this.state, numbers: res.data })
      )
      .catch((err) => console.log(err));
  };

  //   deleteNumber = (id) => {
  //     const currentNumbers = this.state.numbers;
  //     API.deleteNumber(id)
  //       .then(
  //         (res) =>
  //           this.setState({
  //             numbers: currentNumbers.filter((number) => number._id !== id),
  //           }),
  //         this.loadNumbers()
  //       )
  //       .catch((err) => console.log(err));
  //   };

  render() {
    return (
      <div className="container">
        <div className="row" style={{ marginBottom: 50 }}>
          <div className="col-md-4">
            <Grid
              item
              component={Card}
              id="retailers-color"
              style={{ color: "white", marginBottom: "10px" }}
            >
              <CardContent>
                <Typography gutterBottom variant="h5" component="h1">
                  TOTAL RETAILERS
                </Typography>

                <Typography gutterBottom variant="h2" component="h2">
                  {this.state.retailers.length}
                </Typography>
              </CardContent>
            </Grid>
          </div>
          <hr></hr>

          <div className="col-md-4">
            <Grid
              item
              component={Card}
              // xs={12}
              // s={12}
              // md={12}
              style={{ color: "white", marginTop: 2 }}
              id="retailers-color"
            >
              <CardContent>
                <Typography gutterBottom variant="h5" component="h1">
                  LAST SUBMISSION
                </Typography>

                <Typography gutterBottom variant="h2" component="h2">
                  {moment(this.state.lastDate).format("L")}
                </Typography>
              </CardContent>
            </Grid>
          </div>
        </div>
        {this.state.retailers.length ? (
          <div className="row">
            <div className="col-md-4 col-sm-12 col-xs-12">
              {this.state.retailers
                .slice(0)
                .reverse()
                .map((rets) => (
                  <Grid
                    item
                    key={rets._id}
                    component={Card}
                    // xs={12}
                    // s={6}
                    // md={3}
                    className="vetATSCards"
                    style={{ borderTop: "solid darkred 15px" }}
                  >
                    <CardContent>
                      <Typography style={{ fontSize: ".85rem" }}>
                        COMPANY NAME
                      </Typography>
                      {rets.coName.toUpperCase()}
                      <hr></hr>
                      <Typography style={{ fontSize: ".85rem" }}>
                        CONTACT PERSON
                      </Typography>
                      {rets.retFirstName.toUpperCase()}{" "}
                      {rets.retLastName.toUpperCase()}
                      <hr></hr>
                      <Typography>
                        <EmailIcon style={{ marginRight: 10 }} />
                        {rets.retEmail}
                      </Typography>
                      <Typography>
                        <PhoneIcon style={{ marginRight: 10 }} />
                        {rets.retPhoneNumber}
                      </Typography>
                      <hr></hr>
                      <Typography style={{ fontSize: ".85rem" }}>
                        STATE(s) LICENSED IN:
                        {rets.licState.map((states) => (
                          <ul>
                            <li>{states.value}</li>
                          </ul>
                        ))}
                      </Typography>
                      {/* <Typography variant="body2" component="p">
                      {vets.careerInterest}
                    </Typography> */}
                      <hr></hr>
                      <Typography style={{ fontSize: ".85rem" }}>
                        DATE OF SUBMISSION
                      </Typography>
                      <Moment format="MM/DD/YYYY, h:mm a">{rets.date}</Moment>
                      {/* <button onClick={() => this.deleteNumber(vets._id)} /> */}
                    </CardContent>
                    <CardActions>
                      <Button size="small">
                        {"  "}
                        <AccountCircleIcon style={{ marginRight: "4px" }} />
                        {"  "} MORE INFO
                      </Button>
                    </CardActions>
                  </Grid>
                ))}
            </div>
          </div>
        ) : (
          <h3>No Retailers to Display :(</h3>
        )}
      </div>
    );
  }
}
