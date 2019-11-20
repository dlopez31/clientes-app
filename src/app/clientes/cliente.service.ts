import { Injectable } from '@angular/core';
import { CLIENTES } from './clientes.json';
import { Cliente } from './cliente.js';
import { Observable, of } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable()
export class ClienteService {
  private urlEnpoint: string = 'http://localhost:8080/api/clientes';
  constructor(private http: HttpClient) { }

  getClientes(): Observable<Cliente[]> {
    //  return of(CLIENTES);
    return this.http.get<Cliente[]>(this.urlEnpoint);
    // return this.http.get(this.urlEnpoint).pipe(
    //   map( response => response as Cliente[]));
  }
}
