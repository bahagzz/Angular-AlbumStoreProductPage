import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { ProductPageComponent } from './product-page/product-page.component';
import { ProductDescriptionComponentComponent } from './components/product-description-component/product-description-component.component';
import { ProductService } from './services/product.service';


providers: [ProductService]


@NgModule({
  declarations: [
    AppComponent,
    ProductPageComponent,
    ProductDescriptionComponentComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }