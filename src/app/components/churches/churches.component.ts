import { Component, OnInit } from '@angular/core';
import { church } from '../../models/church.model';
import emailjs from '@emailjs/browser';
import { ToastrModule, ToastrService } from 'ngx-toastr';
import { GenericService } from '../../services/generic.service';
import { ChurchService } from '../../services/church.service';
import { FormBuilder,FormGroup } from '@angular/forms';

@Component({
  selector: 'app-churches',
  templateUrl: './churches.component.html',
  styleUrl: './churches.component.css'
})
export class ChurchesComponent implements OnInit {
  church: church = new church();
  churches: church[] = [];
  
  current_user = JSON.parse(sessionStorage.getItem('loggedInUser')!);

  constructor(
    private generic_service: GenericService,
    private church_service: ChurchService,
    private toastr: ToastrService,
    private  fb:FormBuilder,
    
  ){}
  
  ngOnInit(){
    // this.toastr.success('Toastr message', 'message') //the ngOnInit method is used to load wat u need to be loaded first as the webpage begins
    this.getAllchurches();

    
  }
  async saveNotice(){
    this.church.posted_by = this.current_user.name;                            //besides hard coding you will get the user photo as the user login or make a notice            //'https://d1jnx9ba8s6j9r.cloudfront.net/imgver.1703746264/img/alumni_user_468_1563874936.jpg';
    this.church.churchPhoto = this.church.churchPhoto
    this.church.user_email=this.current_user.email;
    
  
    this.church_service.saveNotice(this.church).subscribe(
      {
        next: async (res) =>{
          
          this.resetForm();
     
          this.getAllchurches();
          
          this.toastr.success('Church successfully saved', 'Saved', {timeOut: 5000});//brings a msgbox that shows notice success
          
        },
        error: (err) =>{
          console.log(err);
          this.toastr.error(err.error.message, 'Failed to save', {timeOut: 10000});

        }
      }
    )
  }
  getAllchurches(){
    this.churches= [];
    this.church_service.getAllchurches().subscribe(
      {
        next: (res : church[])=>{
          if(res.length > 0){
              Object.assign(this.churches, res);
          }else{
            this.toastr.info('No Churches were found', 'Not Found', {timeOut: 10000})
          }
        },
        error:(err) =>{
            this.toastr.error(err.error.message, 'Error', {timeOut: 10000})
        }
        
      }
    )
}
loadNoticeById(id: any) {

  this.church = new church();

  this.church_service. getchurchNoticeById(id).subscribe(
    {
      next:(data: church) =>{
          Object.assign(this.church, data);
      }
    }
  )
}

  updateNotice(){
  
    this.church_service.updateNotice(this.church).subscribe(
      {
        next: (res) =>{
          this.resetForm();
          
          this.toastr.success('Church successfully updated', 'updated', {timeOut: 5000});
        },
        error: (err) =>{
          console.log(err);
          this.toastr.error(err.error.message, 'Failed to update', {timeOut: 10000});

        }
      }
    )
  }

  deleteNotice(id: number){
    this.church_service.deleteNoticeById(id).subscribe(
      {
        next:(res) =>{
          this.toastr.success('deleted church with id: '+id);
          this.getAllchurches();
        }
      }
    )
}

  resetForm(){
    this.church = new church();
  }

}