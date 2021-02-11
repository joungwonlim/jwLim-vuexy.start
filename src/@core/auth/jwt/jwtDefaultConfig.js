console.log('here 4', '@auth/jwt/jwtDefaultConfig.js')
export default {

  // Endpoints
  loginEndpoint: '/app/jwt/login',
  registerEndpoint: '/app/jwt/register',
  refreshEndpoint: '/app/jwt/refresh-token',
  logoutEndpoint: '/app/jwt/logout',

  // This will be prefixed in authorization header with token
  // e.g. Authorization: Bearer <token>
  tokenType: 'Bearer',

  // Value of this property will be used as key to store JWT token in storage
  storageTokenKeyName: 'accessToken',
  storageRefreshTokenKeyName: 'refreshToken',
}
