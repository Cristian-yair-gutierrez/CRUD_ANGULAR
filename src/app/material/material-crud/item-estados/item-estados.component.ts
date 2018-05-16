import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { EstadosModel } from '../../../shared/model/estados-model';

@Component({
  selector: 'an-item-estados',
  templateUrl: './item-estados.component.html',
  styleUrls: ['./item-estados.component.scss']
})
export class ItemEstadosComponent implements OnInit {

  @Input()
  estados: EstadosModel;

  @Output()
  onMouseClick = new EventEmitter<EstadosModel>();

  constructor() { }

  ngOnInit() {
  }

  onClick(e: EstadosModel){
    this.onMouseClick.emit(e);
  }
}
