import { Component } from '@angular/core';
import { UserService } from '../service/user.service';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from '../auth.service';
import {SigninService} from 'src/app/service/signin.service'

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.scss']
})
export class SigninComponent {

  loginData = {
    login: '',
    password: ''
  };
 

  constructor(private userService:UserService, private router: Router, private route: ActivatedRoute,private siginServive:SigninService) { }


 

  onSubmit(): void {
    // Get the login data from the form
    const loginData = {
      login: this.loginData.login,
      password: this.loginData.password
    };

    // Call the login method from the AuthService
    this.userService.login(loginData).subscribe(
      (response) => {
        // Handle successful login response
        console.log('Logged in successfully!', response);
        localStorage.setItem('authToken', response.authToken);
        this.siginServive.user.emit(response);
       // this.router.navigate(['/accueil']);
       const returnUrl = this.route.snapshot.queryParamMap.get('returnUrl');

      if (returnUrl) {
        // Redirect to the returnUrl if it exists
        this.router.navigateByUrl(returnUrl);
      } else {
        // Redirect to a default route if no returnUrl is provided
        this.router.navigate(['/accueil']);
      }
      },
      (error) => {
        // Handle login error
        console.error('Login failed!', error);
      }
    );
  }

 

}
