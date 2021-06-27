import { Component, OnInit } from '@angular/core';

import { FormGroup, FormControl, Validators} from '@angular/forms'
import {  BoletoService} from '../../services/api.service';
import { LoginI}from '../../models/login.interface';
import { ResponseI}from '../../models/response.interface'
import { Router}from '@angular/router'


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm = new FormGroup({
    email : new FormControl('',Validators.required),
    password : new FormControl('',Validators.required)
  })
  errorEmail: string = '';
  errorPassword: string = '';

  constructor(private api:BoletoService,private routes:Router ) { }

  ngOnInit(): void {
  }
  reiniciarErrores():void{
    this.errorEmail="";
    this.errorPassword="";
  }
  onLogin(form:LoginI){
    this.reiniciarErrores();

      this.api.loginByEmail(form).subscribe(data=>
        {
          let dataresponse:ResponseI=data;
          if(dataresponse.status=="ok"){
            localStorage.setItem('token',data.token.toString());
            this.routes.navigate(['dashboard']);
          }
        },(err)=>{
          console.log(err.error);
          if(err.error.campo==="email"){
            this.errorEmail=err.error.message;
            console.log(this.errorEmail);
          }
          else{
            if(err.error.campo==="password"){
              this.errorPassword=err.error.message;
              console.log(this.errorPassword);
            }else{
              this.errorPassword=err.error.error;
            }

          }
          
            
        }
        )
 
    
  }
}
