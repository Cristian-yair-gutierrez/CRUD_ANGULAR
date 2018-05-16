import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {
  MatToolbarModule, 
  MatButtonModule, 
  MatIconModule, 
  MatExpansionModule,
  MatInputModule,
  MatListModule,
  MatCardModule,
  MatProgressSpinnerModule,
  MatSelectModule,  
  MatDialogModule } from "@angular/material";
import { MaterialCrudComponent } from './material-crud/material-crud.component';
import { ItemEstadosComponent } from './material-crud/item-estados/item-estados.component';
import { ItemMunicipiosComponent } from './material-crud/item-municipios/item-municipios.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    MatExpansionModule,
    MatInputModule,
    MatListModule,
    MatCardModule,
    MatProgressSpinnerModule,
    MatSelectModule,
    MatDialogModule
  ],
  exports: [
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    MatExpansionModule,
    MatInputModule,
    MatListModule,
    MatCardModule,
    MatProgressSpinnerModule,
    MatSelectModule,
    MatDialogModule
  ],
  declarations: [MaterialCrudComponent, ItemEstadosComponent, ItemMunicipiosComponent]
})
export class MaterialModule { }
