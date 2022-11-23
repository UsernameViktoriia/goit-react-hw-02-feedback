import React from 'react';
import PropTypes from 'prop-types';
import { Button, ButtonWrapper } from './FeedbackOptions.styled';

export const FeedbackOptions = ({ options = [], onLeaveFeedback = 0 }) => {
  return (
    <ButtonWrapper>
      {options.map(el => {
        return (
          <div key={el}>
            <Button type="button" onClick={() => onLeaveFeedback(el)}>
              {el}
            </Button>
          </div>
        );
      })}
    </ButtonWrapper>
  );
};

FeedbackOptions.propTypes = {
  options: PropTypes.array.isRequired,
  onLeaveFeedback: PropTypes.func.isRequired,
};
