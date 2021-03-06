import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http'
import { Observable, observable } from 'rxjs';
import { Order } from '../models/order';
import { OrderAddModel } from '../models/orderaddmodel';

@Injectable()
export class OrderService {

  constructor(private http: HttpClient) { }

  apiPath = "http://localhost:5000/api/orders"

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
    })
  };

  postOrder(OrderAddModel: OrderAddModel): Observable<OrderAddModel> {
    return this.http.post<OrderAddModel>(this.apiPath, OrderAddModel, this.httpOptions);
  }

}
