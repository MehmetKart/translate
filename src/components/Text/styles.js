import styled from 'styled-components/native';

const Text = styled.Text`
  font-size: ${props => props.size || '20px'};
  text-align: center;
  color: ${props => props.color || 'black'};
  margin-vertical: 5px;
`;

export {Text};
