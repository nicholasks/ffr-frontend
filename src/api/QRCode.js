import axios from 'axios';

var main_url = "http://localhost:8000/b/api"

export function QRCodeScanner (qrcode) {
  return axios.get(main_url + `/tab/?qrCode=${qrcode}`);
}
