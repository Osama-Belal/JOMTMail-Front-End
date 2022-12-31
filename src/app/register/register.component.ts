import { Component } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-register',
  host: {
    '[style.width]' : "'100%'", 
    '[style.display]' : "'flex'", 
  },
  styles : [`:host {
      background-image: url(../../assets/login-background.jpg);
      background-attachment: fixed;
      background-size: cover;
    }`],
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export default class RegisterComponent {
  email = new FormControl('', [Validators.required, Validators.email]);
  hidePassword = true
  
  getErrorMessage() {
    if (this.email.hasError('required')) {
      return 'You must enter a value';
    }
    return this.email.hasError('email') ? 'Not a valid email' : '';
  }
}
