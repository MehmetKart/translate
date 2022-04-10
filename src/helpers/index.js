import AsyncStorage from '@react-native-async-storage/async-storage';

const storeData = async value => {
  try {
    let history = [];
    let getHistory = await getData();
    if (getHistory) {
      getHistory.push(value);
      await AsyncStorage.setItem('history', JSON.stringify(getHistory));
    } else {
      history.push(value);
      await AsyncStorage.setItem('history', JSON.stringify(history));
    }
  } catch (err) {
    console.log('error', error);
  }
};

const getData = async () => {
  try {
    const jsonValue = await AsyncStorage.getItem('history');
    return jsonValue != null ? JSON.parse(jsonValue) : null;
  } catch (err) {
    console.log('error', err);
  }
};

const removeData = async () => {
  try {
    await AsyncStorage.removeItem('history');
  } catch (err) {
    console.log('error', err);
  }
};

export {storeData, getData, removeData};
