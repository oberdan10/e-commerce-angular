import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-categoria',
  templateUrl: './categoria.component.html',
  styleUrls: ['./categoria.component.css']
})
export class CategoriaComponent implements OnInit {

  @Input() categoria: any = []
  constructor() { }
  
  @Output() categoriaEscolhida = new EventEmitter();
  ngOnInit(): void {
  }

  categoryClick(categoriaEscolhida: string): void {
    this.categoriaEscolhida.emit(categoriaEscolhida);
  }

}
