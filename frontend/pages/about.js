import Layout from "../components/Layout";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowAltCircleLeft } from "@fortawesome/free-solid-svg-icons";
import Biz2Biz from "../components/AboutCards/Biz2Bix";
import Dir2Consumer from "../components/AboutCards/Dir2Consumer";
import VetTraining from "../components/AboutCards/VetTraining";

const About = () => {
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
          style={{ height: "350px", paddingTop: "30px", paddingLeft: "60px" }}
        >
          <div className="col-md-3">
            <h2 className="landing-cta about-header" id="landing-cta">
              ABOUT US
            </h2>
          </div>
        </div>
      </section>
      <section>
        {" "}
        <div className="row staff-portal-row text-center justify-content-center">
          <div className="col-md-3 mt-3 mb-2">
            <h2 style={{ fontWeight: "600", color: "#383838" }}>
              OUR SERVICES
            </h2>
          </div>
          <div className="col-md-3 staff-portal-cols mb-3">
            <Dir2Consumer />
          </div>

          <div className="col-md-3 staff-portal-cols mb-3">
            <Biz2Biz />
          </div>

          <div className="col-md-3 staff-portal-cols mb-3">
            <VetTraining />
          </div>
        </div>
        <div className="row text-center">
          <div
            className="col-md-6 aboutSections"
            style={{ backgroundColor: "darkblue" }}
          >
            <h3>WHO?</h3>
            <p>
              We are current and former military member veterans and their
              families. Our lives and business are built on a foundation of
              service and devotion to a greater good. American Craft Deliveries
              (ACD) MilServe has a mission to ensure every artisan beverage
              maker is provided frontline support for their success. We do this
              on the field, ensuring it’s leveled, for each craft beer, wine,
              and spirit to reach their ever-growing, selective target market
              fresh for the enjoyment of all.
            </p>
          </div>
          <div
            className="col-md-6 aboutSections"
            style={{ backgroundColor: "darkred" }}
          >
            <h3>WHAT?</h3>
            <p>
              ACD MilServe allows small and large brewers alike the ability to
              get their product to a market that is under served. This way they
              can focus on what they do best, make innovative beers for
              passionate beer enthusiasts. No need to created a complicated
              logistics infrastructure, just place your beverage on our
              partner's (ACB) online market platform and let the orders start
              rolling in while we take care of all the deliveries.
            </p>
          </div>
          <div
            className="col-md-6 aboutSections"
            style={{ backgroundColor: "#b19cd9" }}
          >
            <h3>WHY?</h3>
            <p>
              Artisan craft beer, spirits, and wines justly deserve affordable
              and accommodating delivery to retailers and restaurants who serve
              their diverse and discerning consumers. American Craft Delivery
              (ACD) MilServe, using emerging technology, provides efficient,
              expedient, professional business to business (B2B) services. Using
              America's Finest, Veterans and their spouses, we work to ensure
              just-in-time supply of manufacturers' products in the market.
            </p>
          </div>
          <div
            className="col-md-6 aboutSections"
            style={{ backgroundColor: "goldenrod" }}
          >
            <h3>WHERE?</h3>
            <p>
              {" "}
              We started in the quiet towns on Cape Cod MA, but now service all
              of New England and as far as Texas. We plan to be in every state
              within the next 5 years.
            </p>
            <button className="about-where-btn">
              Check if we're in your neck of the woods!
            </button>
          </div>
          <div
            className="col-md-12 aboutSections"
            style={{
              backgroundColor: "#228b22",
              paddingBottom: "2rem",
            }}
          >
            <h3>HOW?</h3>
            <p>
              American Craft Delivery MilServe gets craft beer, spirits, and
              wines delivered fresh using innovative technology, environmentally
              beneficial means, and the best resources America has to offer -
              our veterans and their spouses. Through a commitment to employ,
              contract, and benefit military service-members and their families,
              ACD MilServe adds value to the craft community while sharing the
              rewards with local service-members in need. ACD MilServe is
              committed to making positive long-lasting impact on every
              community, improving the environment, and enhancing the lives of
              military veterans and their families.
            </p>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default About;
