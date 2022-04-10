import React, {useEffect, useState} from 'react';
import Input from '../../components/Input';
import Button from '../../components/Button';
import Text from '../../components/Text';
import {Container} from './styles';
import {translateTo} from '../../services';
import Voice from '@react-native-voice/voice';
import {storeData} from '../../helpers';

const Home = () => {
  const [query, setQuery] = useState('');
  const [to, setTo] = useState('en');
  const [from, setFrom] = useState('tr');
  const [translated, setTranslated] = useState('');
  const [recordStatus, setRecordStatus] = useState('Başlat');

  const onSpeechStartHandler = () => {};
  const onSpeechEndHandler = () => {};
  const onSpeechResultsHandler = e => {
    setQuery(e.value[0]);
  };

  const [placeholder, setPlaceholder] = useState({
    toPlaceholder: 'İngilizce',
    fromPlaceholder: 'Türkçe',
  });

  useEffect(() => {
    setPlaceholder({
      toPlaceholder: to === 'en' ? 'İngilizce' : 'Türkçe',
      fromPlaceholder: from === 'en' ? 'İngilizce' : 'Türkçe',
    });
  }, [to, from]);

  useEffect(() => {
    setHistory();
  }, [translated]);

  useEffect(() => {
    Voice.onSpeechStart = onSpeechStartHandler;
    Voice.onSpeechEnd = onSpeechEndHandler;
    Voice.onSpeechResults = onSpeechResultsHandler;

    return () => {
      Voice.destroy().then(Voice.removeAllListeners);
    };
  }, []);

  const startRecording = async () => {
    let languageCode = to === 'en' ? 'en-US' : 'tr';
    try {
      setRecordStatus('Durdur');
      await Voice.start(languageCode);
    } catch (err) {
      console.log('error', err);
    }
  };

  const stopRecording = async () => {
    try {
      await Voice.stop();
      translate();
      setRecordStatus('Başlat');
    } catch (err) {
      console.log('error', err);
    }
  };

  const translate = async () => {
    await translateTo(query, to, from)
      .then(res => {
        if (res && res.data) setTranslated(res.data.translatedText);
      })
      .catch(err => console.log(err));
  };

  const replaceTranslate = () => {
    setQuery('');
    setTranslated('');
    setTo(to === 'en' ? 'tr' : 'en');
    setFrom(from === 'en' ? 'tr' : 'en');
  };

  const setHistory = async () => {
    const history = {
      id: Date.now(),
      query,
      translated,
    };
    await storeData(history);
  };

  return (
    <Container>
      <Input
        value={query}
        placeholder={placeholder.toPlaceholder}
        onChangeText={val => setQuery(val)}
      />

      <Text text={placeholder.fromPlaceholder} size="20px" color="#45b6fe" />

      {!!translated && <Text text={translated} size="16px" />}

      <Button text="Çevir" bgColor="#45b6fe" onClick={translate} />

      <Button
        text={recordStatus}
        onClick={recordStatus === 'Başlat' ? startRecording : stopRecording}
        bgColor={recordStatus === 'Başlat' ? '#26580f' : '#bb0a1e'}
      />

      <Button text="Dili Değiştir" onClick={replaceTranslate} />
    </Container>
  );
};

export default Home;
