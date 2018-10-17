import { Pipe, PipeTransform } from '@angular/core';
import { Reports } from './models/Reports.model';

@Pipe({
    name: 'filter'
})
export class FilterPipe implements PipeTransform {
    transform(arr: Reports[], searchValue: string) {
        if (!searchValue) return arr;
        return arr.filter(value => {
            return value.reportName.toLowerCase().indexOf(searchValue.toLowerCase()) > -1 ||
                value.sourceName.toLowerCase().indexOf(searchValue.toLowerCase()) > -1 ||
                value.reportDescription.toLowerCase().indexOf(searchValue.toLowerCase()) > -1 ||
                value.tags.forEach((tag) => tag.tagName.toLowerCase().indexOf(searchValue.toLowerCase()) > -1);
        });
    }
}
