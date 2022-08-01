import { Component, OnChanges, Input } from '@angular/core';


@Component({
    selector: 'app-cartao',
    templateUrl: './cartao.component.html',
    styleUrls: ['./cartao.component.css']
})

export class CartaoComponent implements OnChanges {
    @Input()
    item: any =[];
    
    ngOnChanges(): void {

    }
}