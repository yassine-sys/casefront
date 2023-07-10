import { Injectable } from '@angular/core';
import { Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree } from '@angular/router';
import { AuthService } from './auth.service';
import { Observable, map, tap } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(private authService: AuthService, private router: Router) { }

//   canActivate(next: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | UrlTree | Observable<boolean | UrlTree> | Promise<boolean | UrlTree> {
//     if (this.authService.isAuthenticated()) {
//       return true; // User is authenticated, allow access to the route
//     } else {
//       // User is not authenticated, redirect to the login page
//       return this.router.createUrlTree(['/login'], { queryParams: { returnUrl: state.url } });
//     }
//   }

canActivate(next: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean | UrlTree> {
  return this.authService.isAuthenticated().pipe(
    tap((isAuthenticated: boolean) => {
      if (!isAuthenticated) {
        // User is not authenticated, redirect to the login page with returnUrl
        this.router.navigateByUrl('/login', { skipLocationChange: true }).then(() => {
          this.router.navigate(['/login'], { queryParams: { returnUrl: state.url } });
        });
      }
    })
  );
}
}