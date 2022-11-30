import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import {AngularFireAuth} from '@angular/fire/compat/auth';
import { Router } from '@angular/router';
import { user } from '@angular/fire/auth';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  loginUsuario: FormGroup;
  constructor(
    private fb:FormBuilder,
    private afAuth:AngularFireAuth,
    private router: Router
    ) {
      this.loginUsuario= this.fb.group({
        email: ['',Validators.required],
        password: ['',Validators.required],
      })
    }

  ngOnInit(): void {
  }


  login(){
    const email = this.loginUsuario.value.email;
    const password = this.loginUsuario.value.password;

    this.afAuth.signInWithEmailAndPassword(email,password).then((user)=>{
      console.log(user);
      this.router.navigate(['/home']);
    }).catch((error)=>{
      console.log(error);
    })
  }

}
