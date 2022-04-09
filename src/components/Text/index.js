import React from 'react';
import {Text} from './styles';
import PropTypes from 'prop-types';

const CustomText = ({text, size, color}) => {
  return (
    <Text size={size} color={color}>
      {text}
    </Text>
  );
};

CustomText.propTypes = {
  text: PropTypes.string,
  size: PropTypes.string,
  color: PropTypes.string,
};

export default CustomText;
