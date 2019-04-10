import { Component, OnInit } from '@angular/core';
import { ApicallserviceService } from "../../app/service/apicallservice.service";
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
productData:any;

  constructor(public service: ApicallserviceService) {
    this.service.getProducts("http://180.149.241.208:3000/api/products?filter=%7B%22include%22%3A%22images%22%7D")
    .subscribe((data) => {
      var a:any=data;  
      this.productData=a.slice(1, 7);;
      console.log(data);
        
    });
 
  
   }

  ngOnInit() {
  }


  // http://180.149.241.208:3000/api/products?filter=%7B%22include%22%3A%22images%22%7D
}
