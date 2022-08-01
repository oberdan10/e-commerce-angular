import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { FooterComponent } from './shared/components/footer/footer.component';
import { HeaderComponent } from './shared/components/header/header.component';
import { ProductsRegistrationComponent } from './components/products/products-registration/products-registration.component';
import { ProductsListComponent } from './components/products/products-list/products-list.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { CartaoModule } from './shared/components/cartao/cartao.module';
import { ProductsEditComponent } from './components/products/products-edit/products-edit.component';
import { PipeModule } from './shared/pipe/pipe.module';
import { BagListComponent } from './components/bag/bag-list/bag-list.component';
import { BagComponent } from './pages/bag/bag/bag.component';
import { CardCompraComponent } from './shared/components/card-compra/card-compra.component';
import { CategoriaComponent } from './shared/components/categoria/categoria.component';
import { VendaComponent } from './shared/components/venda/venda.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    FooterComponent,
    ProductsRegistrationComponent,
    ProductsListComponent,
    ProductsEditComponent,
    BagListComponent,
    BagComponent,
    CardCompraComponent,
    CategoriaComponent,
    VendaComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule,
    CartaoModule,
    PipeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
