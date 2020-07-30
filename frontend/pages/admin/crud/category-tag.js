import Layout from "../../../components/Layout";
import Admin from "../../../components/auth/Admin";
import Category from "../../../components/crud/Category";
import Tag from "../../../components/crud/Tag";
import Link from "next/link";

const CategoryTag = () => {
  return (
    <Layout>
      <Admin>
        <div className="container-fluid pl-4" style={{ minHeight: "420Px" }}>
          <div className="row">
            <div className="col-md-12 pt-5 pb-5">
              <h2 className="headers">Manage Categories and Tags</h2>
            </div>
            <div className="col-md-4">
              <Category />
            </div>
            <div className="col-md-4">
              <Tag />
            </div>
          </div>
        </div>
      </Admin>
    </Layout>
  );
};

export default CategoryTag;
