import { CommonModule } from '@angular/common';
import { Component, NgModule } from '@angular/core';
import { FormBuilder, NgForm, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import {MatSnackBar} from '@angular/material/snack-bar';
import { OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule,ReactiveFormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent implements OnInit {
  loginForm:any;
  registerForm:any;
  activeForm:'login'|'register'='login'

  constructor(private fb:FormBuilder,private router:Router,private snackBar:MatSnackBar){ }
  ngOnInit(): void {
    this.loginForm=this.fb.group({
      email:['',[Validators.required,Validators.email]],
      password:['',[Validators.required]]
    });
  
    this.registerForm=this.fb.group({
      usernameR:['',[Validators.required]],
      emailR:['',[Validators.required]],
      passwordR:['',[Validators.required]]
  
    });
  }

// ngOnInIt(){

//   this.loginForm=this.fb.group({
//     email:['',[Validators.required,Validators.email]],
//     password:['',[Validators.required]]
//   });

//   this.registerForm=this.fb.group({
//     username:['',[Validators.required]],
//     email:['',[Validators.required,Validators.email]],
//     password:['',[Validators.required]]

//   });

// }

toggleForm(form:'login'|'register'){
  this.activeForm=form;
}

login(){
  if(this.loginForm.valid){
    console.log("loginInfo=>", this.loginForm.value);
    this.router.navigate([ '/budget-planner/dashboard']);
  }
  else{
    this.snackBar.open('invalid email or password','Close',{duration:3000});
  }
}
register(){

  console.log(this.registerForm);
  if(this.registerForm.valid){
    console.log("RegisterInfo=>", this.registerForm.value);
    setTimeout(()=>{
window.location.reload();
    },2000);
    this.router.navigate(['/budget-planner/login']);
  }
  else{
    this.snackBar.open('Fill All the details correctly','Close',{duration:3000});
  }
}

}
