import React from 'react';
import PropTypes from 'prop-types';
import { Title } from './Section.styled';

export const Section = ({ children, title = '' }) => {
  return (
    <div>
      <Title>{title}</Title>
      <div>{children}</div>
    </div>
  );
};

Section.propTypes = {
  children: PropTypes.object.isRequired,
  title: PropTypes.string.isRequired,
};
