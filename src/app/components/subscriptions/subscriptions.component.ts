import { Component } from '@angular/core';
import { Notice } from '../../models/notice.model';
import { GenericService } from '../../services/generic.service';
import { NoticeService } from '../../services/notice.service';
import { ToastrService } from 'ngx-toastr';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-subscriptions',
  templateUrl: './subscriptions.component.html',
  styleUrl: './subscriptions.component.css'
})
export class SubscriptionsComponent {
  notice: Notice = new Notice();
  notices: Notice[] = [];


  constructor(

    private generic_service: GenericService,
    private notice_service: NoticeService,
    private toastr: ToastrService,
    private  fb:FormBuilder, 
  ){}
  async saveNotice(){
  
    this.notice_service.saveNotice(this.notice).subscribe(
      {
        next: async (res) =>{
          
          this.resetForm();
     
          this.getAllNotices();
         
          this.toastr.success('Number successfully saved', 'Saved', {timeOut: 5000});//brings a msgbox that shows notice success
          
        },
        error: (err) =>{
          console.log(err);
          this.toastr.error(err.error.message, 'Failed to save', {timeOut: 10000});

        }
      }
    )
  }
  resetForm() {
    throw new Error('Method not implemented.');
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

}
