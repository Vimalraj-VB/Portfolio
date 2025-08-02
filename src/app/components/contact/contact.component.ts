import { Component } from '@angular/core';
import emailjs, { EmailJSResponseStatus } from 'emailjs-com';
import { FormsModule } from '@angular/forms';
import Swal from 'sweetalert2';
import { NgxSpinnerService } from 'ngx-spinner';

@Component({
  selector: 'app-contact',
  imports: [FormsModule],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss'
})
export class ContactComponent {

 constructor(private spinner: NgxSpinnerService) {}

  // sendEmail(form: any) {
  //   if (form.valid) {
  //     const payload = {
  //       to: 'vimalraj2934@gmail.com',
  //       subject: `Message from ${form.value.user_name} (${form.value.user_email})`,
  //       text: form.value.message
  //     };

  //     this.spinner.show(); // 👉 Show spinner before sending request

  //     fetch('http://localhost:2917/send-mail', {
  //       method: 'POST',
  //       headers: {
  //         'Content-Type': 'application/json'
  //       },
  //       body: JSON.stringify(payload)
  //     })
  //       .then(response => response.json())
  //       .then(data => {
  //         console.log('Success:', data);
  //         this.spinner.hide(); // 👉 Hide spinner on success

  //         Swal.fire({
  //           icon: 'success',
  //           title: 'Message Sent!',
  //           text: 'Thank you for contacting me. I will reply soon!',
  //           toast: true,
  //           position: 'top-end',
  //           showConfirmButton: false,
  //           timer: 2500,
  //           timerProgressBar: true
  //         });

  //         form.reset();
  //       })
  //       .catch(error => {
  //         console.error('Error:', error);
  //         this.spinner.hide(); // 👉 Hide spinner on error

  //         Swal.fire({
  //           icon: 'error',
  //           title: 'Oops...',
  //           text: 'Something went wrong while sending the message.',
  //           toast: true,
  //           position: 'top-end',
  //           showConfirmButton: false,
  //           timer: 3000,
  //           timerProgressBar: true
  //         });
  //       });

  //   } else {
  //     Swal.fire({
  //       icon: 'warning',
  //       title: 'Incomplete Form',
  //       text: 'Please fill out all the fields before submitting.',
  //       toast: true,
  //       position: 'top-end',
  //       showConfirmButton: false,
  //       timer: 3000,
  //       timerProgressBar: true
  //     });
  //   }
  // }
}
