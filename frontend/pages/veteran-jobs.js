import Layout from "../components/Layout";
import VetSignUpForm from "../components/partners-veterans/VetSignUpForm";
import VetVideoCard from "../components/partners-veterans/VetVideoCard";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowAltCircleLeft,
  faFlagUsa,
} from "@fortawesome/free-solid-svg-icons";

const VeteranJobs = () => {
  return (
    <Layout>
      <section className="aboutPage ml-0 pl-0">
        <div className="row">
          <div className="col-md-3">
            <a href="/">
              <p
                style={{
                  color: "white",
                  paddingLeft: "60px",
                  paddingTop: "100px",
                }}
              >
                <span>
                  <FontAwesomeIcon icon={faArrowAltCircleLeft} />
                </span>{" "}
                Back Home
              </p>
            </a>
          </div>
        </div>

        <div
          className="row"
          style={{ height: "320px", paddingTop: "30px", paddingLeft: "60px" }}
        >
          <div className="col-md-3">
            <h2 className="landing-cta about-header" id="landing-cta">
              JOBS FOR VETERANS
            </h2>
            <div style={{ display: "block" }}>
              <FontAwesomeIcon
                icon={faFlagUsa}
                style={{
                  fontSize: "8rem",
                  marginTop: 20,
                  color: "white",
                  padding: 20,
                  borderRadius: 10,
                  backgroundColor: "rgba(0,0,0,0.5)",
                }}
              />
            </div>
          </div>
        </div>
      </section>
      <section className="aboutSectionTwo ml-0">
        {" "}
        <div className="row">
          <div
            className="col-md-6 aboutSections"
            style={{ backgroundColor: "goldenrod", paddingTop: 50 }}
          >
            <VetVideoCard />
          </div>
          <div
            className="col-md-6 aboutSections"
            style={{ backgroundColor: "whitesmoke", paddingTop: 50 }}
          >
            <VetSignUpForm />
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default VeteranJobs;
