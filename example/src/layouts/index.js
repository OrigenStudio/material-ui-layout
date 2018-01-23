import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'





const TemplateWrapper = ({ children }) => (
  <div>
    <Helmet>
      <meta charSet="utf-8" />
      <title>Demo</title>
    </Helmet>
      {children()}
  </div>
)

TemplateWrapper.propTypes = {
  children: PropTypes.func,
}

export default TemplateWrapper
