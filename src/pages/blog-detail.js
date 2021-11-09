import Layout from "../components/Layout";
import React, { Component } from "react";
import WPAPI from "wpapi";
import Disqus from "disqus-react";
import Share from "../components/Share";
import Error from "next/error";
import { getData } from "../utils";
import Config from "../config";
import moment from "moment";

const wp = new WPAPI({ endpoint: Config.apiUrl });

export default class extends Component {
  static async getInitialProps(context) {
    const slug = context.query.slug;

    let apiMethod = wp.posts();

    const post = await apiMethod
      .slug(slug)
      .embed()
      .then((data) => {
        return data[0];
      });

    return { post };
  }

  render() {
    const { post } = this.props;

    if (!post.title) {
      return <Error statusCode={404} />;
    }

    let url = "";

    const embeddedData = post._embedded;

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
      <Layout>
        <div className="single">
          <div className="our-blog blog-details blog-details-fg">
            <div className="blog-hero-banner">
              <img src={post.acf.image && post.acf.image} />
              <div className="blog-custom-container">
                <a href="#" className="date">
                  {moment(post.date).format("L")}
                </a>
                <Disqus.CommentCount
                  shortname={disqusShortname}
                  config={disqusConfig}
                >
                  Cэтгэгдэл
                </Disqus.CommentCount>
                <h2 className="blog-title">{post.title.rendered}</h2>
              </div>
            </div>
            <div className="blog-fg-data">
              <div className="post-data">
                <div className="blog-custom-container">
                  <div className="custom-container-bg">
                    <div className="pt-50">
                      <img
                        className="pb-30"
                        src={getData(post._embedded, "image")}
                      />
                      <div
                        dangerouslySetInnerHTML={{
                          __html: post.content.rendered,
                        }}
                      />
                    </div>
                  </div>
                </div>
              </div>

              <div className="blog-custom-container">
                <div className="custom-container-bg">
                  <div className="post-tag-area d-md-flex justify-content-between align-items-center pt-50">
                    <ul className="tags">
                      <li>Ангилал: </li>
                      {getData(post._embedded, "categories").map((cat) => (
                        <li key={cat.id}>
                          <a href="#">{cat.name},</a>
                        </li>
                      ))}
                    </ul>
                    <ul className="share-icon">
                      <Share title={post.title.rendered} path={url} vertical={true} />
                    </ul>
                  </div>
                </div>
              </div>

              <div className="comment-form-area mt-30">
                <div className="blog-custom-container">
                  <div className="custom-container-bg">
                    <Disqus.DiscussionEmbed
                      shortname={disqusShortname}
                      config={disqusConfig}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Layout>
    );
  }
}
