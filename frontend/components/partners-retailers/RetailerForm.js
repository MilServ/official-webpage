import React, { useState, PropTypes } from "react";
import { API } from "../../config";
import Axios from "axios";
import { makeStyles } from "@material-ui/core/styles";
// import { withRouter } from "next/router";
import Router from "next/router";
import MultiSelect from "react-multi-select-component";

const useStyles = makeStyles({
  root: {
    width: "auto",
  },
});

export default function RetSignUpForm(props) {
  const classes = useStyles();
  const [retFirstName, setRetFirstName] = useState("");
  const [retLastName, setRetLastName] = useState("");
  const [retEmail, setRetEmail] = useState("");
  const [licState, setLicState] = useState([]);
  const [retPhoneNumber, setRetPhoneNumber] = useState("");
  const [stateLicNo, setStateLicNo] = useState("");
  const [coName, setCoName] = useState("");
  const [retAdditionalInfo, setRetAdditionalInfo] = useState("");

  const options = [
    { label: "Alabama", value: "AL" },
    { label: "Alaska", value: "AK" },
    { label: "Arizona", value: "AZ" },

    { label: "Arkansas", value: "AR" },
    { label: "Colorado", value: "CO" },
    { label: "Connecticut", value: "CT" },
    { label: "Delaware", value: "DE" },
    { label: "Florida", value: "FL" },
    { label: "Georgia", value: "GA" },
    { label: "Hawaii", value: "HI" },
    { label: "Idaho", value: "ID" },
    { label: "Illinois", value: "IL" },
    { label: "Indiana", value: "IN" },

    { label: "Iowa", value: "IA" },
    { label: "Kansas", value: "KS" },
    { label: "Kentucky", value: "KY" },
    { label: "Louisiana", value: "LA" },
    { label: "Maine", value: "ME" },
    { label: "Maryland", value: "MD" },
    { label: "Massachusetts", value: "MA" },
    { label: "Michigan", value: "MI" },
    { label: "Minnesota", value: "MN" },
    { label: "Mississippi", value: "MS" },
    { label: "Missouri", value: "MO" },
    { label: "Montana", value: "MT" },
    { label: "Nebraska", value: "NE" },
    { label: "Nevada", value: "NV" },
    { label: "New Hampshire", value: "NH" },
    { label: "New Jersey", value: "NJ" },
    { label: "New Mexico", value: "NM" },
    { label: "New York", value: "NY" },
    { label: "North Carolina", value: "NC" },
    { label: "North Dakota", value: "ND" },
    { label: "Ohio", value: "OH" },
    { label: "Oklahoma", value: "OK" },
    { label: "Oregon", value: "OR" },
    { label: "Pennsylvania", value: "PA" },
    { label: "Puerto Rico", value: "PR" },
    { label: "Rhode Island", value: "RI" },
    { label: "South Carolina", value: "SC" },
    { label: "South Dakota", value: "SD" },
    { label: "Tennessee", value: "TN" },
    { label: "Texas", value: "TX" },
    { label: "Utah", value: "UT" },
    { label: "Vermont", value: "VT" },
    { label: "Washington", value: "WA" },
    { label: "West Virginia", value: "WV" },
    { label: "Wisconsin", value: "WI" },
    { label: "Wyoming", value: "WY" },
  ];

  const onSubmit = (event) => {
    event.preventDefault();

    const formData = {
      retFirstName,
      retLastName,
      retEmail,
      retPhoneNumber,
      licState,
      stateLicNo,
      coName,
      retAdditionalInfo,
    };

    Axios.post(`${API}/retailer`, formData).then((response) => {
      if (response.data.success) {
        alert(formData + " Successfully submitted.");
        Router.replace("/");
      } else {
        alert("Sorry.  Failed to submit form");
      }
    });
  };

  return (
    <div>
      <form onSubmit={onSubmit}>
        <h2>
          <b
            style={{
              color: "#8d54b5",
            }}
          >
            RETAILER CONTACT FORM
          </b>
        </h2>
        <div>
          <img src="../../static/images/mildiscowl.png" width="175px"></img>
        </div>
        <h4>
          <em
            style={{
              color: "black",
              fontWeight: "600",
              fontSize: ".96rem",
            }}
          >
            Fill out form to learn more
          </em>
        </h4>

        <hr></hr>
        <div>
          <label
            style={{
              marginTop: "20px",
              marginRight: 3,
              color: "black",
              fontWeight: "600",
              fontSize: ".90rem",
            }}
          >
            Company Name of DBA (if applicable){" "}
          </label>
          <input
            style={{
              border: "solid #383838 .75px",
              borderRadius: 5,
              marginLeft: 5,
              marginRight: 3,
              paddingLeft: 8,
              width: "75%",
            }}
            value={coName}
            onChange={(e) => setCoName(e.target.value)}
            placeholder="Company Name"
            type="text"
            name="coName"
            required
          />
        </div>
        <hr></hr>
        <div>
          <label
            style={{
              marginTop: "20px",
              marginRight: 3,
              color: "black",
              fontWeight: "600",
              fontSize: ".90rem",
              width: "100%",
            }}
          >
            Contact Information{" "}
          </label>
          <input
            style={{
              border: "solid #383838 .75px",
              borderRadius: 5,
              marginLeft: 5,
              marginRight: 3,
              paddingLeft: 8,
            }}
            value={retFirstName}
            onChange={(e) => setRetFirstName(e.target.value)}
            placeholder="First name"
            type="text"
            name="First Name"
            required
          />

          <input
            style={{
              borderRadius: 5,
              border: "solid #383838 .75px",
              paddingLeft: 8,
            }}
            value={retLastName}
            onChange={(e) => setRetLastName(e.target.value)}
            placeholder="Last name"
            type="text"
            name="Last Name"
            required
          />

          <input
            style={{
              borderRadius: 5,
              margin: 5,
              border: "solid #383838 .75px",
              paddingLeft: 8,
            }}
            value={retEmail}
            onChange={(e) => setRetEmail(e.target.value)}
            placeholder="Email address"
            type="email"
            name="email"
            required
          />
          <label
            style={{
              marginTop: "10px",
              marginRight: 3,
              color: "black",
              fontWeight: "600",
              fontSize: ".90rem",
              width: "100%",
            }}
          >
            Contact Number{" "}
          </label>
          <input
            style={{
              borderRadius: 5,
              margin: 5,
              border: "solid #383838 .75px",
              paddingLeft: 8,
            }}
            value={retPhoneNumber}
            onChange={(e) => setRetPhoneNumber(e.target.value)}
            placeholder="ex: 555-555-5555"
            type="text"
            name="Phone Number"
            required
          />
        </div>
        <br></br>
        <hr></hr>

        <div>
          <label
            style={{
              marginTop: "20px",
              marginRight: 3,
              color: "black",
              fontWeight: "600",
              fontSize: ".90rem",
            }}
          >
            State(s) Where You Possess Alchohol Licenses{" "}
          </label>
          {/* <pre>{JSON.stringify(licState)}</pre> */}
          <MultiSelect
            options={options}
            value={licState}
            placeholder={"Select all that apply"}
            onChange={setLicState}
            labelledBy={"Select"}
          />
        </div>

        <label
          style={{
            marginTop: "20px",
            marginRight: 3,
            color: "black",
            fontWeight: "600",
            fontSize: ".90rem",
          }}
        >
          State License Number{" "}
        </label>
        <input
          style={{
            border: "solid #383838 .75px",
            borderRadius: 5,
            margin: 5,
            paddingLeft: 8,
          }}
          value={stateLicNo}
          onChange={(e) => setStateLicNo(e.target.value)}
          placeholder="State License Number"
          type="text"
          name="stateLicNumber"
          required
        />
        <br />
        <label
          style={{
            marginTop: "20px",
            marginRight: 3,
            color: "black",
            fontWeight: "600",
            fontSize: ".90rem",
          }}
        >
          Comment or Message{" "}
        </label>
        <textarea
          style={{
            border: "solid #383838 .75px",
            marginTop: "",
            width: "100%",
            height: 200,
            borderRadius: 5,
          }}
          value={retAdditionalInfo}
          onChange={(e) => setRetAdditionalInfo(e.target.value)}
          // placeholder="Tell Us More!"
          type="text"
          name="additionalInfo"
        />
        <br></br>
        <button
          type="submit"
          style={{ marginTop: 50 }}
          className="btn btn-warning"
          onClick={onSubmit}
        >
          Submit
        </button>
      </form>
    </div>
  );
}
