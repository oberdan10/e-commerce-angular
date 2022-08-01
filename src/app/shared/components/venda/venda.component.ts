import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Sale } from 'src/app/models/sale';

@Component({
  selector: 'app-venda',
  templateUrl: './venda.component.html',
  styleUrls: ['./venda.component.css']
})
export class VendaComponent implements OnInit {

  @Input() 
  vendas: Sale[] = [];

  @Input() 
  totalVendas: number = 0;

  @Output()
  atualizaVenda = new EventEmitter();

  constructor() { }

  ngOnInit(): void {  }

  removerProduto(id: number): void {
    let valorRemovido = this.vendas.filter(item => item.id !== id);
    let removerTotal = this.vendas.filter(item => item.id === id);
    this.totalVendas = this.totalVendas - (Number(removerTotal[0].price)*Number(removerTotal[0].quantityNew));

    this.vendas = valorRemovido;
    this.vendasClick(this.totalVendas,this.vendas,false);
    alert('Produto Removido!');
   }

   save(): void {
    this.totalVendas = 0;
    let valor = this.vendas.filter(item => item.id !== 0);
    this.vendasClick(this.totalVendas,valor,true);
   }

   vendasClick(event: any,event2: any, event3:any): void {
    
    let eventTriplo: any = [event,event2,event3];
    this.atualizaVenda.emit(eventTriplo);
   }

}
