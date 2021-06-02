import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { EncabezadoComponent } from './encabezado/encabezado.component';
import { CuerpoComponent} from './cuerpo/cuerpo.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [ 
    AppComponent, 
    EncabezadoComponent,
    CuerpoComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
