import axios, { AxiosInstance } from 'axios';
import { HttpAdapter } from '../interfaces/http-adapter.interface';
import { Injectable } from '@nestjs/common';

@Injectable()
export class AxiosAdapter implements HttpAdapter {
  private axios: AxiosInstance = axios;

  async get<T>(url: string): Promise<T> {
    try {
      const response = await this.axios.get<T>(url);

      return response.data;
    } catch (error) {
      console.error(error);
      throw new Error('Error when try to get a response');
    }
  }
}
