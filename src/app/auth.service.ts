import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  isAuthenticated(): Observable<boolean> {
    // Implement your authentication check here
    // Return an observable of boolean indicating the authentication status
    // Example: check if the user is logged in using a stored token
    const isLoggedIn = !!localStorage.getItem('authToken'); // Replace with your authentication logic
    console.log('Is authenticated:', isLoggedIn); // Add this line

    return of(isLoggedIn);
  }

  logout(): void {
    // Clear the authentication token from localStorage
    localStorage.removeItem('authToken');
  }
  
}
