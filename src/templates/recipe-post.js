import React from 'react'
import PropTypes from 'prop-types'
import { kebabCase } from 'lodash'
import Helmet from 'react-helmet'
import Link from 'gatsby-link'
import Content, { HTMLContent } from '../components/Content'
require('../style/recipe.scss');

export const RecipePostTemplate = ({
  contentComponent,
  tags,
  title,
  helmet,
  body,
  ingredients,
  prepTime,
  cookTime,
  serves,
  images
}) => {
  const PostContent = contentComponent || Content;
  return (
    <section className="recipe">
      {helmet || ''}
      <h1 className="recipe__title">
        {title}
      </h1>
      <div className="recipe__container">
        <h3>List of Ingredients</h3>
          <div className="recipe__ingredients">
            {ingredients.map( (ingredient, index) => (
              <p key={index}>{ingredient}</p>
            ))}
            {ingredients.length % 2 !==0 ? <p className="empty"></p> : null}
          </div>
          <h3>Method</h3>
          <div className="recipe__method">
            <PostContent content={body} />
          </div>
          <div className="recipe__info">
            <p><span>Cook Time: </span>{cookTime}</p>
            <p><span>Serves: </span>{serves}</p>
            <p><span>Prep Time: </span>{prepTime}</p>
            <p className="empty"></p>
          </div>
      </div>
            {/* {tags && tags.length ? (
              <div>
                <h4>Tags</h4>
                <ul className="taglist">
                  {tags.map(tag => (
                    <li key={tag + `tag`}>
                      <Link to={`/tags/${kebabCase(tag)}/`}>{tag}</Link>
                    </li>
                  ))}
                </ul>
              </div>
            ) : null} */}
        <div className="recipe__image">
          {images.map( (img, index) => (
              <div key={index}>
                <img src={img.image} alt={img.alt}/>
              </div>
            ))}
        </div>
    </section>
  )
}

RecipePostTemplate.propTypes = {
  contentComponent: PropTypes.func,
  title: PropTypes.string,
  helmet: PropTypes.instanceOf(Helmet),
  tags: PropTypes.array,
  body: PropTypes.string,
  ingredients: PropTypes.array,
  prepTime: PropTypes.string,
  cookTime: PropTypes.string,
  serves: PropTypes.string,
  images: PropTypes.array
}

const RecipePost = ({ data }) => {
  const { markdownRemark: post } = data;
  return (
    <RecipePostTemplate
      contentComponent={HTMLContent}
      helmet={<Helmet title={`${post.frontmatter.title} | Recipe`} />}
      tags={post.frontmatter.tags}
      title={post.frontmatter.title}
      body={post.html}
      ingredients={post.frontmatter.ingredients}
      prepTime={post.frontmatter.prepTime}
      cookTime={post.frontmatter.cookTime}
      serves={post.frontmatter.serves}
      images={post.frontmatter.images}
    />
  )
}

RecipePost.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.object,
  }),
}

export default RecipePost;

export const pageQuery = graphql`
  query RecipePostByID($id: String!) {
    markdownRemark(id: { eq: $id }) {
      id
      html
      frontmatter {
        title
        tags
        ingredients
        prepTime
        cookTime
        serves
        images {
          image
          alt
          imgSize
      	}
      }
    }
  }
`
