import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-template',
  templateUrl: './template.component.html',  
  styles: []
})

export class TemplateComponent implements OnInit {

   usuario:Object = {
    nombre:null,
    apellido:null,
    correo:null,
    pais:"",
    sexo:"Mujer",
    acepta:null
  }
 
  pais = [{codigo:"CRI",pais:"Costa Rica"},{codigo:"COL",pais:"Colombia"},{codigo:"ARG",pais:"Argentina"},{codigo:"VZL",pais:"Venezuela"} ]
  sexos:string[] = ["Mujer","Hombre","Sin definir"] 

  constructor() { }

  guardar( forma:NgForm ){
    console.log("ngforms" ,forma );
    console.log("valor" ,forma.value );
    forma.reset({
      nombre:null,
      apellido:null,
      correo:null,
      pais:"",
      sexo:"Hombre",
      acepta:null
    })
  }
 

  ngOnInit() {

  }

}