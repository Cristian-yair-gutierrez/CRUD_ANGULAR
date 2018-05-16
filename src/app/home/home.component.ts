import { Component, OnInit } from '@angular/core';
//Models
import { EstadosModel } from '../shared/model/estados-model';
import { MunicipioModel } from '../shared/model/municipio-model';
//Services
import { EstadosApiService } from '../shared/services/estados-api.service';
import { MunicipioApiService } from '../shared/services/municipio-api.service';


@Component({
  selector: 'an-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  estados: EstadosModel;
  municipios: MunicipioModel;
  
  listaEstados: EstadosModel[];
  error: string;


  readonly DEFAULT_PICTURE = 'https://thehappening.com/wp-content/uploads/2017/04/mexico.jpg';

  constructor(private estadosApi: EstadosApiService, private municipiosApi: MunicipioApiService) { }

  ngOnInit() {
    // this.estadosApi.getEstados()
    //   .subscribe((data: EstadosModel) =>{
    //     setTimeout(() => {
    //       this.estados = data;                
    //     }, 2500);
    // }, error => {
    //   setTimeout(()=>{
    //     console.log('Error al connectar con el Servidor');
    //     this.error = 'Error al connectar con el Servidor';    
    //   }, 2000);
    // });    
  } 
  // getMunicipios(idEstado):void {
  //   this.municipiosApi.getMunicipios(idEstado)
  //       .subscribe((data: MunicipioModel) => {
  //         setTimeout(() => {
  //           this.municipios = data;
  //           console.log(this.municipios);
  //         }, 2000);
  //       }, error => {
  //         setTimeout(() => {
  //           this.error = 'Error al connectar con el Servidor';
  //         }, 2000);
  //   });
  // }
  // onMouseClick($event: EstadosModel){
  //   console.log('Click..., ', $event.idEstado);
  //   this.municipiosApi.getMunicipios($event.idEstado)
  //       .subscribe((data: MunicipioModel) => {
  //         setTimeout(() => {
  //           this.municipios = data;
  //           console.log(this.municipios);
  //         }, 2000);
  //       }, error => {
  //         setTimeout(() => {
  //           this.error = 'Error al connectar con el Servidor';
  //         }, 2000);
  //   });
  // }
}
