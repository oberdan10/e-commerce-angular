import { Component, OnInit, Output } from '@angular/core';
import { Product } from 'src/app/models/product';
import { ProductsService } from '../products.service';

@Component({
  selector: 'app-products-list',
  templateUrl: './products-list.component.html',
  styleUrls: ['./products-list.component.css']
})
export class ProductsListComponent implements OnInit {
  _produtos: Product[] = [];
  _produtosFiltrados: Product[] = [];
  _pesquisarPor!: string;

  constructor(private productsService: ProductsService) { }

  ngOnInit(): void {
    
      this.retrieveAll();
    
  }

  retrieveAll(): void{
    this.productsService.retrieveAll().subscribe({
        next: produtos => {
            this._produtos = produtos;
            this._produtosFiltrados = this._produtos;
        },
        error: err => {console.log(err)}
    });
}

deleteById(produtoId?: number): void {
  this.productsService.deleteById(produtoId!).subscribe({
      next: () => { console.log("Deletado com sucesso!");
      this.retrieveAll();},
      error: err => {console.log(err)}
  });
}

set filtrar(value: string) {
  this._pesquisarPor = value;
  this._produtosFiltrados = this._produtos.filter((produto: Product) => produto.name.toLocaleLowerCase().indexOf(this._pesquisarPor.toLocaleLowerCase()) > -1)
}

get filtrar() {
  return this._pesquisarPor;
}

atualizaLista(event: boolean): void {
  this.retrieveAll();
  console.log('Repete Função!');
}

}
