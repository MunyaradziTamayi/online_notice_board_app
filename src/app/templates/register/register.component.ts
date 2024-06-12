import { Component } from '@angular/core';
import { Notice } from '../../models/notice.model';
import { ToastrService } from 'ngx-toastr';
import { NoticeService } from '../../services/notice.service';
import { GenericService } from '../../services/generic.service';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent {
  notice: Notice = new Notice();
  notices: Notice[] = [];
  url: string='https://ui.idp.vonage.com/ui/auth/registration?context=eyJoeWRyYUZsb3ciOiI4OGZiMWQyYjNmMDI0MzA3YmNkZWNhOTY1NzA0NmRiOCIsInN1YmplY3QiOiIiLCJmb3JjZUlkUCI6IiIsIm9pZGNDb250ZXh0Ijp7ImFjcl92YWx1ZXMiOm51bGwsInVpX2xvY2FsZXMiOm51bGx9LCJjbGllbnRJRCI6ImRhc2hib2FyZC1tYWluIiwicmVnaXN0cmF0aW9uRmxvdyI6IiIsImxvZ2luRmxvdyI6Im1vL3A4NWpraE5HWGRmZElCNUVsYWxHV3dMUDhNN0pkK2RuaGxlc1ZOTEhjUlNiS2oxc3dCUHhkUVoyVStxOERNOG93eng4UE41dG40RnhjSGw3M1BIeUdRTDNtTWFIaExyL2VJZkJlVHJOaWd1RU0xMEgrWkU0U0YwNlpvRmZMIiwiaW52aXRlRGF0YSI6eyJmb3JjZUxvZ2luIjp0cnVlLCJxdWVyeVBhcmFtcyI6ImF0dHJpYnV0aW9uX2NhbXBhaWduPXZvbmFnZXNlb1x1MDAyNmljaWQ9dHJ5aXRmcmVlX2NvbW0tYXBpc19hcGlkZXZzaWdudXBfYmFubmVyXHUwMDI2cmVkaXJlY3RlZD0xXHUwMDI2dXRtX2NhbXBhaWduPXZvbmFnZXNlbyJ9LCJhZGRyZXNzVmVyaWZ5IjpudWxsLCJmb3JjZUxvZ2dlZE91dCI6ZmFsc2UsImZsb3dUcmFjZUlkIjoiMjBkYWQxMTgtNTUzMi00MzZhLTk1ZDYtZDUyOGRjNjg0MWY5IiwicGhvbmVWZXJpZmllZCI6ZmFsc2V9&attribution_campaign=vonageseo&icid=tryitfree_comm-apis_apidevsignup_banner&redirected=1&utm_campaign=vonageseo'; // Replace with the desired URL'

  constructor(

    private generic_service: GenericService,
    private notice_service: NoticeService,
    private toastr: ToastrService,
    private  fb:FormBuilder, 
    private router: Router,

  ){}
  redirectToUrl() {
    window.location.href="https://ui.idp.vonage.com/ui/auth/registration?context=eyJoeWRyYUZsb3ciOiI4OGZiMWQyYjNmMDI0MzA3YmNkZWNhOTY1NzA0NmRiOCIsInN1YmplY3QiOiIiLCJmb3JjZUlkUCI6IiIsIm9pZGNDb250ZXh0Ijp7ImFjcl92YWx1ZXMiOm51bGwsInVpX2xvY2FsZXMiOm51bGx9LCJjbGllbnRJRCI6ImRhc2hib2FyZC1tYWluIiwicmVnaXN0cmF0aW9uRmxvdyI6IiIsImxvZ2luRmxvdyI6Im1vL3A4NWpraE5HWGRmZElCNUVsYWxHV3dMUDhNN0pkK2RuaGxlc1ZOTEhjUlNiS2oxc3dCUHhkUVoyVStxOERNOG93eng4UE41dG40RnhjSGw3M1BIeUdRTDNtTWFIaExyL2VJZkJlVHJOaWd1RU0xMEgrWkU0U0YwNlpvRmZMIiwiaW52aXRlRGF0YSI6eyJmb3JjZUxvZ2luIjp0cnVlLCJxdWVyeVBhcmFtcyI6ImF0dHJpYnV0aW9uX2NhbXBhaWduPXZvbmFnZXNlb1x1MDAyNmljaWQ9dHJ5aXRmcmVlX2NvbW0tYXBpc19hcGlkZXZzaWdudXBfYmFubmVyXHUwMDI2cmVkaXJlY3RlZD0xXHUwMDI2dXRtX2NhbXBhaWduPXZvbmFnZXNlbyJ9LCJhZGRyZXNzVmVyaWZ5IjpudWxsLCJmb3JjZUxvZ2dlZE91dCI6ZmFsc2UsImZsb3dUcmFjZUlkIjoiMjBkYWQxMTgtNTUzMi00MzZhLTk1ZDYtZDUyOGRjNjg0MWY5IiwicGhvbmVWZXJpZmllZCI6ZmFsc2V9&attribution_campaign=vonageseo&icid=tryitfree_comm-apis_apidevsignup_banner&redirected=1&utm_campaign=vonageseo";

  }
 
  }



