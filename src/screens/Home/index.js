import React, {useEffect, useState} from 'react';
import Input from '../../components/Input';
import Button from '../../components/Button';
import Text from '../../components/Text';
import {Container} from './styles';
import {translateTo} from '../../services';

const Home = () => {
  const [query, setQuery] = useState('');
  const [to, setTo] = useState('en');
  const [from, setFrom] = useState('tr');
  const [translated, setTranslated] = useState('');

  const [placeholder, setPlaceholder] = useState({
    toPlaceholder: 'İngilizce',
    fromPlaceholder: 'Türkçe',
  });

  useEffect(() => {
    translate();
  }, []);

  useEffect(() => {
    setPlaceholder({
      toPlaceholder: to === 'en' ? 'İngilizce' : 'Türkçe',
      fromPlaceholder: from === 'en' ? 'İngilizce' : 'Türkçe',
    });
  }, [to, from]);

  const translate = async () => {
    await translateTo(query, to, from)
      .then(res => {
        if (res && res.data) setTranslated(res.data.translatedText);
      })
      .catch(err => console.log(err));
  };

  const replaceTranslate = () => {
    setTo(to === 'en' ? 'tr' : 'en');
    setFrom(from === 'en' ? 'tr' : 'en');
  };

  return (
    <Container>
      <Input
        value={query}
        placeholder={placeholder.toPlaceholder}
        onChangeText={val => setQuery(val)}
      />

      <Text text={placeholder.fromPlaceholder} size={20} color="blue" />

      {!!translated && <Text text={translated} />}

      <Button text="Çevir" bgColor="#45b6fe" onClick={translate} />

      <Button text="Dili Değiştir" onClick={replaceTranslate} />
    </Container>
  );
};

export default Home;
