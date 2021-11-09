import WPAPI from "wpapi";
import React, { Component } from "react";
import Layout from "../components/Layout";
import Config from "../config";
import { getData } from "../utils";
import Link from "next/link";
import moment from "moment";
import Disqus from "disqus-react";

const wp = new WPAPI({ endpoint: Config.apiUrl });

class Blog extends Component {
  static async getInitialProps() {
    const posts = await wp
      .posts()
      .category(2)
      .perPage(40)
      .embed();

    const blogCategories = await wp
      .categories()
      .parent(2)
      .perPage(15)
      .embed();

    return { posts, blogCategories };
  }

  renderCategory = (categories) => {
    const cat = categories.map((cat) => cat.id);

    return `isotop-item ${cat.join(" ")}`;
  };

  render() {
    const { posts, blogCategories } = this.props;

    return (
      <Layout>
        <div className="our-blog blog-filer mb-150">
          <div className="blog-filter-title">
            <p className="upper-title">Блог</p>
            <h2 className="main-title">
              Бидний тухай мэдээ, мэдээлэл
              <br /> бүрийг эндээс
            </h2>
          </div>

          <ul className="isotop-menu-wrapper blog-filter-nav clearfix">
            <li className="is-checked" data-filter="*">
              <span>Бүгд</span>
            </li>
            {blogCategories.map((cat) => (
              <li key={cat.id} data-filter={`.${cat.id}`}>
                <span>{cat.name}</span>
              </li>
            ))}
          </ul>

          <div className="masnory-blog-wrapper">
            <div className="grid-sizer"></div>
            {posts.map((post) => {
              let url = "";
              if (process.browser) {
                url = window.location.href;
              }

              const disqusShortname = "erxes";
              const disqusConfig = {
                url,
                identifier: post.id,
                title: post.title.rendered,
              };

              return (
                <div
                  key={post.id}
                  className={this.renderCategory(
                    getData(post._embedded, "categories")
                  )}
                >
                  <div className="single-blog-post">
                    <div className="img-holder">
                      <img src={getData(post._embedded, "image")} alt="" />
                    </div>
                    <div className="post-data blog-home">
                      <span className="date">
                        {moment(post.date).format("L")}
                      </span>
                      <span className="date">
                        <Disqus.CommentCount
                          shortname={disqusShortname}
                          config={disqusConfig}
                        >
                          Cэтгэгдэл
                        </Disqus.CommentCount>
                      </span>
                      <h5 className="blog-title-one title">
                        <Link href={"blog-detail?slug=/" + post.slug}>
                          <a>{post.title.rendered}</a>
                        </Link>
                      </h5>
                      <div
                        dangerouslySetInnerHTML={{
                          __html: post.excerpt.rendered.slice(0, 150),
                        }}
                      />
                      <Link href={"blog/" + post.slug}>
                        <a className="read-more">
                          <i className="flaticon-next-1"></i>
                        </a>
                      </Link>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </Layout>
    );
  }
}

export default Blog;
