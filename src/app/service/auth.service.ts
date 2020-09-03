import { Injectable } from '@angular/core';
import { AuthConfig, OAuthService } from 'angular-oauth2-oidc';
import { JwksValidationHandler } from 'angular-oauth2-oidc-jwks';

@Injectable({
  providedIn: 'root'
})
export class AuthService {


  authConfig: AuthConfig = {
    // Url of the Identity Provider
    issuer: 'https://oauth.vk.com/authorize',
  
    // URL of the SPA to redirect the user to after login
    redirectUri: window.location.origin + '/index.html',
  
    // The SPA's id. The SPA is registered with this id at the auth-server
    clientId: '7585171',
  
    // set the scope for the permissions the client should request
    scope: 'friends',
  }

  constructor(private oauthService: OAuthService) {
    this.oauthService.loginUrl = 'https://oauth.vk.com/authorize';
    console.log(window.location.origin);
    this.oauthService.redirectUri = "https://impurestpath.github.io/index.html";
    this.oauthService.clientId = "7585171";
    this.oauthService.scope = "friends";
    this.oauthService.responseType = "token";
    this.oauthService.setStorage(sessionStorage);
    this.oauthService.oidc = false;
    this.oauthService.tryLogin();
   }

   public initLoginFlow(){
     this.oauthService.initImplicitFlow();
   }

   public logOut(){
     this.oauthService.logOut();
   }

   public isLoggedIn(): boolean {
     return this.oauthService.hasValidAccessToken();
   }

   public getToken(){
     return this.oauthService.getAccessToken();
   }
}
