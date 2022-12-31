import { Component } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';


@Component({
  selector: 'app-login',
  host: {
    '[style.width]' : "'100%'", 
    '[style.display]' : "'flex'", 
  },
  styles : [`:host {
      background-image: url(../../assets/sunrise.jpg);
      background-attachment: fixed;
      background-size: cover;
      background-blend-mode: darken;
      position: relative;
    }`],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent {
  email = new FormControl('', [Validators.required, Validators.email]);
  hidePassword = true
  
  getErrorMessage() {
    if (this.email.hasError('required')) {
      return 'You must enter a value';
    }
    return this.email.hasError('email') ? 'Not a valid email' : '';
  }

}
