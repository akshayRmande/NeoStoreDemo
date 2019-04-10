import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'reverse'
})
export class ReversePipe implements PipeTransform {

  transform(value: any, ...args): any {

    let newString=value;
    if(args[0]){
     
     newString= this.reverseString(value);

    }
    if(args[1]=="singlequote"){
      newString = "'"+ newString+ "'"
    }
    if(args[1]=="doublequote"){
      newString = '"'+ newString+ '"'
    }
    
    return newString;
  }
 reverseString(str) {
    if (str === "")
      return "";
    else
      return this.reverseString(str.substr(1)) + str.charAt(0);
  }
}
