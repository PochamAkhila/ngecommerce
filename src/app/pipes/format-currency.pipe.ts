import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'formatCurrency'
})
export class FormatCurrencyPipe implements PipeTransform {

  transform(value: any, ...args: unknown[]): unknown {
    return args + value.toFixed(2);
  }

}
