import { Injectable, Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'truncate'
})
@Injectable({
  providedIn: 'root'
})

export class TruncatePipe implements PipeTransform {

  transform(value: string, n: number, p?: string): string {
    if (p == 'words' && value.split(' ').length > n){
      let sp = value.split(' ', n);
      return sp.join(' ');
    }
    if(value.length > n){
      let corta = value.indexOf(' ', n);
      return value.substr(0,corta).concat('...');
    }
    return value;
  }

}
