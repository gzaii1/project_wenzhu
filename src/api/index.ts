const isEnvDevelopment = process.env.NODE_ENV === 'development'
const isEnvProduction = process.env.NODE_ENV === 'production'

export const baseUrl = (isEnvDevelopment && 'http://127.0.0.1:8000/mock/11') ||
                        (isEnvProduction && 'http://127.0.0.1:8000/mock/11')
