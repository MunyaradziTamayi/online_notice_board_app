declare var google: any;
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { admin } from '../../models/admin.model ';
import { FormBuilder } from '@angular/forms';
import { ClubService } from '../../services/club.service';
import { GenericService } from '../../services/generic.service';
import { AdminService } from '../../services/admin.service';

@Component({
  selector: 'app-navbar',
  standalone: false,
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent  {
  username:string='';
  password:any='';
  admin: admin = new admin();
  admins: admin[] = [];

  current_user = JSON.parse(sessionStorage.getItem('loggedInUser')!);
  constructor(
    private router: Router,
    private toastr: ToastrService,
    private generic_service: GenericService,
    private  admin_service: AdminService,
    private  fb:FormBuilder,
  ){}

  singOut(){
    google.accounts.id.disableAutoSelect();
    //sessionStorage.clear();
    sessionStorage.removeItem('loggedInUser');
    this.toastr.info('Successfully Logged Out', 'Signed Out', {timeOut: 5000})
    this.router.navigate(['']);
  }
 
  async saveadmin(){
   
    this.admin_service.saveNotice(this.admin).subscribe(
      {
        next: async (res) =>{
          
          this.resetForm();
     
          this.getAlladmin();
          
          this.toastr.success('Credentials successfully saved', 'Saved', {timeOut: 5000});//brings a msgbox that shows notice success
          
        },
        error: (err) =>{
          console.log(err);
          this.toastr.error(err.error.message, 'Failed to save', {timeOut: 10000});

        }
      }
    )
  }

  getAlladmin(){
    this.admins= [];
    this.admin_service.getAlladmin().subscribe(
      {
        next: (res : admin[])=>{
          if(res.length > 0){
              Object.assign(this.admins, res);
          }else{
            this.toastr.info('No clubs were found', 'Not Found', {timeOut: 10000})
          }
        },
        error:(err) =>{
            this.toastr.error(err.error.message, 'Error', {timeOut: 10000})
        }
        
      }
    )
}


login(): void {
  if (this.username==='Munyaradzi' && this.password ==='MunyaTamayi2003'||this.username==='Laino'&& this.password ==='12345') {
    this.router.navigate(['homepage'])
    this.toastr.success(' successfully  logged in to ADMIN', 'Saved', {timeOut: 5000});
    
   
    // Perform additional actions after successful login
}
    // Handle login failure
  else{
    this.toastr.warning(' wrong credentials logged in as ADMIN', 'Saved', {timeOut: 5000});
  }
}
  resetForm(){
    this.admin = new admin();
  }

}
