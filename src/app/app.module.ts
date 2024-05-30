import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module'; // Asegúrate de que este módulo tiene las rutas configuradas
import { AppComponent } from './app.component';
import { TemplateFormsComponent } from './components/template-forms/template-forms.component';  // Importa tu componente

@NgModule({
  declarations: [
    AppComponent,
    TemplateFormsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
