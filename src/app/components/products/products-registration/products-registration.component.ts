import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Product } from 'src/app/models/product';
import { ProductsService } from '../products.service';

@Component({
  selector: 'app-products-registration',
  templateUrl: './products-registration.component.html',
  styleUrls: ['./products-registration.component.css']
})
export class ProductsRegistrationComponent implements OnInit {
  produto?: Product;
  arquivo?: File;
  imagem!: String;
  reader: FileReader = new FileReader();
  @Output() atualizaListaProdutos = new EventEmitter();
  constructor(private productsService: ProductsService) { }

  ngOnInit(): void {
  }

  onChange(event: any): void {
    this.arquivo = <File>event.srcElement.files[0];
    this.reader.onload = function (e) { 
        e.target!.result;
    }
    this.reader.readAsDataURL(this.arquivo!);
    
}


save(): void {

  this.produto = {
   name: `${String((document.getElementById('Descricao') as HTMLInputElement).value)}`,
   price: Number((document.getElementById('Preco') as HTMLInputElement).value),
   quantity: Number((document.getElementById('Quantidade') as HTMLInputElement).value),
   category: `${String((document.getElementById('Categoria') as HTMLInputElement).value)}`,
   unity: `${String((document.getElementById('Unidade') as HTMLInputElement).value)}`,
   imageUrl: `${String(`${this.reader.result}`)}`,
}

console.log(this.produto)
if(this.produto.name === '' || this.produto.price === 0 || this.produto.quantity === 0 || this.produto.unity === 'Selecione a Unidade' || this.produto.category === '' || this.produto.imageUrl === 'null'){
alert('Não foi Possível Salvar! \nPreencha todos os campos!');
}else{
  this.productsService.save(this.produto).subscribe({
   next: produto => {console.log("Salvo com sucesso!");
     },
   error: err => {console.log(err)}
 });
}

this.atualizaLista();
}

atualizaLista(): void {
  this.atualizaListaProdutos.emit(true);
}

}
