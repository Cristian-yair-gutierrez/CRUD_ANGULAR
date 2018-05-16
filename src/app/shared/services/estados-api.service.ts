import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { EstadosModel } from '../model/estados-model';
import { HttpHeaders } from '@angular/common/http';

  const httpOptions = {
    headers: new HttpHeaders({
      'Content-Type':  'application/json'
    })
  };

  const ESTADOS_URL = 'https://www.angularpruebas.net/api/Estado';
  //'http://localhost:1843/api/Estado';
  
@Injectable({
  providedIn: 'root'
})
export class EstadosApiService {

  constructor(private httpClient: HttpClient) { }

  getEstados(): Observable<EstadosModel>
  {
    return this.httpClient.get<EstadosModel>(`${ESTADOS_URL}/ListaEstados`);
  }
}
