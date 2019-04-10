import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'removeSpclChar'
})
export class RemoveSpclCharPipe implements PipeTransform {

  transform(value: any, args?: any): any {
    // let newString=value;
    if(args){
     
      // newString += newString.replaceAll("[^\\w\\s]","");

    return value.replace(/[^a-zA-Z ]/g, "RemovedBYAkshay");


     }
  }

    

}
