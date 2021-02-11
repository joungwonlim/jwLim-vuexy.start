import JwtService from './jwtService'

console.log('here 2', '@coer/auth/jwt/userJwt.js')
export default function useJwt(axiosIns, jwtOverrideConfig) {
  const jwt = new JwtService(axiosIns, jwtOverrideConfig)

  return {
    jwt,
  }
}
