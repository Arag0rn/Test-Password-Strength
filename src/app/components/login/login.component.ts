import { Component } from "@angular/core";

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.scss']
})
export class LoginComponent {
    password: string = '';
    passwordStrength: string = 'empty';
  
    checkPasswordStrength() {
        if (this.password.length === 0) {
          this.passwordStrength = 'empty';
        } else if (this.password.length < 8) {
          this.passwordStrength = 'easy';
        } else {
          let complexity = 0;
      
          if (/[a-zA-Z]/.test(this.password)) {
            complexity++;
          }
          if (/\d/.test(this.password)) {
            complexity++;
          }
          if (/[!@#\$%\^&\*]/.test(this.password)) {
            complexity++;
          }
      
          if (complexity === 3) {
            this.passwordStrength = 'strong';
          } else if (complexity >= 1) {
            this.passwordStrength = 'medium';
          } else {
            this.passwordStrength = 'easy';
          }
        }
      }
    }
       
      
      
      
      

