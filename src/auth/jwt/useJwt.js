import useJwt from '@core/auth/jwt/useJwt'
import axios from '@axios'

console.log('here 1', '@auth/jwt/userJwt.js')
const { jwt } = useJwt(axios, {})
export default jwt
