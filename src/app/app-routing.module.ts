import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductsEditComponent } from './components/products/products-edit/products-edit.component';
import { BagComponent } from './pages/bag/bag/bag.component';
import { HomeComponent } from './pages/home/home.component';

const routes: Routes = [
  {path: 'produto', component: HomeComponent},
  {path: 'produto/info/:id', component: ProductsEditComponent},
  {path: '', component: BagComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
