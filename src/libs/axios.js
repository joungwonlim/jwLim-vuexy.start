import Vue from 'vue'

// axios
import axios from 'axios'

const axiosIns = axios.create({
  // You can add your headers here
  // ================================
  // baseURL: 'https://some-domain.com/api/',
  // baseURL: 'http://localhost:5001/willydreams-955af/us-central1/',
  // baseURL: 'https://us-central1-willydreams-955af.cloudfunctions.net/',
  // timeout: 1000,
  // headers: {'X-Custom-Header': 'foobar'}
})

Vue.prototype.$http = axiosIns

export default axiosIns
