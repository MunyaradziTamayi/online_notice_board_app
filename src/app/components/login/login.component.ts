declare var google: any;

import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent implements OnInit {

  constructor(
    private router: Router
  ){}

  ngOnInit(): void {
    
    google.accounts.id.initialize({
      client_id: '957315183743-t95nr2lj8citvpouc0akp5tloc0p3tbv.apps.googleusercontent.com',
      callback: (resp: any) =>{
          this.handleLogin(resp); 
      }
    });

    google.accounts.id.renderButton(document.getElementById('login_button'), {
      color: 'filled_blue',
      size: 'large',
      shape: 'rectangular',
      width: 330
    })

   
  }

  private decodeToken(token: string){
    return atob(token.split(".")[1]);//the atob method is for decoding the token passed on credential
  }

  handleLogin(response: any){ 
       
    if (response != null && response != undefined) {
      const user_object = JSON.parse(this.decodeToken(response.credential));//we now call the decodeToken method  to decode the credential

      sessionStorage.setItem('loggedInUser', JSON.stringify(user_object));

     this.router.navigate(['home']);
    
     

    } else {
      console.log('Failed to authendicate');
    }
 


  }

}
