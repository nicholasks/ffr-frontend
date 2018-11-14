import axios from 'axios';

var main_url = "http://fastfoodrequest.zapto.org/api"


export function TabTotalPrice(id) {
  return axios.get(main_url + '/tab/?qrCode=' + id)
}
