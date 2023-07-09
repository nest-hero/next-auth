export const AppConfig = {
  apiBaseUrl: process.env.API_BASE_URL || 'http://localhost:3001',
  google: {
    clientId: process.env.GOOGLE_CLIENT_ID || '',
    clientSecret: process.env.GOOGLE_CLIENT_SECRET || '',
  },
}
