import React, {useState, useEffect} from 'react';
import {Container, ListContainer, Text} from './styles';
import {FlatList} from 'react-native';
import {getData} from '../../helpers/index';

const History = () => {
  const [historyData, setHistoryData] = useState([]);

  useEffect(() => {
    getHistoryData();
  }, []);

  const getHistoryData = async () => {
    const history = await getData();
    setHistoryData(history);
  };

  const renderItem = ({item}) => {
    return (
      <ListContainer>
        <Text> {item.query} </Text>
        <Text> {item.translated} </Text>
      </ListContainer>
    );
  };

  return (
    <Container>
      <FlatList
        data={historyData}
        renderItem={renderItem}
        keyExtractor={item => item.id}
      />
    </Container>
  );
};

export default History;
