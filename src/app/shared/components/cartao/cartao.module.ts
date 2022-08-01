import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { PipeModule } from "../../pipe/pipe.module";
import { CartaoComponent } from "./cartao.component";

@NgModule({
    declarations: [CartaoComponent],
    exports: [CartaoComponent],
    imports: [
        CommonModule,
        PipeModule]
})
export class CartaoModule {

}