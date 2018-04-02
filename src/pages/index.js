import React from 'react';
import PropTypes from 'prop-types';
import Link from 'gatsby-link';
import { kebabCase, uniq, flatMap, xor} from 'lodash'
require('../style/index.scss');

export default class IndexPage extends React.Component {
  modifyTags(tag) {
    const tagsArray = xor(this.state.tags, [tag]);
    this.setState({
      tags: tagsArray
    })
  }

  constructor(props){
    super(props);
      this.state = {
        tags: []
    }
  }

  render() {
    const { data } = this.props;
    const { edges: posts } = data.allMarkdownRemark;
    const tags = uniq(flatMap(posts, post => post.node.frontmatter.tags));
    return (
      <section className="index">
        <div className="index__tags">
        <p className="index__tags--nonLink">Tags:</p>
          {tags.map(tag => (
          <p key={tag}
            onClick={() =>this.modifyTags(tag)}
            className={this.state.tags.includes(tag) ? 'selected' : ''}
          >
          {tag}</p>
          ))}
        </div>
          {posts
            .filter(post =>  {
              const tags = post.node.frontmatter.tags;
              return this.state.tags.length > 0 ? 
                 post.node.frontmatter && tags.some(tag => this.state.tags.includes(tag))
                : true
            })
            .map(({ node: post }) => (
              <Link className="card" to={post.fields.slug} key={post.id}>
                <img src={post.frontmatter.images[0].image} />
                  <div className="card__info">
                    <h3>
                        {post.frontmatter.title}
                    </h3>
                    <p>
                      {post.frontmatter.blurb || post.excerpt}
                    </p>
                  </div>
              </Link>
            ))}
      </section>
    )
  }
}

IndexPage.propTypes = {
  data: PropTypes.shape({
    allMarkdownRemark: PropTypes.shape({
      edges: PropTypes.array,
    }),
  }),
}

export const pageQuery = graphql`
  query IndexQuery($templateKey: String = "recipe-post", $category: String, $tags: [String]){
    allMarkdownRemark(
      sort: { order: DESC, fields: [frontmatter___date]},
      filter: {
        frontmatter: { templateKey: { eq: $templateKey },
        category: { eq: $category },
        tags: { in: $tags } }
      }
      ){
      edges {
        node {
          excerpt(pruneLength: 60)
          id
          fields {
            slug
          }
          frontmatter{
            images {
              image
            }
            tags
            title
            templateKey
            date(formatString: "MMMM DD, YYYY")
            blurb
            category
          }
        }
      }
    }
  }
`
