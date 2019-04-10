import { Component, OnInit } from '@angular/core';
import { RemoveSpclCharPipe } from "../pipe/remove-spcl-char.pipe";
import { FileUplodDirective } from '../directive/file-uplod.directive';
@Component({
  selector: 'app-angular-usefull',
  templateUrl: './angular-usefull.component.html',
  styleUrls: ['./angular-usefull.component.css']
})
export class AngularUsefullComponent implements OnInit {
  customPipe:any;
  uppertab:boolean=false;
  fileUplod:boolean=false;
  constructor() {
    
   }

  ngOnInit() {

  }
  activatePipe(){
   
    this.uppertab= true
  }
  activateDirective(){
    this.uppertab= false
    this.fileUplod=true;
  }
 
  
}
