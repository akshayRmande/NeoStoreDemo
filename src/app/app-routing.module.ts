import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ProductListComponent } from './product-list/product-list.component';
import { AngularUsefullComponent } from './angular-usefull/angular-usefull.component';

const appRoutes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'product/list', component: ProductListComponent },
 
  { path: 'angularUsefull', component: AngularUsefullComponent }, 
  { path: '', component: HomeComponent },
  {
    path: '',
    redirectTo: '/home',
    pathMatch: 'full'
  },
  { path: '**', component: HomeComponent }
];


@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

  constructor() {

  }

}
