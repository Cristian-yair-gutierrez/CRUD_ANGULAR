import { Component, OnInit,  } from '@angular/core';
import { NgForm } from '@angular/forms'
import { EstadosModel } from '../../shared/model/estados-model';
import { MunicipioModel } from '../../shared/model/municipio-model';
import { MunicipioApiService } from '../../shared/services/municipio-api.service';
import { EstadosApiService } from '../../shared/services/estados-api.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'an-material-crud',
  templateUrl: './material-crud.component.html',
  styleUrls: ['./material-crud.component.scss']
})
export class MaterialCrudComponent implements OnInit {

  estados: EstadosModel; municipios: MunicipioModel[];
  error: string; show_form_Municipios = false; 
  selectedValue: number; selectedMunicipio: string; selectedItem: string;
  description:string;
  readonly DEFAULT_PICTURE = 'https://thehappening.com/wp-content/uploads/2017/04/mexico.jpg';
  
  constructor(
    private estadosApi: EstadosApiService, 
    private municipioService: MunicipioApiService, 
    private toastr: ToastrService
  ) { }

  ngOnInit() {
    this.getEstados();
    this.getMunicipios(1);
    this.resetForm();
  }
  getEstados():void{
    this.estadosApi.getEstados()
      .subscribe((data: EstadosModel) =>{
        setTimeout(() => {
          this.estados = data;                
        }, 2500);
    }, error => {
      setTimeout(()=>{
        console.log('Error al connectar con el Servidor');
        this.error = 'Error al connectar con el Servidor';    
      }, 2000);
    });
  }
  getMunicipios(idEstado):void {
    this.municipioService.getMunicipios(idEstado)
        .subscribe(MunicipioModel => {
          setTimeout(() => {
            this.municipios = MunicipioModel;
            console.log(this.municipios);
          }, 2000);
        }, error => {
          setTimeout(() => {
            this.error = 'Error al connectar con el Servidor';
          }, 2000);
    });
  }
  addMunicipios(idEstado: number, Descripcion: string){
    const newMunicipio: MunicipioModel = { idEstado, Descripcion } as MunicipioModel;
    console.log(newMunicipio);
    if( Descripcion != ''){
      this.municipioService.addMunicipio(newMunicipio)
          .subscribe(MunicipioModel => 
                 this.municipios.push(newMunicipio));
      this.toastr.success('Sucessful Operation', 'Municipio Registered');
    }else{
      this.toastr.warning('Insert Warning!', 'Ingrese un Municipio');
    }
  }
  updateMunicipio(municipio: MunicipioModel): void {    
    // this.municipiosApi.updateMunicipio(municipio).subscribe(response => {      
    // });
    console.log('Municipio con id...', municipio.idMunicipio);
  }
  Edit(municipio: MunicipioModel):void{
    console.log('Municipio con id...', municipio.idMunicipio);
  }
  RemoveMunicipio(municipio: MunicipioModel):void{
    if(confirm('¿Seguro que quieres eliminarlo?')) {
      this.municipios = this.municipios.filter(item => item.idMunicipio != municipio.idMunicipio);
      this.municipioService.deleteMunicipio(municipio.idMunicipio).subscribe();
      this.toastr.error('Deleted Successfully', 'Municipio Removed');
    }
    console.log('Municipio con id...', municipio.idMunicipio);
  }
  onMouseClick($event: EstadosModel){
    console.log('Click..., ', $event.idEstado);
    this.getMunicipios($event.idEstado);
  }
  showFormMunicipios(){
    this.show_form_Municipios = true;
  }
  cancel(){
    this.show_form_Municipios = false;
    console.log(this.show_form_Municipios);
  }
  showSuccess() {
    this.toastr.success('Hello world!', 'Toastr fun!');
  }
  showInfo(){
    this.toastr.info('Hello world!', 'Toastr fun!');
  }
  showDanger(){
    this.toastr.error('Hello world!', 'Toastr fun!');
  }
  showWarning(){
    this.toastr.warning('Hello world!', 'Toastr fun!');
  }
  resetForm(form?: NgForm) {
    if (form != null)
    form.reset();
    this.municipioService.selectedMunicipio = {
      idMunicipio: null,
      idEstado: null,
      Descripcion: ''
  }
  }

  onSubmit(form: NgForm) {
    if (form.value.idMunicipio == null) {
      // this.municipioService.postEmployee(form.value)
      //   .subscribe(data => {
      //     this.resetForm(form);
      //     this.municipioService.getEmployeeList();
      //     this.toastr.success('New Record Added Succcessfully', 'municipio Register');
      //   })
    }
    else {
      console.log(form.value.idMunicipio, form.value.Descripcion);
      if(form.value.Descripcion!= ''){
        this.municipioService.updateMunicipio(form.value.idMunicipio, form.value.Descripcion)
            .subscribe(data => {   
              let idEstado = form.value.idEstado;                
              this.resetForm(form);              
              console.log('Municipio perteneciente al idEstado...',idEstado);
              this.getMunicipios(idEstado);
              this.toastr.info('Updated Successfully!', 'Municipio Register');
        });
      }else{
        this.toastr.warning('Updated Warning!', 'Ingrese un Municipio');
      }
    }
  }
  listClick(event, newValue) {
    console.log(newValue);
    this.selectedItem = newValue;  // don't forget to update the model here
    // ... do other stuff here ...
}
}
