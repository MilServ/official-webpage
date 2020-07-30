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
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import EmailIcon from "@material-ui/icons/EmailOutlined";
import PhoneIcon from "@material-ui/icons/Phone";

// The ...props means, spread all of the passed props onto this element

// That way we don't have to define them all individually
export default class VeteranList extends Component {
  state = {
    veterans: [],
    lastDate: [],
  };

  componentDidMount() {
    this.loadVetsList();
    this.loadLastSubmission();
    // this.displayRecentNo();
  }

  loadVetsList = () => {
    Axios.get(`${API}/veterans`)
      .then(
        (res) =>
          this.setState(
            {
              veterans: res.data,
            }
            // console.log("this is the data " + JSON.stringify(res.data))
          )
        // this.setState({ ...this.state, numbers: res.data })
      )
      .catch((err) => console.log(err));
  };

  loadLastSubmission = () => {
    Axios.get(`${API}/veterans-last-submission`)
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
              id="veterans-color"
              style={{ color: "white", marginBottom: "10px" }}
            >
              <CardContent>
                <Typography gutterBottom variant="h5" component="h1">
                  TOTAL APPLICANTS
                </Typography>

                <Typography gutterBottom variant="h2" component="h2">
                  {this.state.veterans.length}
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
              id="veterans-color"
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
        {this.state.veterans.length ? (
          <div className="row">
            <div className="col-md-4 col-sm-12 col-xs-12">
              {this.state.veterans
                .slice(0)
                .reverse()
                .map((vets) => (
                  <Grid
                    item
                    key={vets._id}
                    component={Card}
                    className="vetATSCards"
                    style={{ borderTop: "solid #8d54b5 15px" }}
                  >
                    <CardContent>
                      <Typography className="categoryTitle">
                        VETERANS
                      </Typography>
                      <Typography variant="h5" component="h3">
                        {vets.lastName.toUpperCase()},{" "}
                        {vets.firstName.toUpperCase()}
                      </Typography>
                      <Typography
                        variant="body2"
                        id="vetCardTime"
                        component="p"
                        style={{ marginTop: 8 }}
                      >
                        Email: {vets.email}
                      </Typography>
                      {/* <Typography variant="body2" component="p">
                      {vets.careerInterest}
                    </Typography> */}
                      <Typography color="body2" id="vetCardTime" component="p">
                        Date:{" "}
                        <Moment format="MM/DD/YYYY, h:mm a">{vets.date}</Moment>
                      </Typography>

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
          <h3>No Applicants to Display :(</h3>
        )}
      </div>
    );
  }
}
