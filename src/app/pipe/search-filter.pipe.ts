import { Pipe, PipeTransform } from '@angular/core';
import { ProductListComponent } from '../product-list/product-list.component';

@Pipe({
  name: 'searchFilter'
})
export class SearchFilterPipe implements PipeTransform {

  transform(productData:ProductListComponent, searchTerm: string): any {
   if(!productData || !searchTerm){
    return productData; 
  }

  return productData.productData.filter(productData=>
    productData.name.toLowerCase().indexOf(searchTerm.toLowerCase())!== -1);


}}
