import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { map} from 'rxjs/operators';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(private _authServices : AuthService , private _router : Router){ 

  }
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {


return this._authServices.isloggedIn$.pipe( 
  map((_isLoggedIn : boolean)=> { 
    if(!_isLoggedIn){ 
      this._router.navigate(['auth/login'])
      return false;
     
    }else{ 
      return true;
    }
  })
)









  }
  
}
