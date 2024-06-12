import emailjs, { EmailJSResponseStatus } from 'emailjs-com';

interface Recipient {
  name: string;
  email: string;
  message:string;
}

const recipients: Recipient[] = [
  {
    name: 'Recipient 1',
    email: 'munyaradzitamayii@gmail.com',
    message:'hie'
  },
  {
    name: 'Recipient 2',
    email: 'h220072y@hit.ac.zw',
    message:'hie'
  },
  // Add more recipients as needed
];

const sendEmails = async () => {
  try {
    for (const recipient of recipients) {
      const templateParams = {
        to_name: recipient.name,
        to_email: recipient.email,
        // Add other template parameters
      };

      const response: EmailJSResponseStatus = await emailjs.send(
        'service_ocu0jum',
        'template_vlndbxb',
        templateParams,
        'PfQP3hdF-PSkggLjZ'
      );

      console.log('Email sent!', response.status, response.text);
    }
  } catch (error) {
    console.error('Error sending emails:', error);
  }
};

emailjs.init('PfQP3hdF-PSkggLjZ');
sendEmails();