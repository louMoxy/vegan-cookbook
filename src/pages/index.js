import React from 'react';
import PropTypes from 'prop-types';
import Link from 'gatsby-link';
import { kebabCase, uniq, flatMap, xor, capitalize} from 'lodash';
import RecipeCard from './../components/RecipeCard';
import Tags from './../components/Tags';
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

  postsFilter(post) {
    const tags = post.node.frontmatter.tags;
    const stateTags = this.state.tags;    return stateTags.length > 0 ? 
       post.node.frontmatter && tags.some(tag => stateTags.includes(_.capitalize(tag) ))
      : true
}

  render() {
    const { data } = this.props;
    if(!data.allMarkdownRemark) {return null}
    const { edges: posts } = data.allMarkdownRemark;
    const tags = uniq(flatMap(posts, post => post.node.frontmatter.tags).map(tag => _.capitalize(tag)));
    return (
      <section className="index">
        <Tags 
          tags = {tags}
          parentClass = 'index'
          stateTags = {this.state.tags}
          clickHandler = {this.modifyTags.bind(this)}
        />
          {posts && posts
            .filter(post => this.postsFilter(post))
            .map(({ node: post }) => (
              <RecipeCard post={post} key={post.id}/>
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
  query IndexQuery($templateKey: String = "recipe-post", $category: String){
    allMarkdownRemark(
      sort: { order: DESC, fields: [frontmatter___date]},
      filter: {
        frontmatter: { templateKey: { eq: $templateKey }
        category: { eq: $category }
       }
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
