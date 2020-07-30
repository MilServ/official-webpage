import Layout from "../../components/Layout";
import Admin from "../../components/auth/Admin";
import Link from "next/link";
import BlogCard from "../../components/StaffPortal/BlogCard";
import ManageCard from "../../components/StaffPortal/ManageCard";
import CreateCard from "../../components/StaffPortal/CreateCard";
import VeteranCard from "../../components/StaffPortal/VeteranCard";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowAltCircleLeft } from "@fortawesome/free-solid-svg-icons";

const AdminIndex = () => {
  return (
    <Layout>
      <Admin>
        <section className="staffPage ml-0 pl-0">
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
            style={{ height: "180px", paddingTop: "30px", paddingLeft: "60px" }}
          >
            <div className="col-md-5">
              <h2 className="landing-cta about-header" id="landing-cta">
                STAFF DASHBOARD
              </h2>
            </div>
          </div>

          <div className="row staff-portal-row text-center justify-content-center">
            <div className="col-md-3 staff-portal-cols mb-3">
              <ManageCard />
            </div>

            <div className="col-md-3 staff-portal-cols mb-3">
              <BlogCard />
            </div>

            <div className="col-md-3 staff-portal-cols mb-3">
              <VeteranCard />
            </div>
          </div>
        </section>
      </Admin>
    </Layout>
  );
};

export default AdminIndex;
