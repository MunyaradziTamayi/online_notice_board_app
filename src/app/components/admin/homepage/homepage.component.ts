
import { Component, ViewChild, OnInit } from '@angular/core';
import { Notice } from '../../../models/notice.model';
import { GenericService } from '../../../services/generic.service';
import { NoticeService } from '../../../services/notice.service';
import { ToastrService } from 'ngx-toastr';//this is for pop up msgs
import emailjs from '@emailjs/browser';
import { FormBuilder, FormGroup } from '@angular/forms';
import { EmailsService } from '../../../services/emails.service';
import { AlertService } from '../../../services/sms.service';
import { Sms2Service } from '../../../services/sms2.service';





@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrl: './homepage.component.css'
})
export class HomepageComponent implements OnInit{
  isLiked: boolean = false;
  isUnliked: boolean = false;
  likeCount: number = 1;
  unlikeCount: number = 0;
  
 event='';
 church='';
 club='';
 general='';
 userclickednotice:boolean=false;
  notice: Notice = new Notice();
  notices: Notice[] = [];
  column!: string;
  searchnoticetype='general';
  
  p: number = 1;
  items: number = 4;
  searchText: string = '';
  eventsText: string='';
  notice_photo:string | undefined;//in angular we can declare more than one datatype
  notice_details: string | undefined ='';
  notice_likes=0;
  

  @ViewChild('closenoticemodal') closenoticemodal: any;
  @ViewChild('closeupdatenoticemodal') closeupdatenoticemodal:any;
  
  current_user = JSON.parse(sessionStorage.getItem('loggedInUser')!);
 





  constructor(
    private emailsService: EmailsService,
    private generic_service: GenericService,
    private notice_service: NoticeService,
    private toastr: ToastrService,
    private  fb:FormBuilder,
    private alert2_service :Sms2Service,
    
  ){}
 

  ngOnInit(){
    // this.toastr.success('Toastr message', 'message') //the ngOnInit method is used to load wat u need to be loaded first as the webpage begins
    this.getAllNotices();
    this.notice.user_photo =  this.current_user.picture; 
  //     this.alert_Service.sendSms('0715730728','hello').subscribe(
  //   {
  //     next:(response:string)=>{
  //       console.log(response);
        
  //     }
  //   }
  //  )
  }
 


 async saveNotice(){
    this.notice.posted_at = this.generic_service.getDateNow();
    this.notice.user_photo =  this.current_user.picture;    //besides hard coding you will get the user photo as the user login or make a notice            //'https://d1jnx9ba8s6j9r.cloudfront.net/imgver.1703746264/img/alumni_user_468_1563874936.jpg';
    this.notice.posted_by = this.current_user.name;
    this.notice.notice_photo = this.notice_photo;
    this.notice.user_email=this.current_user.email;
    
  
    this.notice_service.saveNotice(this.notice).subscribe(
      {
        next: async (res) =>{
          
          this.resetForm();
     
          this.getAllNotices();
         
          this.toastr.success('Notice successfully saved', 'Saved', {timeOut: 5000});//brings a msgbox that shows notice success
             this.alert2_service.sendSms1('0776589873','hello Gemara,there is a new notice update').subscribe(
    {
      next:(response:string)=>{
        console.log(response);
        
      }
    }
   )
        },
        error: (err) =>{
          console.log(err);
          this.toastr.error(err.error.message, 'Failed to save', {timeOut: 10000});

        }
      }
    )
  }
//a method to convert an image to a string that can be stored in the database
  convertImage(event: any){
    console.log('uploaded..');
    
      const image_file = event.target.files[0];
      const reader = new FileReader();

      reader.onloadend = () =>{
        const base64Image = reader.result?.toString();
        this.notice_photo = base64Image;
        console.log(base64Image);
        
      }

      if (image_file) {
        reader.readAsDataURL(image_file);
      }

  }

  getAllNotices(){
      this.notices = [];
      this.notice_service.getAllNotices().subscribe(
        {
          next: (res : Notice[])=>{
            if(res.length > 0){
                Object.assign(this.notices, res);
            }else{
              this.toastr.info('No Notices were found', 'Not Found', {timeOut: 10000})
            }
          },
          error:(err) =>{
              this.toastr.error(err.error.message, 'Error', {timeOut: 10000})
          }
          
        }
      )
  }

  deleteNotice(id: number){
      this.notice_service.deleteNoticeById(id).subscribe(
        {
          next:(res) =>{
            this.toastr.success('deleted notice with id: '+id);
            this.getAllNotices();
          }
        }
      )
  }

  loadNoticeById(id: number) {

    this.notice = new Notice();
    this.userclickednotice=true;
    this.notice_service.getNoticeById(id).subscribe(
      {
        next:(data: Notice) =>{
            Object.assign(this.notice, data);
        }
      }
    )
  }

  updateNotice(){
  
    this.notice_service.updateNotice(this.notice).subscribe(
      {
        next: (res) =>{
          this.resetForm();
          
          this.toastr.success('Notice successfully updated', 'updated', {timeOut: 5000});
        },
        error: (err) =>{
          console.log(err);
          this.toastr.error(err.error.message, 'Failed to update', {timeOut: 10000});

        }
      }
    )
  }
 

  resetForm(){
    this.notice = new Notice();
  }
  noticetypefilter(){
    this.notice = new Notice();
    this.general='general';
  }
  noticechurchfilter(){
    this.notice = new Notice();
    this.church='church';
  }
  noticeeventfilter(){
    this.notice = new Notice();
    this.event='event';
  }
  noticeclubfilter(){
    this.notice = new Notice();
    this.club='club';
  }
  sendEmail(): void {
    const templateParams = {
      to_name: 'Angelic',
      to_email: 'h220072y@hit.ac.zw',
      
  // Add other template parameters
    };
   
    this.emailsService.sendEmail(templateParams.to_email, templateParams.to_name, templateParams)
      .then((response) => {
        console.log('Email sent!', response.status, response.text);
      })
      .catch((error) => {
        console.error('Error sending email:', error);
      });
  }
  // likeClicked() {
  
  //   this.isLiked = !this.isLiked;
  //   this.notice.notice_likes=this.likeCount++;
  //   this.isUnliked = false;
  // }
  likeclick(notice_likes: number) {

   this.notice.notice_likes;
    this.notice_service.getNoticeById(notice_likes).subscribe(
      {
        next:(data: Notice) =>{
            Object.assign(this.notice, data);
        }
      }
    )
  }

  unlikeClicked() {
    this.isUnliked = !this.isUnliked;
    this.unlikeCount++;
    this.isLiked = false;
  }



}



