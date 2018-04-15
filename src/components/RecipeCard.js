import React from "react";
import PropTypes from "prop-types";
import Link from "gatsby-link";

const RecipeCard = ({ post }) => (
  <Link className="card" to={post.fields.slug}>
    <img src={post.frontmatter.images[0].image} />
    <div className="card__info">
      <h3>{post.frontmatter.title}</h3>
      <p>{post.frontmatter.blurb || post.excerpt}</p>
    </div>
  </Link>
);

RecipeCard.propTypes = {
  post: PropTypes.objectOf(
    PropTypes.shape({
      excerpt: PropTypes.object,
      fields: PropTypes.objectOf(
        PropTypes.shape({
          slug: PropTypes.string
        })
      ),
      frontmatter: PropTypes.objectOf(
        PropTypes.shape({
          images: PropTypes.array,
          title: PropTypes.string,
          blurb: PropTypes.string
        })
      )
    })
  )
};

export default RecipeCard;
