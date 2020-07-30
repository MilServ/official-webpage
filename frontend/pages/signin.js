import Layout from "../components/Layout";
import SigninComponent from "../components/auth/SigninComponent";

const Signin = () => {
  return (
    <Layout>
      <div className="signinPage">
        <div className="row pl-3 pr-3">
          <div className="col-md-12">
            <SigninComponent />
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Signin;
