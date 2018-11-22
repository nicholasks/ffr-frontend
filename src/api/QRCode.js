import axios from 'axios';

var main_url = "http://104.248.73.27/api"

export function QRCodeScanner (qrcode) {
  return axios.get(main_url + `/tab/?qrCode=${qrcode}`);
}
