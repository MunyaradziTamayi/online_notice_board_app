import { Component, OnInit } from '@angular/core';
import { AlertService } from '../services/sms.service';
import { church } from '../models/church.model';
import { GenericService } from '../services/generic.service';
import { ChurchService } from '../services/church.service';
import { ToastrService } from 'ngx-toastr';
import { FormBuilder } from '@angular/forms';
import { Sms2Service } from '../services/sms2.service';

@Component({
  selector: 'app-frontpage',
  templateUrl: './frontpage.component.html',
  styleUrl: './frontpage.component.css'
})
export class FrontpageComponent implements OnInit {
  church: church = new church();
    churches: church[] = [];
    
    
  constructor(

    private alert_Service : AlertService,
    private generic_service: GenericService,
    private church_service: ChurchService,
    private toastr: ToastrService,
    private  fb:FormBuilder,
    private alert2_service :Sms2Service,
  ){}
  ngOnInit(): void {
  //  this.alert_Service.sendSms('0780150820','hello Rue,there is a new notice update').subscribe(
  //   {
  //     next:(response:string)=>{
  //       console.log(response);
        
  //     }
  //   }
  //  )
  //  this.alert2_service.sendSms1('0776589873','hello Gemara,there is a new notice update').subscribe(
  //   {
  //     next:(response:string)=>{
  //       console.log(response);
        
  //     }
  //   }
  //  )
  
  this.getAllNotices();
  }
  getAllNotices(){
    this.churches = [];
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
loadNoticeById(id: number) {

  this.church = new church();

  this.church_service. getchurchNoticeById(id).subscribe(
    {
      next:(data: church) =>{
          Object.assign(this.church, data);
      }
    }
  )
}


}
