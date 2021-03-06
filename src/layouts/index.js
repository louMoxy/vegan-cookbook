import React from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';
import Navbar from '../components/Navbar';
import '../style/root.scss';

const TemplateWrapper = ({ children }) => (
  <div>
    <Helmet title="Vegan Cookbook | Easy recipes without the long blog" />
    <Navbar children />
    <div className="content">{children()}
    </div>
  </div>
)

TemplateWrapper.propTypes = {
  children: PropTypes.func,
}

export default TemplateWrapper
