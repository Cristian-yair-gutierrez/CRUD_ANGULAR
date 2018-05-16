import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders} from '@angular/common/http';
import { MunicipioModel } from '../model/municipio-model';
import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';

  const httpOptions = {
    headers: new HttpHeaders({
      'Content-Type':  'application/json'
    })
  };

  const MUNICIPIO_URL = 'https://www.angularpruebas.net/api/Municipio';
  //'http://localhost:1843/api/Municipio';
  
  
  

@Injectable({
  providedIn: 'root'
})
export class MunicipioApiService {

  municipioList: MunicipioModel[];
  selectedMunicipio: MunicipioModel;

  constructor(private httpClient: HttpClient) { }  

  getMunicipios(idEstado: number): Observable<MunicipioModel[]>
  {
    return this.httpClient.get<MunicipioModel[]>(`${MUNICIPIO_URL}/ListaMunicipioByEstados?idEstado=${idEstado}`);
  }

  /** POST: agrego un nuevo municipio */
  addMunicipio(municipio: MunicipioModel): Observable<MunicipioModel> {
    return this.httpClient.post<MunicipioModel>(`${MUNICIPIO_URL}/InsertaMunicipio?idEstado=${municipio.idEstado}&Descripcion=${municipio.Descripcion}`, httpOptions)
      .pipe(
        catchError(this.handleError('addMunicipio', municipio))
      );
  }
  /** PUT: actualizo un municipio */
  updateMunicipio(idMunicipio, Municipio): Observable<MunicipioModel> {  
    console.log('Services....', idMunicipio, Municipio);        
    return this.httpClient.put<MunicipioModel>(`${MUNICIPIO_URL}/ModificaMunicipio?idMunicipio=${idMunicipio}&Descripcion=${Municipio}`, httpOptions)
      .pipe(
        catchError(this.handleError('updateMunicipio', Municipio))
      );
  }

  /** DELETE: elimino un municipio */
  deleteMunicipio (idMunicipio: number): Observable<{}> {    
    return this.httpClient.delete(`${MUNICIPIO_URL}/EliminaMunicipio?idMunicipio=${idMunicipio}`, httpOptions)
      .pipe(
        catchError(this.handleError('deleteMunicipio'))
      );
  }





   /**
   * Handle Http operation that failed.
   * Let the app continue.
   * @param operation - name of the operation that failed
   * @param result - optional value to return as the observable result
   */
  private handleError<T> (operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead
      // TODO: better job of transforming error for user consumption
      this.log(`${operation} failed: ${error.message}`);

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }

  private log(message: string) {

  }
}
