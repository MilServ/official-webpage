import Layout from "../components/Layout";
import SignupComponent from "../components/auth/SignupComponent";

const Signup = () => {
  return (
    <Layout>
      <div className="signinPage">
        <div className="row pl-3 pr-3">
          <div className="col-md-12">
            <SignupComponent />
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Signup;
