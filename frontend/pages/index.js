import Layout from "../components/Layout";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTruck } from "@fortawesome/free-solid-svg-icons";
import LandingCardsOne from "../components/LandingCards/LandingCardsOne";
import LandingCardsTwo from "../components/LandingCards/LandingCardsTwo";
import LandingCardsThree from "../components/LandingCards/LandingCardsThree";
import LandingCardsFour from "../components/LandingCards/LandingCardsFour";
import Blogs from "./blogs";

const Index = () => {
  return (
    <Layout>
      <section className="landingTop ml-0 pl-0">
        <div className="row centered">
          <h1 className="landing-cta" id="landing-cta">
            YOUR SOLUTION FOR ALCOHOL DELIVERIES
          </h1>
          <a href="/about">
            <button className="btn learnMoreBtn ml-1">
              <FontAwesomeIcon icon={faTruck} /> Learn More
            </button>
          </a>
        </div>
      </section>
      <section style={{ paddingBottom: 20 }}>
        <div className="row program-your-career pt-3 pb-4">
          <h2 className="program">
            <b style={{ color: "#383838", fontWeight: "9" }}>OUR PURPOSE</b>
          </h2>
        </div>
        <div className="row pl-3 pr-3">
          <div className="col-md-3 col-left">
            <img
              className="text-center"
              src={"../static/images/owllogo.jpg"}
              width="80%"
              height="80%"
              style={{
                position: "absolute",
                top: "50%",
                msTransform: "translateX(-50%)",
                transform: "translateY(-50%)",
              }}
            ></img>
          </div>
          <div
            className="col-md-8 mb-2 aboutSections"
            style={{
              backgroundColor: "goldenrod",
              padding: 30,
            }}
          >
            <h2>MilServ Supports Those Who Serve</h2>
            <p style={{ fontSize: "1.35rem" }}>
              Our mission is to use the delivery of alcohol products in the US
              to create business opportunities, jobs, and distributable benefits
              for veterans, their families, and the non-government organizations
              (NGOs) that support them.
            </p>
          </div>
        </div>
      </section>
      <section className="landingSectionTwo text-center">
        <div className="row program-your-career pt-3 pb-4">
          <h2 className="program">
            <b style={{ color: "#383838", fontWeight: "9" }}>OUR PARTNERS</b>
          </h2>
        </div>
        <div className="row program-your-career pl-3 pr-3">
          <div className="col-md-3 mb-2 col-left">
            <a href="/veteran-jobs">
              <LandingCardsOne />
            </a>
          </div>
          <div className="col-md-3 mb-2 col-middle">
            <a href="/retailers">
              <LandingCardsTwo />
            </a>
          </div>
          <div className="col-md-3 mb-2 col-right">
            <a href="/distributors">
              <LandingCardsThree />
            </a>
          </div>
          <div className="col-md-3 mb-2 col-right" id="partner">
            <LandingCardsFour />
          </div>
        </div>
      </section>
      <section style={{ paddingBottom: 20 }}>
        <div className="row program-your-career pt-3 pb-4">
          <h2 className="program">
            <b style={{ color: "#383838", fontWeight: "9" }}>PARTNER WITH US</b>
          </h2>
        </div>
        <div className="row pl-3 pr-3">
          <div
            className="col-md-8 mb-2 aboutSections"
            style={{
              backgroundColor: "goldenrod",
              padding: 30,
            }}
          >
            <p style={{ fontSize: "1.35rem" }}>
              Through a commitment to employ, contract, and benefit military
              service-members and their families, MilServ ACD adds value to the
              craft community while sharing the rewards with local
              service-members in need.
            </p>
            <p style={{ fontSize: "1.35rem" }}>
              Partner with us today! Learn more by clicking on your partner
              category below.
            </p>
            <div className="pt-3">
              <ul id="horizontal-list">
                <li className="pr-2">
                  <a href="/veteran-jobs">
                    {" "}
                    <button className="btn btn-danger">Veterans</button>
                  </a>
                </li>

                <li className="pr-2">
                  <a href="retailers">
                    <button className="btn btn-danger">Retailers</button>
                  </a>
                </li>
                <li className="pr-2">
                  <a href="distributors">
                    <button className="btn btn-danger">Distributors</button>
                  </a>
                </li>
                <li className="pr-2">
                  <a href="makers">
                    {" "}
                    <button className="btn btn-danger">Makers</button>
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-md-4 mb-2 col-left">
            <img
              className="text-center"
              src={"../static/images/servingthose.jpg"}
              width="100%"
              height="100%"
            ></img>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Index;
