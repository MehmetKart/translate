import React from 'react';
import {CustomInput} from './styles';
import PropTypes from 'prop-types';

const Input = ({placeholder, onChangeText}) => {
  return <CustomInput placeholder={placeholder} onChangeText={onChangeText} />;
};

Input.propTypes = {
  placeholder: PropTypes.string,
  onChangeText: PropTypes.func,
};

export default Input;
