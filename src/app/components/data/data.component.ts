import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormArray} from '@angular/forms';
import { Oservable } from "rxjs/Rx";


@Component({
  selector: 'app-data',
  templateUrl: './data.component.html',
  styleUrls: ['./data.component.css']
})
export class DataComponent implements OnInit {

  forma:FormGroup;

  usuario:Object = {
  	nombre: "Juan Mannuel",
  	apellido: 'Gutierrez',
  	correo:"juangu455@gmail.com",
  	pasatiempos:["Bicicleta","Musica","Futbol"] 
  }

  R = Validators.required

  constructor() { 
  	this.forma = new FormGroup({
  		'nombre': new FormControl('', [this.R,Validators.minLength(3)]),
  		'apellido': new FormControl('', this.R),
  		'correo': new FormControl(''.correo, [Validators.required, Validators.pattern("[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$")]),
  		'pasatiempos': new FormArray([new FormControl('Bicicleta', this.R)]),
  		'username':new FormControl('', this.R , this.existeUsuario),
  		'password1':new FormControl('', this.R),
  		'password2':new FormControl()
  	});

  	this.forma.controls['password2'].setValidators([
  		this.R, this.validaPassword.bind( this.forma )
  	])


  	this.forma.controls['username'].valueChanges.subscribe( data => {
  		if(data == 'juan'){
  			alert('chupelo')
  		}
  	})

  	this.forma.controls['username'].statusChanges.subscribe( data => {
  		if(data == 'juan'){
  			alert('chupelo')
  		}
  	})
  }

  agregarPasatiempo(){
  	console.log(this.forma.value);
  	(<FormArray>this.forma.controls['pasatiempos']).push(
  		new FormControl('', this.R)
  	)
  }

  validaPassword(control: FormControl):{[s:string]:boolean}{
  	if(control.value !== this.controls['password1'].value){
  		return{
  			noiguales:true
  		}
  	}
  	return null;
  }

  existeUsuario(control: FormControl): Promise<any>|Oservable<any>{

  	let promesa = new Promise ((resolve, reject)=>{
  		setTimeout(()=>{
  			if(control.value == "strider"){
  				resolve({existe:true})
  			}else{
  				resolve( null )
  			}
  		},3000)
  	})
  	return promesa;
  }

  guardarCambios(){
  	console.log(this.forma.value);
  	console.log(this.forma);
  	this.forma.reset({
  		nombre: "",
  		apellido: "",
  		correo:""
  	})
  }

  ngOnInit() {
  }

}
