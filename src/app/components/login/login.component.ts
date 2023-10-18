import { Component, forwardRef } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';
import { PasswordStrengthService } from './login-strength.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => LoginComponent),
      multi: true,
    },
  ],
})
export class LoginComponent implements ControlValueAccessor {
  password: string = '';
  passwordStrength: string = 'empty';

  onChange: any = () => {};
  onTouched: any = () => {};

  constructor(private passwordStrengthService: PasswordStrengthService) {}

  writeValue(value: any): void {
    this.password = value;
  }

  registerOnChange(fn: any): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: any): void {
    this.onTouched = fn;
  }

  setDisabledState(isDisabled: boolean): void {
  }

  onPasswordChange() {
    this.onChange(this.password);
    this.updatePasswordStrength();
  }

  updatePasswordStrength() {
    if (this.password.length === 0) {
      this.passwordStrength = 'empty';
    } else if (this.password.length < 8) {
      this.passwordStrength = 'easy';
    } else {
      this.passwordStrength = this.passwordStrengthService.calculatePasswordStrength(this.password);
    }
  }
}

