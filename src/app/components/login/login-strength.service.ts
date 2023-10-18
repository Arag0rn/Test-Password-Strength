import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class PasswordStrengthService {
  calculatePasswordStrength(password: string): string {
    let complexity = 0;

    if (/[a-zA-Z]/.test(password)) {
      complexity++;
    }
    if (/\d/.test(password)) {
      complexity++;
    }
    if (/[!@#\$%\^&\*]/.test(password)) {
      complexity++;
    }

    if (complexity === 3) {
      return 'strong';
    } else if (complexity >= 1) {
      return 'medium';
    } else {
      return 'easy';
    }
  }
}