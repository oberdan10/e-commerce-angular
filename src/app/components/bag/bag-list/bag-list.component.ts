import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Product } from 'src/app/models/product';
import { Sale } from 'src/app/models/sale';
import { ProductsService } from '../../products/products.service';

@Component({
  selector: 'app-bag-list',
  templateUrl: './bag-list.component.html',
  styleUrls: ['./bag-list.component.css']
})
export class BagListComponent implements OnInit {

  _produtos: Product[] = [];
  _produtosFiltrados: Product[] = [];
  _pesquisarPor!: string;
  _precoPor!: string;
  _categoriaUnica: any[] = [];
  menorPreco: number = 0;
  maiorPreco: number = 1000000000;

  _vendas: Sale[] = [];
  vendasTotal: number = 0;
  constructor(private productsService: ProductsService) { }

  ngOnInit(): void {
    this.retrieveAll();
  }

  
  retrieveAll(): void{
    this.productsService.retrieveAll().subscribe({
        next: produtos => {
            this._produtos = produtos;
            console.log(this._produtos);
            this._produtosFiltrados = this._produtos;
            this.SearchByCategory();
        },
        error: err => {console.log(err)}
    });
}

todosProdutos(): void {
  this._produtosFiltrados = this._produtos;
}

SearchByCategory(): void {
  let array: Product[] = this._produtosFiltrados;
  let categoria: any[] = [];

  array.map(function(num) {
    categoria.push(num.category);
  });

  const filtrado = categoria.filter(function(value , pos){
    return categoria.indexOf(value) == pos;
  }) 

  this._categoriaUnica = filtrado;
}


categoryClick(event: string): void {
  this._pesquisarPor = event;
  this._produtosFiltrados = this._produtos.filter((produto: Product) => produto.category.indexOf(this._pesquisarPor) > -1)
}

bagClick(event: Sale): void {

  let checaProduto = this._vendas.filter((vendas: Sale) => vendas.id === event.id);
    if(checaProduto.length > 0 ){
      alert('Produto Já Existente na Sacola!');
    }else{
      this._vendas.push(event);
      this.vendasTotal = this.vendasTotal + (event.quantityNew!*event.price);
      alert('Produto Adicionado!')
    }
  }

vendasClick(event: any): void {
this._vendas.splice(0, this._vendas.length);
this.vendasTotal = event[0];

if(event[2] === true){
  let itens = event[1];
  itens.map(async (itens:Product) => {
    itens.quantity = Number(itens.quantity - itens.quantityNew!);
     await this.productsService.save(itens).subscribe({
       next: produto => {
        console.log("Quantidade atualizada com sucesso!");
         },
       error: err => {console.log(err)}
     });
  });
 
  this._vendas = [];
  alert('Obrigado por comprar em E-commerce!')
}else{
  let itens = event[1];
  this._vendas = itens;
}


console.log(this._vendas);}

set filtrarMaiorPreco(value: string) {
  this.maiorPreco = Number(value);
  this.menorPreco = Number((document.getElementById('minPreco') as HTMLInputElement).value);
  this._produtosFiltrados = this._produtos.filter((produto: Product) => produto.price >= this.menorPreco && produto.price <= this.maiorPreco)
}
get filtrarMaiorPreco() {
  return this._precoPor;
}

set filtrarMenorPreco(value: string) {
  this.maiorPreco = Number((document.getElementById('maxPreco') as HTMLInputElement).value);
  this.menorPreco = Number(value);
  this._produtosFiltrados = this._produtos.filter((produto: Product) => produto.price >= this.menorPreco && produto.price <= this.maiorPreco)
}
get filtrarMenorPreco() {
  return this._precoPor;
}

}
