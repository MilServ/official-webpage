import Link from "next/link";
import { API } from "../../config";
import renderHTML from "react-render-html";
import moment from "moment";

const Card = ({ blog }) => {
  const showBlogCategories = (blog) =>
    blog.categories.map((c, i) => (
      <Link key={i} href={`/categories/${c.slug}`}>
        <a className="btn btn-outline-info btn-sm mr-1 mt-3">{c.name}</a>
      </Link>
    ));

  const showBlogTags = (blog) =>
    blog.tags.map((t, i) => (
      <Link key={i} href={`/tags/${t.slug}`}>
        <a className="btn btn-outline-danger btn-sm mr-1 ml-1 mt-3">{t.name}</a>
      </Link>
    ));

  return (
    <div>
      <div className="row">
        <div className="col-md-2 pt-2">
          <section>
            <img
              className="img img-fluid"
              style={{ maxHeight: "150px", width: "auto" }}
              src={`${API}/blog/photo/${blog.slug}`}
              alt={blog.title}
            />
          </section>
        </div>
        <div className="col-md-8">
          <section>
            <header>
              <Link href={`/blogs/${blog.slug}`}>
                <a>
                  <h2 className="font-weight-bold text-dark">{blog.title}</h2>
                </a>
              </Link>
              <section>
                <p className="pb-2 mark pl-2">
                  Written by {blog.postedBy.name} | Published{" "}
                  {moment(blog.updatedAt).fromNow()}
                </p>
              </section>
            </header>
            <div className="excerpt">{renderHTML(blog.excerpt)}</div>
            <Link href={`/blogs/${blog.slug}`}>
              <a
                className="btn btn-light pt-1 pb-1 mb-1"
                style={{ fontSize: ".65rem", fontWeight: "600" }}
              >
                Read more
              </a>
            </Link>
          </section>
          <div className="row pl-3 pb-3 text-center">
            <br />
            <section style={{ display: "inline-block" }}>
              {showBlogCategories(blog)}
            </section>

            <section style={{ display: "inline-block" }}>
              {showBlogTags(blog)}
            </section>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
