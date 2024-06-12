import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'sort'
})
export class SortPipe implements PipeTransform {
transform(value: any[], key: any, order: 'asc' | 'desc' = 'asc'): any[] {
  if (!value || !Array.isArray(value)) {
    return value;
  }

  return value.sort((a, b) => {
    const compareResult = a[key] < b[key] ? -1 : a[key] > b[key] ? 1 : 0;
    return order === 'asc' ? compareResult : -compareResult;
  });
}

}
