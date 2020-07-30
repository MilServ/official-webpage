import Head from "next/head";
import Link from "next/link";
import { withRouter } from "next/router";
import Layout from "../../components/Layout";
import { useState } from "react";
import { listBlogsWithCategoriesAndTags } from "../../actions/blog";
import Card from "../../components/blog/Card";
import { API, DOMAIN, APP_NAME, FB_APP_ID } from "../../config";

const Blogs = ({
  blogs,
  categories,
  tags,
  totalBlogs,
  blogsLimit,
  blogSkip,
  router,
}) => {
  const head = () => (
    <Head>
      <title> Programming Blogs | {APP_NAME} </title>
      <meta
        name="description"
        content="Blogs for connecting, networking, and learning code"
      />

      <link rel="cannonical" href={`${DOMAIN}${router.pathname}`} />
      <meta
        property="og:title"
        content={`Blogs by and for the up and coming dev community | ${APP_NAME}`}
      />

      <meta
        property="og:description"
        content="Blogs for connecting, networking, and learning code"
      />

      <meta property="og:type" content="website" />
      <meta property="og:url" content={`${DOMAIN}${router.pathname}`} />
      <meta property="og:site_name" content={`${APP_NAME}`} />

      <meta
        property="og:image"
        content={`${DOMAIN}/static/images/landing-image.jpg`}
      />
      <meta
        property="og:image:secure_url"
        content={`${DOMAIN}/static/images/landing-image.jpg`}
      />
      <meta property="og:image:type" content="image/jpg" />
      <meta property="fb:app_id" content={`${FB_APP_ID}`} />
    </Head>
  );

  const [limit, setLimit] = useState(blogsLimit);
  const [skip, setSkip] = useState(blogSkip);
  const [size, setSize] = useState(totalBlogs);
  const [loadedBlogs, setLoadedBlogs] = useState([]);

  const loadMore = () => {
    let toSkip = skip + limit;
    listBlogsWithCategoriesAndTags(toSkip, limit).then((data) => {
      if (data.error) {
        console.log(data.error);
      } else {
        setLoadedBlogs([...loadedBlogs, ...data.blogs]);
        setSize(data.size);
        setSkip(toSkip);
      }
    });
  };

  const loadMoreButton = () => {
    return (
      size > 0 &&
      size >= limit && (
        <button onClick={loadMore} className="btn btn-outline-dark btn-sm">
          Load more
        </button>
      )
    );
  };

  const showAllBlogs = () => {
    return blogs.map((blog, i) => {
      return (
        <article key={i}>
          <Card blog={blog} />
          <hr />
        </article>
      );
    });
  };

  const showAllCategories = () => {
    return categories.map((c, i) => (
      <Link href={`/categories/${c.slug}`} key={i}>
        <a className="btn btn-outline-info btn-sm mr-1 ml-1 mt-3">{c.name}</a>
      </Link>
    ));
  };

  const showAllTags = () => {
    return tags.map((t, i) => (
      <Link href={`/tags/${t.slug}`} key={i}>
        <a className="btn btn-outline-danger btn-sm mr-1 ml-1 mt-3">{t.name}</a>
      </Link>
    ));
  };

  const showLoadedBlogs = () => {
    return loadedBlogs.map((blog, i) => (
      <article key={i}>
        <Card blog={blog} />
      </article>
    ));
  };

  return (
    <React.Fragment>
      {head()}
      <Layout>
        <main>
          <div className="container-fluid mt-4 pt-4">
            <header>
              <div className="col-md-12 pt-3 mt-4">
                <h3 className="display-4 text-center">MILSERV NEWS</h3>
              </div>
            </header>
          </div>
          <div className="container-fluid">
            <div
              className="row text-center mt-2 mb-1"
              style={{ paddingTop: "45px", paddingBottom: "90px" }}
            >
              <div className="col-md-6 pb-3">
                <h5 style={{ fontWeight: "400", marginBottom: "0px" }}>
                  categories
                </h5>
                {showAllCategories()}
              </div>

              <div className="col-md-6">
                <h5 style={{ fontWeight: "400", marginBottom: "0px" }}>tags</h5>
                {showAllTags()}
              </div>
            </div>

            <div className="row pl-3">
              <div
                className="col-md-12"
                style={{ borderRight: "solid lightgray 1px" }}
              >
                {showAllBlogs()}
              </div>
              <div
                className="col-md-12"
                style={{ borderRight: "solid lightgray 1px" }}
              >
                {showLoadedBlogs()}
              </div>
              <div
                className="col-md-12 pb-5"
                style={{ borderRight: "solid lightgray 1px" }}
              >
                {loadMoreButton()}
              </div>
            </div>
          </div>
        </main>
      </Layout>
    </React.Fragment>
  );
};

Blogs.getInitialProps = () => {
  let skip = 0;
  let limit = 2;

  return listBlogsWithCategoriesAndTags(skip, limit).then((data) => {
    if (data.error) {
      console.log(data.error);
    } else {
      return {
        blogs: data.blogs,
        categories: data.categories,
        tags: data.tags,
        totalBlogs: data.size,
        blogsLimit: limit,
        blogSkip: skip,
      };
    }
  });
};

export default withRouter(Blogs);
