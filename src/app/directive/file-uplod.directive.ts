import { Directive,ElementRef,HostListener} from '@angular/core';
import { constructDependencies } from '@angular/core/src/di/reflective_provider';

@Directive({
  selector: '[appFileUplod]'
})
export class FileUplodDirective {
  fileData:any
  constructor( public eleRef:ElementRef) { 

  }
@HostListener('change', ['$event']) onChange(e){
  console.log(e)
  this.upload(e)
}
upload (event) {
  console.log(event.target.files);
  this.fileData=event.target.files;
}
}
