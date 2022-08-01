import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Product } from 'src/app/models/product';
import { ProductsService } from '../products.service';

@Component({
  selector: 'app-products-edit',
  templateUrl: './products-edit.component.html',
  styleUrls: ['./products-edit.component.css']
})
export class ProductsEditComponent implements OnInit {

  item?: Product;
  constructor(private activatedRoute: ActivatedRoute, private productService: ProductsService) { }

  ngOnInit(): void {
    this.productService.retrieveById(Number(this.activatedRoute.snapshot.paramMap.get('id'))).subscribe({
      next: produto => {
          this.item = produto;
      },
      error: err => {console.log(err)}
  })
  }

  save(): void {

  this.item!.price = Number((document.getElementById('Preco') as HTMLInputElement).value);
  this.item!.category = `${String((document.getElementById('Categoria') as HTMLInputElement).value)}`;

  console.log(this.item)
  if(this.item!.price === 0 || this.item!.category === ''){
    alert('Não foi Possível Editar! \nPreencha todos os campos!');
    }else{
      this.productService.save(this.item!).subscribe({
       next: produto => {console.log("Editado com sucesso!");
         },
       error: err => {console.log(err)}
     });
    }
  }

}
