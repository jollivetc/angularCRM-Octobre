import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormControl, FormGroup, ValidationErrors, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthenticationService } from './authentication.service';

@Component({
  selector: 'crm-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup;
  errorMessagesLogin:{[key:string]:string}= {
    required : 'Login obligatoire',
    minlength: 'Login doit faire 3 caractères'
  }

  constructor(private authent:AuthenticationService, private router:Router) {
    this.loginForm = new FormGroup({
      login: new FormControl('',[Validators.required, Validators.minLength(3)]),
      password: new FormControl('',[Validators.required, checkNo$InPassword])
    });
   }

  ngOnInit(): void {
  }

  login():void{
    const user:any = this.authent.authentUser(this.loginForm.value.login, this.loginForm.value.password);
    if(user){
      this.router.navigateByUrl('/home');
    }
  }
}

function checkNo$InPassword(c:AbstractControl) : ValidationErrors | null {
  if((c.value as string).indexOf('$')<0){
    return null;
  }
  return {
    no$InPassword:true
  }
}
