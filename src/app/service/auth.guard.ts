import { Injectable } from '@angular/core';
import { Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { AuthenticationService } from './authentification.service';
import { MatSnackBar } from '@angular/material';
//import { PizzaPartyComponent } from '../snack-bar-component-example-snack/snack-bar-component-example-snack.component';


@Injectable({ providedIn: 'root' })
export class AuthGuard implements CanActivate {
    test = false;
    durationInSeconds = 4;

    constructor(
        private router: Router,
        private authenticationService: AuthenticationService, private _snackBar: MatSnackBar
    ) { }

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
        const currentUser = this.authenticationService.currentUserValue;
        if (currentUser) {
            // check if route is restricted by role
            for (let permission of currentUser.role.permissions) {
                for (let perm of route.data.permissions) {
                    if (permission.name == perm) {
                        return true;
                    }
                }
            }

            this.router.navigate(['dash']);
/*this._snackBar.openFromComponent(PizzaPartyComponent, {
                duration: this.durationInSeconds * 1000,
                verticalPosition: 'top',
                horizontalPosition: 'right',

            });
*/

            return false;



            // role not authorised so redirect to home page




            // authorised so return true

        }

        // not logged in so redirect to login page with the return url
        this.router.navigate(['/login'], { queryParams: { returnUrl: state.url } });
        return false;
    }
}