import Layout from "../../components/Layout";
import Admin from "../../components/auth/Admin";
import BlogCreate from "../../components/crud/BlogCreate";
import Link from "next/link";

const Blog = () => {
  return (
    <Layout>
      <Admin>
        <div className="container-fluid">
          <div className="row">
            <div className="col-md-12 pt-5 pb-5 mt-4 pl-4">
              <h2 style={{ marginTop: 50, color: "#8d54b5" }}>
                Write new blog or press release
              </h2>
            </div>
            <div className="col-md-12">
              <BlogCreate />
            </div>
          </div>
        </div>
      </Admin>
    </Layout>
  );
};

export default Blog;
