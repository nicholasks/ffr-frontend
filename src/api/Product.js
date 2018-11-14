import axios from 'axios';

var main_url = "http://fastfoodrequest.zapto.org/api"


export function Product () {
  return axios.get(main_url + '/product/?category=Hamburgueres');
}
