import { Component } from '@angular/core';
import { church } from '../../models/church.model';
import emailjs from '@emailjs/browser';
import { ToastrModule, ToastrService } from 'ngx-toastr';
import { GenericService } from '../../services/generic.service';
import { ChurchService } from '../../services/church.service';
import { FormBuilder,FormGroup } from '@angular/forms';
import { club } from '../../models/club.model ';
import { ClubService } from '../../services/club.service';
@Component({
  selector: 'app-frontpage-clubs',
  templateUrl: './frontpage-clubs.component.html',
  styleUrl: './frontpage-clubs.component.css'
})
export class FrontpageClubsComponent {

 

  club: club = new club();
  clubs: club[] = [];
  
  current_user = JSON.parse(sessionStorage.getItem('loggedInUser')!);

  constructor(
    private generic_service: GenericService,
    private club_service: ClubService,
    private toastr: ToastrService,
    private  fb:FormBuilder,
    
  ){}

  ngOnInit(){
    // this.toastr.success('Toastr message', 'message') //the ngOnInit method is used to load wat u need to be loaded first as the webpage begins
    this.getAllclubs();
    
  }
  async saveNotice(){
    this.club.clubPresident = this.current_user.name;                            //besides hard coding you will get the user photo as the user login or make a notice            //'https://d1jnx9ba8s6j9r.cloudfront.net/imgver.1703746264/img/alumni_user_468_1563874936.jpg';
    this.club.clubPhoto = this.club.clubPhoto;
   
    
  
    this.club_service.saveNotice(this.club).subscribe(
      {
        next: async (res) =>{
          
          this.resetForm();
     
          this.getAllclubs();
          
          this.toastr.success('Club successfully saved', 'Saved', {timeOut: 5000});//brings a msgbox that shows notice success
          
        },
        error: (err) =>{
          console.log(err);
          this.toastr.error(err.error.message, 'Failed to save', {timeOut: 10000});

        }
      }
    )
  }
  getAllclubs(){
    this.clubs= [];
    this.club_service.getAllclubs().subscribe(
      {
        next: (res : club[])=>{
          if(res.length > 0){
              Object.assign(this.clubs, res);
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
loadNoticeById(id: any) {

  this.club = new club();

  this.club_service. getclubNoticeById(id).subscribe(
    {
      next:(data: church) =>{
          Object.assign(this.club, data);
      }
    }
  )
}
resetForm(){
  this.club = new club();
}
}


