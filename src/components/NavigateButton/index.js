import React from 'react';
import {Button, ButtonText} from './styles';
import PropTypes from 'prop-types';

const NavigateButton = ({text, onClick}) => {
  return (
    <Button onPress={onClick}>
      <ButtonText>{text}</ButtonText>
    </Button>
  );
};

NavigateButton.propTypes = {
  text: PropTypes.string,
  onClick: PropTypes.func,
};

export default NavigateButton;
