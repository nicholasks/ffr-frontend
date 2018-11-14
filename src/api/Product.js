import axios from 'axios';

var main_url = "http://104.248.73.27/api"


export function Product () {
  return axios.get(main_url + '/product/?category=Hamburgueres');
}

export function Drinks() {
  return axios.get(main_url + '/product/?category=Bebidas');
}
