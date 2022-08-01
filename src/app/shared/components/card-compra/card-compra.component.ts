import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Sale } from 'src/app/models/sale';

@Component({
  selector: 'app-card-compra',
  templateUrl: './card-compra.component.html',
  styleUrls: ['./card-compra.component.css']
})
export class CardCompraComponent implements OnInit {

  @Input()
  item: any =[];
  venda!: Sale;
    
  @Output() vendaEscolhida = new EventEmitter();
  constructor() { }

  ngOnInit(): void {
  }

  save(): void {
    let quantidade = document.getElementById(this.item.id) as HTMLInputElement;

      let venda: Sale = {
        id: this.item.id,
        nameProduct: this.item.name,
        price: this.item.price,
        quantity: Number(this.item.quantity),
        quantityNew: Number(quantidade.value)
      }

      if(this.item.quantity >= Number(quantidade.value)){
        this.bagClick(venda);
      }else
      {alert('Quantidade Maior que a Existente!');}
      
  }

  bagClick(venda: Sale): void {
    this.vendaEscolhida.emit(venda);
  }

}
