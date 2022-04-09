import React, {useState} from 'react';
import {SafeAreaView} from 'react-native';
import Input from '../../components/Input';

const Home = () => {
  const [text, setText] = useState('');
  return (
    <SafeAreaView>
      <Input
        value={text}
        placeholder="İngilizce"
        onChangeText={value => setText(value)}
      />
    </SafeAreaView>
  );
};

export default Home;
