import { Injectable } from '@angular/core';
import emailjs, { EmailJSResponseStatus } from 'emailjs-com';

@Injectable({
  providedIn: 'root'
})
export class EmailsService {

  constructor() { 

  emailjs.init('PfQP3hdF-PSkggLjZ');
  }
  sendEmail(toEmail: string, toName: string, templateParams: any): Promise<EmailJSResponseStatus> {
    return emailjs.send('service_ocu0jum', 'template_vlndbxb', templateParams);
  }

}