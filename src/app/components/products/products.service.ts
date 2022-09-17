import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { Product } from "src/app/models/product";

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  private produtoUrl: string = "http://192.168.18.123:3100/api/produto";
  constructor(private httpClient: HttpClient) { }

  retrieveAll() : Observable<Product[]> {
    return this.httpClient.get<Product[]>(this.produtoUrl);
}

retrieveById(id: Number): Observable<Product>{
    return this.httpClient.get<Product>(`${this.produtoUrl}/${id}`);
}

retrieveByCategory(category: string): Observable<Product>{
  return this.httpClient.get<Product>(`${this.produtoUrl}/categoria/${category}`);
}

save(produto: Product): Observable<Product> {
  if(produto.id){
      return this.httpClient.put<Product>(`${this.produtoUrl}/${produto.id}`, produto);
  } else {
      return this.httpClient.post<Product>(`${this.produtoUrl}`, produto);
  }
}

deleteById(id: Number): Observable<any>{
  return this.httpClient.delete<any>(`${this.produtoUrl}/${id}`);
}
}
