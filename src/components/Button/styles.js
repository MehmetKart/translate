import styled from 'styled-components/native';

const Button = styled.TouchableOpacity`
  height: 50px;
  border-radius: 5px;
  background-color: ${props => props.bgColor || '#242424'};
  margin: 20px;
  justify-content: center;
  align-items: center;
`;

const ButtonText = styled.Text`
  color: #fff;
  font-size: 20px;
`;

export {Button, ButtonText};
