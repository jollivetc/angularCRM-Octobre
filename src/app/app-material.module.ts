import { NgModule } from '@angular/core';
import {MatInputModule} from '@angular/material/input'
import {MatButtonModule} from '@angular/material/button'
import {MatFormFieldModule} from '@angular/material/form-field'
import {MatToolbarModule} from '@angular/material/toolbar'

const importExport= [MatInputModule, MatButtonModule, MatFormFieldModule, MatToolbarModule]

@NgModule({
  declarations: [],
  imports: importExport,
  exports: importExport
})
export class AppMaterialModule { }
