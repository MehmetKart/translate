import React, {useState} from 'react';
import {SafeAreaView} from 'react-native';
import Input from '../../components/Input';
import Button from '../../components/Button';

const Home = () => {
  const [text, setText] = useState('');
  return (
    <SafeAreaView>
      <Input
        value={text}
        placeholder="İngilizce"
        onChangeText={value => setText(value)}
      />

      <Button text={'Çevir'} bgColor={'#45b6fe'} />
    </SafeAreaView>
  );
};

export default Home;
