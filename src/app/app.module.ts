import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { AngularFontAwesomeModule } from 'angular-font-awesome';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { ProductListComponent } from './product-list/product-list.component';
import { ReversePipe } from './reverse.pipe';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AngularUsefullComponent } from './angular-usefull/angular-usefull.component';
import {MatCardModule} from '@angular/material/card';
import { FormsModule, ReactiveFormsModule } from '@angular/forms'; // <== add the imports!
import { RemoveSpclCharPipe } from './pipe/remove-spcl-char.pipe';
import { MatTabsModule } from '@angular/material';
import { FileUplodDirective } from './directive/file-uplod.directive';
import { SearchFilterPipe } from './pipe/search-filter.pipe';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    ProductListComponent,
    ReversePipe,
    AngularUsefullComponent,
    RemoveSpclCharPipe,
    FileUplodDirective,
    SearchFilterPipe,
      ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,AngularFontAwesomeModule,  HttpClientModule,
    MatCardModule, FormsModule, MatTabsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})


export class AppModule { }
