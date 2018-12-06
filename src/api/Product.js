import axios from 'axios';

var main_url = "http://localhost:8000/b/api"


export function Product () {
  return axios.get(main_url + '/product/?category=Hamburgueres');
}

export function Drinks() {
  return axios.get(main_url + '/product/?category=Bebidas');
}

export function Dessert() {
  return axios.get(main_url + '/product/?category=Sobremesas');
}
