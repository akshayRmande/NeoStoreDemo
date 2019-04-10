import { Component, OnInit } from '@angular/core';
import { ApicallserviceService } from '../service/apicallservice.service';
import {
  trigger,
  state,
  style,
  animate,
  transition,
  query,
  stagger,
  // ...
} from '@angular/animations';
@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css'],
  animations: [
    trigger('photosAnimation', [
      transition('* => *', [
        query('img',style({ transform: 'translateY(-100%)'})),
        query('img',
          stagger('600ms', [
            animate('900ms', style({ transform: 'translateX(0)'}))
        ]))
      ])
    ])
  ]
})
export class ProductListComponent implements OnInit {

  productData: any;
filterData:any;
category:any
  constructor(public service: ApicallserviceService) {
    this.service.getProducts("http://180.149.241.208:3000/api/products?filter=%7B%22include%22%3A%22images%22%7D")
      .subscribe((data) => {
        this.productData = data
        console.log(this.productData);

      });
  }

  ngOnInit() {
    this.filterProducts();
  }

  filterProducts(){
      this.service.getProducts("http://180.149.241.208:3000/api/categories"      )
        .subscribe((data) => {
          
          this.category = data
          console.log(this.category);
  
        });
  }

        
  filterApply(category_Id){
    this.service.getProducts("http://180.149.241.208:3000/api/categories/" +category_Id+   "/products?filter=%7B%22include%22%3A%22images%22%7D")
    .subscribe((data) => {
      
      this.productData = data
      console.log(this.productData);

    });

  }
}
