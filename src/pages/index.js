import React from 'react';
import PropTypes from 'prop-types';
import Link from 'gatsby-link';
import { kebabCase, uniq, flatMap} from 'lodash'
require('../style/index.scss');

export default class IndexPage extends React.Component {
  render() {
    const { data } = this.props;
    const { edges: posts } = data.allMarkdownRemark;
    const tags = uniq(flatMap(posts, post => post.node.frontmatter.tags));
    return (
      <section className="index">
        <div className="index__tags">
        <p><span>Tags: </span></p>
          {tags.map(tag => (
          <p key={tag}><Link to={`/tags/${kebabCase(tag)}/`}>{tag}</Link></p>
          ))}
        </div>
          {posts
            .map(({ node: post }) => (
              <Link className="card" to={post.fields.slug} key={post.id}>
                <img src={post.frontmatter.images[0].image} />
                  <div className="card__info">
                    <h3>
                        {post.frontmatter.title}
                    </h3>
                    <p>
                      {post.excerpt}
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
  query IndexQuery($templateKey: String = "recipe-post"){
    allMarkdownRemark(
      sort: { order: DESC, fields: [frontmatter___date]},
      filter: {
        frontmatter: { templateKey: { eq: $templateKey } }
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
          }
        }
      }
    }
  }
`
