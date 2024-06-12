declare var google: any;
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { admin } from '../../models/admin.model ';
import { Notice } from '../../models/notice.model';
import { NoticeService } from '../../services/notice.service';


@Component({
  selector: 'app-frontnavbar',
  templateUrl: './frontnavbar.component.html',
  styleUrl: './frontnavbar.component.css'
})
export class FrontnavbarComponent {

  admin: admin = new admin();
  admins: admin[] = [];
  notice: Notice = new Notice();
  notices: Notice[] = [];
  username:string='';
  password:any='';
  userloggedin:boolean=true;
  constructor(
    private router: Router,
    private toastr: ToastrService,
    private notice_service: NoticeService,
  ){}


  signin(){
    this.router.navigate(['login']);
  }
  login(): void {
    if (this.username==='Munyaradzi' && this.password ==='Munya2003'||this.username==='Laino'&& this.password ==='12345') {
      
      this.toastr.success(' successfully  logged in to ADMIN', 'Saved', {timeOut: 5000});
      this.router.navigate(['homepage'])
    this.resetForm();
     
      // Perform additional actions after successful login
}
      // Handle login failure
    else{
      this.toastr.warning(' wrong  logged in as ADMIN', 'Saved', {timeOut: 5000});
    }
  }
  changeuser(){
    this.userloggedin=true;
   
   
  }

  changeadmin(){
    this.userloggedin=true;
  }

  resetForm(){
    this.notice = new Notice();
  }
 

}



