import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { FirebaseService } from '../firebase.service';
import { UserCredential } from 'firebase/auth';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css'],
  standalone: true,
  imports: [CommonModule, FormsModule],
})
export class LoginPageComponent {
  email: string = '';
  password: string = '';
  errorMessage: string = '';
  isSignUp: boolean = false; // Track if the user is signing up
  role: string = 'user'; // Default role selection

  constructor(
    private firebaseService: FirebaseService,
    private router: Router
  ) {}

  // Handle login or sign-up
  onLogin(event: Event) {
    event.preventDefault(); // Prevent default form submission

    if (this.isSignUp) {
      // Sign-up flow with role
      this.firebaseService
        .signUp(this.email, this.password, this.role)
        .then(() => {
          alert('Sign-up successful! Please log in.');
          window.location.reload(); // Reload the page after sign-up
        })
        .catch((error: Error) => {
          console.error('Sign-up error:', error);
          this.errorMessage = error.message;
        });
    } else {
      // Login flow with role fetching
      this.firebaseService
        .login(this.email, this.password)
        .then(({ user, role }) => {
          console.log('Login successful:', user);
          alert('Login successful!');

          // Navigate based on role
          if (role === 'admin') {
            window.location.href = 'admin.html'
            this.router.navigate(['/admin']); // Redirect admin users
          } else {
            window.location.href = 'student.html'
            this.router.navigate(['/user']); // Redirect regular users
          }
        })
        .catch((error: Error) => {
          console.error('Login error:', error);
          this.errorMessage = error.message;
        });
    }
  }

  // Toggle between sign-up and login forms
  toggleSignUp() {
    this.isSignUp = !this.isSignUp; // Toggle between login and sign-up mode
  }
}
