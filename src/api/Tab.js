import axios from 'axios';

var main_url = "http://localhost:8000/b/api"


export function TabTotalPrice(id) {
  return axios.get(main_url + '/tab/?qrCode=' + id)
}
