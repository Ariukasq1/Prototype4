import WPAPI from 'wpapi';
import React, { Component } from 'react';
import Layout from '../components/Layout';
import Config from "../config";
import { getData } from "../utils"

const wp = new WPAPI({ endpoint: Config.apiUrl });

class SuccessStory extends Component {
  static async getInitialProps() {
    const categories = await wp
      .categories()
      .parent(8)
      .embed();

    const posts = await wp
      .posts()
      .category(8)
      .perPage(40)
      .embed();

    return { categories, posts };
	}

  renderCategory = (categories) => {
    const cat = categories.map(cat => cat.slug);

    return (cat).join(' ');
  }

  renderContent = (post) => {
    const hasContent = post.content.rendered.length > 0 ? "success-story/" + post.slug : "#";

    return (
      <div key={post.id} className={`isotop-item ${this.renderCategory(getData(post._embedded, 'categories'))}`}>
        <div className="project-item">
          <div className="img-box"><img src={getData(post._embedded, 'image')} alt=""/></div>
          <div className="hover-jojo">
            <div>
              <h4 className="title"><a href={hasContent}>{post.title.rendered}</a></h4>
              <div dangerouslySetInnerHTML={{ __html: post.excerpt.rendered }}/>
              <ul>
                <li><a href={hasContent}><span>+</span></a></li>
                <li><a href={getData(post._embedded, 'image')} className="zoom fancybox" data-fancybox="gallery"><i className="fa fa-search" aria-hidden="true"></i></a></li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    );
  }

  render() {
    const { posts, categories } = this.props;

    return (
      <Layout>
        <div className="solid-inner-banner">
          <div className="banner-overlay" />
          <h2 className="page-title">Амжилтын Түүх</h2>
        </div>
        <div className="our-project pt-90">
          <ul className="isotop-menu-wrapper pb-100">
            <li className="is-checked" data-filter="*">Бүгд</li>
            {categories.map(category => (
              <li key={category.id} data-filter={`.${category.slug}`}>{category.name}</li>
            ))}
          </ul>

          <div id="isotop-gallery-wrapper">
            <div className="grid-sizer"></div>
            {posts.map(post => this.renderContent(post))}
          </div>
        </div>
      </Layout>
    )
  }
}

export default SuccessStory;
