import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Consumer } from './model/consumer';

@Injectable({
  providedIn: 'root'
})
export class ConsumerService {

  constructor(private http: HttpClient) { }

  getList():Observable<Consumer[]>{
    return this.http.get<Consumer[]>('/api/consumers');
  }

  getFilteredList(search:string):Observable<Consumer[]> {
    return this.http.get<Consumer[]>(`/api/consumers?q=${search}`)
  }

  save(consumer:Consumer): Observable<Consumer>{
    return this.http.post<Consumer>('/api/consumers', consumer)
  }
}
