import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
//Models
import { MunicipioModel } from '../../../shared/model/municipio-model';
import { MunicipioApiService } from '../../../shared/services/municipio-api.service';

@Component({
  selector: 'an-item-municipios',
  templateUrl: './item-municipios.component.html',
  styleUrls: ['./item-municipios.component.scss']
})
export class ItemMunicipiosComponent implements OnInit {

  @Input()
  municipios: MunicipioModel;

  @Output() remove = new EventEmitter<MunicipioModel>();

  @Output() update = new EventEmitter<MunicipioModel>();

  readonly DEFAULT_PICTURE = 'https://thehappening.com/wp-content/uploads/2017/04/mexico.jpg';  
  
  constructor(private municipioService: MunicipioApiService) { }

  ngOnInit() {
  }
  eliminar(e: MunicipioModel):void{
    this.remove.emit(e);
  }
  showForEdit(e: MunicipioModel):void{
    this.municipioService.selectedMunicipio = Object.assign({},e);
    this.update.emit(e);
  }
}
