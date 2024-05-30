import { Component } from '@angular/core';

@Component({
  selector: 'app-template-forms',
  templateUrl: './template-forms.component.html',
  styleUrl: './template-forms.component.css'
})
export class TemplateFormsComponent {
 register: IRegisterForm = {
  name:"",
  email:"",
  password:"",
  repeatPass:""
 };
 constructor(){}

 submit(){
  //DATOS DE INICIO DE SESION
  console.log("Datos de Inicio de Sesion");
  console.log(this.register.name);
  console.log(this.register.email);
  console.log(this.register.password);
  console.log(this.register.repeatPass);

  //Validar la contraseña
  if(this.register.password !== this.register.repeatPass){
    console.log("Repita su contraseña para validar")
  }
  return;
 }
}
interface IRegisterForm {
  name: string;
  email: string;
  password: string;
  repeatPass: string;
}
