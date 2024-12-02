import { Module } from '@nestjs/common';
import { AxiosAdapter } from './adapters/axios.adapter';
import { HttpAdapter } from './interfaces/http-adapter.interface';

@Module({
  providers: [
    AxiosAdapter,
    { provide: HttpAdapter, useExisting: AxiosAdapter },
  ],
  exports: [HttpAdapter],
})
export class CommonModule {}
