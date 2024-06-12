import { Component, ViewChild, OnInit } from '@angular/core';
import { Notice } from '../../models/notice.model';
import { GenericService } from '../../services/generic.service';
import { NoticeService } from '../../services/notice.service';
import { ToastrService } from 'ngx-toastr';//this is for pop up msgs

@Component({
  selector: 'app-home',
  standalone: false,
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit {
  isLiked: boolean = false;
  isUnliked: boolean = false;
  likeCount: number = 0;
  unlikeCount: number = 0;
  userclickednotice:boolean=false;
  event='';
 church='';
 club='';
 general='';
 allnotice='';
  notice: Notice = new Notice();
  notices: Notice[] = [];
  p: number = 1;
  items: number = 4;
  searchText: string = '';
  notice_photo:string | undefined;//in angular we can declare more than one datatype
  
  

  @ViewChild('closenoticemodal') closenoticemodal: any;
  @ViewChild('closeupdatenoticemodal') closeupdatenoticemodal: any; //we are taking the reference of html element with template id #closeupdatenoticemodal
  current_user = JSON.parse(sessionStorage.getItem('loggedInUser')!);

  constructor(
    private generic_service: GenericService,
    private notice_service: NoticeService,
    private toastr: ToastrService
    
  ){}

  ngOnInit(){
    // this.toastr.success('Toastr message', 'message') //the ngOnInit method is used to load wat u need to be loaded first as the webpage begins
    this.getAllNotices();
  }
  

  saveNotice(){
    this.notice.posted_at = this.generic_service.getDateNow();
    this.notice.user_photo =  this.current_user.picture;    //besides hard coding you will get the user photo as the user login or make a notice            //'https://d1jnx9ba8s6j9r.cloudfront.net/imgver.1703746264/img/alumni_user_468_1563874936.jpg';
    this.notice.posted_by = this.current_user.name;
    this.notice.notice_photo = this.notice_photo;
    this.notice_service.saveNotice(this.notice).subscribe(
      {
        next: (res) =>{
          
          this.resetForm();
          this.closenoticemodal.nativeElement.click();
          this.getAllNotices();
          this.toastr.success('Notice successfully saved', 'Saved', {timeOut: 5000});//brings a msgbox that shows notice success
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
          this.closeupdatenoticemodal.nativeElement.click();
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
  allNotices(){
    this.getAllNotices();
  }
  likeClicked() {
    this.isLiked = !this.isLiked;
    this.likeCount++;
    this.isUnliked = false;
  }

  unlikeClicked() {
    this.isUnliked = !this.isUnliked;
    this.unlikeCount++;
    this.isLiked = false;
  }
 

}
