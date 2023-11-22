import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'customFilterPipe'
})
export class CustomFilterPipePipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    return null;
  }

}
