import styled from 'styled-components/native';

const Container = styled.SafeAreaView`
  flex: 1;
  background-color: #ffffff;
`;

const ListContainer = styled.View`
  flex: 1;
  flex-direction: row;
  justify-content: space-between;
  padding-horizontal: 20px;
`;

const Text = styled.Text`
  font-size: 14px;
  color: black;
  margin-vertical: 5px;
`;

export {Container, ListContainer, Text};
