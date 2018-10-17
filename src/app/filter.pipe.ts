import { Pipe, PipeTransform } from '@angular/core';
import { Reports } from './models/Reports.model';

@Pipe({
    name: 'filter'
})
export class FilterPipe implements PipeTransform {
    transform(arr: Reports[], searchValue: string) {
        if (!searchValue) return arr;
        return arr.filter(value => {
            return value.reportName.toLowerCase().indexOf(searchValue.toLowerCase()) > -1;
        });
    }
}