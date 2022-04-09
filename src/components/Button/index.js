import React from 'react';
import {Button, ButtonText} from './styles';
import PropTypes from 'prop-types';

const CustomButton = ({text, onClick, bgColor}) => {
  return (
    <Button onPress={onClick} bgColor={bgColor}>
      <ButtonText>{text}</ButtonText>
    </Button>
  );
};

CustomButton.propTypes = {
  text: PropTypes.string,
  onClick: PropTypes.func,
  bgColor: PropTypes.string,
};

export default CustomButton;
