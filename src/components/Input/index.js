import React from 'react';
import {CustomInput} from './styles';
import PropTypes from 'prop-types';

const Input = ({placeholder, onChangeText, value}) => {
  return (
    <CustomInput
      placeholder={placeholder}
      value={value}
      onChangeText={onChangeText}
    />
  );
};

Input.propTypes = {
  placeholder: PropTypes.string,
  onChangeText: PropTypes.func,
  value: PropTypes.string,
};

export default Input;
