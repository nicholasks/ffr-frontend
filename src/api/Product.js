import axios from 'axios';

export function Product () {
  return axios.get('http://ncorp.redirectme.net/api/product/');
}
