import React from "react";
import PropTypes from "prop-types";
import Link from "gatsby-link";

const SideBar = ({ tags, parentClass, stateTags, clickHandler }) => (
  <div className={`${parentClass}__tags`}>
    <p className={`${parentClass}__tags--nonLink`}>Tags:</p>
    {tags.map(tag => (
      <p
        key={tag}
        onClick={() => clickHandler(tag)}
        className={stateTags.includes(tag) ? "selected" : ""}
      >
        {tag}
      </p>
    ))}
  </div>
);

Tags.propTypes = {
    tags: PropTypes.arrayOf(PropTypes.string),
    parentClass: PropTypes.string,
    clickHandler: PropTypes.func,
    stateTags: PropTypes.arrayOf(PropTypes.string)
};

export default SideBar;
