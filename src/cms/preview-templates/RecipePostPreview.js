import React from 'react';
import PropTypes from 'prop-types';
import { RecipePostTemplate } from '../../templates/recipe-post';

const RecipePostPreview = ({ entry, widgetFor }) => {
    const entryImages = entry.getIn(['data', 'images']);
    const images = entryImages ? entryImages.toJS() : [];
    return (
    <RecipePostTemplate
        body={widgetFor('body')}
        tags={entry.getIn(['data', 'tags'])}
        title={entry.getIn(['data', 'title'])}
        ingredients={ entry.getIn(['data', 'ingredients'])}
        prepTime={entry.getIn(['data', 'prepTime'])}
        cookTime={entry.getIn(['data', 'cookTime'])}
        serves={entry.getIn(['data', 'serves'])}
        images={images}
  />
)};

RecipePostPreview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func
  }),
  widgetFor: PropTypes.func
};

export default RecipePostPreview;
