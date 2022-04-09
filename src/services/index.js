import axios from 'axios';
import {API_URL} from '../constants';

const translateTo = async (text, to, from) => {
  const body = {
    q: text,
    source: to,
    target: from,
    format: 'text',
  };
  return await axios.post(`${API_URL}/translate`, body);
};

export {translateTo};
