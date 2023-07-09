import axios from 'axios'
import { AppConfig } from '@/config/app.config'

export const request = axios.create({
  baseURL: AppConfig.apiBaseUrl,
  withCredentials: true,
})
