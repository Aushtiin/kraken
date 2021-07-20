import React from 'react';
import PropTypes from 'prop-types';
import './Tag.scss';

const Tag = (props) => {
  return (
    <div className={`tag ${props.class} ${props.active ? 'active' : 'inactive'}`}>
      <span>{props.name}</span>
    </div>
  )
}

Tag.propTypes = {
  name: PropTypes.string,
  class: PropTypes.string,
  active: PropTypes.bool
}

export default Tag
