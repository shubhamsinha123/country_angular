import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'caseInsensitiveFilter'
})
export class CaseInsensitiveFilterPipe implements PipeTransform {

  transform(value: Array<any>, ...args: unknown[]): unknown {
    let result = value;
    if (args.toString().length) {
      result = []
      value.forEach(item => {
        if (item.toLowerCase().includes(args.toString().toLowerCase())) {
          result.push(item);
        }
      });
    }
    return result;
  }

}
